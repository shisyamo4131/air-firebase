import {
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
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
 * classProps:
 * - このクラスはbeforeCreate、beforeUpdateで`classProps`に定義されたプロパティの入力チェックを行います。
 * - `classProps`はクラスで使用するプロパティを以下の形式で定義したものです。
 *    docId: { type: String, default: '', required: false, requiredByClass: false }
 * - 自動採番で値がセットされるプロパティには`requiredByClass`をtrueにしないでください。
 *   validatePropertiesは自動採番が行われる前に実行されるため、エラーになります。
 *
 * createメソッド:
 * ‐ `transaction`引数を与えると、トランザクション処理を行います。
 *
 * 注意:
 * - このクラスは、FirestoreのドキュメントIDや作成日時、更新日時、ユーザーIDなどのメタデータを自動管理します。
 * - コレクション間の依存関係（hasMany）は、このクラスを通じて管理され、削除時の整合性を保証します。
 * - 論理削除を有効にした場合、削除されたドキュメントは自動的にアーカイブコレクションに移動されます。
 * - Firestoreのリアルタイムリスナーを活用することで、ドキュメントの変更をリアルタイムで監視し、自動的にデータモデルに反映します。
 *
 * @author shisyamo4131
 * @version 1.7.0
 * @see https://firebase.google.com/docs/firestore
 * @updates
 * - version 1.7.0 - 2024-09-11 - fetchDocsをfetchDocsOldとし、fetchDocsを再実装。受け付ける引数の形式を変更し、Ngram検索も可能に。
 *                              - subscribeDocsをsubscribeDocsOldとし、subscribeDocsを再実装。受け付ける引数の形式を変更し、Ngram検索も可能に。
 *                              - 各メソッドで出力されるコンソールに使用しているsenderがクラス名を動的に生成するように修正。
 * - version 1.6.0 - 2024-09-04 - cloneメソッドを追加
 * - version 1.5.0 - 2024-08-27 - create、update、deleteがtransactionを引数として受け取ることができるように改善。
 * - version 1.4.0 - 2024-08-26 - validatePropertiesを実装し、beforeCreate、beforeUpdateで入力チェックを行うように修正
 *                              - サブクラスでのプロパティ初期化処理をinitializeメソッドにて実装
 *                              - tokenMapに`configurable`を設定。
 * - version 1.3.0 - 2024-08-23 - deleteAll()を実装
 *                              - fetch()が結果に応じて`Boolean`を返すように修正
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

  #classProps = {};

  /**
   * FireModelクラスのインスタンスを初期化します。
   * このクラスはFirestoreコレクションのCRUD操作をサポートし、
   * 依存関係のあるコレクションの管理や論理削除の処理も可能です。
   *
   * @param {Object} item - 初期化するデータモデルのプロパティを含むオブジェクト
   * @param {string} collectionPath - Firestoreコレクションのパス
   * @param {Array<Object>} hasMany - 依存するコレクションの情報を格納した配列
   * @param {boolean} logicalDelete - 論理削除を行うかどうかを指定するフラグ
   * @param {Array<Object>} tokenFields - tokenMap作成対象のプロパティ名の配列
   * @param {Object} classProps - クラスに用意するプロパティの定義を表したオブジェクト
   */
  constructor(
    item = {},
    collectionPath = "",
    hasMany = [],
    logicalDelete = false,
    tokenFields = [],
    classProps = {}
  ) {
    this.#collectionPath = collectionPath;
    this.#validateHasMany(hasMany);
    this.#hasMany = hasMany;
    this.#logicalDelete = logicalDelete;
    this.#tokenFields = tokenFields;
    this.#classProps = classProps;
    this.initialize(item);
    Object.defineProperties(this, {
      tokenMap: {
        enumerable: true,
        configurable: true,
        get: this.#generateTokenMap.bind(this),
        set: this.#setTokenMap.bind(this),
      },
    });
  }

  /****************************************************************************
   * 当該インスタンスを複製したインスタンスを返します。
   * - vueコンポーネントにおいてインスタンスを親に返す場合など、参照渡しを回避するのに使用します。
   * @returns {this.constructor} - 複製された新しいインスタンス
   ****************************************************************************/
  clone() {
    return Object.assign(new this.constructor(), structuredClone(this));
  }

  /****************************************************************************
   * コンストラクタに引き渡されたhasManyについて検証します。
   * - hasManyプロパティは配列である必要があります。
   * - 各要素はオブジェクトであり、必要なプロパティを持っていることを確認します。
   * - 必須キーは "collection", "field", "condition", "type" です。
   * - "type" プロパティには "collection" または "subcollection" のみを指定できます。
   *
   * @param {Array<Object>} hasMany コンストラクタで受け取ったhasMany
   * @throws {Error} バリデーションに失敗した場合にエラーをスローします。
   ****************************************************************************/
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

  /****************************************************************************
   * validateProperties
   *
   * `classProps`によって定義されたプロパティについて、インスタンスのプロパティ値の
   * バリデーションを行います。このメソッドは、必須入力およびカスタム
   * バリデーションロジックに従ったチェックを実行します。
   *
   * - `required`がtrueの場合、そのプロパティは必須と見なされます。
   * - プロパティが`undefined`、`null`、または空文字列(`''`)である場合、
   *   必須チェックに失敗し、エラーがスローされます。
   * - `validator`関数が指定されている場合、その関数を使用してプロパティ値の
   *   カスタムバリデーションが行われます。バリデーションに失敗した場合、
   *   エラーがスローされます。
   *
   * @returns {void}
   * @throws {Error} 必須プロパティが未設定であるか、バリデーションに失敗した場合
   ****************************************************************************/
  validateProperties() {
    Object.keys(this.#classProps).forEach((key) => {
      const propConfig = this.#classProps[key];
      // 必須チェック
      if (
        propConfig.required &&
        (this[key] === undefined || this[key] === null || this[key] === "")
      ) {
        throw new Error(`${key}は必須です。`);
      }

      // バリデーションチェック
      if (propConfig.validator && !propConfig.validator(this[key])) {
        throw new Error(`${key}の値が無効です: ${this[key]}`);
      }
    });
  }

  /****************************************************************************
   * tokenMapを生成して返します。
   * - 指定されたフィールドの値からトークンを生成し、トークンマップを作成します。
   * - フィールドが存在しないか、値が空の場合は無視されます。
   * - サロゲートペア、特殊文字、および空白文字を除去してトークンを生成します。
   *
   * @returns {Object|null} 生成されたtokenMapを返します。対象フィールドがない場合はnullを返します。
   ****************************************************************************/
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

  /****************************************************************************
   * tokenMapのセッターです。
   * - 初期化時のエラーを避けるためのNo-op（何もしない）セッターです。
   * - 必要に応じて、特定のロジックを実装するためにカスタマイズできます。
   *
   * @param {Object} value - セットするtokenMapの値
   ****************************************************************************/
  #setTokenMap(value) {
    // No-op setter to avoid errors during initialization.
    // This can be customized if needed to handle specific logic.
  }

  /****************************************************************************
   * データモデルを初期化するためのメソッドです。
   * - コンストラクタから呼び出されるほか、独自に呼び出すことで
   *   データモデルを初期化することができます。
   * - プロパティ `createAt` と `updateAt` は、Dateオブジェクトに変換されます。
   * - 他のプロパティはオブジェクトのディープコピーとして初期化されます。
   *
   * @param {Object} item - 初期化するデータモデルのプロパティを含むオブジェクト
   * @returns {void}
   ****************************************************************************/
  initialize(item = {}) {
    /**
     * classPropsに定義されているプロパティを初期化
     */
    Object.keys(this.#classProps).forEach((key) => {
      const propDefault = this.#classProps[key].default;
      this[key] =
        typeof propDefault === "function" ? propDefault() : propDefault;
    });

    this.docId = item?.docId || "";
    this.uid = item?.uid || "";

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

    Object.keys(item).forEach((key) => {
      if (key in this && key !== "createAt" && key !== "updateAt") {
        this[key] = JSON.parse(JSON.stringify(item[key]));
      }
    });
  }

  /****************************************************************************
   * Firestore用のコンバーターを提供します。
   * - ドキュメントデータの保存および読み込み時に使用されます。
   *
   * @returns {Object} - Firestoreの`toFirestore`および`fromFirestore`メソッドを含むコンバーターオブジェクト
   ****************************************************************************/
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

  /****************************************************************************
   * クラスインスタンスを純粋なオブジェクトに変換します。
   * - 継承先のクラスで定義されたプロパティも含めて出力します。
   * - `enumerable: true`のプロパティのみを出力します。
   *
   * @returns {Object} - Firestoreに保存可能なオブジェクト形式
   ****************************************************************************/
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

  /****************************************************************************
   * Firestoreから読み込んだデータをクラスインスタンスに変換するメソッドです。
   * - サブクラスでオーバーライドすることができます。
   *
   * @param {Object} snapshot - Firestoreから取得したドキュメントスナップショット
   * @returns {Object} - クラスインスタンス
   ****************************************************************************/
  fromFirestore(snapshot) {
    const data = snapshot.data();
    return new this.constructor(
      data,
      this.#collectionPath,
      this.#hasMany,
      this.#logicalDelete
    );
  }

  /****************************************************************************
   * ドキュメント作成前に実行されるメソッドです。
   * - `classProps`で定義されたプロパティについて、`validateProperties()`でチェックを行います。
   * - コレクション単位で必要な処理がある場合にオーバーライドして処理を追加してください。
   * - サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   ****************************************************************************/
  beforeCreate() {
    return new Promise((resolve, reject) => {
      try {
        this.validateProperties();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  /****************************************************************************
   * ドキュメント作成後に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   ****************************************************************************/
  afterCreate() {
    return Promise.resolve();
  }

  /****************************************************************************
   * ドキュメント更新前に実行されるメソッドです。
   * - `classProps`で定義されたプロパティについて、`validateProperties()`でチェックを行います。
   * - コレクション単位で必要な処理がある場合にオーバーライドして処理を追加してください。
   * - サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   ****************************************************************************/
  beforeUpdate() {
    return new Promise((resolve, reject) => {
      try {
        this.validateProperties();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  /****************************************************************************
   * ドキュメント更新後に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   ****************************************************************************/
  afterUpdate() {
    return Promise.resolve();
  }

  /****************************************************************************
   * ドキュメント削除前に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   ****************************************************************************/
  beforeDelete() {
    return Promise.resolve();
  }

  /****************************************************************************
   * ドキュメント削除後に実行されるメソッドです。
   * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
   * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
   * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
   ****************************************************************************/
  afterDelete() {
    return Promise.resolve();
  }

  /****************************************************************************
   * ドキュメントを書き込みます。
   * ‐ docIdを指定することで、ドキュメントIDを指定した書き込みを行うことが可能です。
   * - useAutonumberをtrueにすると自動採番を行います。
   * - useAutonumberの既定値はfalseです。
   * - 自動採番を行うコレクションの場合、このメソッドをオーバーライドし、useAutonumberの既定値をtrueにすることをお勧めします。
   * - transactionを引数に渡すことでトランザクション処理を行うことが可能です。
   * @param {string|null} docId - 指定されたドキュメントID（省略可能）
   * @param {boolean} useAutonumber - 自動採番を行うかどうかのフラグ（省略可能）
   * @param {object|null} transaction - Firestoreトランザクションオブジェクト（省略可能）
   * @returns {Promise<DocumentReference>} - 作成されたドキュメントのリファレンス
   * @throws {Error} - ドキュメントの作成中にエラーが発生した場合にスローされます
   ****************************************************************************/
  async create({
    docId = null,
    useAutonumber = false,
    transaction = null,
  } = {}) {
    const sender = `${this.constructor.name} - create`;

    // メッセージ出力
    if (docId) {
      // eslint-disable-next-line no-console
      console.info(getMessage(sender, "CREATE_CALLED", docId));
    } else {
      // eslint-disable-next-line no-console
      console.info(getMessage(sender, "CREATE_CALLED_NO_DOCID"));
    }

    try {
      // ドキュメント作成準備
      this.createAt = new Date();
      this.updateAt = new Date();
      this.uid = auth?.currentUser?.uid || "unknown";
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = docId
        ? doc(colRef, docId).withConverter(this.converter())
        : doc(colRef).withConverter(this.converter());
      this.docId = docRef.id;
      await this.beforeCreate();

      // ドキュメント作成処理
      if (useAutonumber) {
        if (transaction) {
          await this.#createWithAutonumber(transaction, this);
          transaction.set(docRef, this);
        } else {
          await runTransaction(firestore, async (newTransaction) => {
            await this.#createWithAutonumber(newTransaction, this);
            newTransaction.set(docRef, this);
          });
        }
      } else {
        await (transaction
          ? transaction.set(docRef, this)
          : setDoc(docRef, this));
      }

      // ドキュメント作成後の処理
      await this.afterCreate();

      // 成功メッセージ
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
      const errorMsg = `Error in ${sender}: ${err.message}`;
      // eslint-disable-next-line no-console
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
  }

  /****************************************************************************
   * 自動採番を利用してドキュメントを作成します。
   * @param {Object} transaction Firestoreのトランザクションオブジェクト
   * @param {Object} item ドキュメントとして登録するデータオブジェクト
   * @returns {Promise<void>} - ドキュメントが存在しない場合は警告を出力し、存在する場合はプロパティにデータをセットします。
   ****************************************************************************/
  async #createWithAutonumber(transaction, item) {
    /* eslint-disable */
    const sender = `${this.constructor.name} - createWithAutonumber`;
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

  /****************************************************************************
   * 指定されたドキュメントIDに該当するドキュメントを取得してプロパティにデータをセットします。
   * - 当該クラスのプロパティにデータをセットするため、`withConverter`を使っていません。
   * - ドキュメントの読み込みに成功すれば`true`を、そうでなければ`false`を返します。
   * @param {string} docId - 取得するドキュメントのID
   * @returns {Promise<boolean>} ドキュメントが存在した場合は`true`、存在しない場合は`false`を返します。
   * @throws {Error} ドキュメントIDが指定されていない場合、またはドキュメントの取得に失敗した場合
   ****************************************************************************/
  async fetch(docId = null) {
    const sender = `${this.constructor.name} - fetch`;
    if (!docId) {
      throw new Error(getMessage(sender, "FETCH_CALLED_NO_DOCID"));
    }

    // eslint-disable-next-line no-console
    console.info(
      getMessage(sender, "FETCH_CALLED", this.#collectionPath, docId)
    );

    try {
      const colRef = collection(firestore, this.#collectionPath);
      const docRef = doc(colRef, docId);
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        // eslint-disable-next-line no-console
        console.warn(getMessage(sender, "FETCH_NO_DOCUMENT", docId));
        return false;
      }
      this.initialize(docSnapshot.data());
      // eslint-disable-next-line no-console
      console.info(getMessage(sender, "FETCH_SUCCESS"));
      return true;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`[${sender}] ${err.message}`);
      throw new Error(`Document fetch failed: ${err.message}`);
    }
  }

  /****************************************************************************
   * 指定されたドキュメントIDに該当するドキュメントを取得して返します。
   * ‐ `fetch`と異なり、取得したドキュメントデータをインスタンス化された当該クラスのオブジェクトとして返します。
   * - 既にインスタンス化されたクラスオブジェクトはそのままに、新たなインスタンスが必要な場合に使用します。
   * @param {string} docId - 取得するドキュメントのID
   * @returns {Promise<Object|null>} - 取得されたドキュメントデータが返されます。ドキュメントが存在しない場合は`null`が返されます。
   ****************************************************************************/
  async fetchDoc(docId = null) {
    /* eslint-disable */
    const sender = `${this.constructor.name} - fetchDoc`;
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

  /****************************************************************************
   * Firestoreコレクションから条件に一致するドキュメントを取得し、そのデータを返します。
   * - 返り値の配列に格納されるのは取得したドキュメントデータで初期化された、インスタンス化された当該クラスのオブジェクトです。
   * @param {Array} constraints - Firestoreクエリの条件（whereなど）を格納した配列
   * @returns {Promise<Array<Object>>} - 取得したドキュメントのデータで初期化された、インスタンス化された当該クラスのオブジェクトの配列
   ****************************************************************************/
  async fetchDocsOld(constraints = []) {
    const sender = `${this.constructor.name} - fetchDocsOld`;
    console.info(getMessage(sender, "FETCH_DOCS_CALLED", this.#collectionPath));
    try {
      const colRef = collection(firestore, this.#collectionPath);
      const q = query(colRef, ...constraints).withConverter(this.converter());
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => doc.data());
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
  }

  /****************************************************************************
   * Firestoreコレクションから条件に一致するドキュメントを取得します。
   * - クエリ形式に応じて、fetchDocsOldを呼び出すか、新バージョンのロジックを実行します。
   * - クエリ条件が文字列であった場合、tokenMapを利用したNgram検索を実行します。
   *
   * @param {Array|string} constraints - クエリ条件の配列（新形式）または検索用の文字列
   * @returns {Promise<Array<Object>>} - 取得したドキュメントのデータで初期化されたオブジェクトの配列
   * @throws {Error} 不明なクエリタイプが指定された場合
   ****************************************************************************/
  async fetchDocs(constraints = []) {
    // 新形式か旧形式かを判定する関数
    const isOldVersion = (constraints) => {
      return (
        Array.isArray(constraints) &&
        constraints.every((c) => typeof c === "function")
      );
    };

    // 旧バージョンの引数が与えられた場合、fetchDocsOldをコール
    if (isOldVersion(constraints)) {
      return await this.fetchDocsOld(constraints);
    }

    const queryConstraints = [];

    // constraintsが文字列である場合、N-gram検索用のクエリを生成
    if (typeof constraints === "string") {
      const tokens = [];
      const target = constraints.replace(
        /[\uD800-\uDBFF]|[\uDC00-\uDFFF]|~|\*|\[|\]|\s+/g,
        ""
      );

      // 1文字と2文字のトークンを生成
      for (let i = 0; i < target.length; i++) {
        tokens.push(target.substring(i, i + 1));
      }
      for (let i = 0; i < target.length - 1; i++) {
        tokens.push(target.substring(i, i + 2));
      }

      // tokenMapに含まれるトークンでFirestoreクエリを実行するためのwhere条件を追加
      tokens.forEach((token) => {
        queryConstraints.push(where(`tokenMap.${token}`, "==", true));
      });
    } else {
      // 新バージョンのfetchDocsでのクエリ生成
      const validQueryTypes = ["where", "orderBy", "limit"];
      constraints.forEach((constraint) => {
        const [type, ...args] = constraint;
        switch (type) {
          case "where":
            queryConstraints.push(where(...args));
            break;
          case "orderBy":
            queryConstraints.push(orderBy(args[0], args[1] || "asc"));
            break;
          case "limit":
            queryConstraints.push(limit(args[0]));
            break;
          default:
            // eslint-disable-next-line no-console
            console.warn(
              `Unknown query type: ${type}. Valid query types are: ${validQueryTypes.join(
                ", "
              )}`
            );
            throw new Error(
              `Invalid query type: ${type}. Please use one of: ${validQueryTypes.join(
                ", "
              )}`
            );
        }
      });
    }

    // Firestoreクエリの実行
    const colRef = collection(firestore, this.#collectionPath);
    const q = query(colRef, ...queryConstraints).withConverter(
      this.converter()
    );
    const querySnapshot = await getDocs(q);

    // 取得したドキュメントデータをオブジェクトの配列に変換して返却
    return querySnapshot.docs.map((doc) => doc.data());
  }

  /****************************************************************************
   * 現在プロパティにセットされている値で、ドキュメントを更新します。
   * - FirestoreのupdateメソッドはwithConverterを受け付けないため、toObject()を使用しています。
   * @param {object|null} transaction - Firestoreトランザクションオブジェクト（省略可能）
   * @returns {Promise<DocumentReference>} 更新したドキュメントへの参照
   * @throws {Error} ドキュメントの更新中にエラーが発生した場合にスローされます
   ****************************************************************************/
  async update({ transaction = null } = {}) {
    const sender = `${this.constructor.name} - update`;

    // 更新呼び出しのログ出力
    // eslint-disable-next-line no-console
    console.info(getMessage(sender, "UPDATE_CALLED", this.docId));

    try {
      // ドキュメントIDが存在しない場合はエラーをスロー
      if (!this.docId) {
        throw new Error(getMessage(sender, "UPDATE_REQUIRES_DOCID"));
      }

      const colRef = collection(firestore, this.#collectionPath);
      const docRef = doc(colRef, this.docId); // updateDocの場合、withConverter.toFirestoreは使用できない。

      // 更新前処理
      await this.beforeUpdate();

      // 更新日時とユーザーIDの設定
      this.updateAt = new Date();
      this.uid = auth?.currentUser?.uid || "unknown";

      // ドキュメントの更新処理
      // await updateDoc(docRef, this.toObject());
      await (transaction
        ? transaction.update(docRef, this.toObject())
        : updateDoc(docRef, this.toObject()));

      // 更新後処理
      await this.afterUpdate();

      // 成功ログ出力
      // eslint-disable-next-line no-console
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
      const errorMsg = `Error in ${sender}: ${err.message}`;
      // eslint-disable-next-line no-console
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
  }

  /****************************************************************************
   * `hasMany`プロパティにセットされた条件に基づいて、当該クラスに読み込まれているドキュメントデータに
   * 依存している子ドキュメントが存在しているかどうかを返します。
   * @returns {Promise<object|boolean>} - 子ドキュメントが存在する場合は`hasMany`の該当項目を返し、存在しない場合は`false`を返します。
   ****************************************************************************/
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

  /****************************************************************************
   * 現在のドキュメントIDに該当するドキュメントを削除します。
   * - `logicalDelete`が指定されている場合、削除されたドキュメントはarchiveコレクションに移動されます。
   * @param {object|null} transaction - Firestoreトランザクションオブジェクト（省略可能）
   * @returns {Promise<void>} - 削除が完了すると解決されるPromise
   * @throws {Error} - ドキュメントの削除中にエラーが発生した場合にスローされます
   ****************************************************************************/
  async delete({ transaction = null } = {}) {
    const sender = `${this.constructor.name} - delete`;

    // 削除呼び出しのログ出力
    // eslint-disable-next-line no-console
    console.info(getMessage(sender, "DELETE_CALLED", this.docId));

    try {
      // ドキュメントIDが存在しない場合はエラーをスロー
      if (!this.docId) {
        throw new Error(getMessage(sender, "DELETE_REQUIRES_DOCID"));
      }

      /**
       * 2024-09-10 修正の可能性あり
       * - トランザクション処理であった場合に、`#hasChild()`でgetしていることが弊害になるかも。
       * - 弊害になるようであればサブクラス側でチェックするように仕様を変更する必要がある？
       */
      // 子ドキュメントが存在する場合は削除を許可しない
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

      /**
       * 2024-09-11 コメント
       * - 物理削除であればドキュメントを取得する必要はない。
       * - 論理削除の場合、archiveコレクションにドキュメントのコピーを作成するために取得が必要
       * - インスタンスに格納されているデータが完全とは言えないため。
       * - 結果、一度ドキュメントを取得する必要がある。
       */
      const docSnapshot = await (transaction
        ? transaction.get(docRef)
        : getDoc(docRef));

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

      // 削除前処理
      await this.beforeDelete();

      if (this.#logicalDelete) {
        const archiveColRef = collection(
          firestore,
          `${this.#collectionPath}_archive`
        );
        const archiveDocRef = doc(archiveColRef, this.docId);

        if (transaction) {
          transaction.set(archiveDocRef, docSnapshot.data());
          transaction.delete(docRef);
        } else {
          await runTransaction(firestore, async (newTransaction) => {
            newTransaction.set(archiveDocRef, docSnapshot.data());
            newTransaction.delete(docRef);
          });
        }
      } else {
        await (transaction ? transaction.delete(docRef) : deleteDoc(docRef));
      }

      // 削除後処理
      await this.afterDelete();

      // 成功ログ出力
      // eslint-disable-next-line no-console
      console.info(
        getMessage(
          sender,
          "DELETE_DOC_SUCCESS",
          this.#collectionPath,
          this.docId
        )
      );
    } catch (err) {
      const errorMsg = `Error in ${sender}: ${err.message}`;
      // eslint-disable-next-line no-console
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
  }

  /****************************************************************************
   * コレクション内のドキュメントをすべて削除します。
   * - 大量のドキュメントが存在する場合の負荷を分散するため、一度に処理するドキュメント数を制限することができます。
   * - 一度に処理するドキュメント数の既定値は500件です。
   * - 同時に、削除処理ごとの待機時間をミリ秒で設定することが可能です。
   * - 待機時間の既定値は500ミリ秒です。
   * @param {number} batchSize 一度の処理するドキュメントの最大数
   * @param {number} pauseDuration 処理を待機する時間（ミリ秒）
   * @returns {Promise<void>} - すべての処理が完了すると解決されるPromise
   ****************************************************************************/
  async deleteAll(batchSize = 500, pauseDuration = 500) {
    const sender = `${this.constructor.name} - deleteAll`;
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

  /****************************************************************************
   * 削除されたドキュメントをアーカイブコレクションから元のコレクションに復元します。
   * @param {string} docId - 復元するドキュメントのID
   * @returns {Promise<DocumentReference>} - 復元されたドキュメントのリファレンス
   * @throws {Error} - ドキュメントIDが指定されていない場合や、復元するドキュメントが存在しない場合にエラーをスローします
   ****************************************************************************/
  async restore(docId) {
    /* eslint-disable */
    const sender = `${this.constructor.name} - restore`;
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

  /****************************************************************************
   * Firestoreのリアルタイムリスナーを解除します。
   * 現在のリスナーが存在する場合、そのリスナーを解除します。
   * @returns {void}
   ****************************************************************************/
  unsubscribe() {
    /* eslint-disable */
    const sender = `${this.constructor.name} - unsubscribe`;
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

  /****************************************************************************
   * Firestoreのドキュメントに対するリアルタイムリスナーを設定します。
   * 既にリスナーが設定されている場合、そのリスナーを解除してから新しいリスナーを設定します。
   * @param {string} docId - リアルタイムリスナーを設定するドキュメントのID
   * @returns {void}
   * @throws {Error} - ドキュメントIDが指定されていない場合にエラーをスローします
   ****************************************************************************/
  subscribe(docId) {
    /* eslint-disable */
    const sender = `${this.constructor.name} - subscribe`;
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

  /****************************************************************************
   * Firestoreコレクションに対するリアルタイムリスナーを設定し、ドキュメントの変化を監視します。
   * クエリ条件に一致するドキュメントのリスナーを設定し、結果は`#items`に格納されます。
   * 旧バージョンでは、Firestoreのwhereなどを直接渡す形式です。
   *
   * @param {Array} constraints - Firestoreクエリの条件（whereなど）を格納した配列
   * @returns {Array<Object>} - リアルタイムで監視しているドキュメントのデータが格納された配列
   ****************************************************************************/
  subscribeDocsOld(constraints = []) {
    /* eslint-disable */
    const sender = `${this.constructor.name} - subscribeDocsOld`;
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

  /****************************************************************************
   * Firestoreコレクションに対するリアルタイムリスナーを設定し、ドキュメントの変化を監視します。
   * - クエリ条件が文字列であった場合、tokenMapを利用したN-gram検索を実行します。
   * - クエリ条件の中身が関数（function）の場合はsubscribeDocsOldを呼び出します。
   *
   * @param {Array|string} constraints - クエリ条件の配列（新形式）または検索用の文字列
   * @returns {Array<Object>} - リアルタイムで監視しているドキュメントのデータが格納された配列
   ****************************************************************************/
  subscribeDocs(constraints = []) {
    const sender = `${this.constructor.name} - subscribeDocs`;

    // 新形式か旧形式かを判定する関数
    const isOldVersion = (constraints) => {
      return (
        Array.isArray(constraints) &&
        constraints.every((c) => typeof c === "function")
      );
    };

    // 旧バージョンの引数が与えられた場合、subscribeDocsOldをコール
    if (isOldVersion(constraints)) {
      return this.subscribeDocsOld(constraints);
    }

    // eslint-disable-next-line no-console
    console.info(
      getMessage(sender, "SUBSCRIBE_DOCS_CALLED", this.#collectionPath)
    );

    try {
      if (this.#listener) {
        // eslint-disable-next-line no-console
        console.info(
          getMessage(sender, "LISTENER_HAS_SET", this.#collectionPath)
        );
        this.unsubscribe();
      }

      const queryConstraints = [];

      // constraintsが文字列である場合、N-gram検索用のクエリを生成
      if (typeof constraints === "string") {
        const tokens = [];
        const target = constraints.replace(
          /[\uD800-\uDBFF]|[\uDC00-\uDFFF]|~|\*|\[|\]|\s+/g,
          ""
        );

        // 1文字と2文字のトークンを生成
        for (let i = 0; i < target.length; i++) {
          tokens.push(target.substring(i, i + 1));
        }
        for (let i = 0; i < target.length - 1; i++) {
          tokens.push(target.substring(i, i + 2));
        }

        // tokenMapに含まれるトークンでFirestoreクエリを実行するためのwhere条件を追加
        tokens.forEach((token) => {
          queryConstraints.push(where(`tokenMap.${token}`, "==", true));
        });
      } else {
        // 通常のクエリ条件（where, orderBy, limit）を処理
        const validQueryTypes = ["where", "orderBy", "limit"];
        constraints.forEach((constraint) => {
          const [type, ...args] = constraint;
          switch (type) {
            case "where":
              queryConstraints.push(where(...args));
              break;
            case "orderBy":
              queryConstraints.push(orderBy(args[0], args[1] || "asc"));
              break;
            case "limit":
              queryConstraints.push(limit(args[0]));
              break;
            default:
              // eslint-disable-next-line no-console
              console.warn(
                `Unknown query type: ${type}. Valid query types are: ${validQueryTypes.join(
                  ", "
                )}`
              );
              throw new Error(
                `Invalid query type: ${type}. Please use one of: ${validQueryTypes.join(
                  ", "
                )}`
              );
          }
        });
      }

      // Firestoreコレクションに対してリアルタイムリスナーを設定
      const colRef = collection(firestore, this.#collectionPath);
      const q = query(colRef, ...queryConstraints).withConverter(
        this.converter()
      );
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

      // eslint-disable-next-line no-console
      console.info(
        getMessage(sender, "SUBSCRIBE_DOCS_SUCCESS", this.#collectionPath)
      );

      return this.#items;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`[${sender}] ${err.message}`);
      throw err;
    }
  }
}
