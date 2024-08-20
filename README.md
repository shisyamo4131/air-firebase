# air-firemodel

`air-firemodel` は、Firebase Firestore データベースでのドキュメント管理を簡素化するための JavaScript クラスライブラリです。このライブラリは、Nuxt.js プロジェクトとシームレスに統合されるように設計されています。

## 特徴

- Firestore ドキュメントの CRUD 操作（作成、読み取り、更新、削除）を簡単に管理。
- Nuxt.js プロジェクトと統合された環境変数管理。
- ドキュメントの論理削除（アーカイブコレクションへの移動）に対応。
- Firestore クエリの実行と結果の取得を簡素化。

## インストール

このライブラリをプロジェクトにインストールするには、以下のコマンドを実行します。

```bash
npm install air-firemodel
```

## 環境変数の設定

air-firemodel を使用するには、nuxt.config.js に環境変数を設定する必要があります。以下はその例です：

```
export default {
  env: {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    DATABASE_URL: process.env.DATABASE_URL,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },
  // その他の設定
}
```

## 使用方法

air-firemodel を使用して、Firestore ドキュメントの操作を行います。以下に簡単な使用例を示します。

### モデルの作成

まず、FireModel クラスを継承して、新しいデータモデルを作成します。

```
import FireModel from 'air-firemodel';

class TestModel extends FireModel {
  constructor(data = {}) {
    super(data, "TestCollection");
  }
}
```

### インスタンスの作成

モデルのインスタンスを作成し、FireModel のメソッドを使用してデータを操作します。

```
const testInstance = new TestModel({ name: "Test Data" });

// ドキュメントを作成
testInstance.create().then((docRef) => {
  console.log("Document created with ID:", docRef.id);
});

// ドキュメントを読み取る
testInstance.fetch(docId).then(() => {
  console.log(testInstance);
});

// ドキュメントを更新
testInstance.name = "Updated Test Data";
testInstance.update().then((docRef) => {
  console.log("Document updated:", docRef.id);
});

// ドキュメントを削除
testInstance.delete().then(() => {
  console.log("Document deleted");
});
```

### 論理削除と復元

air-firemodel は、ドキュメントの論理削除をサポートしています。削除されたドキュメントは \_archive コレクションに移動され、後で復元することが可能です。

```
// ドキュメントの論理削除
testInstance.delete().then(() => {
  console.log("Document logically deleted");
});

// 論理削除されたドキュメントを復元
testInstance.restore(docId).then(() => {
  console.log("Document restored");
});
```

### ライセンス

このプロジェクトは MIT ライセンス のもとで公開されています。
