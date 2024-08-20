import { auth } from "./src/firebase.init.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// テスト用ユーザーの情報を設定
const testEmail = "maruyama@yuisin.net";
const testPassword = "sevenstar";

// ログインテスト
async function testLogin() {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      testEmail,
      testPassword
    );
    console.log("ログイン成功:", userCredential.user);

    // ログアウトテスト
    await testLogout();
  } catch (error) {
    console.error("ログインエラー:", error);
  }
}

// ログアウトテスト
async function testLogout() {
  try {
    await signOut(auth);
    console.log("ログアウト成功");
  } catch (error) {
    console.error("ログアウトエラー:", error);
  }
}

// テストの実行
testLogin();
