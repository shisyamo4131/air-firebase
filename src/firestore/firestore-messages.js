/**
 * services/firebase/firestoreに関わるメッセージヘルパーです。
 *
 * @author shisyamo4131
 * @version 1.0.0
 *
 * @updates
 * - version 1.1.0 - 2024-08-23 - deleteAll()のメッセージを追加
 * - version 1.0.0 - 2024-08-18 - 初版作成
 */
const messages = {
  CLASS_PROP_MUST_BE_OBJECT:
    "'classProps' のプロパティ '%s' はオブジェクトである必要があります。",
  CLASS_PROP_REQUIRES_KEY:
    "'classProps' のプロパティ '%s' に '%s' が必要です。",
  CLASS_PROP_TYPE_INVALID:
    "'classProps' のプロパティ '%s' の 'type' は String, Number, Boolean, Object, Array, Function のいずれかである必要があります。",
  CLASS_PROP_REQUIRED_INVALID:
    "'classProps' のプロパティ '%s' の 'required' は Boolean である必要があります。",
  CLASS_PROPS_MUST_BE_OBJECT:
    "'classProps' プロパティはオブジェクトである必要があります。",
  COULD_NOT_DELETE_CHILD_EXIST:
    "関連するドキュメントが%sコレクションに存在するために削除できません。",
  CREATE_CALLED: "create()が呼び出されました。ドキュメントIDは%sです。",
  CREATE_CALLED_NO_DOCID:
    "create()が呼び出されました。ドキュメントIDは指定されていません。",
  CREATE_DOC_SUCCESS:
    "ドキュメントが正常に作成されました。ドキュメントIDは%sです。",
  DELETE_ALL_CALLED: "deleteAll()が呼び出されました。",
  DELETE_ALL_INVALID_BATCH_SIZE: "batchSize は正の数で指定してください。",
  DELETE_ALL_INVALID_PAUSE_DURATION:
    "pauseDuration は 0 以上の数で指定してください。",
  DELETE_CALLED: "delete()が呼び出されました。ドキュメントIDは%sです。",
  DELETE_DOC_SUCCESS:
    "ドキュメントが正常に削除されました。ドキュメントIDは%sです。",
  DELETE_REQUIRES_DOCID:
    "delete()にはdocIdプロパティが必要です。まずfetch()を呼び出してください。",
  FETCH_CALLED: "fetch()が呼び出されました。ドキュメントIDは%sです。",
  FETCH_CALLED_NO_DOCID:
    "fetch()が呼び出されましたがドキュメントIDが指定されていません。",
  FETCH_DOC_CALLED: "fetchDoc()が呼び出されました。ドキュメントIDは%sです。",
  FETCH_DOC_CALLED_NO_DOCID:
    "fetchDoc()が呼び出されましたがドキュメントIDが指定されていません。",
  FETCH_DOC_NO_DOCUMENT:
    "ドキュメントID: %s に該当するドキュメントが存在しませんでした。",
  FETCH_DOC_SUCCESS: "ドキュメントの取得に成功しました。",
  FETCH_DOCS_CALLED: "%sコレクションに対してfetchDocs()が呼び出されました。",
  FETCH_DOCS_SUCCESS: "%s件のドキュメントを正常に取得しました。",
  FETCH_NO_DOCUMENT:
    "ドキュメントID: %s に該当するドキュメントが存在しませんでした。",
  FETCH_SUCCESS:
    "ドキュメントの読み込みに成功し、取得したデータをモデルにセットしました。",
  HAS_MANY_INVALID_TYPE:
    "hasManyプロパティの'type'プロパティには'collection'または'subcollection'のみ使用できます。コレクション: %s, インデックス: %s, 値: %s",
  HAS_MANY_INVALID_KEY:
    "hasManyプロパティの要素に無効なプロパティ'%s'が含まれています。コレクション: %s, インデックス: %s, 値: %s",
  HAS_MANY_REQUIRES_KEY:
    "hasManyプロパティの要素には'%s'プロパティが必要です。コレクション: %s, インデックス: %s, 値: %s",
  HAS_MANY_MUST_BE_OBJECT:
    "hasManyプロパティの要素はオブジェクトである必要があります。コレクション: %s, インデックス: %s, 値: %s",
  HAS_MANY_NOT_ARRAY: "hasManyプロパティは配列である必要があります。",
  INVALID_AUTONUMBER_STATUS: "自動採番設定が無効になっています。",
  LISTENER_HAS_SET:
    "リアルタイムリスナーが既に設定されていました。解除します。",
  MISSING_AUTONUMBER: "自動採番設定が存在しませんでした。",
  NO_COLLECTION_PATH: "サブクラスに'collectionPath'が定義されていません。\n%s",
  NO_DOCUMENT_TO_DELETE:
    "削除対象のドキュメントが存在しませんでした。ドキュメントIDは%sです。",
  NO_DOCUMENT_TO_RESTORE:
    "%sコレクションに復元対象のドキュメントが存在しませんでした。ドキュメントIDは%sです。",
  NO_MORE_DOCUMENT:
    "自動採番の最大値に達しています。これ以上ドキュメントを追加できません。",
  RESTORE_CALLED: "restore()が呼び出されました。ドキュメントIDは%sです。",
  RESTORE_CALLED_NO_DOCID:
    "restore()が呼び出されましたがドキュメントIDが指定されていません。",
  RESTORE_SUCCESS: "ドキュメントの復元が完了しました。ドキュメントIDは%sです。",
  SUBSCRIBE_CALLED: "subscribe()が呼び出されました。ドキュメントIDは%sです。",
  SUBSCRIBE_CALLED_NO_DOCID:
    "subscribe()が呼び出されましたがドキュメントIDが指定されていません。",
  SUBSCRIBE_NO_DOCUMENT:
    "subscribe()が呼び出されましたが、ドキュメントが存在しません。ドキュメントIDは%sです。",
  SUBSCRIBE_DOCS_CALLED: "subscribeDocs()が呼び出されました。",
  SUBSCRIBE_DOCS_SUCCESS: "リアルタイムリスナーがセットされました。",
  SUBSCRIBE_SUCCESS:
    "ドキュメントへのリアルタイムリスナーがセットされました。ドキュメントIDは%sです。",
  SUBSCRIBE_GROUP_CALLED:
    "%sコレクションへのsubscriptionGroup()が呼び出されました。",
  UNSUBSCRIBE_CALLED: "unsubscribe()が呼び出されました。",
  UNSUBSCRIBE_SUCCESS: "リアルタイムリスナーが正常に解除されました。",
  UPDATE_CALLED: "update()が呼び出されました。ドキュメントIDは%sです。",
  UPDATE_DOC_SUCCESS:
    "ドキュメントが正常に更新されました。ドキュメントIDは%sです。",
  UPDATE_REQUIRES_DOCID:
    "update()にはdocIdプロパティが必要です。まずfetch()を呼び出してください。",
  USE_AUTONUMBER_MUST_BE_BOOLEAN:
    "useAutonumberプロパティはブール値である必要があります。コレクション: %s, 値: %s",
  LOGICAL_DELETE_MUST_BE_BOOLEAN:
    "logicalDeleteプロパティはブール値である必要があります。コレクション: %s, 値: %s",
  TOKEN_FIELDS_MUST_BE_ARRAY:
    "'tokenFields' プロパティは配列である必要があります。",
  TOKEN_FIELD_MUST_BE_STRING:
    "'tokenFields' プロパティの要素は文字列である必要があります。インデックス: %s, 値: %s",
  PROP_VALUE_REQUIRED: "%s は必須です。",
  PROP_VALUE_INVALID: "%s の値が無効です: %s",
};

export const getMessage = (sender, key, ...params) => {
  const template = messages[key];
  return `[${sender}] ${template.replace(/%s/g, () => params.shift())}`;
};
