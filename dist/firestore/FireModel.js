"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firestore = require("firebase/firestore");
var _firestoreMessages = require("./firestore-messages.js");
var _firebaseInit = require("../firebase.init.js");
var _excluded = ["_beforeData"];
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
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
 * - サブクラスで`customClassMap`を使用することにより、initialize()でカスタムクラスを使用しているプロパティの保持が可能です。
 * - ドキュメントの削除時、従属ドキュメントの存在をチェックし、存在する場合はエラーをスローします。
 *
 * 注意事項:
 * - 削除処理がトランザクションであった場合、従属ドキュメントの存在をチェックしません。
 * - サブクラス側でhasChild()を使ってチェックする必要があります。
 * - また、beforeDelete()、afterDelete()は実行されません。
 * - 論理削除とトランザクションを組み合わせることはできません。
 *
 * 使用方法:
 * このクラスは直接使用せず、特定のコレクションに対応するサブクラスを作成して使用します。
 * - `collectionPath`でコレクション名を定義します。
 * - `logicalDelete`でドキュメントの削除方法（物理・論理）を定義します。
 * - `classProps`でサブクラスに定義されるべきプロパティを定義します。
 * - 別のコレクションに自身に従属するドキュメントが存在する場合、`hasMany`でその内容を定義します。
 * サブクラスで独自のフィールドやメソッドを追加することで、特定のビジネスロジックに対応可能です。
 *
 * コンストラクタの使用例:
 * ```javascript
 * class Order extends FireModel {
 *
 *   // Firestoreでのコレクション名を定義
 *   static collectionPath = 'Orders';
 *   static logicalDelete = true;
 *   static classProps = {
 *     code: { type: String, default: '', required: false },
 *     name: { type: String, default: '', required: true },
 *     size: { type: String, default: '', required: false },
 *     amount: { type: Number, default: 0, required: true }
 *   }
 *   static hasMany = [
 *     { collection: 'orderItems', field: 'orderId', condition: '==', type: 'collection' }
 *   ]
 *
 *   constructor(data = {}) {
 *     super(data);
 *     ...
 *   }
 * }
 * ```
 *
 * classProps:
 * - 定義された内容で`initialize` でメソッドにて各種プロパティが定義、初期化されます。
 * - `beforeCreate`、`beforeUpdate` で定義されたプロパティの入力チェックを行います。
 * - 自動採番で値がセットされるプロパティには`requiredByClass`をtrueにしないでください。
 *   #validatePropertiesは自動採番が行われる前に実行されるため、エラーになります。
 *
 * tokenMap:
 * - Firestoreの脆弱なクエリを補完するための、Ngram検索を行うためのフィールドです。
 * - Firestoreのデータのkeyに使用することができないため、サロゲートペア文字列は除外されます。
 *
 * _beforeData:
 * - インスタンスに読み込まれたデータの編集前の状態を提供するプロパティです。
 * - initialize メソッド使用すると自動的に付与され、toObject によって削除されます。
 *
 * createメソッド:
 * ‐ ドキュメントを作成するメソッドです。
 * - トランザクション処理を実行してドキュメントを作成します。
 * - サブクラス独自のトランザクション処理を行う場合、読み取り処理を先に実行し、`transaction` にトランザクションオブジェクトを与え、書き込みの処理は `callBack` を利用します。
 *
 * updateメソッド:
 * ‐ ドキュメントを更新するメソッドです。
 * - トランザクション処理を実行してドキュメントを更新します。
 * - サブクラス独自のトランザクション処理を行う場合、読み取り処理を先に実行し、`transaction` にトランザクションオブジェクトを与え、書き込みの処理は `callBack` を利用します。
 *
 * deleteメソッド:
 * - ドキュメントを削除するメソッドです。
 * - トランザクション処理を実行してドキュメントを削除します。
 * - `transaction` 引数を使ったコールバックを利用可能で、サブクラス独自のトランザクション処理を行うことができます。
 * - `logicalDelete` が `true` の場合、ドキュメントは削除されず、`${this.#collectionPath}-archive` コレクションに移動されます。
 *
 * 注意:
 * - このクラスは、FirestoreのドキュメントIDや作成日時、更新日時、ユーザーIDなどのメタデータを自動管理します。
 * - コレクション間の依存関係（hasMany）は、このクラスを通じて管理され、削除時の整合性を保証します。
 * - 論理削除を有効にした場合、削除されたドキュメントは自動的にアーカイブコレクションに移動されます。
 * - Firestoreのリアルタイムリスナーを活用することで、ドキュメントの変更をリアルタイムで監視し、自動的にデータモデルに反映します。
 *
 * @author shisyamo4131
 * @version 2.1.0
 * @see https://firebase.google.com/docs/firestore
 * @updates
 * - version 2.1.0 - 2025-02-01 - _beforeData プロパティを追加。インスタンスのプロパティについて編集前の状態を取得することが可能に。
 * ‐ version 2.0.0 - 2024-09-xx - [破壊的]`collectionPath`の設定をコンストラクタの引数ではなく、サブコレクションで定義された変数から行うように改良。
 *                              - [破壊的]`hasMany`の設定をコンストラクタの引数ではなく、サブコレクションで定義された変数から行うように改良。
 *                              - [破壊的]`tokenFields`の設定をコンストラクタの引数ではなく、サブコレクションで定義された変数から行うように改良。
 *                              - [破壊的]`logicalDelete`の設定をコンストラクタの引数ではなく、サブコレクションで定義された変数から行うように改良。
 *                              - [破壊的]`useAutonumber`の設定をサブコレクションで定義された変数から行うように改良。
 *                              - [破壊的]`classProps`の設定をコンストラクタの引数ではなく、サブコレクションで定義された変数から行うように改良。
 *                              - [破壊的]`validateProperties` メソッドをプライベートに変更。
 *                              - [破壊的]`create` メソッドのトランザクションに関する仕様を変更。
 *                              - [破壊的]`update` メソッドのトランザクションに関する仕様を変更。
 *                              - [破壊的]`delete` メソッドのトランザクションに関する仕様を変更。
 * - version 1.8.0 - 2024-09-23 - トランザクションによる削除処理専用としてdeleteAsTransactionを実装。
 *                              - delete()で、transactionが設定されている場合はdeleteAsTransactionを呼び出すように。
 *                              - サブクラス側で従属ドキュメントの存在をチェックできるように、hasChild()を外部に公開。
 * - version 1.7.1 - 2024-09-19 - initialize()でitemのcreateAt、updateAtを編集する際、itemがnullだとエラーになるのを修正。
 *                              - initialize()でcustomClassMapによるカスタムクラスのマッピング機能を実装。
 *                              - clone()がカスタムクラスも適用できるようにするなど大幅に改善。
 *                              - toObject()でプロパティがカスタムクラスであった場合に、当該クラスのtoObject()を呼び出すように機能を追加。
 *                              - fromFirestore()がカスタムクラスも適用できるように改善。
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
var _collectionPath = /*#__PURE__*/new WeakMap();
var _useAutonumber = /*#__PURE__*/new WeakMap();
var _logicalDelete = /*#__PURE__*/new WeakMap();
var _classProps = /*#__PURE__*/new WeakMap();
var _hasMany = /*#__PURE__*/new WeakMap();
var _tokenFields = /*#__PURE__*/new WeakMap();
var _listener = /*#__PURE__*/new WeakMap();
var _items = /*#__PURE__*/new WeakMap();
var _FireModel_brand = /*#__PURE__*/new WeakSet();
var FireModel = exports["default"] = /*#__PURE__*/function () {
  /**
   * FireModelクラスのインスタンスを初期化します。
   * このクラスはFirestoreコレクションのCRUD操作をサポートし、
   * 依存関係のあるコレクションの管理や論理削除の処理も可能です。
   *
   * @param {Object} item - 初期化するデータモデルのプロパティを含むオブジェクト
   */
  function FireModel() {
    var _item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, FireModel);
    /****************************************************************************
     * サブクラスに定義された `classProps` の値を、自身の `#classProps` にセットします。
     * - `classProps` が未定義の場合は、空のオブジェクトをセットします。
     * - 各プロパティはオブジェクトであり、必須のキーとして `type`、`default`、`required` を持ちます。
     * - `type` は `String`, `Number`, `Boolean`, `Object`, `Array`, `Function` のいずれかである必要があります。
     * - `required` は `Boolean` 型でなければなりません。
     *
     * @throws {Error} - `classProps` の形式が正しくない場合、エラーをスローします。
     * @returns {void}
     ****************************************************************************/
    _classPrivateMethodInitSpec(this, _FireModel_brand);
    // Firestoreのコレクション名です。
    _classPrivateFieldInitSpec(this, _collectionPath, "");
    // ドキュメントの作成時に自動採番を採用するかどうかを表すフラグです。
    _classPrivateFieldInitSpec(this, _useAutonumber, false);
    // ドキュメントの削除処理を論理的に行うかどうかのフラグです。
    _classPrivateFieldInitSpec(this, _logicalDelete, false);
    // クラスに適用されるべきプロパティの定義です。
    _classPrivateFieldInitSpec(this, _classProps, {});
    /**
     * ドキュメントに依存するコレクション情報を格納するプロパティです。
     * 各要素は以下の構造を持つオブジェクトです:
     * - collection: 文字列型で、依存するドキュメントが存在するコレクションのパスを指定します。
     * - field: 文字列型で、RDBMSでいうところの外部キーに相当するフィールドを指定します。
     * - condition: 文字列型で、Firestoreのクエリ条件を指定します（例: '==', 'array-contains' など）。
     * - type: 文字列型で、'collection' または 'subcollection' のどちらかを指定します。
     *          'collection' は通常のコレクション、'subcollection' はサブコレクションを意味します。
     */
    _classPrivateFieldInitSpec(this, _hasMany, []);
    // tokenMapに反映させるフィールドのリストです。
    _classPrivateFieldInitSpec(this, _tokenFields, []);
    // リアルタイムリスナーのデタッチ関数用の変数です。
    _classPrivateFieldInitSpec(this, _listener, null);
    // subscribeDocs関数のリアルタイムリスナーで取得したドキュメントデータ用の配列です。
    _classPrivateFieldInitSpec(this, _items, []);
    _assertClassBrand(_FireModel_brand, this, _loadCollectionPath).call(this);
    _assertClassBrand(_FireModel_brand, this, _loadClassProps).call(this);
    _assertClassBrand(_FireModel_brand, this, _loadUseAutonumber).call(this);
    _assertClassBrand(_FireModel_brand, this, _loadLogicalDelete).call(this);
    _assertClassBrand(_FireModel_brand, this, _loadHasMany).call(this);
    _assertClassBrand(_FireModel_brand, this, _loadTokenFields).call(this);
    this.initialize(_item);
    Object.defineProperties(this, {
      tokenMap: {
        enumerable: true,
        configurable: true,
        get: _assertClassBrand(_FireModel_brand, this, _generateTokenMap).bind(this),
        set: _assertClassBrand(_FireModel_brand, this, _setTokenMap).bind(this)
      }
    });
  }

  /****************************************************************************
   * 引数にはエラー時に出力されるコードサンプルを文字列で受け取ります。
   * 各行のインデントを調整して返します。
   * @returns {string} インデントが調整されたコードサンプル（文字列）
   ****************************************************************************/
  return _createClass(FireModel, [{
    key: "removeIndentation",
    value: function removeIndentation(str) {
      // 最初と最後の余分な改行やスペースを削除
      var trimmedStr = str.trim();

      // 文字列を行ごとに分割
      var lines = ["--"].concat(_toConsumableArray(trimmedStr.split("\n")), ["--"]);

      // インデントがある行のみを対象に最小のインデント長を計算
      var indentLength = lines.filter(function (line) {
        return line.trim().length > 0 && line.match(/^\s+/);
      }) // 空行とインデントがない行を除外
      .reduce(function (min, line) {
        var match = line.match(/^(\s+)/); // 行頭のスペースを取得
        return match ? Math.min(min, match[1].length) : min;
      }, Infinity);

      // インデントを削除して再構成
      return lines.map(function (line) {
        // 空行ならそのまま返す。インデントがある行のみインデントを削除
        return line.trim().length === 0 || !line.match(/^\s+/) ? line : line.slice(indentLength);
      }).join("\n");
    }
  }, {
    key: "clone",
    value:
    /****************************************************************************
     * 当該インスタンスを複製したインスタンスを返します。
     * - vueコンポーネントにおいてインスタンスを親に返す場合など、参照渡しを回避するのに使用します。
     * @returns {this.constructor} - 複製された新しいインスタンス
     ****************************************************************************/
    function clone() {
      return new this.constructor(this);
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
  }, {
    key: "initialize",
    value:
    /**
     * クラスインスタンスの各プロパティを初期化するためのメソッドです。
     * - コンストラクタから呼び出されるほか、独自に呼び出すことで初期化することができます。
     * - `createAt` と `updateAt` は、Dateオブジェクトに変換されます。
     * - customClassMap で定義されているプロパティは各々、指定されたカスタムクラスインスタンスに変換されます。
     * - その他のオブジェクトプロパティはディープコピーされて初期化されます。
     *
     * - この関数によってインスタンスが初期化された場合のみ、各種プロパティ編集前の状態を保有する
     *   _beforeData プロパティが提供されます。
     *
     * @refact 2025-02-01 - _beforeData を提供するように機能追加
     *
     * @param {Object} item - 初期化するデータモデルのプロパティを含むオブジェクト
     * @returns {void}
     */
    function initialize() {
      var _this = this,
        _item$createAt,
        _item$updateAt;
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      /**
       * classPropsに定義されているプロパティを初期化
       */
      Object.keys(_classPrivateFieldGet(_classProps, this)).forEach(function (key) {
        var propDefault = _classPrivateFieldGet(_classProps, _this)[key]["default"];
        _this[key] = typeof propDefault === "function" ? propDefault() : propDefault;
      });

      // itemがnullやundefinedであれば終了
      if (!item) return;
      this.docId = (item === null || item === void 0 ? void 0 : item.docId) || "";
      this.uid = (item === null || item === void 0 ? void 0 : item.uid) || "";

      /**
       * createAt、updateAtは型をチェックし、Dateオブジェクトに変換して初期化
       * FirestoreにDateオブジェクトを保存すると、Firestore timestampとして登録されるため、
       * これをtoDate()を使用してDateオブジェクトに変換します。
       */
      if ((item === null || item === void 0 ? void 0 : item.createAt) instanceof Date) {
        this.createAt = item.createAt;
      } else if (item !== null && item !== void 0 && (_item$createAt = item.createAt) !== null && _item$createAt !== void 0 && _item$createAt.toDate) {
        this.createAt = item.createAt.toDate();
      } else {
        this.createAt = null;
      }
      if ((item === null || item === void 0 ? void 0 : item.updateAt) instanceof Date) {
        this.updateAt = item.updateAt;
      } else if (item !== null && item !== void 0 && (_item$updateAt = item.updateAt) !== null && _item$updateAt !== void 0 && _item$updateAt.toDate) {
        this.updateAt = item.updateAt.toDate();
      } else {
        this.updateAt = null;
      }

      /**
       * サブクラスで定義されたcustomClassMapを取得
       * すべてのプロパティについて、`item` が持っていない場合にはデフォルトで初期化
       */
      var customClassMap = this.constructor.customClassMap || {};
      Object.keys(customClassMap).forEach(function (key) {
        if (!(key in item) && !Array.isArray(_this[key])) {
          // Firestoreのドキュメントにプロパティが存在せず、かつ現在の値が配列でない場合にのみ初期化
          _this[key] = new customClassMap[key]();
        }
      });

      /**
       * `item`が保有するすべてのプロパティについて、自身の同一名プロパティに値を複製します。
       * - オブジェクトの参照渡しを避けるためJSON.parse(JSON.stringify(item[key]))を使っていましたが、
       *   プロパティの値がカスタムクラスであった場合に、プレーンなオブジェクトに変換されていまっていました。
       * - サブクラスで`customClassMap`を用意し、プロパティにカスタムクラスが定義されている場合、
       *   当該クラスのインスタンスをセットするようにしました。
       */

      Object.keys(item).forEach(function (key) {
        if (key in _this && key !== "createAt" && key !== "updateAt") {
          var _item$key;
          // 配列の場合、配列の各要素にカスタムクラスを適用
          if (Array.isArray(item[key]) && customClassMap[key]) {
            _this[key] = item[key].map(function (element) {
              return new customClassMap[key](element);
            });
          }
          // カスタムクラスのマッピングがある場合、そのクラスで再初期化
          else if (customClassMap[key] && item[key] instanceof Object) {
            _this[key] = new customClassMap[key](item[key]);
          }
          // オブジェクト以外のプリミティブ型（文字列、数値、ブールなど）の場合
          else if (_typeof(item[key]) !== "object") {
            _this[key] = item[key];
          } else if ((_item$key = item[key]) !== null && _item$key !== void 0 && _item$key.toDate) {
            /**
             * 2024-10-12 修正
             * - 値が toDate を持っているようであれば Date オブジェクトに変換
             * - それ以外の場合はディープコピー
             */
            _this[key] = item[key].toDate();
          } else {
            _this[key] = JSON.parse(JSON.stringify(item[key]));
          }
        }
      });

      // 2025-02-01 追加
      // クラスインスタンスの各種プロパティについて編集前の状態を _beforeData プロパティとして保存
      this._beforeData = this.toObject();
    }

    /****************************************************************************
     * Firestore用のコンバーターを提供します。
     * - ドキュメントデータの保存および読み込み時に使用されます。
     *
     * @returns {Object} - Firestoreの`toFirestore`および`fromFirestore`メソッドを含むコンバーターオブジェクト
     ****************************************************************************/
  }, {
    key: "converter",
    value: function converter() {
      var _this2 = this;
      return {
        /**
         * インスタンスをFirestoreに保存する際の変換メソッドです。
         * @param {Object} instance - Firestoreに保存するクラスインスタンス
         * @returns {Object} - Firestoreに保存するためのオブジェクト形式
         */
        toFirestore: function toFirestore(instance) {
          return instance.toObject();
        },
        /**
         * Firestoreから読み込んだデータをクラスインスタンスに変換するメソッドです。
         * @param {Object} snapshot - Firestoreから取得したドキュメントスナップショット
         * @returns {Object} - クラスインスタンス
         */
        fromFirestore: function fromFirestore(snapshot) {
          return _this2.fromFirestore(snapshot);
        }
      };
    }

    /**
     * クラスインスタンスを純粋なオブジェクトに変換します。
     * - 継承先のクラスで定義されたプロパティも含めて出力します。
     * - `enumerable: true`のプロパティのみを出力します。
     * - カスタムクラスが`toObject`を持たない場合はそのまま出力します。
     * - 値がない場合は`null`を出力します。
     * - 配列の各要素がカスタムクラスの場合も対応します。
     * - カスタムクラスを持たないオブジェクトはディープコピーします。
     *
     * - initialize で追加された _beforeData プロパティは削除されます。
     *
     * @refact 2025-02-01 - initialize で追加された _beforeData プロパティを削除するように修正
     *
     * @returns {Object} - Firestoreに保存可能なオブジェクト形式
     */
  }, {
    key: "toObject",
    value: function toObject() {
      var _this3 = this;
      var obj = {};

      // プロトタイプチェーンをたどってプロパティを収集
      var currentObj = this;
      while (currentObj !== null) {
        Object.entries(Object.getOwnPropertyDescriptors(currentObj)).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            descriptor = _ref2[1];
          if (descriptor.enumerable) {
            var value = _this3[key];

            // カスタムクラスがtoObjectメソッドを持っている場合は再帰的に呼び出す
            if (value && typeof value.toObject === "function") {
              obj[key] = value.toObject();
            }
            // 配列の場合、各要素に対して再帰的にtoObjectを呼び出す
            else if (Array.isArray(value)) {
              obj[key] = value.map(function (item) {
                // カスタムクラスの処理
                if (item && typeof item.toObject === "function") {
                  return item.toObject();
                }
                // オブジェクトならディープコピー
                else if (item && _typeof(item) === "object") {
                  return JSON.parse(JSON.stringify(item));
                }
                // プリミティブ型はそのまま返す
                else {
                  return item;
                }
              });
            }
            // カスタムクラスがtoObjectを持っていない場合はそのまま値を設定
            else if (value !== undefined) {
              obj[key] = value;
            }
            // 値がnullまたはundefinedの場合はnullを設定
            else {
              obj[key] = null;
            }
          }
        });
        currentObj = Object.getPrototypeOf(currentObj);
      }

      // 2025-02-01 修正
      // initialize で追加された _beforeData プロパティを削除するように修正
      // return obj;
      var _beforeData = obj._beforeData,
        others = _objectWithoutProperties(obj, _excluded);
      return others;
    }

    /****************************************************************************
     * Firestoreから取得したデータをクラスインスタンスに変換します。
     * - カスタムクラスが定義されている場合、`customClassMap`を参照して適切なインスタンスを生成します。
     *
     * @param {Object} snapshot - Firestoreから取得したドキュメントスナップショット
     * @returns {Object} - クラスインスタンス
     ****************************************************************************/
  }, {
    key: "fromFirestore",
    value: function fromFirestore(snapshot) {
      var data = snapshot.data();

      // サブクラスで定義されたカスタムクラスのマッピング
      var customClassMap = this.constructor.customClassMap || {};

      // カスタムクラスの処理を行いつつ、データをインスタンスに初期化
      Object.keys(data).forEach(function (key) {
        // 配列の場合、各要素にカスタムクラスを適用
        if (Array.isArray(data[key]) && customClassMap[key]) {
          data[key] = data[key].map(function (item) {
            return new customClassMap[key](item);
          });
        }
        // カスタムクラスのインスタンスに変換
        else if (customClassMap[key]) {
          data[key] = new customClassMap[key](data[key]);
        }
      });

      // スーパークラスのインスタンス初期化を呼び出し、カスタムクラスを適用したデータを使用
      return new this.constructor(data, _classPrivateFieldGet(_collectionPath, this), _classPrivateFieldGet(_hasMany, this), _classPrivateFieldGet(_logicalDelete, this));
    }

    /****************************************************************************
     * ドキュメント作成前に実行されるメソッドです。
     * - `classProps`で定義されたプロパティについて、`#validateProperties()`でチェックを行います。
     * - コレクション単位で必要な処理がある場合にオーバーライドして処理を追加してください。
     * - サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     ****************************************************************************/
  }, {
    key: "beforeCreate",
    value: function beforeCreate() {
      var _this4 = this;
      return new Promise(function (resolve, reject) {
        try {
          _assertClassBrand(_FireModel_brand, _this4, _validateProperties).call(_this4);
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
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      return Promise.resolve();
    }

    /****************************************************************************
     * ドキュメント更新前に実行されるメソッドです。
     * - `classProps`で定義されたプロパティについて、`#validateProperties()`でチェックを行います。
     * - コレクション単位で必要な処理がある場合にオーバーライドして処理を追加してください。
     * - サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     ****************************************************************************/
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        try {
          _assertClassBrand(_FireModel_brand, _this5, _validateProperties).call(_this5);
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
  }, {
    key: "afterUpdate",
    value: function afterUpdate() {
      return Promise.resolve();
    }

    /****************************************************************************
     * ドキュメント削除前に実行されるメソッドです。
     * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
     * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     ****************************************************************************/
  }, {
    key: "beforeDelete",
    value: function beforeDelete() {
      return Promise.resolve();
    }

    /****************************************************************************
     * ドキュメント削除後に実行されるメソッドです。
     * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
     * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     ****************************************************************************/
  }, {
    key: "afterDelete",
    value: function afterDelete() {
      return Promise.resolve();
    }

    /****************************************************************************
     * Firestore にドキュメントを書き込みます。
     * - `docId` を指定することで、特定のドキュメントIDを使用して作成することが可能です。
     * - `useAutonumber` が true の場合、自動採番を利用します。デフォルトは true ですが、`#useAutonumber` が優先されます。
     * - `transaction` に Firestore のトランザクションオブジェクトを渡すことで、サブクラス側のトランザクション処理を継続します。
     * - `callBack` は、サブクラス側独自のトランザクション処理を実行するための引数です。
     *
     * @param {Object} [options={}] - オプション引数
     * @param {string|null} [options.docId=null] - 作成するドキュメントID。指定しない場合は自動生成されます。
     * @param {boolean} [options.useAutonumber=true] - 自動採番を行うかどうかです。`#useAutonumber` が優先されます。
     * @param {Object|null} [options.transaction=null] - Firestore のトランザクションオブジェクト。指定しない場合は自動トランザクションを使用します。
     * @param {function|null} [callBack=null] - サブクラス側でトランザクション処理を追加したい場合に指定するコールバック関数。トランザクションオブジェクトが渡されます。
     *
     * @returns {Promise<DocumentReference>} - 作成されたドキュメントの参照
     * @throws {Error} - ドキュメント作成中にエラーが発生した場合
     ****************************************************************************/
  }, {
    key: "create",
    value: (function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this6 = this;
        var _ref3,
          _ref3$docId,
          docId,
          _ref3$useAutonumber,
          useAutonumber,
          _ref3$transaction,
          transaction,
          callBack,
          sender,
          _auth$currentUser,
          colRef,
          docRef,
          performTransaction,
          errorMsg,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref3 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref3$docId = _ref3.docId, docId = _ref3$docId === void 0 ? null : _ref3$docId, _ref3$useAutonumber = _ref3.useAutonumber, useAutonumber = _ref3$useAutonumber === void 0 ? true : _ref3$useAutonumber, _ref3$transaction = _ref3.transaction, transaction = _ref3$transaction === void 0 ? null : _ref3$transaction;
              callBack = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
              sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - create"); // メッセージ出力
              // const msg = docId ? "CREATE_CALLED" : "CREATE_CALLED_NO_DOCID";
              // console.info(getMessage(sender, msg, docId)); // eslint-disable-line no-console
              // callBack が null 以外の場合は関数であることを確認
              if (!(callBack !== null && typeof callBack !== "function")) {
                _context2.next = 5;
                break;
              }
              throw new Error("[".concat(sender, "] 'callBack' \u306F\u95A2\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"));
            case 5:
              _context2.prev = 5;
              // ドキュメント作成準備
              this.createAt = new Date();
              this.updateAt = new Date();
              this.uid = (_firebaseInit.auth === null || _firebaseInit.auth === void 0 || (_auth$currentUser = _firebaseInit.auth.currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) || "unknown";
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = docId ? (0, _firestore.doc)(colRef, docId).withConverter(this.converter()) : (0, _firestore.doc)(colRef).withConverter(this.converter());
              this.docId = docRef.id;
              _context2.next = 14;
              return this.beforeCreate();
            case 14:
              /**
               * トランザクション処理でドキュメントを作成する関数です。
               * 1. `#useAutonumber` が true である場合、自動採番を行います。
               * 2. `callBack` が設定されている場合、これを実行します。
               * 3. ドキュメントを作成します。
               * 4. 最後に自動採番を更新します（必要な場合）。
               * @param {*} txn - Firestore のトランザクションオブジェクト
               */
              performTransaction = /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(txn) {
                  var autonumberUpdater;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        if (!(_classPrivateFieldGet(_useAutonumber, _this6) && useAutonumber)) {
                          _context.next = 7;
                          break;
                        }
                        _context.next = 4;
                        return _assertClassBrand(_FireModel_brand, _this6, _setAutonumber).call(_this6, txn, _this6);
                      case 4:
                        _context.t0 = _context.sent;
                        _context.next = 8;
                        break;
                      case 7:
                        _context.t0 = null;
                      case 8:
                        autonumberUpdater = _context.t0;
                        if (!callBack) {
                          _context.next = 12;
                          break;
                        }
                        _context.next = 12;
                        return callBack(txn, _this6.toObject());
                      case 12:
                        // ドキュメントを作成
                        txn.set(docRef, _this6);

                        // 自動採番の更新が必要な場合は実行
                        if (!autonumberUpdater) {
                          _context.next = 16;
                          break;
                        }
                        _context.next = 16;
                        return autonumberUpdater();
                      case 16:
                        _context.next = 22;
                        break;
                      case 18:
                        _context.prev = 18;
                        _context.t1 = _context["catch"](0);
                        // トランザクション処理中にエラーが発生した場合の処理
                        console.error("[performTransaction] \u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ".concat(_context.t1.message));
                        throw new Error("\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ".concat(_context.t1.message));
                      case 22:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, null, [[0, 18]]);
                }));
                return function performTransaction(_x) {
                  return _ref4.apply(this, arguments);
                };
              }(); // 'transaction' の有無に応じて処理を分岐
              if (!transaction) {
                _context2.next = 20;
                break;
              }
              _context2.next = 18;
              return performTransaction(transaction);
            case 18:
              _context2.next = 22;
              break;
            case 20:
              _context2.next = 22;
              return (0, _firestore.runTransaction)(_firebaseInit.firestore, performTransaction);
            case 22:
              _context2.next = 24;
              return this.afterCreate();
            case 24:
              // 成功メッセージ
              console.info((0, _firestoreMessages.getMessage)(sender, "CREATE_DOC_SUCCESS", docRef.id)); // eslint-disable-line no-console
              return _context2.abrupt("return", docRef);
            case 28:
              _context2.prev = 28;
              _context2.t0 = _context2["catch"](5);
              errorMsg = "Error in ".concat(sender, ": ").concat(_context2.t0.message);
              console.error(errorMsg); // eslint-disable-line no-console
              throw new Error(errorMsg);
            case 33:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[5, 28]]);
      }));
      function create() {
        return _create.apply(this, arguments);
      }
      return create;
    }()
    /****************************************************************************
     * Autonumbers コレクションから次の番号を取得し、指定されたフィールドにセットします。
     *
     * @param {Object} transaction - Firestore のトランザクションオブジェクト。採番とドキュメント作成がこのトランザクション内で行われます。
     * @param {Object} item - ドキュメントとして登録するデータオブジェクト。このオブジェクトに自動採番された値がセットされます。
     *
     * @returns {Promise<function>} - 自動採番の処理後に実行される更新関数を返します。この関数を呼び出すことで Autonumbers コレクションが更新されます。
     *
     * @throws {Error} - 自動採番処理が失敗した場合にエラーをスローします。
     ****************************************************************************/
    )
  }, {
    key: "fetch",
    value: (
    /****************************************************************************
     * 指定されたドキュメントIDに該当するドキュメントを取得してプロパティにデータをセットします。
     * - 当該クラスのプロパティにデータをセットするため、`withConverter`を使っていません。
     * - ドキュメントの読み込みに成功すれば`true`を、そうでなければ`false`を返します。
     * @param {string} docId - 取得するドキュメントのID
     * @returns {Promise<boolean>} ドキュメントが存在した場合は`true`、存在しない場合は`false`を返します。
     * @throws {Error} ドキュメントIDが指定されていない場合、またはドキュメントの取得に失敗した場合
     ****************************************************************************/
    function () {
      var _fetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var docId,
          sender,
          colRef,
          docRef,
          docSnapshot,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              docId = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
              sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - fetch");
              if (docId) {
                _context3.next = 4;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "FETCH_CALLED_NO_DOCID"));
            case 4:
              _context3.prev = 4;
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId).withConverter(this.converter());
              _context3.next = 9;
              return (0, _firestore.getDoc)(docRef);
            case 9:
              docSnapshot = _context3.sent;
              if (docSnapshot.exists()) {
                _context3.next = 13;
                break;
              }
              // eslint-disable-next-line no-console
              console.warn((0, _firestoreMessages.getMessage)(sender, "FETCH_NO_DOCUMENT", docId));
              return _context3.abrupt("return", false);
            case 13:
              this.initialize(docSnapshot.data());
              // eslint-disable-next-line no-console
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_SUCCESS"));
              return _context3.abrupt("return", true);
            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](4);
              // eslint-disable-next-line no-console
              console.error("[".concat(sender, "] ").concat(_context3.t0.message));
              throw new Error("Document fetch failed: ".concat(_context3.t0.message));
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[4, 18]]);
      }));
      function fetch() {
        return _fetch.apply(this, arguments);
      }
      return fetch;
    }()
    /****************************************************************************
     * 指定されたドキュメントIDに該当するドキュメントを取得して返します。
     * ‐ `fetch`と異なり、取得したドキュメントデータをインスタンス化された当該クラスのオブジェクトとして返します。
     * - 既にインスタンス化されたクラスオブジェクトはそのままに、新たなインスタンスが必要な場合に使用します。
     * @param {string} docId - 取得するドキュメントのID
     * @returns {Promise<Object|null>} - 取得されたドキュメントデータが返されます。ドキュメントが存在しない場合は`null`が返されます。
     ****************************************************************************/
    )
  }, {
    key: "fetchDoc",
    value: (function () {
      var _fetchDoc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var docId,
          sender,
          colRef,
          docRef,
          docSnapshot,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              docId = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : null;
              /* eslint-disable */
              sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - fetchDoc");
              if (docId) {
                _context4.next = 4;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_CALLED_NO_DOCID"));
            case 4:
              _context4.prev = 4;
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId).withConverter(this.converter());
              _context4.next = 9;
              return (0, _firestore.getDoc)(docRef);
            case 9:
              docSnapshot = _context4.sent;
              if (docSnapshot.exists()) {
                _context4.next = 13;
                break;
              }
              console.warn((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_NO_DOCUMENT", docId));
              return _context4.abrupt("return", null);
            case 13:
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_SUCCESS"));
              return _context4.abrupt("return", docSnapshot.data());
            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](4);
              console.error("[".concat(sender, "] ").concat(_context4.t0.message));
              throw _context4.t0;
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[4, 17]]);
      }));
      function fetchDoc() {
        return _fetchDoc.apply(this, arguments);
      }
      return fetchDoc;
    }()
    /**
     * クエリ条件の配列を受け取り、Firestore のクエリオブジェクト配列を生成して返します
     * @param {Array} constraints - クエリ条件の配列
     * @returns {Array<Object>} - クエリオブジェクトの配列
     * @throws {Error} 不明なクエリタイプが指定された場合
     */
    )
  }, {
    key: "fetchDocs",
    value: (
    /****************************************************************************
     * Firestore から条件に一致するドキュメントを取得します。
     * - 引数 constraints が文字列であった場合、tokenMap による N-gram 検索が実行されます。
     *   追加の条件は options で指定可能です。
     * - 引数 constraints が配列であった場合は配列内の各要素で指定された条件をもとにクエリを実行します。
     *
     * @param {Array|string} constraints - クエリ条件の配列または検索用の文字列
     * @param {Array} options - 追加のクエリ条件の配列（constraints が配列の場合は無視されます。）
     * @returns {Promise<Array<Object>>} - 取得したドキュメントのデータで初期化されたオブジェクトの配列
     * @throws {Error} 不明なクエリタイプが指定された場合
     ****************************************************************************/
    function () {
      var _fetchDocs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var constraints,
          options,
          queryConstraints,
          colRef,
          q,
          querySnapshot,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              constraints = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : [];
              options = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : [];
              queryConstraints = []; // constraintsが文字列である場合、N-gram検索用のクエリを生成
              if (!(typeof constraints === "string")) {
                _context5.next = 8;
                break;
              }
              queryConstraints.push.apply(queryConstraints, _toConsumableArray(_assertClassBrand(_FireModel_brand, this, _createTokenMapQuerys).call(this, constraints)));

              // options で指定されたクエリ条件を追加
              queryConstraints.push.apply(queryConstraints, _toConsumableArray(_assertClassBrand(_FireModel_brand, this, _createQuerys).call(this, options)));
              _context5.next = 14;
              break;
            case 8:
              if (!Array.isArray(constraints)) {
                _context5.next = 12;
                break;
              }
              queryConstraints.push.apply(queryConstraints, _toConsumableArray(_assertClassBrand(_FireModel_brand, this, _createQuerys).call(this, constraints)));
              _context5.next = 14;
              break;
            case 12:
              console.warn((0, _firestoreMessages.getMessage)(sender, "CONSTRAINTS_MUST_BE_STRING_OR_ARRAY"));
              return _context5.abrupt("return", []);
            case 14:
              // Firestoreクエリの実行
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              q = _firestore.query.apply(void 0, [colRef].concat(queryConstraints)).withConverter(this.converter());
              _context5.next = 18;
              return (0, _firestore.getDocs)(q);
            case 18:
              querySnapshot = _context5.sent;
              return _context5.abrupt("return", querySnapshot.docs.map(function (doc) {
                return doc.data();
              }));
            case 20:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function fetchDocs() {
        return _fetchDocs.apply(this, arguments);
      }
      return fetchDocs;
    }()
    /****************************************************************************
     * Firestore ドキュメントを現在のプロパティ値で更新します。
     * - Firestore の `updateDoc` メソッドは `withConverter` をサポートしていないため、 `toObject()` を使用してオブジェクト形式に変換します。
     *
     * @param {function|null} transaction - トランザクション処理を行うための関数（省略可能、デフォルトは `null`）
     * @param {function|null} callBack - サブクラス側で独自の処理を実行するための関数（省略可能、デフォルトは `null`）
     * @returns {Promise<DocumentReference>} - 更新された Firestore ドキュメントの参照を返します。
     * @throws {Error} - ドキュメント更新中にエラーが発生した場合にスローされます。
     ****************************************************************************/
    )
  }, {
    key: "update",
    value: (function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this7 = this;
        var _ref5,
          _ref5$transaction,
          transaction,
          callBack,
          sender,
          _auth$currentUser2,
          colRef,
          docRef,
          performTransaction,
          errorMsg,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _ref5 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, _ref5$transaction = _ref5.transaction, transaction = _ref5$transaction === void 0 ? null : _ref5$transaction;
              callBack = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : null;
              sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - update"); // // 更新呼び出しのログ出力
              // console.info(getMessage(sender, "UPDATE_CALLED", this.docId)); // eslint-disable-line no-console
              // callBackがnull以外の場合は関数であることを確認
              if (!(callBack !== null && typeof callBack !== "function")) {
                _context7.next = 5;
                break;
              }
              throw new Error("[".concat(sender, "] 'callBack'\u306F\u95A2\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"));
            case 5:
              _context7.prev = 5;
              if (this.docId) {
                _context7.next = 8;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "UPDATE_REQUIRES_DOCID"));
            case 8:
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, this.docId); // updateDocの場合、withConverter.toFirestoreは使用できない。
              // 更新前処理
              _context7.next = 12;
              return this.beforeUpdate();
            case 12:
              // 更新日時とユーザーIDの設定
              this.updateAt = new Date();
              this.uid = (_firebaseInit.auth === null || _firebaseInit.auth === void 0 || (_auth$currentUser2 = _firebaseInit.auth.currentUser) === null || _auth$currentUser2 === void 0 ? void 0 : _auth$currentUser2.uid) || "unknown";

              /**
               * トランザクション処理でドキュメントを更新する関数です。
               * 1. 更新対象のドキュメントが存在するかを確認します。
               * 2. `callBack` が設定されている場合、これを実行します。
               * 3. 最後にドキュメントを更新します。
               * @param {*} txn - Firestore のトランザクションオブジェクト
               */
              performTransaction = /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(txn) {
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.prev = 0;
                        if (!callBack) {
                          _context6.next = 4;
                          break;
                        }
                        _context6.next = 4;
                        return callBack(txn, _this7.toObject());
                      case 4:
                        txn.update(docRef, _this7.toObject());
                        _context6.next = 11;
                        break;
                      case 7:
                        _context6.prev = 7;
                        _context6.t0 = _context6["catch"](0);
                        // eslint-disable-next-line
                        console.error("[performTransaction] \u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ".concat(_context6.t0.message));
                        throw new Error("\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ".concat(_context6.t0.message));
                      case 11:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6, null, [[0, 7]]);
                }));
                return function performTransaction(_x2) {
                  return _ref6.apply(this, arguments);
                };
              }(); // ドキュメントの更新処理
              if (!transaction) {
                _context7.next = 20;
                break;
              }
              _context7.next = 18;
              return performTransaction(transaction);
            case 18:
              _context7.next = 22;
              break;
            case 20:
              _context7.next = 22;
              return (0, _firestore.runTransaction)(_firebaseInit.firestore, performTransaction);
            case 22:
              _context7.next = 24;
              return this.afterUpdate();
            case 24:
              // 成功ログ出力
              console.info((0, _firestoreMessages.getMessage)(sender, "UPDATE_DOC_SUCCESS", this.docId)); // eslint-disable-line no-console
              return _context7.abrupt("return", docRef);
            case 28:
              _context7.prev = 28;
              _context7.t0 = _context7["catch"](5);
              errorMsg = "Error in ".concat(sender, ": ").concat(_context7.t0.message);
              console.error(errorMsg); // eslint-disable-line no-console
              throw new Error(errorMsg);
            case 33:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 28]]);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
    /****************************************************************************
     * `hasMany` プロパティにセットされた条件に基づき、現在のドキュメントに依存している子ドキュメントが
     * 存在しているかどうかを確認します。
     *
     * @returns {Promise<object|boolean>} - 子ドキュメントが存在する場合は `hasMany` の該当項目を返し、
     *                                      存在しない場合は `false` を返します。
     * @throws {Error} - Firestore の操作中にエラーが発生した場合にスローされます。
     ****************************************************************************/
    )
  }, {
    key: "hasChild",
    value: (function () {
      var _hasChild = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _iterator, _step, item, colRef, whrObj, q, snapshot;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_hasMany, this));
              _context8.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context8.next = 16;
                break;
              }
              item = _step.value;
              // コレクションまたはコレクショングループの参照を取得
              colRef = item.type === "collection" ? (0, _firestore.collection)(_firebaseInit.firestore, item.collection) : (0, _firestore.collectionGroup)(_firebaseInit.firestore, item.collection); // クエリを作成
              whrObj = (0, _firestore.where)(item.field, item.condition, this.docId);
              q = (0, _firestore.query)(colRef, whrObj, (0, _firestore.limit)(1)); // トランザクションの有無に応じてクエリを実行
              _context8.next = 11;
              return (0, _firestore.getDocs)(q);
            case 11:
              snapshot = _context8.sent;
              if (snapshot.empty) {
                _context8.next = 14;
                break;
              }
              return _context8.abrupt("return", item);
            case 14:
              _context8.next = 4;
              break;
            case 16:
              _context8.next = 21;
              break;
            case 18:
              _context8.prev = 18;
              _context8.t0 = _context8["catch"](2);
              _iterator.e(_context8.t0);
            case 21:
              _context8.prev = 21;
              _iterator.f();
              return _context8.finish(21);
            case 24:
              return _context8.abrupt("return", false);
            case 27:
              _context8.prev = 27;
              _context8.t1 = _context8["catch"](0);
              console.error("Error in hasChild: ".concat(_context8.t1.message)); // eslint-disable-line no-console
              throw new Error("Error checking for child documents: ".concat(_context8.t1.message));
            case 31:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 27], [2, 18, 21, 24]]);
      }));
      function hasChild() {
        return _hasChild.apply(this, arguments);
      }
      return hasChild;
    }()
    /****************************************************************************
     * 現在のドキュメントIDに該当するドキュメントを削除します。
     * - `logicalDelete`が指定されている場合、削除されたドキュメントは`archive`コレクションに移動されます。
     * - `transaction`が指定されている場合は`deleteAsTransaction`を呼び出します。
     * @param {object|null} transaction - Firestoreトランザクションオブジェクト（省略可能）
     * @param {function|null} callBack - サブクラス側で独自の処理を実行するための関数（省略可能）
     * @returns {Promise<void>} - 削除が完了すると解決されるPromise
     * @throws {Error} - ドキュメントの削除中にエラーが発生した場合にスローされます
     ****************************************************************************/
    )
  }, {
    key: "delete",
    value: (function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _this8 = this;
        var _ref7,
          _ref7$transaction,
          transaction,
          callBack,
          sender,
          colRef,
          docRef,
          performTransaction,
          errorMsg,
          _args10 = arguments;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _ref7 = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {}, _ref7$transaction = _ref7.transaction, transaction = _ref7$transaction === void 0 ? null : _ref7$transaction;
              callBack = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : null;
              sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - delete"); // // 削除処理のログを出力
              // console.info(getMessage(sender, "DELETE_CALLED", this.docId)); // eslint-disable-line no-console
              // callBackがnull以外の場合は関数であることを確認
              if (!(callBack !== null && typeof callBack !== "function")) {
                _context10.next = 5;
                break;
              }
              throw new Error("[".concat(sender, "] 'callBack'\u306F\u95A2\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"));
            case 5:
              _context10.prev = 5;
              if (this.docId) {
                _context10.next = 8;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "DELETE_REQUIRES_DOCID"));
            case 8:
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, this.docId); // 削除前処理
              _context10.next = 12;
              return this.beforeDelete();
            case 12:
              /**
               * トランザクションでドキュメントを削除する関数です。
               * @param {object} txn - Firestoreトランザクションオブジェクト
               */
              performTransaction = /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(txn) {
                  var hasChild, docSnapshot, sourceData, archiveColRef, archiveDocRef;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return _this8.hasChild();
                      case 2:
                        hasChild = _context9.sent;
                        if (!hasChild) {
                          _context9.next = 5;
                          break;
                        }
                        throw new Error((0, _firestoreMessages.getMessage)(sender, "COULD_NOT_DELETE_CHILD_EXIST", hasChild.collection));
                      case 5:
                        _context9.next = 7;
                        return (0, _firestore.getDoc)(docRef);
                      case 7:
                        docSnapshot = _context9.sent;
                        if (docSnapshot.exists()) {
                          _context9.next = 10;
                          break;
                        }
                        throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_DOCUMENT_TO_DELETE", _this8.docId));
                      case 10:
                        sourceData = docSnapshot.data(); // サブクラスでの追加処理を実行
                        if (!callBack) {
                          _context9.next = 14;
                          break;
                        }
                        _context9.next = 14;
                        return callBack(txn, _this8.toObject());
                      case 14:
                        if (_classPrivateFieldGet(_logicalDelete, _this8)) {
                          // 論理削除：archiveコレクションに移動し、元のドキュメントを削除
                          archiveColRef = (0, _firestore.collection)(_firebaseInit.firestore, "".concat(_classPrivateFieldGet(_collectionPath, _this8), "_archive"));
                          archiveDocRef = (0, _firestore.doc)(archiveColRef, _this8.docId);
                          txn.set(archiveDocRef, sourceData);
                        }

                        // 元のドキュメントを削除（物理削除または論理削除後）
                        txn["delete"](docRef);
                      case 16:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function performTransaction(_x3) {
                  return _ref8.apply(this, arguments);
                };
              }(); // ドキュメントの削除処理
              if (!transaction) {
                _context10.next = 18;
                break;
              }
              _context10.next = 16;
              return performTransaction(transaction);
            case 16:
              _context10.next = 20;
              break;
            case 18:
              _context10.next = 20;
              return (0, _firestore.runTransaction)(_firebaseInit.firestore, performTransaction);
            case 20:
              _context10.next = 22;
              return this.afterDelete();
            case 22:
              // 成功ログ出力
              console.info((0, _firestoreMessages.getMessage)(sender, "DELETE_DOC_SUCCESS", this.docId)); // eslint-disable-line no-console
              _context10.next = 30;
              break;
            case 25:
              _context10.prev = 25;
              _context10.t0 = _context10["catch"](5);
              errorMsg = "Error in ".concat(sender, ": ").concat(_context10.t0.message);
              console.error(errorMsg); // eslint-disable-line no-console
              throw new Error(errorMsg);
            case 30:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[5, 25]]);
      }));
      function _delete() {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
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
    )
  }, {
    key: "deleteAll",
    value: (function () {
      var _deleteAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var batchSize,
          pauseDuration,
          sender,
          colRef,
          snapshot,
          _loop,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              batchSize = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : 500;
              pauseDuration = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : 500;
              sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - deleteAll"); // console.info(getMessage(sender, "DELETE_ALL_CALLED"));
              // 引数のバリデーション
              if (!(typeof batchSize !== "number" || batchSize <= 0)) {
                _context12.next = 5;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "DELETE_ALL_INVALID_BATCH_SIZE"));
            case 5:
              if (!(typeof pauseDuration !== "number" || pauseDuration < 0)) {
                _context12.next = 7;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "DELETE_ALL_INVALID_PAUSE_DURATION"));
            case 7:
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              _context12.prev = 8;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var batch;
                return _regeneratorRuntime().wrap(function _loop$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return (0, _firestore.getDocs)((0, _firestore.query)(colRef, (0, _firestore.limit)(batchSize)));
                    case 2:
                      snapshot = _context11.sent;
                      if (!snapshot.empty) {
                        _context11.next = 5;
                        break;
                      }
                      return _context11.abrupt("return", 1);
                    case 5:
                      batch = (0, _firestore.writeBatch)(_firebaseInit.firestore);
                      snapshot.docs.forEach(function (doc) {
                        batch["delete"](doc.ref);
                      });
                      _context11.next = 9;
                      return batch.commit();
                    case 9:
                      if (!(pauseDuration > 0)) {
                        _context11.next = 12;
                        break;
                      }
                      _context11.next = 12;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, pauseDuration);
                      });
                    case 12:
                    case "end":
                      return _context11.stop();
                  }
                }, _loop);
              });
            case 10:
              return _context12.delegateYield(_loop(), "t0", 11);
            case 11:
              if (!_context12.t0) {
                _context12.next = 13;
                break;
              }
              return _context12.abrupt("break", 14);
            case 13:
              if (!snapshot.empty) {
                _context12.next = 10;
                break;
              }
            case 14:
              _context12.next = 20;
              break;
            case 16:
              _context12.prev = 16;
              _context12.t1 = _context12["catch"](8);
              console.error("[".concat(sender, "] ").concat(_context12.t1.message));
              throw _context12.t1;
            case 20:
            case "end":
              return _context12.stop();
          }
        }, _callee11, this, [[8, 16]]);
      }));
      function deleteAll() {
        return _deleteAll.apply(this, arguments);
      }
      return deleteAll;
    }()
    /****************************************************************************
     * 削除されたドキュメントをアーカイブコレクションから元のコレクションに復元します。
     * @param {string} docId - 復元するドキュメントのID
     * @returns {Promise<DocumentReference>} - 復元されたドキュメントのリファレンス
     * @throws {Error} - ドキュメントIDが指定されていない場合や、復元するドキュメントが存在しない場合にエラーをスローします
     ****************************************************************************/
    )
  }, {
    key: "restore",
    value: (function () {
      var _restore = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(docId) {
        var sender, archivePath, archiveColRef, archiveDocRef, docSnapshot, colRef, docRef, batch;
        return _regeneratorRuntime().wrap(function _callee12$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              /* eslint-disable */
              sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - restore");
              if (docId) {
                _context13.next = 3;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "RESTORE_CALLED_NO_DOCID"));
            case 3:
              _context13.prev = 3;
              archivePath = "".concat(_classPrivateFieldGet(_collectionPath, this), "_archive");
              archiveColRef = (0, _firestore.collection)(_firebaseInit.firestore, archivePath);
              archiveDocRef = (0, _firestore.doc)(archiveColRef, docId);
              _context13.next = 9;
              return (0, _firestore.getDoc)(archiveDocRef);
            case 9:
              docSnapshot = _context13.sent;
              if (docSnapshot.exists()) {
                _context13.next = 12;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_DOCUMENT_TO_RESTORE", archivePath, docId));
            case 12:
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId);
              batch = (0, _firestore.writeBatch)(_firebaseInit.firestore);
              batch["delete"](archiveDocRef);
              batch.set(docRef, docSnapshot.data());
              _context13.next = 19;
              return batch.commit();
            case 19:
              console.info((0, _firestoreMessages.getMessage)(sender, "RESTORE_SUCCESS", docId));
              return _context13.abrupt("return", docRef);
            case 23:
              _context13.prev = 23;
              _context13.t0 = _context13["catch"](3);
              console.error("[".concat(sender, "] ").concat(_context13.t0.message));
              throw _context13.t0;
            case 27:
            case "end":
              return _context13.stop();
          }
        }, _callee12, this, [[3, 23]]);
      }));
      function restore(_x4) {
        return _restore.apply(this, arguments);
      }
      return restore;
    }()
    /****************************************************************************
     * Firestoreのリアルタイムリスナーを解除します。
     * 現在のリスナーが存在する場合、そのリスナーを解除します。
     * @returns {void}
     ****************************************************************************/
    )
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      /* eslint-disable */
      var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - unsubscribe");
      // console.info(getMessage(sender, "UNSUBSCRIBE_CALLED"));
      if (_classPrivateFieldGet(_listener, this)) {
        _classPrivateFieldGet(_listener, this).call(this);
        _classPrivateFieldSet(_listener, this, null);
        console.info((0, _firestoreMessages.getMessage)(sender, "UNSUBSCRIBE_SUCCESS"));
      }
      _classPrivateFieldGet(_items, this).splice(0);
      /* eslint-enable */
    }

    /****************************************************************************
     * Firestoreのドキュメントに対するリアルタイムリスナーを設定します。
     * 既にリスナーが設定されている場合、そのリスナーを解除してから新しいリスナーを設定します。
     * @param {string} docId - リアルタイムリスナーを設定するドキュメントのID
     * @returns {void}
     * @throws {Error} - ドキュメントIDが指定されていない場合にエラーをスローします
     ****************************************************************************/
  }, {
    key: "subscribe",
    value: function subscribe(docId) {
      var _this9 = this;
      /* eslint-disable */
      var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - subscribe");
      if (!docId) {
        throw new Error((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_CALLED_NO_DOCID"));
      }
      // console.info(getMessage(sender, "SUBSCRIBE_CALLED", docId));
      try {
        if (_classPrivateFieldGet(_listener, this)) {
          console.info((0, _firestoreMessages.getMessage)(sender, "LISTENER_HAS_SET"));
          this.unsubscribe();
        }
        var colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
        var docRef = (0, _firestore.doc)(colRef, docId);
        _classPrivateFieldSet(_listener, this, (0, _firestore.onSnapshot)(docRef, function (docSnapshot) {
          if (docSnapshot.exists()) {
            _this9.initialize(docSnapshot.data()); // ドキュメントデータを初期化
          } else {
            console.warn((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_NO_DOCUMENT", docId));
          }
        }));
        console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_SUCCESS", docId));
      } catch (err) {
        console.error("[".concat(sender, "] ").concat(err.message));
        throw err;
      }
      /* eslint-enable */
    }

    /****************************************************************************
     * Firestoreコレクションに対するリアルタイムリスナーを設定し、ドキュメントの変化を監視します。
     * - 引数 constraints が文字列であった場合、tokenMap による N-gram 検索が実行されます。
     *   追加の条件は options で指定可能です。
     * - 引数 constraints が配列であった場合は配列内の各要素で指定された条件をもとにクエリを実行します。
     *
     * @param {Array|string} constraints - クエリ条件の配列（新形式）または検索用の文字列
     * @param {Array} options - 追加のクエリ条件の配列（constraints が配列の場合は無視されます。）
     * @returns {Array<Object>} - リアルタイムで監視しているドキュメントのデータが格納された配列
     * @throws {Error} 不明なクエリタイプが指定された場合
     ****************************************************************************/
  }, {
    key: "subscribeDocs",
    value: function subscribeDocs() {
      var _this10 = this;
      var constraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - subscribeDocs");
      try {
        if (_classPrivateFieldGet(_listener, this)) {
          // eslint-disable-next-line no-console
          console.info((0, _firestoreMessages.getMessage)(sender, "LISTENER_HAS_SET"));
          this.unsubscribe();
        }
        var queryConstraints = [];

        // constraintsが文字列である場合、N-gram検索用のクエリを生成
        if (typeof constraints === "string") {
          // const tokens = [];
          // const target = constraints.replace(
          //   /[\uD800-\uDBFF]|[\uDC00-\uDFFF]|~|\*|\[|\]|\s+/g,
          //   ""
          // );

          // // 1文字と2文字のトークンを生成
          // for (let i = 0; i < target.length; i++) {
          //   tokens.push(target.substring(i, i + 1));
          // }
          // for (let i = 0; i < target.length - 1; i++) {
          //   tokens.push(target.substring(i, i + 2));
          // }

          // // tokenMapに含まれるトークンでFirestoreクエリを実行するためのwhere条件を追加
          // tokens.forEach((token) => {
          //   queryConstraints.push(where(`tokenMap.${token}`, "==", true));
          // });
          queryConstraints.push.apply(queryConstraints, _toConsumableArray(_assertClassBrand(_FireModel_brand, this, _createTokenMapQuerys).call(this, constraints)));

          // options で指定されたクエリ条件を追加
          queryConstraints.push.apply(queryConstraints, _toConsumableArray(_assertClassBrand(_FireModel_brand, this, _createQuerys).call(this, options)));
        } else if (Array.isArray(constraints)) {
          // // 通常のクエリ条件（where, orderBy, limit）を処理
          // const validQueryTypes = ["where", "orderBy", "limit"];
          // constraints.forEach((constraint) => {
          //   const [type, ...args] = constraint;
          //   switch (type) {
          //     case "where":
          //       queryConstraints.push(where(...args));
          //       break;
          //     case "orderBy":
          //       queryConstraints.push(orderBy(args[0], args[1] || "asc"));
          //       break;
          //     case "limit":
          //       queryConstraints.push(limit(args[0]));
          //       break;
          //     default:
          //       // eslint-disable-next-line no-console
          //       console.warn(
          //         `Unknown query type: ${type}. Valid query types are: ${validQueryTypes.join(
          //           ", "
          //         )}`
          //       );
          //       throw new Error(
          //         `Invalid query type: ${type}. Please use one of: ${validQueryTypes.join(
          //           ", "
          //         )}`
          //       );
          //   }
          // });
          queryConstraints.push.apply(queryConstraints, _toConsumableArray(_assertClassBrand(_FireModel_brand, this, _createQuerys).call(this, constraints)));
        } else {
          console.warn((0, _firestoreMessages.getMessage)(sender, "CONSTRAINTS_MUST_BE_STRING_OR_ARRAY"));
          return;
        }

        // Firestoreコレクションに対してリアルタイムリスナーを設定
        var colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
        var q = _firestore.query.apply(void 0, [colRef].concat(queryConstraints)).withConverter(this.converter());
        _classPrivateFieldSet(_listener, this, (0, _firestore.onSnapshot)(q, function (snapshot) {
          snapshot.docChanges().forEach(function (change) {
            var item = change.doc.data();
            var index = _classPrivateFieldGet(_items, _this10).findIndex(function (_ref9) {
              var docId = _ref9.docId;
              return docId === item.docId;
            });
            if (change.type === "added") _classPrivateFieldGet(_items, _this10).push(item);
            if (change.type === "modified") _classPrivateFieldGet(_items, _this10).splice(index, 1, item);
            if (change.type === "removed") _classPrivateFieldGet(_items, _this10).splice(index, 1);
          });
        }));

        // eslint-disable-next-line no-console
        console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_DOCS_SUCCESS"));
        return _classPrivateFieldGet(_items, this);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("[".concat(sender, "] ").concat(err.message));
        throw err;
      }
    }
  }]);
}();
function _loadClassProps() {
  var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - loadClassProps");

  // `classProps` が未定義の場合は空のオブジェクトをセット
  if (typeof this.constructor.classProps === "undefined") {
    _classPrivateFieldSet(_classProps, this, {});
    return; // early return for clarity
  }

  // `classProps` がオブジェクトであることを確認
  if (_typeof(this.constructor.classProps) !== "object" || this.constructor.classProps === null) {
    throw new Error((0, _firestoreMessages.getMessage)(sender, "CLASS_PROPS_MUST_BE_OBJECT"));
  }

  // 各プロパティの検証
  Object.entries(this.constructor.classProps).forEach(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
      key = _ref11[0],
      value = _ref11[1];
    // プロパティがオブジェクトであることを確認
    if (_typeof(value) !== "object" || value === null) {
      throw new Error((0, _firestoreMessages.getMessage)(sender, "CLASS_PROP_MUST_BE_OBJECT", key));
    }

    // 必要なキーの確認
    var requiredKeys = ["type", "default", "required"];
    requiredKeys.forEach(function (requiredKey) {
      if (!(requiredKey in value)) {
        throw new Error((0, _firestoreMessages.getMessage)(sender, "CLASS_PROP_REQUIRES_KEY", key, requiredKey));
      }
    });

    // `type` の確認（指定された型のいずれか）
    var validTypes = [String, Number, Boolean, Object, Array, Function];
    if (!validTypes.includes(value.type)) {
      throw new Error((0, _firestoreMessages.getMessage)(sender, "CLASS_PROP_TYPE_INVALID", key));
    }

    // `required` が Boolean であることを確認
    if (typeof value.required !== "boolean") {
      throw new TypeError((0, _firestoreMessages.getMessage)(sender, "CLASS_PROP_REQUIRED_INVALID", key));
    }
  });

  // `classProps` を自身のプロパティにセット
  _classPrivateFieldSet(_classProps, this, _objectSpread({}, this.constructor.classProps)); // シャローコピーを作成
}
/****************************************************************************
 * サブクラスに定義された `collectionPath` の値を、自身の `#collectionPath` に
 * 読み込みます。
 * @throws {Error} サブクラスに `collectionPath` が定義されていない場合、エラーをスローします。
 * @returns {void}
 ****************************************************************************/
