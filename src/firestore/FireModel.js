import {
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  query,
  runTransaction,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import { getMessage } from "./firestore-messages.js";
import { auth, firestore } from "../firebase.init.js";

/**
 * FireModelクラスは、Firestoreコレクションに対する基本的なCRUD操作を提供するための基盤クラスです。
 * このクラスを継承して、特定のコレクションに対応するデータモデルを実装できます。
 *
 * 主な機能:
 * - Firestoreコレクションに対するドキュメントの作成、読み込み、更新、削除（CRUD）操作をサポート
 * - Firestoreクエリを使用した複数ドキュメントの取得
 * - 自動採番機能を利用したドキュメント作成
 * - 論理削除のオプションを提供し、削除されたドキュメントをアーカイブコレクションに移動可能
 * - Firestoreのリアルタイムリスナーを使用したドキュメントの監視
 * - 依存するコレクション（hasMany）の管理
 * - Firestoreの脆弱なクエリを補うため、指定されたプロパティに対するtokenMapを生成します。
 *
 * 使用方法:
 * このクラスは直接使用せず、特定のコレクションに対応するサブクラスを作成して使用します。
 * サブクラスで独自のフィールドやメソッドを追加することで、特定のビジネスロジックに対応可能です。
 *
 * コンストラクタの使用例:
 * ```javascript
 * class OrderModel extends FireModel {
 *   constructor(data = {}) {
 *     super(
 *       data,
 *       'orders',
 *       [
 *         { collection: 'orderItems', field: 'orderId', condition: '==', type: 'subcollection' }
 *       ],
 *       true // `true` は論理削除を有効にするフラグ,
 *       tokenFields: ['name']
 *     );
 *   }
 *
 *   // サブクラスで使用するプロパティはinitializeメソッドで定義します。
 *   // Object.definePropertyを使用する場合はconstructor内に定義します。
 *   initialize(item = {}) {
 *     this.name = ''
 *     super.initialize(item)
 *   }
 *
 *   // OrderModelに固有のメソッドを追加
 *   calculateTotal() {
 *     return this.items.reduce((total, item) => total + item.price, 0);
 *   }
 * }
 * ```
 * - `collectionPath`: 'orders'は、このモデルが対象とするFirestoreコレクションのパスです。
 * - `hasMany`: 'orderItems'ドキュメントが`orders`ドキュメントに依存していることを表します。
 *   この設定により`orderItems`ドキュメントが存在する`orders`ドキュメントの削除を抑制することができます。
 * - `logicalDelete`: `true`に設定することで、ドキュメントの削除時に論理削除が適用され、ドキュメントはアーカイブされます。
 * - `tokenFields`: tokenMapとして生成する対象のプロパティを指定します。
 *
 * tokenMap:
 * - Firestoreの脆弱なクエリを補完するための、Ngram検索を行うためのフィールドです。
 * - Firestoreのデータのkeyに使用することができないため、サロゲートペア文字列は除外されます。
 *
 * 注意:
 * - このクラスは、FirestoreのドキュメントIDや作成日時、更新日時、ユーザーIDなどのメタデータを自動管理します。
 * - コレクション間の依存関係（hasMany）は、このクラスを通じて管理され、削除時の整合性を保証します。
 * - 論理削除を有効にした場合、削除されたドキュメントは自動的にアーカイブコレクションに移動されます。
 * - Firestoreのリアルタイムリスナーを活用することで、ドキュメントの変更をリアルタイムで監視し、自動的にデータモデルに反映します。
 *
 * @author shisyamo4131
 * @version 1.3.0
 * @see https://firebase.google.com/docs/firestore
 * @updates
 * - version 1.3.0 - 2024-08-23 - deleteAll()を実装
 * - version 1.2.0 - 2024-08-22 - converterをプライベートからパブリックに変更
 *                              - fromFirestoreをオーバーライド可能な関数として実装
 * - version 1.1.0 - 2024-08-21 - tokenMapフィールドを追加
 *                              - constructorのhasManyについて内容をチェックするコードを追加
 * - version 1.0.0 - 2024-08-19 - 初版完成
 */
export default class FireModel {
  /**
   * ドキュメントのコレクションパスです。
   */
  #collectionPath = "";

  /**
   * ドキュメントに依存するコレクション情報を格納するプロパティです。
   * 各要素は以下の構造を持つオブジェクトです:
   * - collection: 文字列型で、依存するドキュメントが存在するコレクションのパスを指定します。
   * - field: 文字列型で、RDBMSでいうところの外部キーに相当するフィールドを指定します。
   * - condition: 文字列型で、Firestoreのクエリ条件を指定します（例: '==', 'array-contains' など）。
   * - type: 文字列型で、'collection' または 'subcollection' のどちらかを指定します。
   *          'collection' は通常のコレクション、'subcollection' はサブコレクションを意味します。
   */
  #hasMany = [];

  /**
   * ドキュメントの削除時に論理削除を適用するかどうかを表すフラグです。
   */
  #logicalDelete = false;

  /**
   * リアルタイムリスナーのデタッチ関数用の変数です。
   */
  #listener = null;

  /**
   * subscribeDocs関数のリアルタイムリスナーで取得したドキュメントデータ用の配列です。
   */
  #items = [];

  /**
   * tokenMapに反映させるフィールドのリストです。
   */
  #tokenFields = [];

  /**
   * FireModelクラスのインスタンスを初期化します。
   * このクラスはFirestoreコレクションのCRUD操作をサポートし、
   * 依存関係のあるコレクションの管理や論理削除の処理も可能です。
   *
   * @param {Object} item - 初期化するデータモデルのプロパティを含むオブジェクト
   * @param {string} collectionPath - Firestoreコレクションのパス
   * @param {Array<Object>} hasMany - 依存するコレクションの情報を格納した配列
   * @param {boolean} logicalDelete - 論理削除を行うかどうかを指定するフラグ
   */
  constructor(
    item = {},
    collectionPath = "",
    hasMany = [],
    logicalDelete = false,
    tokenFields = []
  ) {
    this.#collectionPath = collectionPath;
    this.#validateHasMany(hasMany);
    this.#hasMany = hasMany;
    this.#logicalDelete = logicalDelete;
    this.#tokenFields = tokenFields;
    this.initialize(item);
    Object.defineProperties(this, {
      tokenMap: {
        enumerable: true,
        get: this.#generateTokenMap.bind(this),
        set: this.#setTokenMap.bind(this),
      },
    });
  }

  /**
   * コンストラクタに引き渡されたhasManyについて検証します。
   * @param {Array<Object>} hasMany コンストラクタで受け取ったhasMany
   */
  #validateHasMany(hasMany) {
    if (!Array.isArray(hasMany)) {
      throw new Error("hasManyプロパティは配列である必要があります。");
    }

    hasMany.forEach((relation, index) => {
      const requiredKeys = ["collection", "field", "condition", "type"];
      const allowedKeys = new Set(requiredKeys);

      // 各要素がオブジェクトであることを確認
      if (typeof relation !== "object" || relation === null) {
        throw new Error(
          `hasManyプロパティの要素はオブジェクトである必要があります。インデックス: ${index}, 値: ${JSON.stringify(
            relation
          )}`
        );
      }

      // 必須のキーがすべて存在することを確認
      requiredKeys.forEach((key) => {
        if (!(key in relation)) {
          throw new Error(
            `hasManyプロパティの要素には${key}プロパティが必要です。インデックス: ${index}, 値: ${JSON.stringify(
              relation
            )}`
          );
        }
      });

      // 余分なキーがないことを確認
      Object.keys(relation).forEach((key) => {
        if (!allowedKeys.has(key)) {
          throw new Error(
            `hasManyプロパティの要素に無効なプロパティ${key}が含まれています。インデックス: ${index}, 値: ${JSON.stringify(
              relation
            )}`
          );
        }
      });

      // typeプロパティの値を確認
      const validTypes = ["collection", "subcollection"];
      if (!validTypes.includes(relation.type)) {
        throw new Error(
          `hasManyプロパティのtypeプロパティには'collection'または'subcollection'のみ使用できます。インデックス: ${index}, 値: ${JSON.stringify(
            relation
          )}`
        );
      }
    });
  }

  /**
   * tokenMapを生成して返します。
   * @returns {object} token map
   */
  #generateTokenMap() {
    if (!this.#tokenFields.length) return null;
    const arr = [];
    this.#tokenFields.forEach((fieldName) => {
      if (fieldName in this && this[fieldName]) {
        const target = this[fieldName].replace(
          /[\uD800-\uDBFF]|[\uDC00-\uDFFF]|~|\*|\[|\]|\s+/g,
          ""
        );
        for (let i = 0; i < target.length; i++) {
          arr.push([target.substring(i, i + 1), true]);
        }
        for (let i = 0; i < target.length - 1; i++) {
          arr.push([target.substring(i, i + 2), true]);
        }
      }
    });
    return Object.fromEntries(arr);
  }

  /**
   * tokenMapのセッターです。
   * @param {object} value - The value to set for tokenMap
   */
  #setTokenMap(value) {
    // No-op setter to avoid errors during initialization.
    // This can be customized if needed to handle specific logic.
  }

  /**
   * データモデルを初期化するためのメソッドです。
   * コンストラクタから呼び出されるほか、独自に呼び出すことで
   * データモデルを初期化することができます。
   * @param {object} item - 初期化するデータモデルのプロパティを含むオブジェクト
   * @returns {void}
   */
  initialize(item = {}) {
    this.docId = item?.docId || "";

    /**
     * createAt、updateAtは型をチェックし、Dateオブジェクトに変換して初期化
     * FirestoreにDateオブジェクトを保存すると、Firestore timestampとして登録されるため、
     * これをtoDate()を使用してDateオブジェクトに変換します。
     */
    if (item.createAt instanceof Date) {
      this.createAt = item.createAt;
    } else if (item.createAt?.toDate) {
      this.createAt = item.createAt.toDate();
    } else {
      this.createAt = null;
    }
    if (item.updateAt instanceof Date) {
      this.updateAt = item.updateAt;
    } else if (item.updateAt?.toDate) {
      this.updateAt = item.updateAt.toDate();
    } else {
      this.updateAt = null;
    }

    this.uid = item?.uid || "";
    Object.keys(item).forEach((key) => {
      if (key in this && key !== "createAt" && key !== "updateAt") {
        this[key] = JSON.parse(JSON.stringify(item[key]));
      }
    });
  }

  /**
   * Firestore用のコンバーターを提供します。
   * ドキュメントデータの保存および読み込み時に使用されます。
   * @returns {object} - Firestoreの`toFirestore`および`fromFirestore`メソッドを含むコンバーターオブジェクト
   */
  converter() {
    return {
      /**
       * インスタンスをFirestoreに保存する際の変換メソッドです。
       * @param {Object} instance - Firestoreに保存するクラスインスタンス
       * @returns {Object} - Firestoreに保存するためのオブジェクト形式
       */
      toFirestore: (instance) => instance.toObject(),

      /**
       * Firestoreから読み込んだデータをクラスインスタンスに変換するメソッドです。
       * @param {Object} snapshot - Firestoreから取得したドキュメントスナップショット
       * @returns {Object} - クラスインスタンス
       */
      fromFirestore: (snapshot) => this.fromFirestore(snapshot),
    };
  }

  /**
   * クラスインスタンスを純粋なオブジェクトに変換します。
   * 継承先のクラスで定義されたプロパティも含めて出力します。
   * `enumerable: true`のプロパティのみを出力します。
   * @returns {Object} - Firestoreに保存可能なオブジェクト形式
   */
  toObject() {
    const obj = {};

    // プロトタイプチェーンをたどってプロパティを収集
    let currentObj = this;
    while (currentObj !== null) {
      Object.entries(Object.getOwnPropertyDescriptors(currentObj)).forEach(
        ([key, descriptor]) => {
          if (descriptor.enumerable) {
            obj[key] = this[key];
          }
        }
      );
      currentObj = Object.getPrototypeOf(currentObj);
    }

    return obj;
  }

  /**
   * Firestoreから読み込んだデータをクラスインスタンスに変換するメソッドです。
   * サブクラスでオーバーライドすることができます。
   * @param {Object} snapshot - Firestoreから取得したドキュメントスナップショット
   * @returns {Object} - クラスインスタンス
   */
  fromFirestore(snapshot) {
    const data = snapshot.data();
    return new this.constructor(
      data,
      this.#collectionPath,
      this.#hasMany,
      this.#logicalDelete
    );
  }
  /**
   * ドキュメント作成前に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   */
  beforeCreate() {
    return Promise.resolve();
  }

  /**
   * ドキュメント作成後に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   */
  afterCreate() {
    return Promise.resolve();
  }

  /**
   * ドキュメント更新前に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   */
  beforeUpdate() {
    return Promise.resolve();
  }

  /**
   * ドキュメント更新後に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   */
  afterUpdate() {
    return Promise.resolve();
  }

  /**
   * ドキュメント削除前に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   */
  beforeDelete() {
    return Promise.resolve();
  }

  /**
   * ドキュメント削除後に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   */
  afterDelete() {
    return Promise.resolve();
  }

  /**
   * ドキュメントを書き込みます。
   * ‐ docIdを指定することで、ドキュメントIDを指定した書き込みを行うことが可能です。
   * - useAutonumberをtrueにすると自動採番を行います。
   * - useAutonumberの既定値はfalseです。自動採番を行うコレクションの場合、このメソッドをオーバーライドし、useAutonumberの既定値をtrueにすることをお勧めします。
   * @param {string|null} docId - 指定されたドキュメントID（省略可能）
   * @param {boolean} useAutonumber - 自動採番を行うかどうかのフラグ（省略可能）
   * @returns {Promise<DocumentReference>} - 作成されたドキュメントのリファレンス
   */
  async create({ docId = null, useAutonumber = false } = {}) {
    /* eslint-disable */
    const sender = "FireModel - create";
    if (docId) {
      console.info(getMessage(sender, "CREATE_CALLED", docId));
    } else {
      console.info(getMessage(sender, "CREATE_CALLED_NO_DOCID"));
    }
    try {
      this.createAt = new Date();
      this.updateAt = new Date();
      this.uid = auth?.currentUser?.uid || "unknown";
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = docId
        ? doc(colRef, docId).withConverter(this.converter())
        : doc(colRef).withConverter(this.converter());
      this.docId = docRef.id;
      await this.beforeCreate();
      if (useAutonumber) {
        await runTransaction(firestore, async (transaction) => {
          await this.#createWithAutonumber(transaction, this);
          transaction.set(docRef, this);
        });
      } else {
        await setDoc(docRef, this);
      }
      await this.afterCreate();
      console.info(
        getMessage(
          sender,
          "CREATE_DOC_SUCCESS",
          this.#collectionPath,
          docRef.id
        )
      );
      return docRef;
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * 自動採番を利用してドキュメントを作成します。
   * @param {Object} transaction Firestoreのトランザクションオブジェクト
   * @param {Object} item ドキュメントとして登録するデータオブジェクト
   * @returns {Promise<void>} - ドキュメントが存在しない場合は警告を出力し、存在する場合はプロパティにデータをセットします。
   */
  async #createWithAutonumber(transaction, item) {
    /* eslint-disable */
    const sender = "FireModel - createWithAutonumber";
    try {
      const autonumRef = doc(firestore, `Autonumbers/${this.#collectionPath}`);
      const autonumDoc = await transaction.get(autonumRef);
      if (!autonumDoc.exists()) {
        throw new Error(
          getMessage(sender, "MISSING_AUTONUMBER", this.#collectionPath)
        );
      }
      if (!autonumDoc.data().status) {
        throw new Error(
          getMessage(sender, "INVALID_AUTONUMBER_STATUS", this.#collectionPath)
        );
      }
      const num = autonumDoc.data().current + 1;
      const length = autonumDoc.data().length;
      const newCode = (Array(length).join("0") + num).slice(-length);
      const maxPossibleCode = Array(length + 1).join("0");
      if (newCode === maxPossibleCode) {
        throw new Error(
          getMessage(sender, "NO_MORE_DOCUMENT", this.#collectionPath)
        );
      }
      item[autonumDoc.data().field] = newCode;
      transaction.update(autonumRef, { current: num });
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * 指定されたドキュメントIDに該当するドキュメントを取得してプロパティに該当するデータをセットします。
   * - 当該クラスのプロパティにデータをセットするため、`withConverter`を使っていません。
   * @param {string} docId - 取得するドキュメントのID
   * @returns
   */
  async fetch(docId = null) {
    /* eslint-disable */
    const sender = "FireModel - fetch";
    if (!docId) {
      throw new Error(getMessage(sender, "FETCH_CALLED_NO_DOCID"));
    }
    console.info(
      getMessage(sender, "FETCH_CALLED", this.#collectionPath, docId)
    );
    try {
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = doc(colRef, docId);
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        console.warn(getMessage(sender, "FETCH_NO_DOCUMENT", docId));
        return;
      }
      this.initialize(docSnapshot.data());
      console.info(getMessage(sender, "FETCH_SUCCESS"));
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * 指定されたドキュメントIDに該当するドキュメントを取得して返します。
   * ‐ `fetch`と異なり、取得したドキュメントデータをインスタンス化された当該クラスのオブジェクトとして返します。
   * - 既にインスタンス化されたクラスオブジェクトはそのままに、新たなインスタンスが必要な場合に使用します。
   * @param {string} docId - 取得するドキュメントのID
   * @returns {Promise<Object|null>} - 取得されたドキュメントデータが返されます。ドキュメントが存在しない場合は`null`が返されます。
   */
  async fetchDoc(docId = null) {
    /* eslint-disable */
    const sender = "FireModel - fetchDoc";
    if (!docId) {
      throw new Error(getMessage(sender, "FETCH_DOC_CALLED_NO_DOCID"));
    }
    console.info(
      getMessage(sender, "FETCH_DOC_CALLED", this.#collectionPath, docId)
    );
    try {
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = doc(colRef, docId).withConverter(this.converter());
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        console.warn(getMessage(sender, "FETCH_DOC_NO_DOCUMENT", docId));
        return null;
      }
      console.info(getMessage(sender, "FETCH_DOC_SUCCESS"));
      return docSnapshot.data();
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * Firestoreコレクションから条件に一致するドキュメントを取得し、そのデータを返します。
   * - 返り値の配列に格納されるのは取得したドキュメントデータで初期化された、インスタンス化された当該クラスのオブジェクトです。
   * @param {Array} constraints - Firestoreクエリの条件（whereなど）を格納した配列
   * @returns {Promise<Array<Object>>} - 取得したドキュメントのデータで初期化された、インスタンス化された当該クラスのオブジェクトの配列
   */
  async fetchDocs(constraints = []) {
    /* eslint-disable */
    const sender = "FireModel - fetchDocs";
    console.info(getMessage(sender, "FETCH_DOCS_CALLED", this.#collectionPath));
    try {
      const colRef = collection(firestore, this.#collectionPath);
      const q = query(colRef, ...constraints).withConverter(this.converter());
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => doc.data());
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * 現在プロパティにセットされている値で、ドキュメントを更新します。
   * @returns {Promise<DocumentReference>} 更新したドキュメントへの参照
   */
  async update() {
    /* eslint-disable */
    const sender = "FireModel - update";
    console.info(getMessage(sender, "UPDATE_CALLED", this.docId));
    try {
      if (!this.docId) {
        throw new Error(getMessage(sender, "UPDATE_REQUIRES_DOCID"));
      }
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = doc(colRef, this.docId); // updateDocの場合、withConverter.toFirestoreは使用できない。
      await this.beforeUpdate();
      this.updateAt = new Date();
      this.uid = auth?.currentUser?.uid || "unknown";
      await updateDoc(docRef, this.toObject());
      await this.afterUpdate();
      console.info(
        getMessage(
          sender,
          "UPDATE_DOC_SUCCESS",
          this.#collectionPath,
          this.docId
        )
      );
      return docRef;
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * `hasMany`プロパティにセットされた条件に基づいて、当該クラスに読み込まれているドキュメントデータに
   * 依存している子ドキュメントが存在しているかどうかを返します。
   * @returns {Promise<object|boolean>} - 子ドキュメントが存在する場合は`hasMany`の該当項目を返し、存在しない場合は`false`を返します。
   */
  async #hasChild() {
    for (const item of this.#hasMany) {
      const colRef =
        item.type === "collection"
          ? collection(firestore, item.collection)
          : collectionGroup(firestore, item.collection);

      const whrObj = where(item.field, item.condition, this.docId);
      const q = query(colRef, whrObj, limit(1));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) return item;
    }

    return false;
  }

  /**
   * 現在のドキュメントIDに該当するドキュメントを削除します。
   * - `logicalDelete`が指定されている場合、削除されたドキュメントはarchiveコレクションに移動されます。
   * @returns {Promise<void>} - 削除が完了すると解決されるPromise
   */
  async delete() {
    /* eslint-disable */
    const sender = "FireModel - delete";
    console.info(getMessage(sender, "DELETE_CALLED", this.docId));
    try {
      if (!this.docId) {
        throw new Error(getMessage(sender, "DELETE_REQUIRES_DOCID"));
      }
      const hasChild = await this.#hasChild();
      if (hasChild) {
        throw new Error(
          getMessage(
            sender,
            "COULD_NOT_DELETE_CHILD_EXIST",
            hasChild.collection
          )
        );
      }
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = doc(colRef, this.docId);
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error(
          getMessage(
            sender,
            "NO_DOCUMENT_TO_DELETE",
            this.#collectionPath,
            this.docId
          )
        );
      }
      await this.beforeDelete();
      if (this.#logicalDelete) {
        const archiveColRef = collection(
          firestore,
          `${this.#collectionPath}_archive`
        );
        const archiveDocRef = doc(archiveColRef, this.docId);
        const batch = writeBatch(firestore);
        batch.set(archiveDocRef, docSnapshot.data());
        batch.delete(docRef);
        await batch.commit();
      } else {
        await deleteDoc(docRef);
      }
      await this.afterDelete();
      console.info(
        getMessage(
          sender,
          "DELETE_DOC_SUCCESS",
          this.#collectionPath,
          this.docId
        )
      );
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * コレクション内のドキュメントをすべて削除します。
   * - 大量のドキュメントが存在する場合の負荷を分散するため、一度に処理するドキュメント数を制限することができます。
   * - 一度に処理するドキュメント数の既定値は500件です。
   * - 同時に、削除処理ごとの待機時間をミリ秒で設定することが可能です。
   * - 待機時間の既定値は500ミリ秒です。
   * @param {number} batchSize 一度の処理するドキュメントの最大数
   * @param {number} pauseDuration 処理を待機する時間（ミリ秒）
   * @returns {Promise<void>} - すべての処理が完了すると解決されるPromise
   */
  async deleteAll(batchSize = 500, pauseDuration = 500) {
    const sender = "FireModel - deleteAll";
    console.info(getMessage(sender, "DELETE_ALL_CALLED", this.#collectionPath));
    // 引数のバリデーション
    if (typeof batchSize !== "number" || batchSize <= 0) {
      throw new Error(getMessage(sender, "DELETE_ALL_INVALID_BATCH_SIZE"));
    }
    if (typeof pauseDuration !== "number" || pauseDuration < 0) {
      throw new Error(getMessage(sender, "DELETE_ALL_INVALID_PAUSE_DURATION"));
    }

    const colRef = collection(firestore, this.#collectionPath);
    let snapshot;

    try {
      do {
        snapshot = await getDocs(query(colRef, limit(batchSize)));
        if (snapshot.empty) break;

        const batch = writeBatch(firestore);
        snapshot.docs.forEach((doc) => {
          batch.delete(doc.ref);
        });

        await batch.commit();

        // 処理を分散するために指定した時間だけ待機する
        if (pauseDuration > 0) {
          await new Promise((resolve) => setTimeout(resolve, pauseDuration));
        }
      } while (!snapshot.empty);
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
  }

  /**
   * 削除されたドキュメントをアーカイブコレクションから元のコレクションに復元します。
   * @param {string} docId - 復元するドキュメントのID
   * @returns {Promise<DocumentReference>} - 復元されたドキュメントのリファレンス
   * @throws {Error} - ドキュメントIDが指定されていない場合や、復元するドキュメントが存在しない場合にエラーをスローします
   */
  async restore(docId) {
    /* eslint-disable */
    const sender = "FireModel - restore";
    if (!docId) {
      throw new Error(getMessage(sender, "RESTORE_CALLED_NO_DOCID"));
    } else {
      console.info(getMessage(sender, "RESTORE_CALLED", docId));
    }
    try {
      const archivePath = `${this.#collectionPath}_archive`;
      const archiveColRef = collection(firestore, archivePath);
      const archiveDocRef = doc(archiveColRef, docId);
      const docSnapshot = await getDoc(archiveDocRef);
      if (!docSnapshot.exists()) {
        throw new Error(
          getMessage(sender, "NO_DOCUMENT_TO_RESTORE", archivePath, docId)
        );
      }
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = doc(colRef, docId);
      const batch = writeBatch(firestore);
      batch.delete(archiveDocRef);
      batch.set(docRef, docSnapshot.data());
      await batch.commit();
      console.info(
        getMessage(sender, "RESTORE_SUCCESS", this.#collectionPath, docId)
      );
      return docRef;
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * Firestoreのリアルタイムリスナーを解除します。
   * 現在のリスナーが存在する場合、そのリスナーを解除します。
   * @returns {void}
   */
  unsubscribe() {
    /* eslint-disable */
    const sender = "FireModel - unsubscribe";
    console.info(getMessage(sender, "UNSUBSCRIBE_CALLED"));
    if (this.#listener) {
      this.#listener();
      this.#listener = null;
      console.info(
        getMessage(sender, "UNSUBSCRIBE_SUCCESS", this.#collectionPath)
      );
    }
    this.#items.splice(0);
    /* eslint-enable */
  }

  /**
   * Firestoreのドキュメントに対するリアルタイムリスナーを設定します。
   * 既にリスナーが設定されている場合、そのリスナーを解除してから新しいリスナーを設定します。
   * @param {string} docId - リアルタイムリスナーを設定するドキュメントのID
   * @returns {void}
   * @throws {Error} - ドキュメントIDが指定されていない場合にエラーをスローします
   */
  subscribe(docId) {
    /* eslint-disable */
    const sender = "FireModel - subscribe";
    if (!docId) {
      throw new Error(
        getMessage(sender, "SUBSCRIBE_CALLED_NO_DOCID", this.#collectionPath)
      );
    }
    console.info(
      getMessage(sender, "SUBSCRIBE_CALLED", this.#collectionPath, docId)
    );
    try {
      if (this.#listener) {
        console.info(
          getMessage(sender, "LISTENER_HAS_SET", this.#collectionPath)
        );
        this.unsubscribe();
      }
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = doc(colRef, docId);
      this.#listener = onSnapshot(docRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          this.initialize(docSnapshot.data()); // ドキュメントデータを初期化
        } else {
          console.warn(getMessage(sender, "SUBSCRIBE_NO_DOCUMENT", docId));
        }
      });
      console.info(
        getMessage(sender, "SUBSCRIBE_SUCCESS", this.#collectionPath, docId)
      );
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }

  /**
   * Firestoreコレクションに対するリアルタイムリスナーを設定し、ドキュメントの変化を監視します。
   * クエリ条件に一致するドキュメントのリスナーを設定し、結果は`#items`に格納されます。
   * @param {Array} constraints - Firestoreクエリの条件（whereなど）を格納した配列
   * @returns {Array<Object>} - リアルタイムで監視しているドキュメントのデータが格納された配列
   */
  subscribeDocs(constraints = []) {
    /* eslint-disable */
    const sender = "FireModel - subscribeDocs";
    console.info(
      getMessage(sender, "SUBSCRIBE_DOCS_CALLED", this.#collectionPath)
    );
    try {
      if (this.#listener) {
        console.info(
          getMessage(sender, "LISTENER_HAS_SET", this.#collectionPath)
        );
        this.unsubscribe();
      }
      const colRef = collection(firestore, this.#collectionPath);
      const q = query(colRef, ...constraints).withConverter(this.converter());
      this.#listener = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const item = change.doc.data();
          const index = this.#items.findIndex(
            ({ docId }) => docId === item.docId
          );
          if (change.type === "added") this.#items.push(item);
          if (change.type === "modified") this.#items.splice(index, 1, item);
          if (change.type === "removed") this.#items.splice(index, 1);
        });
      });
      console.info(
        getMessage(sender, "SUBSCRIBE_DOCS_SUCCESS", this.#collectionPath)
      );
      return this.#items;
    } catch (err) {
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
    /* eslint-enable */
  }
}
