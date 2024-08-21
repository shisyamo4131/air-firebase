import FireModel from "./firestore/FireModel.js";
import {
  auth,
  functions,
  firestore,
  database,
  storage,
  vapidKey,
} from "./firebase.init.js";

// 基本エクスポート
export { FireModel, auth, functions, firestore, database, storage, vapidKey };

// ストレージ関連のエクスポート
export * from "./storage/storage.js";
