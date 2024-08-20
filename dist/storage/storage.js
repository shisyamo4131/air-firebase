"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFile = exports.getFileDownloadURL = void 0;
var _require = require("firebase/storage"),
  ref = _require.ref,
  uploadBytesResumable = _require.uploadBytesResumable,
  getDownloadURL = _require.getDownloadURL;
var _require2 = require("../firebase.init"),
  storage = _require2.storage;
/**
 * Storageにファイルをアップロードします。
 *
 * この関数は、Firebase Storageに指定されたファイルをアップロードし、アップロードが完了したら
 * ファイルのダウンロードURLを返します。アップロード中の進捗状況やエラーが発生した場合の処理も
 * この関数内で管理されます。
 *
 * @param {Object} file - アップロードするファイルオブジェクト。
 * @param {string} path - ファイルをアップロードするFirebase Storage内のパス。
 * @param {Object} [metadata] - アップロードするファイルに付加するメタデータオブジェクト。
 *
 * @returns {Promise<string>} - アップロードが成功した場合に解決されるPromise。
 * 解決される値は、アップロードされたファイルのダウンロードURLです。
 * アップロード中にエラーが発生した場合、Promiseは拒否され、そのエラーが返されます。
 *
 * 使用例:
 * ```
 * const file = document.getElementById('fileInput').files[0];
 * const metadata = { contentType: 'image/jpeg' };
 *
 * fileUploader(file, 'uploads/myImage.jpg', metadata)
 *   .then(downloadURL => {
 *     console.log('File available at', downloadURL);
 *   })
 *   .catch(error => {
 *     console.error('Upload failed:', error);
 *   });
 * ```
 *
 * 関数の詳細:
 * - この関数は、Firebase Storageへのアップロード中に進捗状況を監視します。
 * - `state_changed`イベントリスナーを使用して、アップロードの状態（進行中、停止中など）を追跡し、進捗率をコンソールに出力します。
 * - アップロード完了後、ファイルのダウンロードURLが取得され、Promiseが解決されます。
 * - エラーが発生した場合、特定のエラーコードに基づいて処理され、エラー情報がコンソールに出力されます。
 */
var uploadFile = exports.uploadFile = function uploadFile(file, path, metadata) {
  /* eslint-disable */
  return new Promise(function (resolve, reject) {
    // Upload file and metadata to the object 'images/mountains.jpg'
    var storageRef = ref(storage, path);
    var uploadTask = uploadBytesResumable(storageRef, file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on("state_changed", function (snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      console.info("[firebase-v2.js - uploadFile] Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.info("[firebase-v2.js - uploadFile] Upload is paused");
          break;
        case "running":
          console.info("[firebase-v2.js - uploadFile] Upload is running");
          break;
      }
    }, function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          console.error("[firebase-v2.js - uploadFile] ユーザーにこの操作の権限がありません。");
          break;
        case "storage/canceled":
          console.error("[firebase-v2.js - uploadFile] ユーザーがアップロードをキャンセルしました。");
          break;
        case "storage/unknown":
          console.error("[firebase-v2.js - uploadFile] 不明なエラーが発生しました。サーバーの応答を確認してください。");
          break;
        case "storage/object-not-found":
          console.error("[firebase-v2.js - uploadFile] 指定されたオブジェクトが見つかりませんでした。");
          break;
        case "storage/bucket-not-found":
          console.error("[firebase-v2.js - uploadFile] Firebase Storage バケットが見つかりませんでした。");
          break;
        case "storage/project-not-found":
          console.error("[firebase-v2.js - uploadFile] Firebase プロジェクトが見つかりませんでした。");
          break;
        case "storage/quota-exceeded":
          console.error("[firebase-v2.js - uploadFile] 割り当てを超えています。容量を増やすか、不要なファイルを削除してください。");
          break;
        case "storage/unauthenticated":
          console.error("[firebase-v2.js - uploadFile] ユーザーが認証されていません。再ログインが必要です。");
          break;
        case "storage/retry-limit-exceeded":
          console.error("[firebase-v2.js - uploadFile] 操作の再試行が上限に達しました。後でもう一度試してください。");
          break;
        case "storage/invalid-checksum":
          console.error("[firebase-v2.js - uploadFile] ファイルのチェックサムが無効です。アップロードが損なわれました。");
          break;
        case "storage/invalid-event-name":
          console.error("[firebase-v2.js - uploadFile] 無効なイベント名が指定されました。正しいイベント名を指定してください。");
          break;
        case "storage/invalid-url":
          console.error("[firebase-v2.js - uploadFile] 指定されたURLが無効です。URLを確認してください。");
          break;
        case "storage/invalid-argument":
          console.error("[firebase-v2.js - uploadFile] 無効な引数が指定されました。引数を確認してください。");
          break;
        case "storage/no-default-bucket":
          console.error("[firebase-v2.js - uploadFile] デフォルトのバケットが設定されていません。設定を確認してください。");
          break;
        case "storage/cannot-slice-blob":
          console.error("[firebase-v2.js - uploadFile] Blobの分割に失敗しました。ファイルを確認してください。");
          break;
        case "storage/server-file-wrong-size":
          console.error("[firebase-v2.js - uploadFile] サーバー上のファイルサイズが一致しません。");
          break;
        default:
          console.error("[firebase-v2.js - uploadFile] 未知のエラーが発生しました。", error);
          break;
      }
      reject(error);
    }, function () {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
        console.log("[firebase-v2.js - uploadFile] File available at", downloadURL);
        resolve(downloadURL);
      });
    });
  });
  /* eslint-enable */
};

