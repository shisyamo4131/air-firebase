"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firestore = require("firebase/firestore");
var _firestoreMessages = require("./firestore-messages.js");
var _firebaseInit = require("../firebase.init.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
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
 *   但し、削除処理がトランザクションであった場合、従属ドキュメントの存在をチェックしません。
 *   サブクラス側でhasChild()を使ってチェックする必要があります。
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
 * @version 1.8.0
 * @see https://firebase.google.com/docs/firestore
 * @updates
 * - version 1.8.0 - 2024-09-23 - delete()で、transactionが設定されている場合は従属ドキュメントの存在チェックを行わないように修正。
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
var _hasMany = /*#__PURE__*/new WeakMap();
var _logicalDelete = /*#__PURE__*/new WeakMap();
var _listener = /*#__PURE__*/new WeakMap();
var _items = /*#__PURE__*/new WeakMap();
var _tokenFields = /*#__PURE__*/new WeakMap();
var _classProps = /*#__PURE__*/new WeakMap();
var _FireModel_brand = /*#__PURE__*/new WeakSet();
var FireModel = exports["default"] = /*#__PURE__*/function () {
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
  function FireModel() {
    var _item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var collectionPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var _hasMany2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var logicalDelete = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var tokenFields = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var classProps = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    _classCallCheck(this, FireModel);
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
    _classPrivateMethodInitSpec(this, _FireModel_brand);
    /**
     * ドキュメントのコレクションパスです。
     */
    _classPrivateFieldInitSpec(this, _collectionPath, "");
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
    /**
     * ドキュメントの削除時に論理削除を適用するかどうかを表すフラグです。
     */
    _classPrivateFieldInitSpec(this, _logicalDelete, false);
    /**
     * リアルタイムリスナーのデタッチ関数用の変数です。
     */
    _classPrivateFieldInitSpec(this, _listener, null);
    /**
     * subscribeDocs関数のリアルタイムリスナーで取得したドキュメントデータ用の配列です。
     */
    _classPrivateFieldInitSpec(this, _items, []);
    /**
     * tokenMapに反映させるフィールドのリストです。
     */
    _classPrivateFieldInitSpec(this, _tokenFields, []);
    _classPrivateFieldInitSpec(this, _classProps, {});
    _classPrivateFieldSet(_collectionPath, this, collectionPath);
    _assertClassBrand(_FireModel_brand, this, _validateHasMany).call(this, _hasMany2);
    _classPrivateFieldSet(_hasMany, this, _hasMany2);
    _classPrivateFieldSet(_logicalDelete, this, logicalDelete);
    _classPrivateFieldSet(_tokenFields, this, tokenFields);
    _classPrivateFieldSet(_classProps, this, classProps);
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
   * 当該インスタンスを複製したインスタンスを返します。
   * - vueコンポーネントにおいてインスタンスを親に返す場合など、参照渡しを回避するのに使用します。
   * @returns {this.constructor} - 複製された新しいインスタンス
   ****************************************************************************/
  return _createClass(FireModel, [{
    key: "clone",
    value: function clone() {
      // return Object.assign(new this.constructor(), structuredClone(this));
      return new this.constructor(this);
    }
  }, {
    key: "validateProperties",
    value:
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
    function validateProperties() {
      var _this = this;
      Object.keys(_classPrivateFieldGet(_classProps, this)).forEach(function (key) {
        var propConfig = _classPrivateFieldGet(_classProps, _this)[key];
        // 必須チェック
        if (propConfig.required && (_this[key] === undefined || _this[key] === null || _this[key] === "")) {
          throw new Error("".concat(key, "\u306F\u5FC5\u9808\u3067\u3059\u3002"));
        }

        // バリデーションチェック
        if (propConfig.validator && !propConfig.validator(_this[key])) {
          throw new Error("".concat(key, "\u306E\u5024\u304C\u7121\u52B9\u3067\u3059: ").concat(_this[key]));
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
  }, {
    key: "initialize",
    value:
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
    function initialize() {
      var _this2 = this,
        _item$createAt,
        _item$updateAt;
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      /**
       * classPropsに定義されているプロパティを初期化
       */
      Object.keys(_classPrivateFieldGet(_classProps, this)).forEach(function (key) {
        var propDefault = _classPrivateFieldGet(_classProps, _this2)[key]["default"];
        _this2[key] = typeof propDefault === "function" ? propDefault() : propDefault;
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
       * `item`が保有するすべてのプロパティについて、自身の同一名プロパティに値を複製します。
       * - オブジェクトの参照渡しを避けるためJSON.parse(JSON.stringify(item[key]))を使っていましたが、
       *   プロパティの値がカスタムクラスであった場合に、プレーンなオブジェクトに変換されていまっていました。
       * - サブクラスで`customClassMap`を用意し、プロパティにカスタムクラスが定義されている場合、
       *   当該クラスのインスタンスをセットするようにしました。
       */

      // Object.keys(item).forEach((key) => {
      //   if (key in this && key !== "createAt" && key !== "updateAt") {
      //     this[key] = JSON.parse(JSON.stringify(item[key]));
      //   }
      // });

      // サブクラスで定義されたcustomClassMapを取得
      var customClassMap = this.constructor.customClassMap || {};
      Object.keys(item).forEach(function (key) {
        if (key in _this2 && key !== "createAt" && key !== "updateAt") {
          // 配列の場合、配列の各要素にカスタムクラスを適用
          if (Array.isArray(item[key]) && customClassMap[key]) {
            _this2[key] = item[key].map(function (element) {
              return new customClassMap[key](element);
            });
          }
          // カスタムクラスのマッピングがある場合、そのクラスで再初期化
          else if (customClassMap[key] && item[key] instanceof Object) {
            _this2[key] = new customClassMap[key](item[key]);
          }
          // オブジェクト以外のプリミティブ型（文字列、数値、ブールなど）の場合
          else if (_typeof(item[key]) !== "object") {
            _this2[key] = item[key];
          }
          // 通常のオブジェクトの場合はディープコピー
          else {
            _this2[key] = JSON.parse(JSON.stringify(item[key]));
          }
        }
      });
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
      var _this3 = this;
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
          return _this3.fromFirestore(snapshot);
        }
      };
    }

    // /****************************************************************************
    //  * クラスインスタンスを純粋なオブジェクトに変換します。
    //  * - 継承先のクラスで定義されたプロパティも含めて出力します。
    //  * - `enumerable: true`のプロパティのみを出力します。
    //  *
    //  * @returns {Object} - Firestoreに保存可能なオブジェクト形式
    //  ****************************************************************************/
    // toObject() {
    //   const obj = {};

    //   // プロトタイプチェーンをたどってプロパティを収集
    //   let currentObj = this;
    //   while (currentObj !== null) {
    //     Object.entries(Object.getOwnPropertyDescriptors(currentObj)).forEach(
    //       ([key, descriptor]) => {
    //         if (descriptor.enumerable) {
    //           obj[key] = this[key];
    //         }
    //       }
    //     );
    //     currentObj = Object.getPrototypeOf(currentObj);
    //   }

    //   return obj;
    // }

    /****************************************************************************
     * クラスインスタンスを純粋なオブジェクトに変換します。
     * - 継承先のクラスで定義されたプロパティも含めて出力します。
     * - `enumerable: true`のプロパティのみを出力します。
     * - カスタムクラスが`toObject`を持たない場合はそのまま出力します。
     * - 値がない場合は`null`を出力します。
     * - 配列の各要素がカスタムクラスの場合も対応します。
     * - カスタムクラスを持たないオブジェクトはディープコピーします。
     *
     * @returns {Object} - Firestoreに保存可能なオブジェクト形式
     ****************************************************************************/
  }, {
    key: "toObject",
    value: function toObject() {
      var _this4 = this;
      var obj = {};

      // プロトタイプチェーンをたどってプロパティを収集
      var currentObj = this;
      while (currentObj !== null) {
        Object.entries(Object.getOwnPropertyDescriptors(currentObj)).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            descriptor = _ref2[1];
          if (descriptor.enumerable) {
            var value = _this4[key];

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
      return obj;
    }

    // /****************************************************************************
    //  * Firestoreから読み込んだデータをクラスインスタンスに変換するメソッドです。
    //  * - サブクラスでオーバーライドすることができます。
    //  *
    //  * @param {Object} snapshot - Firestoreから取得したドキュメントスナップショット
    //  * @returns {Object} - クラスインスタンス
    //  ****************************************************************************/
    // fromFirestore(snapshot) {
    //   const data = snapshot.data();
    //   return new this.constructor(
    //     data,
    //     this.#collectionPath,
    //     this.#hasMany,
    //     this.#logicalDelete
    //   );
    // }

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
     * - `classProps`で定義されたプロパティについて、`validateProperties()`でチェックを行います。
     * - コレクション単位で必要な処理がある場合にオーバーライドして処理を追加してください。
     * - サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     ****************************************************************************/
  }, {
    key: "beforeCreate",
    value: function beforeCreate() {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        try {
          _this5.validateProperties();
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
     * - `classProps`で定義されたプロパティについて、`validateProperties()`でチェックを行います。
     * - コレクション単位で必要な処理がある場合にオーバーライドして処理を追加してください。
     * - サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     ****************************************************************************/
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      var _this6 = this;
      return new Promise(function (resolve, reject) {
        try {
          _this6.validateProperties();
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
  }, {
    key: "create",
    value: (function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this7 = this;
        var _ref3,
          _ref3$docId,
          docId,
          _ref3$useAutonumber,
          useAutonumber,
          _ref3$transaction,
          transaction,
          sender,
          _auth$currentUser,
          colRef,
          docRef,
          errorMsg,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref3 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref3$docId = _ref3.docId, docId = _ref3$docId === void 0 ? null : _ref3$docId, _ref3$useAutonumber = _ref3.useAutonumber, useAutonumber = _ref3$useAutonumber === void 0 ? false : _ref3$useAutonumber, _ref3$transaction = _ref3.transaction, transaction = _ref3$transaction === void 0 ? null : _ref3$transaction;
              sender = "".concat(this.constructor.name, " - create"); // メッセージ出力
              if (docId) {
                // eslint-disable-next-line no-console
                console.info((0, _firestoreMessages.getMessage)(sender, "CREATE_CALLED", docId));
              } else {
                // eslint-disable-next-line no-console
                console.info((0, _firestoreMessages.getMessage)(sender, "CREATE_CALLED_NO_DOCID"));
              }
              _context2.prev = 3;
              // ドキュメント作成準備
              this.createAt = new Date();
              this.updateAt = new Date();
              this.uid = (_firebaseInit.auth === null || _firebaseInit.auth === void 0 || (_auth$currentUser = _firebaseInit.auth.currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) || "unknown";
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = docId ? (0, _firestore.doc)(colRef, docId).withConverter(this.converter()) : (0, _firestore.doc)(colRef).withConverter(this.converter());
              this.docId = docRef.id;
              _context2.next = 12;
              return this.beforeCreate();
            case 12:
              if (!useAutonumber) {
                _context2.next = 23;
                break;
              }
              if (!transaction) {
                _context2.next = 19;
                break;
              }
              _context2.next = 16;
              return _assertClassBrand(_FireModel_brand, this, _createWithAutonumber).call(this, transaction, this);
            case 16:
              transaction.set(docRef, this);
              _context2.next = 21;
              break;
            case 19:
              _context2.next = 21;
              return (0, _firestore.runTransaction)(_firebaseInit.firestore, /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newTransaction) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _assertClassBrand(_FireModel_brand, _this7, _createWithAutonumber).call(_this7, newTransaction, _this7);
                      case 2:
                        newTransaction.set(docRef, _this7);
                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x) {
                  return _ref4.apply(this, arguments);
                };
              }());
            case 21:
              _context2.next = 25;
              break;
            case 23:
              _context2.next = 25;
              return transaction ? transaction.set(docRef, this) : (0, _firestore.setDoc)(docRef, this);
            case 25:
              _context2.next = 27;
              return this.afterCreate();
            case 27:
              // 成功メッセージ
              console.info((0, _firestoreMessages.getMessage)(sender, "CREATE_DOC_SUCCESS", _classPrivateFieldGet(_collectionPath, this), docRef.id));
              return _context2.abrupt("return", docRef);
            case 31:
              _context2.prev = 31;
              _context2.t0 = _context2["catch"](3);
              errorMsg = "Error in ".concat(sender, ": ").concat(_context2.t0.message); // eslint-disable-next-line no-console
              console.error(errorMsg);
              throw new Error(errorMsg);
            case 36:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 31]]);
      }));
      function create() {
        return _create.apply(this, arguments);
      }
      return create;
    }()
    /****************************************************************************
     * 自動採番を利用してドキュメントを作成します。
     * @param {Object} transaction Firestoreのトランザクションオブジェクト
     * @param {Object} item ドキュメントとして登録するデータオブジェクト
     * @returns {Promise<void>} - ドキュメントが存在しない場合は警告を出力し、存在する場合はプロパティにデータをセットします。
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
              sender = "".concat(this.constructor.name, " - fetch");
              if (docId) {
                _context3.next = 4;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "FETCH_CALLED_NO_DOCID"));
            case 4:
              // eslint-disable-next-line no-console
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_CALLED", _classPrivateFieldGet(_collectionPath, this), docId));
              _context3.prev = 5;
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId);
              _context3.next = 10;
              return (0, _firestore.getDoc)(docRef);
            case 10:
              docSnapshot = _context3.sent;
              if (docSnapshot.exists()) {
                _context3.next = 14;
                break;
              }
              // eslint-disable-next-line no-console
              console.warn((0, _firestoreMessages.getMessage)(sender, "FETCH_NO_DOCUMENT", docId));
              return _context3.abrupt("return", false);
            case 14:
              this.initialize(docSnapshot.data());
              // eslint-disable-next-line no-console
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_SUCCESS"));
              return _context3.abrupt("return", true);
            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](5);
              // eslint-disable-next-line no-console
              console.error("[".concat(sender, "] ").concat(_context3.t0.message));
              throw new Error("Document fetch failed: ".concat(_context3.t0.message));
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[5, 19]]);
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
              sender = "".concat(this.constructor.name, " - fetchDoc");
              if (docId) {
                _context4.next = 4;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_CALLED_NO_DOCID"));
            case 4:
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_CALLED", _classPrivateFieldGet(_collectionPath, this), docId));
              _context4.prev = 5;
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId).withConverter(this.converter());
              _context4.next = 10;
              return (0, _firestore.getDoc)(docRef);
            case 10:
              docSnapshot = _context4.sent;
              if (docSnapshot.exists()) {
                _context4.next = 14;
                break;
              }
              console.warn((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_NO_DOCUMENT", docId));
              return _context4.abrupt("return", null);
            case 14:
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_SUCCESS"));
              return _context4.abrupt("return", docSnapshot.data());
            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4["catch"](5);
              console.error("[".concat(sender, "] ").concat(_context4.t0.message));
              throw _context4.t0;
            case 22:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[5, 18]]);
      }));
      function fetchDoc() {
        return _fetchDoc.apply(this, arguments);
      }
      return fetchDoc;
    }()
    /****************************************************************************
     * Firestoreコレクションから条件に一致するドキュメントを取得し、そのデータを返します。
     * - 返り値の配列に格納されるのは取得したドキュメントデータで初期化された、インスタンス化された当該クラスのオブジェクトです。
     * @param {Array} constraints - Firestoreクエリの条件（whereなど）を格納した配列
     * @returns {Promise<Array<Object>>} - 取得したドキュメントのデータで初期化された、インスタンス化された当該クラスのオブジェクトの配列
     ****************************************************************************/
    )
  }, {
    key: "fetchDocsOld",
    value: (function () {
      var _fetchDocsOld = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var constraints,
          sender,
          colRef,
          q,
          querySnapshot,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              constraints = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : [];
              sender = "".concat(this.constructor.name, " - fetchDocsOld");
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_DOCS_CALLED", _classPrivateFieldGet(_collectionPath, this)));
              _context5.prev = 3;
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              q = _firestore.query.apply(void 0, [colRef].concat(_toConsumableArray(constraints))).withConverter(this.converter());
              _context5.next = 8;
              return (0, _firestore.getDocs)(q);
            case 8:
              querySnapshot = _context5.sent;
              return _context5.abrupt("return", querySnapshot.docs.map(function (doc) {
                return doc.data();
              }));
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](3);
              // eslint-disable-next-line no-console
              console.error("[".concat(sender, "] ").concat(_context5.t0.message));
              throw _context5.t0;
            case 16:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[3, 12]]);
      }));
      function fetchDocsOld() {
        return _fetchDocsOld.apply(this, arguments);
      }
      return fetchDocsOld;
    }()
    /****************************************************************************
     * Firestoreコレクションから条件に一致するドキュメントを取得します。
     * - クエリ形式に応じて、fetchDocsOldを呼び出すか、新バージョンのロジックを実行します。
     * - クエリ条件が文字列であった場合、tokenMapを利用したNgram検索を実行します。
     *
     * @param {Array|string} constraints - クエリ条件の配列（新形式）または検索用の文字列
     * @returns {Promise<Array<Object>>} - 取得したドキュメントのデータで初期化されたオブジェクトの配列
     * @throws {Error} 不明なクエリタイプが指定された場合
     ****************************************************************************/
    )
  }, {
    key: "fetchDocs",
    value: (function () {
      var _fetchDocs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var constraints,
          isOldVersion,
          queryConstraints,
          tokens,
          target,
          i,
          _i,
          validQueryTypes,
          colRef,
          q,
          querySnapshot,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              constraints = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : [];
              // 新形式か旧形式かを判定する関数
              isOldVersion = function isOldVersion(constraints) {
                return Array.isArray(constraints) && constraints.every(function (c) {
                  return typeof c === "function";
                });
              }; // 旧バージョンの引数が与えられた場合、fetchDocsOldをコール
              if (!isOldVersion(constraints)) {
                _context6.next = 6;
                break;
              }
              _context6.next = 5;
              return this.fetchDocsOld(constraints);
            case 5:
              return _context6.abrupt("return", _context6.sent);
            case 6:
              queryConstraints = []; // constraintsが文字列である場合、N-gram検索用のクエリを生成
              if (typeof constraints === "string") {
                tokens = [];
                target = constraints.replace(/[\uD800-\uDBFF]|[\uDC00-\uDFFF]|~|\*|\[|\]|\s+/g, ""); // 1文字と2文字のトークンを生成
                for (i = 0; i < target.length; i++) {
                  tokens.push(target.substring(i, i + 1));
                }
                for (_i = 0; _i < target.length - 1; _i++) {
                  tokens.push(target.substring(_i, _i + 2));
                }

                // tokenMapに含まれるトークンでFirestoreクエリを実行するためのwhere条件を追加
                tokens.forEach(function (token) {
                  queryConstraints.push((0, _firestore.where)("tokenMap.".concat(token), "==", true));
                });
              } else {
                // 新バージョンのfetchDocsでのクエリ生成
                validQueryTypes = ["where", "orderBy", "limit"];
                constraints.forEach(function (constraint) {
                  var _constraint = _toArray(constraint),
                    type = _constraint[0],
                    args = _constraint.slice(1);
                  switch (type) {
                    case "where":
                      queryConstraints.push(_firestore.where.apply(void 0, _toConsumableArray(args)));
                      break;
                    case "orderBy":
                      queryConstraints.push((0, _firestore.orderBy)(args[0], args[1] || "asc"));
                      break;
                    case "limit":
                      queryConstraints.push((0, _firestore.limit)(args[0]));
                      break;
                    default:
                      // eslint-disable-next-line no-console
                      console.warn("Unknown query type: ".concat(type, ". Valid query types are: ").concat(validQueryTypes.join(", ")));
                      throw new Error("Invalid query type: ".concat(type, ". Please use one of: ").concat(validQueryTypes.join(", ")));
                  }
                });
              }

              // Firestoreクエリの実行
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              q = _firestore.query.apply(void 0, [colRef].concat(queryConstraints)).withConverter(this.converter());
              _context6.next = 12;
              return (0, _firestore.getDocs)(q);
            case 12:
              querySnapshot = _context6.sent;
              return _context6.abrupt("return", querySnapshot.docs.map(function (doc) {
                return doc.data();
              }));
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function fetchDocs() {
        return _fetchDocs.apply(this, arguments);
      }
      return fetchDocs;
    }()
    /****************************************************************************
     * 現在プロパティにセットされている値で、ドキュメントを更新します。
     * - FirestoreのupdateメソッドはwithConverterを受け付けないため、toObject()を使用しています。
     * @param {object|null} transaction - Firestoreトランザクションオブジェクト（省略可能）
     * @returns {Promise<DocumentReference>} 更新したドキュメントへの参照
     * @throws {Error} ドキュメントの更新中にエラーが発生した場合にスローされます
     ****************************************************************************/
    )
  }, {
    key: "update",
    value: (function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _ref5,
          _ref5$transaction,
          transaction,
          sender,
          _auth$currentUser2,
          colRef,
          docRef,
          errorMsg,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _ref5 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, _ref5$transaction = _ref5.transaction, transaction = _ref5$transaction === void 0 ? null : _ref5$transaction;
              sender = "".concat(this.constructor.name, " - update"); // 更新呼び出しのログ出力
              // eslint-disable-next-line no-console
              console.info((0, _firestoreMessages.getMessage)(sender, "UPDATE_CALLED", this.docId));
              _context7.prev = 3;
              if (this.docId) {
                _context7.next = 6;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "UPDATE_REQUIRES_DOCID"));
            case 6:
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, this.docId); // updateDocの場合、withConverter.toFirestoreは使用できない。
              // 更新前処理
              _context7.next = 10;
              return this.beforeUpdate();
            case 10:
              // 更新日時とユーザーIDの設定
              this.updateAt = new Date();
              this.uid = (_firebaseInit.auth === null || _firebaseInit.auth === void 0 || (_auth$currentUser2 = _firebaseInit.auth.currentUser) === null || _auth$currentUser2 === void 0 ? void 0 : _auth$currentUser2.uid) || "unknown";

              // ドキュメントの更新処理
              // await updateDoc(docRef, this.toObject());
              _context7.next = 14;
              return transaction ? transaction.update(docRef, this.toObject()) : (0, _firestore.updateDoc)(docRef, this.toObject());
            case 14:
              _context7.next = 16;
              return this.afterUpdate();
            case 16:
              // 成功ログ出力
              // eslint-disable-next-line no-console
              console.info((0, _firestoreMessages.getMessage)(sender, "UPDATE_DOC_SUCCESS", _classPrivateFieldGet(_collectionPath, this), this.docId));
              return _context7.abrupt("return", docRef);
            case 20:
              _context7.prev = 20;
              _context7.t0 = _context7["catch"](3);
              errorMsg = "Error in ".concat(sender, ": ").concat(_context7.t0.message); // eslint-disable-next-line no-console
              console.error(errorMsg);
              throw new Error(errorMsg);
            case 25:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[3, 20]]);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
    /****************************************************************************
     * `hasMany`プロパティにセットされた条件に基づいて、当該クラスに読み込まれているドキュメントデータに
     * 依存している子ドキュメントが存在しているかどうかを返します。
     * @returns {Promise<object|boolean>} - 子ドキュメントが存在する場合は`hasMany`の該当項目を返し、存在しない場合は`false`を返します。
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
              _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_hasMany, this));
              _context8.prev = 1;
              _iterator.s();
            case 3:
              if ((_step = _iterator.n()).done) {
                _context8.next = 15;
                break;
              }
              item = _step.value;
              colRef = item.type === "collection" ? (0, _firestore.collection)(_firebaseInit.firestore, item.collection) : (0, _firestore.collectionGroup)(_firebaseInit.firestore, item.collection);
              whrObj = (0, _firestore.where)(item.field, item.condition, this.docId);
              q = (0, _firestore.query)(colRef, whrObj, (0, _firestore.limit)(1));
              _context8.next = 10;
              return (0, _firestore.getDocs)(q);
            case 10:
              snapshot = _context8.sent;
              if (snapshot.empty) {
                _context8.next = 13;
                break;
              }
              return _context8.abrupt("return", item);
            case 13:
              _context8.next = 3;
              break;
            case 15:
              _context8.next = 20;
              break;
            case 17:
              _context8.prev = 17;
              _context8.t0 = _context8["catch"](1);
              _iterator.e(_context8.t0);
            case 20:
              _context8.prev = 20;
              _iterator.f();
              return _context8.finish(20);
            case 23:
              return _context8.abrupt("return", false);
            case 24:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[1, 17, 20, 23]]);
      }));
      function hasChild() {
        return _hasChild.apply(this, arguments);
      }
      return hasChild;
    }()
    /****************************************************************************
     * 現在のドキュメントIDに該当するドキュメントを削除します。
     * - `logicalDelete`が指定されている場合、削除されたドキュメントはarchiveコレクションに移動されます。
     * @param {object|null} transaction - Firestoreトランザクションオブジェクト（省略可能）
     * @returns {Promise<void>} - 削除が完了すると解決されるPromise
     * @throws {Error} - ドキュメントの削除中にエラーが発生した場合にスローされます
     ****************************************************************************/
    )
  }, {
    key: "delete",
    value: (function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _ref6,
          _ref6$transaction,
          transaction,
          sender,
          hasChild,
          colRef,
          docRef,
          docSnapshot,
          archiveColRef,
          archiveDocRef,
          errorMsg,
          _args10 = arguments;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _ref6 = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {}, _ref6$transaction = _ref6.transaction, transaction = _ref6$transaction === void 0 ? null : _ref6$transaction;
              sender = "".concat(this.constructor.name, " - delete"); // 削除呼び出しのログ出力
              // eslint-disable-next-line no-console
              console.info((0, _firestoreMessages.getMessage)(sender, "DELETE_CALLED", this.docId));
              _context10.prev = 3;
              if (this.docId) {
                _context10.next = 6;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "DELETE_REQUIRES_DOCID"));
            case 6:
              if (transaction) {
                _context10.next = 12;
                break;
              }
              _context10.next = 9;
              return this.hasChild();
            case 9:
              hasChild = _context10.sent;
              if (!hasChild) {
                _context10.next = 12;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "COULD_NOT_DELETE_CHILD_EXIST", hasChild.collection));
            case 12:
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, this.docId);
              /**
               * 2024-09-11 コメント
               * - 物理削除であればドキュメントを取得する必要はない。
               * - 論理削除の場合、archiveコレクションにドキュメントのコピーを作成するために取得が必要
               * - インスタンスに格納されているデータが完全とは言えないため。
               * - 結果、一度ドキュメントを取得する必要がある。
               */
              _context10.next = 16;
              return transaction ? transaction.get(docRef) : (0, _firestore.getDoc)(docRef);
            case 16:
              docSnapshot = _context10.sent;
              if (docSnapshot.exists()) {
                _context10.next = 19;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_DOCUMENT_TO_DELETE", _classPrivateFieldGet(_collectionPath, this), this.docId));
            case 19:
              _context10.next = 21;
              return this.beforeDelete();
            case 21:
              if (!_classPrivateFieldGet(_logicalDelete, this)) {
                _context10.next = 33;
                break;
              }
              archiveColRef = (0, _firestore.collection)(_firebaseInit.firestore, "".concat(_classPrivateFieldGet(_collectionPath, this), "_archive"));
              archiveDocRef = (0, _firestore.doc)(archiveColRef, this.docId);
              if (!transaction) {
                _context10.next = 29;
                break;
              }
              transaction.set(archiveDocRef, docSnapshot.data());
              transaction["delete"](docRef);
              _context10.next = 31;
              break;
            case 29:
              _context10.next = 31;
              return (0, _firestore.runTransaction)(_firebaseInit.firestore, /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(newTransaction) {
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        newTransaction.set(archiveDocRef, docSnapshot.data());
                        newTransaction["delete"](docRef);
                      case 2:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function (_x2) {
                  return _ref7.apply(this, arguments);
                };
              }());
            case 31:
              _context10.next = 35;
              break;
            case 33:
              _context10.next = 35;
              return transaction ? transaction["delete"](docRef) : (0, _firestore.deleteDoc)(docRef);
            case 35:
              _context10.next = 37;
              return this.afterDelete();
            case 37:
              // 成功ログ出力
              // eslint-disable-next-line no-console
              console.info((0, _firestoreMessages.getMessage)(sender, "DELETE_DOC_SUCCESS", _classPrivateFieldGet(_collectionPath, this), this.docId));
              _context10.next = 45;
              break;
            case 40:
              _context10.prev = 40;
              _context10.t0 = _context10["catch"](3);
              errorMsg = "Error in ".concat(sender, ": ").concat(_context10.t0.message); // eslint-disable-next-line no-console
              console.error(errorMsg);
              throw new Error(errorMsg);
            case 45:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[3, 40]]);
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
              sender = "".concat(this.constructor.name, " - deleteAll");
              console.info((0, _firestoreMessages.getMessage)(sender, "DELETE_ALL_CALLED", _classPrivateFieldGet(_collectionPath, this)));
              // 引数のバリデーション
              if (!(typeof batchSize !== "number" || batchSize <= 0)) {
                _context12.next = 6;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "DELETE_ALL_INVALID_BATCH_SIZE"));
            case 6:
              if (!(typeof pauseDuration !== "number" || pauseDuration < 0)) {
                _context12.next = 8;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "DELETE_ALL_INVALID_PAUSE_DURATION"));
            case 8:
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              _context12.prev = 9;
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
            case 11:
              return _context12.delegateYield(_loop(), "t0", 12);
            case 12:
              if (!_context12.t0) {
                _context12.next = 14;
                break;
              }
              return _context12.abrupt("break", 15);
            case 14:
              if (!snapshot.empty) {
                _context12.next = 11;
                break;
              }
            case 15:
              _context12.next = 21;
              break;
            case 17:
              _context12.prev = 17;
              _context12.t1 = _context12["catch"](9);
              console.error("[".concat(sender, "] ").concat(_context12.t1.message));
              throw _context12.t1;
            case 21:
            case "end":
              return _context12.stop();
          }
        }, _callee11, this, [[9, 17]]);
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
              sender = "".concat(this.constructor.name, " - restore");
              if (docId) {
                _context13.next = 5;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "RESTORE_CALLED_NO_DOCID"));
            case 5:
              console.info((0, _firestoreMessages.getMessage)(sender, "RESTORE_CALLED", docId));
            case 6:
              _context13.prev = 6;
              archivePath = "".concat(_classPrivateFieldGet(_collectionPath, this), "_archive");
              archiveColRef = (0, _firestore.collection)(_firebaseInit.firestore, archivePath);
              archiveDocRef = (0, _firestore.doc)(archiveColRef, docId);
              _context13.next = 12;
              return (0, _firestore.getDoc)(archiveDocRef);
            case 12:
              docSnapshot = _context13.sent;
              if (docSnapshot.exists()) {
                _context13.next = 15;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_DOCUMENT_TO_RESTORE", archivePath, docId));
            case 15:
              colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId);
              batch = (0, _firestore.writeBatch)(_firebaseInit.firestore);
              batch["delete"](archiveDocRef);
              batch.set(docRef, docSnapshot.data());
              _context13.next = 22;
              return batch.commit();
            case 22:
              console.info((0, _firestoreMessages.getMessage)(sender, "RESTORE_SUCCESS", _classPrivateFieldGet(_collectionPath, this), docId));
              return _context13.abrupt("return", docRef);
            case 26:
              _context13.prev = 26;
              _context13.t0 = _context13["catch"](6);
              console.error("[".concat(sender, "] ").concat(_context13.t0.message));
              throw _context13.t0;
            case 30:
            case "end":
              return _context13.stop();
          }
        }, _callee12, this, [[6, 26]]);
      }));
      function restore(_x3) {
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
      var sender = "".concat(this.constructor.name, " - unsubscribe");
      console.info((0, _firestoreMessages.getMessage)(sender, "UNSUBSCRIBE_CALLED"));
      if (_classPrivateFieldGet(_listener, this)) {
        _classPrivateFieldGet(_listener, this).call(this);
        _classPrivateFieldSet(_listener, this, null);
        console.info((0, _firestoreMessages.getMessage)(sender, "UNSUBSCRIBE_SUCCESS", _classPrivateFieldGet(_collectionPath, this)));
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
      var _this8 = this;
      /* eslint-disable */
      var sender = "".concat(this.constructor.name, " - subscribe");
      if (!docId) {
        throw new Error((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_CALLED_NO_DOCID", _classPrivateFieldGet(_collectionPath, this)));
      }
      console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_CALLED", _classPrivateFieldGet(_collectionPath, this), docId));
      try {
        if (_classPrivateFieldGet(_listener, this)) {
          console.info((0, _firestoreMessages.getMessage)(sender, "LISTENER_HAS_SET", _classPrivateFieldGet(_collectionPath, this)));
          this.unsubscribe();
        }
        var colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
        var docRef = (0, _firestore.doc)(colRef, docId);
        _classPrivateFieldSet(_listener, this, (0, _firestore.onSnapshot)(docRef, function (docSnapshot) {
          if (docSnapshot.exists()) {
            _this8.initialize(docSnapshot.data()); // ドキュメントデータを初期化
          } else {
            console.warn((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_NO_DOCUMENT", docId));
          }
        }));
        console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_SUCCESS", _classPrivateFieldGet(_collectionPath, this), docId));
      } catch (err) {
        console.error("[".concat(sender, "] ").concat(err.message));
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
  }, {
    key: "subscribeDocsOld",
    value: function subscribeDocsOld() {
      var _this9 = this;
      var constraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      /* eslint-disable */
      var sender = "".concat(this.constructor.name, " - subscribeDocsOld");
      console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_DOCS_CALLED", _classPrivateFieldGet(_collectionPath, this)));
      try {
        if (_classPrivateFieldGet(_listener, this)) {
          console.info((0, _firestoreMessages.getMessage)(sender, "LISTENER_HAS_SET", _classPrivateFieldGet(_collectionPath, this)));
          this.unsubscribe();
        }
        var colRef = (0, _firestore.collection)(_firebaseInit.firestore, _classPrivateFieldGet(_collectionPath, this));
        var q = _firestore.query.apply(void 0, [colRef].concat(_toConsumableArray(constraints))).withConverter(this.converter());
        _classPrivateFieldSet(_listener, this, (0, _firestore.onSnapshot)(q, function (snapshot) {
          snapshot.docChanges().forEach(function (change) {
            var item = change.doc.data();
            var index = _classPrivateFieldGet(_items, _this9).findIndex(function (_ref8) {
              var docId = _ref8.docId;
              return docId === item.docId;
            });
            if (change.type === "added") _classPrivateFieldGet(_items, _this9).push(item);
            if (change.type === "modified") _classPrivateFieldGet(_items, _this9).splice(index, 1, item);
            if (change.type === "removed") _classPrivateFieldGet(_items, _this9).splice(index, 1);
          });
        }));
        console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_DOCS_SUCCESS", _classPrivateFieldGet(_collectionPath, this)));
        return _classPrivateFieldGet(_items, this);
      } catch (err) {
        console.error("[".concat(sender, "] ").concat(err.message));
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
  }, {
    key: "subscribeDocs",
    value: function subscribeDocs() {
      var _this10 = this;
      var constraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var sender = "".concat(this.constructor.name, " - subscribeDocs");

      // 新形式か旧形式かを判定する関数
      var isOldVersion = function isOldVersion(constraints) {
        return Array.isArray(constraints) && constraints.every(function (c) {
          return typeof c === "function";
        });
      };

      // 旧バージョンの引数が与えられた場合、subscribeDocsOldをコール
      if (isOldVersion(constraints)) {
        return this.subscribeDocsOld(constraints);
      }

      // eslint-disable-next-line no-console
      console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_DOCS_CALLED", _classPrivateFieldGet(_collectionPath, this)));
      try {
        if (_classPrivateFieldGet(_listener, this)) {
          // eslint-disable-next-line no-console
          console.info((0, _firestoreMessages.getMessage)(sender, "LISTENER_HAS_SET", _classPrivateFieldGet(_collectionPath, this)));
          this.unsubscribe();
        }
        var queryConstraints = [];

        // constraintsが文字列である場合、N-gram検索用のクエリを生成
        if (typeof constraints === "string") {
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
            queryConstraints.push((0, _firestore.where)("tokenMap.".concat(token), "==", true));
          });
        } else {
          // 通常のクエリ条件（where, orderBy, limit）を処理
          var validQueryTypes = ["where", "orderBy", "limit"];
          constraints.forEach(function (constraint) {
            var _constraint2 = _toArray(constraint),
              type = _constraint2[0],
              args = _constraint2.slice(1);
            switch (type) {
              case "where":
                queryConstraints.push(_firestore.where.apply(void 0, _toConsumableArray(args)));
                break;
              case "orderBy":
                queryConstraints.push((0, _firestore.orderBy)(args[0], args[1] || "asc"));
                break;
              case "limit":
                queryConstraints.push((0, _firestore.limit)(args[0]));
                break;
              default:
                // eslint-disable-next-line no-console
                console.warn("Unknown query type: ".concat(type, ". Valid query types are: ").concat(validQueryTypes.join(", ")));
                throw new Error("Invalid query type: ".concat(type, ". Please use one of: ").concat(validQueryTypes.join(", ")));
            }
          });
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
        console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_DOCS_SUCCESS", _classPrivateFieldGet(_collectionPath, this)));
        return _classPrivateFieldGet(_items, this);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("[".concat(sender, "] ").concat(err.message));
        throw err;
      }
    }
  }]);
}();
function _validateHasMany(hasMany) {
  if (!Array.isArray(hasMany)) {
    throw new Error("hasManyプロパティは配列である必要があります。");
  }
  hasMany.forEach(function (relation, index) {
    var requiredKeys = ["collection", "field", "condition", "type"];
    var allowedKeys = new Set(requiredKeys);

    // 各要素がオブジェクトであることを確認
    if (_typeof(relation) !== "object" || relation === null) {
      throw new Error("hasMany\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8981\u7D20\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9: ".concat(index, ", \u5024: ").concat(JSON.stringify(relation)));
    }

    // 必須のキーがすべて存在することを確認
    requiredKeys.forEach(function (key) {
      if (!(key in relation)) {
        throw new Error("hasMany\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8981\u7D20\u306B\u306F".concat(key, "\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5FC5\u8981\u3067\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9: ").concat(index, ", \u5024: ").concat(JSON.stringify(relation)));
      }
    });

    // 余分なキーがないことを確認
    Object.keys(relation).forEach(function (key) {
      if (!allowedKeys.has(key)) {
        throw new Error("hasMany\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u8981\u7D20\u306B\u7121\u52B9\u306A\u30D7\u30ED\u30D1\u30C6\u30A3".concat(key, "\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9: ").concat(index, ", \u5024: ").concat(JSON.stringify(relation)));
      }
    });

    // typeプロパティの値を確認
    var validTypes = ["collection", "subcollection"];
    if (!validTypes.includes(relation.type)) {
      throw new Error("hasMany\u30D7\u30ED\u30D1\u30C6\u30A3\u306Etype\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F'collection'\u307E\u305F\u306F'subcollection'\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9: ".concat(index, ", \u5024: ").concat(JSON.stringify(relation)));
    }
  });
}
function _generateTokenMap() {
  var _this11 = this;
  if (!_classPrivateFieldGet(_tokenFields, this).length) return null;
  var arr = [];
  _classPrivateFieldGet(_tokenFields, this).forEach(function (fieldName) {
    if (fieldName in _this11 && _this11[fieldName]) {
      var target = _this11[fieldName].replace(/[\uD800-\uDBFF]|[\uDC00-\uDFFF]|~|\*|\[|\]|\s+/g, "");
      for (var i = 0; i < target.length; i++) {
        arr.push([target.substring(i, i + 1), true]);
      }
      for (var _i3 = 0; _i3 < target.length - 1; _i3++) {
        arr.push([target.substring(_i3, _i3 + 2), true]);
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
function _createWithAutonumber(_x4, _x5) {
  return _createWithAutonumber2.apply(this, arguments);
}
function _createWithAutonumber2() {
  _createWithAutonumber2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(transaction, item) {
    var sender, autonumRef, autonumDoc, num, length, newCode, maxPossibleCode;
    return _regeneratorRuntime().wrap(function _callee13$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          /* eslint-disable */
          sender = "".concat(this.constructor.name, " - createWithAutonumber");
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
          throw new Error((0, _firestoreMessages.getMessage)(sender, "MISSING_AUTONUMBER", _classPrivateFieldGet(_collectionPath, this)));
        case 8:
          if (autonumDoc.data().status) {
            _context14.next = 10;
            break;
          }
          throw new Error((0, _firestoreMessages.getMessage)(sender, "INVALID_AUTONUMBER_STATUS", _classPrivateFieldGet(_collectionPath, this)));
        case 10:
          num = autonumDoc.data().current + 1;
          length = autonumDoc.data().length;
          newCode = (Array(length).join("0") + num).slice(-length);
          maxPossibleCode = Array(length + 1).join("0");
          if (!(newCode === maxPossibleCode)) {
            _context14.next = 16;
            break;
          }
          throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_MORE_DOCUMENT", _classPrivateFieldGet(_collectionPath, this)));
        case 16:
          item[autonumDoc.data().field] = newCode;
          transaction.update(autonumRef, {
            current: num
          });
          _context14.next = 24;
          break;
        case 20:
          _context14.prev = 20;
          _context14.t0 = _context14["catch"](1);
          console.error("[".concat(sender, "] ").concat(_context14.t0.message));
          throw _context14.t0;
        case 24:
        case "end":
          return _context14.stop();
      }
    }, _callee13, this, [[1, 20]]);
  }));
  return _createWithAutonumber2.apply(this, arguments);
}