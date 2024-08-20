/**
 * services/firebase/firestoreに関わるメッセージヘルパーです。
 *
 * @author shisyamo4131
 * @version 1.0.0
 *
 * @updates
 * - version 1.0.0 - 2024-08-18 - 初版作成
 */
const messages = {
  COULD_NOT_DELETE_CHILD_EXIST:
    '関連するドキュメントが%sコレクションに存在するために削除できません。',
  CREATE_CALLED: 'create()が呼び出されました。ドキュメントIDは%sです。',
  CREATE_CALLED_NO_DOCID:
    'create()が呼び出されました。ドキュメントIDは指定されていません。',
  CREATE_DOC_SUCCESS:
    '%sコレクションにドキュメントが正常に作成されました。ドキュメントIDは%sです。',
  DELETE_CALLED: 'delete()が呼び出されました。ドキュメントIDは%sです。',
  DELETE_DOC_SUCCESS:
    '%sコレクションからドキュメントが正常に削除されました。ドキュメントIDは%sです。',
  DELETE_REQUIRES_DOCID:
    'delete()にはdocIdプロパティが必要です。まずfetch()を呼び出してください。',
  FETCH_CALLED:
    '%sコレクションに対してfetch()が呼び出されました。ドキュメントIDは%sです。',
  FETCH_CALLED_NO_DOCID:
    'fetch()が呼び出されましたがドキュメントIDが指定されていません。',
  FETCH_DOC_CALLED:
    '%sコレクションに対してfetchDoc()が呼び出されました。ドキュメントIDは%sです。',
  FETCH_DOC_CALLED_NO_DOCID:
    'fetchDoc()が呼び出されましたがドキュメントIDが指定されていません。',
  FETCH_DOC_NO_DOCUMENT:
    'ドキュメントID: %s に該当するドキュメントが存在しませんでした。',
  FETCH_DOC_SUCCESS: 'ドキュメントの取得に成功しました。',
  FETCH_DOCS_CALLED: '%sコレクションに対してfetchDocs()が呼び出されました。',
  FETCH_DOCS_SUCCESS: '%s件のドキュメントを正常に取得しました。',
  FETCH_NO_DOCUMENT:
    'ドキュメントID: %s に該当するドキュメントが存在しませんでした。',
  FETCH_SUCCESS:
    'ドキュメントの読み込みに成功し、取得したデータをモデルにセットしました。',
  HAS_MANY_CONDITION_INVALID:
    "%sコレクションのコンストラクタでエラーが発生しました。hasManyプロパティが正しく設定されていません。conditionプロパティの値は'=='または'array-contains'のみ可能です。",
  HAS_MANY_INVALID:
    '%sコレクションのコンストラクタでエラーが発生しました。hasManyプロパティが正しく設定されていません。collection, field, condition, typeが必要です。',
  HAS_MANY_NOT_ARRAY:
    '%sコレクションのコンストラクタでエラーが発生しました。hasManyプロパティは配列である必要があります。',
  INVALID_AUTONUMBER_STATUS:
    '%sコレクションの自動採番設定が無効になっています。',
  LISTENER_HAS_SET:
    '%sコレクションへのリアルタイムリスナーが既に設定されていました。解除します。',
  MISSING_AUTONUMBER: '%sコレクションの自動採番設定が存在しませんでした。',
  NO_DOCUMENT_TO_DELETE:
    '%sコレクションに削除対象のドキュメントが存在しませんでした。ドキュメントIDは%sです。',
  NO_DOCUMENT_TO_RESTORE:
    '%sコレクションに復元対象のドキュメントが存在しませんでした。ドキュメントIDは%sです。',
  NO_MORE_DOCUMENT: 'これ以上%sコレクションにドキュメントを追加できません。',
  RESTORE_CALLED: 'restore()が呼び出されました。ドキュメントIDは%sです。',
  RESTORE_CALLED_NO_DOCID:
    'restore()が呼び出されましたがドキュメントIDが指定されていません。',
  RESTORE_SUCCESS:
    '%sコレクションへのドキュメントの復元が完了しました。ドキュメントIDは%sです。',
  SUBSCRIBE_CALLED:
    '%sコレクションドキュメントへのsubscribe()が呼び出されました。ドキュメントIDは%sです。',
  SUBSCRIBE_CALLED_NO_DOCID:
    'subscribe()が呼び出されましたがドキュメントIDが指定されていません。',
  SUBSCRIBE_NO_DOCUMENT:
    'subscribe()が呼び出されましたが、ドキュメントが存在しません。ドキュメントIDは%sです。',
  SUBSCRIBE_DOCS_CALLED:
    '%sコレクションへのsubscribeDocs()が呼び出されました。',
  SUBSCRIBE_DOCS_SUCCESS:
    '%sコレクションへのリアルタイムリスナーがセットされました。',
  SUBSCRIBE_SUCCESS:
    '%sコレクションドキュメントへのリアルタイムリスナーがセットされました。ドキュメントIDは%sです。',
  SUBSCRIBE_GROUP_CALLED:
    '%sコレクションへのsubscriptionGroup()が呼び出されました。',
  UNSUBSCRIBE_CALLED: 'unsubscribe()が呼び出されました。',
  UNSUBSCRIBE_SUCCESS:
    '%sコレクションに対するリアルタイムリスナーが正常に解除されました。',
  UPDATE_CALLED: 'update()が呼び出されました。ドキュメントIDは%sです。',
  UPDATE_DOC_SUCCESS:
    '%sコレクションにドキュメントが正常に更新されました。ドキュメントIDは%sです。',
  UPDATE_REQUIRES_DOCID:
    'update()にはdocIdプロパティが必要です。まずfetch()を呼び出してください。',
}

export const getMessage = (sender, key, ...params) => {
  const template = messages[key]
  return `[${sender}] ${template.replace(/%s/g, () => params.shift())}`
}