/**
 * Firebase StorageからファイルのダウンロードURLを取得します。
 *
 * この関数は、指定されたパスのファイルに対するダウンロードURLを取得します。
 * ダウンロードURLを使用することで、ファイルをダウンロードしたり、外部に共有することができます。
 *
 * @param {string} path - ダウンロードしたいファイルのFirebase Storage内のパス。
 * 例: "images/mountains.jpg"
 *
 * @returns {Promise<string>} - ダウンロードURLを解決するPromise。
 * 成功時にはファイルのダウンロードURLが返され、エラー時にはエラーメッセージが出力されます。
 *
 * 使用例:
 * ```
 * getFileDownloadURL('uploads/myImage.jpg')
 *   .then(downloadURL => {
 *     console.log('Download URL:', downloadURL);
 *   })
 *   .catch(error => {
 *     console.error('Error getting download URL:', error);
 *   });
 * ```
 *
 * エラーハンドリング:
 * - この関数は、Firebase Storageの特定のエラーコードに基づいて適切なエラーメッセージを出力します。
 * - 未知のエラーが発生した場合でも、エラー情報をコンソールに出力します。
 */
var getFileDownloadURL = exports.getFileDownloadURL = function getFileDownloadURL(path) {
  /* eslint-disable */
  return new Promise(function (resolve, reject) {
    var storageRef = ref(storage, path);
    getDownloadURL(storageRef).then(function (downloadURL) {
      resolve(downloadURL);
    })["catch"](function (error) {
      // エラーハンドリング: Firebase Storageのエラーコードに基づいてエラーメッセージを出力
      switch (error.code) {
        case "storage/object-not-found":
          console.error("[firebase-v2.js - getFileDownloadURL] 指定されたオブジェクトが見つかりません。");
          break;
        case "storage/unauthorized":
          console.error("[firebase-v2.js - getFileDownloadURL] ユーザーにこの操作の権限がありません。");
          break;
        case "storage/canceled":
          console.error("[firebase-v2.js - getFileDownloadURL] ユーザーが操作をキャンセルしました。");
          break;
        case "storage/unknown":
          console.error("[firebase-v2.js - getFileDownloadURL] 不明なエラーが発生しました。サーバーの応答を確認してください。");
          break;
        case "storage/bucket-not-found":
          console.error("[firebase-v2.js - getFileDownloadURL] Firebase Storage バケットが見つかりませんでした。");
          break;
        case "storage/project-not-found":
          console.error("[firebase-v2.js - getFileDownloadURL] Firebase プロジェクトが見つかりませんでした。");
          break;
        case "storage/quota-exceeded":
          console.error("[firebase-v2.js - getFileDownloadURL] 割り当てを超えています。容量を増やすか、不要なファイルを削除してください。");
          break;
        case "storage/unauthenticated":
          console.error("[firebase-v2.js - getFileDownloadURL] ユーザーが認証されていません。再ログインが必要です。");
          break;
        case "storage/retry-limit-exceeded":
          console.error("[firebase-v2.js - getFileDownloadURL] 操作の再試行が上限に達しました。後でもう一度試してください。");
          break;
        case "storage/invalid-checksum":
          console.error("[firebase-v2.js - getFileDownloadURL] ファイルのチェックサムが無効です。ダウンロードが損なわれました。");
          break;
        case "storage/invalid-url":
          console.error("[firebase-v2.js - getFileDownloadURL] 指定されたURLが無効です。URLを確認してください。");
          break;
        case "storage/no-default-bucket":
          console.error("[firebase-v2.js - getFileDownloadURL] デフォルトのバケットが設定されていません。設定を確認してください。");
          break;
        default:
          console.error("[firebase-v2.js - getFileDownloadURL] 未知のエラーが発生しました。", error);
          break;
      }
      reject(error);
    });
  });
  /* eslint-enable */
};