function _loadCollectionPath() {
  var sender = "[FireModel.js] - loadCollectionPath";
  if (typeof this.constructor.collectionPath === "undefined") {
    var sample = "\n        class SubClass extends Firemodel {\n          static collectionPath = 'SubClasses';\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n          constructor(item) {\n            ...\n          }\n        }\n      ";
    throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_COLLECTION_PATH", this.removeIndentation(sample)));
  }
  _classPrivateFieldSet(_collectionPath, this, this.constructor.collectionPath);
}
/****************************************************************************
 * サブクラスに定義された `hasMany` プロパティを取得し、自身の `#hasMany` にセットします。
 * - `hasMany` が未定義の場合は `#hasMany` に空の配列をセットします。
 * - `hasMany` が配列であることを確認し、各要素の形式もチェックします。
 * @throws {Error} サブクラスの `hasMany` が配列ではない、または形式が正しくない場合にエラーをスローします。
 * @returns {void}
 ****************************************************************************/
function _loadHasMany() {
  var _this11 = this;
  var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - loadHasMany");

  // `hasMany` が未定義の場合は空の配列をセット
  if (typeof this.constructor.hasMany === "undefined") {
    _classPrivateFieldSet(_hasMany, this, []);
    return;
  }

  // `hasMany` が配列であることを確認
  if (!Array.isArray(this.constructor.hasMany)) {
    throw new TypeError((0, _firestoreMessages.getMessage)(sender, "HAS_MANY_NOT_ARRAY"));
  }

  // 各要素を検証
  this.constructor.hasMany.forEach(function (relation, index) {
    var requiredKeys = ["collection", "field", "condition", "type"];
    var validTypes = ["collection", "subcollection"]; // 有効なタイプを定義

    // 各要素がオブジェクトであることを確認
    if (_typeof(relation) !== "object" || relation === null) {
      throw new Error((0, _firestoreMessages.getMessage)(sender, "HAS_MANY_MUST_BE_OBJECT", _classPrivateFieldGet(_collectionPath, _this11), index, JSON.stringify(relation)));
    }

    // 必須のキーがすべて存在することを確認
    requiredKeys.forEach(function (key) {
      if (!(key in relation)) {
        throw new Error((0, _firestoreMessages.getMessage)(sender, "HAS_MANY_REQUIRES_KEY", _classPrivateFieldGet(_collectionPath, _this11), index, JSON.stringify(relation)));
      }
    });

    // 余分なキーが含まれていないことを確認
    Object.keys(relation).forEach(function (key) {
      if (!requiredKeys.includes(key)) {
        throw new Error((0, _firestoreMessages.getMessage)(sender, "HAS_MANY_INVALID_KEY", _classPrivateFieldGet(_collectionPath, _this11), index, JSON.stringify(relation)));
      }
    });

    // typeプロパティの値が正しいかを確認
    if (!validTypes.includes(relation.type)) {
      throw new Error((0, _firestoreMessages.getMessage)(sender, "HAS_MANY_INVALID_TYPE", _classPrivateFieldGet(_collectionPath, _this11), index, JSON.stringify(relation)));
    }
  });

  // `hasMany` が定義されていて、配列である場合のみセット
  _classPrivateFieldSet(_hasMany, this, this.constructor.hasMany);
}
/****************************************************************************
 * サブクラスに定義された `useAutonumber` の値を、自身の `#useAutonumber` に
 * 読み込みます。
 * - サブクラスで `useAutonumber` が定義されていない場合、`#useAutonumber` は false になります。
 * - サブクラスの `useAutonumber` がブール値でない場合、エラーをスローします。
 * @returns {void}
 ****************************************************************************/
