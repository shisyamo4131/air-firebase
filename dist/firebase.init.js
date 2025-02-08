"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vapidKey = exports.storage = exports.functions = exports.firestore = exports.database = exports.auth = void 0;
var _app = require("firebase/app");
var _auth = require("firebase/auth");
var _database = require("firebase/database");
var _firestore = require("firebase/firestore");
var _functions = require("firebase/functions");
var _storage = require("firebase/storage");
/**
 * firebase.init.js
 *
 * @version 1.0.0
 * @author shisyamo4131
 *
 * このモジュールは、環境ごとに設定された .env.{environment}.js ファイルの設定に基づいて、
 * Firebaseの各種サービスを初期化します。ローカル開発環境と本番環境の両方をサポートし、
 * ローカル環境で実行される際には、Firebaseエミュレータに接続します。
 *
 * 初期化されるFirebaseサービスは以下の通りです:
 * - Authentication
 * - Firestore
 * - Realtime Database
 * - Functions
 * - Storage
 *
 * このモジュールは、Firebaseを初期化する前に必要な設定プロパティがすべて設定されていることを検証します。
 * 必須プロパティが不足している場合はエラーがスローされ、オプションプロパティが不足している場合は警告が表示されます。
 *
 * Firebaseサービスはこのファイルから直接エクスポートされ、他のJavaScriptファイルやVueコンポーネントでインポートして使用します。
 *
 * 使用方法:
 * - 環境ごとのFirebase設定ファイル（.env.local.js、.env.dev.js、.env.prod.js）が正しく設定されていることを確認してください。
 * - このモジュールを必要な場所でインポートし、エクスポートされたFirebaseサービスを利用してください。
 *
 * 使用例:
 * プレーンなJavaScriptファイルやVueコンポーネントでの使用例:
 * ```javascript
 * import { auth, firestore } from '~/plugins/firebase-v2';
 *
 * export function someFunction() {
 *   const user = auth.currentUser;
 *   console.log('現在のユーザー:', user);
 * }
 *
 * export default {
 *   async mounted() {
 *     const doc = await firestore.collection('users').doc('some-id').get();
 *     console.log('ドキュメントデータ:', doc.data());
 *   }
 * }
 * ```
 *
 * 注意事項:
 * - ローカル開発モード (`NODE_ENV=local`) で実行する場合、Firebaseサービスは本番環境のサービスではなく、
 *   ローカルのエミュレータに接続されます。
 *
 * 備考:
 * firebaseの各種サービスを初期化するモジュールとして初代のfirebase.jsはNuxtのInjectを利用していたため、
 * プレーンなjsファイルでこれらのサービスを利用することができませんでした。
 * （別途エクスポートすれば利用可能でしたが、サービスへのアプローチ方法が統一されないという欠点が生じた）
 * firebase.init.jsではNuxtのInjectを利用せずに各種サービスをエクスポートすることで、Nuxtコンポーネントに限らず、
 * プレーンなjsファイルからもアクセスできるようにしました。
 *
 * @updates
 * - version 1.0.0 - 2024-08-18 - 初版作成
 */

/* eslint-disable */

/**
 * .envファイルに設定されているべきfirebaseの接続に必要なプロパティ
 */
var requiredProps = ["apiKey", "authDomain", "projectId", "storageBucket", "messagingSenderId", "appId"];

/**
 * .envファイルに設定される可能性のあるfirebaseの接続プロパティ
 */
var optionalProps = ["databaseURL", "vapidKey"];

/**
 * 読み込んだ.envファイルの設定内容を検証します。
 * @param {Object} config firebaseへの接続に使用するconfigオブジェクト
 */
function verifyConfiguration(config) {
  /**
   * 必須およびオプションプロパティを検証します。
   * @param {Array} props チェックするプロパティ名の配列
   * @param {boolean} isRequired trueならば必須プロパティとして扱います
   */
  var checkProps = function checkProps(props, isRequired) {
    var missingProps = props.filter(function (prop) {
      return !(prop in config);
    });
    if (missingProps.length) {
      if (isRequired) {
        throw new Error("[firebase.init.js] Missing required Firebase properties: ".concat(missingProps.join(", ")));
      } else {
        console.warn("[firebase.init.js] Optional Firebase properties are not set: ".concat(missingProps.join(", "), ". If you do not use them, you can ignore this message."));
      }
    }
  };

  // 必須プロパティをチェック
  checkProps(requiredProps, true);

  // オプションプロパティをチェック
  checkProps(optionalProps, false);
}

/******************************************************************************
 * メインフロー
 ******************************************************************************/
console.info("[firebase.init.js] Connecting to firebase as ".concat(process.env.NODE_ENV, " mode."));

// 環境変数に応じたfirebaseのconfigを読み込みます。
var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  databaseURL: process.env.DATABASE_URL || "",
  vapidKey: process.env.VAPID_KEY || ""
};

// configの内容を検証
verifyConfiguration(firebaseConfig);

// firebaseの初期化 -> 既に初期化済みであれば初期化済みアプリを参照
var firebaseApp = (0, _app.getApps)().length ? (0, _app.getApps)()[0] : (0, _app.initializeApp)(firebaseConfig);

// firebaseの各種サービスを取得
var auth = exports.auth = (0, _auth.getAuth)(firebaseApp);
// const functions = getFunctions(firebaseApp);
var functions = exports.functions = (0, _functions.getFunctions)(firebaseApp, "asia-northeast1");
var firestore = exports.firestore = (0, _firestore.getFirestore)(firebaseApp);
var database = exports.database = (0, _database.getDatabase)(firebaseApp);
var storage = exports.storage = (0, _storage.getStorage)(firebaseApp);

// messageサービスのvapidKeyを取得
var vapidKey = exports.vapidKey = (firebaseConfig === null || firebaseConfig === void 0 ? void 0 : firebaseConfig.vapidKey) || "";

// envが`local`であった場合、接続先をエミュレータに切り替え
if (process.env.NODE_ENV === "local") {
  // connectAuthEmulator(auth, "http://localhost:9099");
  (0, _auth.connectAuthEmulator)(auth, "http://127.0.0.1:9099");
  (0, _functions.connectFunctionsEmulator)(functions, "localhost", 5001);
  (0, _firestore.connectFirestoreEmulator)(firestore, "localhost", 8080);
  (0, _database.connectDatabaseEmulator)(database, "localhost", 9000);
  (0, _storage.connectStorageEmulator)(storage, "localhost", 9199);
}

/* eslint-enable */