function _loadUseAutonumber() {
  var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - loadUseAutonumber");

  // サブクラスで useAutonumber が未定義の場合、false を設定
  if (typeof this.constructor.useAutonumber === "undefined") {
    _classPrivateFieldSet(_useAutonumber, this, false);
    return; // early return for clarity
  }

  // useAutonumber がブール値でない場合、エラーをスロー
  if (typeof this.constructor.useAutonumber !== "boolean") {
    throw new TypeError((0, _firestoreMessages.getMessage)(sender, "USE_AUTONUMBER_MUST_BE_BOOLEAN", _classPrivateFieldGet(_collectionPath, this), this.constructor.useAutonumber));
  }

  // useAutonumber がブール値であれば、その値を設定
  _classPrivateFieldSet(_useAutonumber, this, this.constructor.useAutonumber);
}
/****************************************************************************
 * サブクラスに定義された `logicalDelete` の値を、自身の `#logicalDelete` に
 * 読み込みます。
 * - サブクラスで `logicalDelete` が定義されていない場合、`#logicalDelete` は false になります。
 * - サブクラスの `logicalDelete` がブール値でない場合、エラーをスローします。
 * @returns {void}
 ****************************************************************************/
function _loadLogicalDelete() {
  var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - loadLogicalDelete");

  // サブクラスで logicalDelete が未定義の場合、false を設定
  if (typeof this.constructor.logicalDelete === "undefined") {
    _classPrivateFieldSet(_logicalDelete, this, false);
    return; // early return for clarity
  }

  // logicalDelete がブール値でない場合、エラーをスロー
  if (typeof this.constructor.logicalDelete !== "boolean") {
    throw new TypeError((0, _firestoreMessages.getMessage)(sender, "LOGICAL_DELETE_MUST_BE_BOOLEAN", _classPrivateFieldGet(_collectionPath, this), this.constructor.logicalDelete));
  }

  // logicalDelete がブール値であれば、その値を設定
  _classPrivateFieldSet(_logicalDelete, this, this.constructor.logicalDelete);
}
/****************************************************************************
 * サブクラスに定義された `tokenFields` の値を、自身の `#tokenFields` に
 * 読み込みます。
 * - サブクラスで `tokenFields` が定義されていない場合、`#tokenFields` は空の配列になります。
 * - サブクラスの `tokenFields` が配列でない場合、エラーをスローします。
 * - 各要素が文字列でない場合、エラーをスローします。
 * @returns {void}
 ****************************************************************************/
function _loadTokenFields() {
  var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - loadTokenFields");

  // `tokenFields` が未定義の場合は空の配列をセット
  if (typeof this.constructor.tokenFields === "undefined") {
    _classPrivateFieldSet(_tokenFields, this, []);
    return; // early return for clarity
  }

  // `tokenFields` が配列であることを確認
  if (!Array.isArray(this.constructor.tokenFields)) {
    throw new TypeError((0, _firestoreMessages.getMessage)(sender, "TOKEN_FIELDS_MUST_BE_ARRAY"));
  }

  // `tokenFields` の各要素が文字列であることを確認
  this.constructor.tokenFields.forEach(function (field, index) {
    if (typeof field !== "string") {
      throw new TypeError((0, _firestoreMessages.getMessage)(sender, "TOKEN_FIELD_MUST_BE_STRING", index, JSON.stringify(field)));
    }
  });

  // `tokenFields` を自身のプロパティにセット
  _classPrivateFieldSet(_tokenFields, this, this.constructor.tokenFields);
}
function _validateProperties() {
  var _this12 = this;
  var sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - validateProperties");
  Object.keys(_classPrivateFieldGet(_classProps, this)).forEach(function (key) {
    var propConfig = _classPrivateFieldGet(_classProps, _this12)[key];
    // 必須チェック
    if (propConfig.required && (_this12[key] === undefined || _this12[key] === null || _this12[key] === "")) {
      throw new Error((0, _firestoreMessages.getMessage)(sender, "PROP_VALUE_REQUIRED", key));
    }

    // バリデーションチェック
    if (propConfig.validator && !propConfig.validator(_this12[key])) {
      throw new Error((0, _firestoreMessages.getMessage)(sender, "PROP_VALUE_INVALID", key, _this12[key]));
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
function _generateTokenMap() {
  var _this13 = this;
  if (!_classPrivateFieldGet(_tokenFields, this).length) return null;
  var arr = [];
  _classPrivateFieldGet(_tokenFields, this).forEach(function (fieldName) {
    if (fieldName in _this13 && _this13[fieldName]) {
      var target = _this13[fieldName].replace(/[\uD800-\uDBFF]|[\uDC00-\uDFFF]|~|\*|\[|\]|\s+/g, "");
      for (var i = 0; i < target.length; i++) {
        arr.push([target.substring(i, i + 1), true]);
      }
      for (var _i = 0; _i < target.length - 1; _i++) {
        arr.push([target.substring(_i, _i + 2), true]);
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
function _setTokenMap(value) {
  // No-op setter to avoid errors during initialization.
  // This can be customized if needed to handle specific logic.
}
function _setAutonumber(_x5, _x6) {
  return _setAutonumber2.apply(this, arguments);
}
function _setAutonumber2() {
  _setAutonumber2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(transaction, item) {
    var sender, autonumRef, autonumDoc, autonumData, num, length, newCode, maxPossibleCode;
    return _regeneratorRuntime().wrap(function _callee13$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          sender = "".concat(_classPrivateFieldGet(_collectionPath, this), " - setAutonumber");
          _context14.prev = 1;
          autonumRef = (0, _firestore.doc)(_firebaseInit.firestore, "Autonumbers/".concat(_classPrivateFieldGet(_collectionPath, this)));
          _context14.next = 5;
          return transaction.get(autonumRef);
        case 5:
          autonumDoc = _context14.sent;
          if (autonumDoc.exists()) {
            _context14.next = 8;
            break;
          }
          throw new Error((0, _firestoreMessages.getMessage)(sender, "MISSING_AUTONUMBER"));
        case 8:
          autonumData = autonumDoc.data(); // Autonumberドキュメントのステータスが無効な場合はエラーをスロー
          if (autonumData.status) {
            _context14.next = 11;
            break;
          }
          throw new Error((0, _firestoreMessages.getMessage)(sender, "INVALID_AUTONUMBER_STATUS"));
        case 11:
          // 採番処理
          num = autonumData.current + 1;
          length = autonumData.length;
          newCode = (Array(length).join("0") + num).slice(-length); // 採番可能な最大値に達した場合はエラーをスロー
          maxPossibleCode = Array(length + 1).join("0");
          if (!(newCode === maxPossibleCode)) {
            _context14.next = 17;
            break;
          }
          throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_MORE_DOCUMENT"));
        case 17:
          // itemに新しいコードをセット
          item[autonumData.field] = newCode;

          // currentフィールドの更新処理を行う関数を返す
          return _context14.abrupt("return", function () {
            return transaction.update(autonumRef, {
              current: num
            });
          });
        case 21:
          _context14.prev = 21;
          _context14.t0 = _context14["catch"](1);
          // eslint-disable-next-line no-console
          console.error("[".concat(sender, "] ").concat(_context14.t0.message));
          throw _context14.t0;
        case 25:
        case "end":
          return _context14.stop();
      }
    }, _callee13, this, [[1, 21]]);
  }));
  return _setAutonumber2.apply(this, arguments);
}
function _createQuerys(constraints) {
  var result = [];
  var validQueryTypes = ["where", "orderBy", "limit"];
  constraints.forEach(function (constraint) {
    var _constraint = _toArray(constraint),
      type = _constraint[0],
      args = _constraint.slice(1);
    switch (type) {
      case "where":
        result.push(_firestore.where.apply(void 0, _toConsumableArray(args)));
        break;
      case "orderBy":
        result.push((0, _firestore.orderBy)(args[0], args[1] || "asc"));
        break;
      case "limit":
        result.push((0, _firestore.limit)(args[0]));
        break;
      default:
        // eslint-disable-next-line no-console
        console.warn("Unknown query type: ".concat(type, ". Valid query types are: ").concat(validQueryTypes.join(", ")));
        throw new Error("Invalid query type: ".concat(type, ". Please use one of: ").concat(validQueryTypes.join(", ")));
    }
  });
  return result;
}
/**
 * 文字列を受け取り、Firestore の tokenMap による検索を行うためのクエリオブジェクトの
 * 配列を返します。
 * @param {string} constraints - tokenMap による検索に使用する文字列
 * @returns {Array<Object>} - クエリオブジェクトの配列
 */
function _createTokenMapQuerys(constraints) {
  var result = [];
  var tokens = [];
  var target = constraints.replace(/[\uD800-\uDBFF]|[\uDC00-\uDFFF]|~|\*|\[|\]|\s+/g, "");

  // 1文字と2文字のトークンを生成
  for (var i = 0; i < target.length; i++) {
    tokens.push(target.substring(i, i + 1));
  }
  for (var _i2 = 0; _i2 < target.length - 1; _i2++) {
    tokens.push(target.substring(_i2, _i2 + 2));
  }

  // tokenMapに含まれるトークンでFirestoreクエリを実行するためのwhere条件を追加
  tokens.forEach(function (token) {
    result.push((0, _firestore.where)("tokenMap.".concat(token), "==", true));
  });
  return result;
}