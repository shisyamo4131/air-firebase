"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firestore = require("firebase/firestore");
var _firestoreMessages = require("./firestore-messages");
var _firebase = require("../firebase.init");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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
 *
 * 使用方法:
 * このクラスは直接使用せず、特定のコレクションに対応するサブクラスを作成して使用します。
 * サブクラスで独自のフィールドやメソッドを追加することで、特定のビジネスロジックに対応可能です。
 *
 * コンストラクタの使用例:
 * ```javascript
 * class OrderModel extends FireModel {
 *   constructor(data = {}) {
 *     super(data, 'orders', [
 *       { collection: 'orderItems', field: 'orderId', condition: '==', type: 'subcollection' }
 *     ], true);  // `true` は論理削除を有効にするフラグ
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
 *
 * 注意:
 * - このクラスは、FirestoreのドキュメントIDや作成日時、更新日時、ユーザーIDなどのメタデータを自動管理します。
 * - コレクション間の依存関係（hasMany）は、このクラスを通じて管理され、削除時の整合性を保証します。
 * - 論理削除を有効にした場合、削除されたドキュメントは自動的にアーカイブコレクションに移動されます。
 * - Firestoreのリアルタイムリスナーを活用することで、ドキュメントの変更をリアルタイムで監視し、自動的にデータモデルに反映します。
 *
 * @author shisyamo4131
 * @version 1.0.0
 * @see https://firebase.google.com/docs/firestore
 *
 * @updates
 * - version 1.0.0 - 2024-08-19 - 初版完成
 */
var _collectionPath = /*#__PURE__*/new WeakMap();
var _hasMany = /*#__PURE__*/new WeakMap();
var _logicalDelete = /*#__PURE__*/new WeakMap();
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
   * @param {string} collectionPath - Firestoreコレクションのパス
   * @param {Array<Object>} hasMany - 依存するコレクションの情報を格納した配列
   * @param {boolean} logicalDelete - 論理削除を行うかどうかを指定するフラグ
   */
  function FireModel() {
    var _item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var collectionPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var hasMany = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var logicalDelete = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _classCallCheck(this, FireModel);
    /**
     * Firestore用のコンバーターを提供します。
     * ドキュメントデータの保存および読み込み時に使用されます。
     * @returns {object} - Firestoreの`toFirestore`および`fromFirestore`メソッドを含むコンバーターオブジェクト
     */
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
    _classPrivateFieldSet(_collectionPath, this, collectionPath);
    _classPrivateFieldSet(_hasMany, this, hasMany);
    _classPrivateFieldSet(_logicalDelete, this, logicalDelete);
    this.initialize(_item);
  }

  /**
   * クラスインスタンスを純粋なオブジェクトに変換します。
   * 継承先のクラスで定義されたプロパティも含めて出力します。
   * `enumerable: true`のプロパティのみを出力します。
   * @returns {Object} - Firestoreに保存可能なオブジェクト形式
   */
  return _createClass(FireModel, [{
    key: "toObject",
    value: function toObject() {
      var _this = this;
      var obj = {};

      // プロトタイプチェーンをたどってプロパティを収集
      var currentObj = this;
      while (currentObj !== null) {
        Object.entries(Object.getOwnPropertyDescriptors(currentObj)).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            descriptor = _ref2[1];
          if (descriptor.enumerable) {
            obj[key] = _this[key];
          }
        });
        currentObj = Object.getPrototypeOf(currentObj);
      }
      return obj;
    }

    /**
     * データモデルを初期化するためのメソッドです。
     * コンストラクタから呼び出されるほか、独自に呼び出すことで
     * データモデルを初期化することができます。
     * @param {object} item - 初期化するデータモデルのプロパティを含むオブジェクト
     * @returns {void}
     */
  }, {
    key: "initialize",
    value: function initialize() {
      var _item$createAt,
        _item$updateAt,
        _this2 = this;
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.docId = (item === null || item === void 0 ? void 0 : item.docId) || "";

      /**
       * createAt、updateAtは型をチェックし、Dateオブジェクトに変換して初期化
       * FirestoreにDateオブジェクトを保存すると、Firestore timestampとして登録されるため、
       * これをtoDate()を使用してDateオブジェクトに変換します。
       */
      if (item.createAt instanceof Date) {
        this.createAt = item.createAt;
      } else if ((_item$createAt = item.createAt) !== null && _item$createAt !== void 0 && _item$createAt.toDate) {
        this.createAt = item.createAt.toDate();
      } else {
        this.createAt = null;
      }
      if (item.updateAt instanceof Date) {
        this.updateAt = item.updateAt;
      } else if ((_item$updateAt = item.updateAt) !== null && _item$updateAt !== void 0 && _item$updateAt.toDate) {
        this.updateAt = item.updateAt.toDate();
      } else {
        this.updateAt = null;
      }
      this.uid = (item === null || item === void 0 ? void 0 : item.uid) || "";
      Object.keys(item).forEach(function (key) {
        if (key in _this2 && key !== "createAt" && key !== "updateAt") {
          _this2[key] = JSON.parse(JSON.stringify(item[key]));
        }
      });
    }
  }, {
    key: "beforeCreate",
    value:
    /**
     * ドキュメント作成前に実行されるメソッドです。
     * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
     * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     */
    function beforeCreate() {
      return Promise.resolve();
    }

    /**
     * ドキュメント作成後に実行されるメソッドです。
     * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
     * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     */
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      return Promise.resolve();
    }

    /**
     * ドキュメント更新前に実行されるメソッドです。
     * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
     * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     */
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      return Promise.resolve();
    }

    /**
     * ドキュメント更新後に実行されるメソッドです。
     * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
     * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     */
  }, {
    key: "afterUpdate",
    value: function afterUpdate() {
      return Promise.resolve();
    }

    /**
     * ドキュメント削除前に実行されるメソッドです。
     * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
     * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     */
  }, {
    key: "beforeDelete",
    value: function beforeDelete() {
      return Promise.resolve();
    }

    /**
     * ドキュメント削除後に実行されるメソッドです。
     * コレクション単位で必要な処理がある場合にオーバーライドして使用します。
     * サブクラスでこのメソッドをオーバーライドする際は、Promiseを返すようにしてください。
     * @returns {Promise<void>} - デフォルトでは、解決済みのPromiseを返します。
     */
  }, {
    key: "afterDelete",
    value: function afterDelete() {
      return Promise.resolve();
    }

    /**
     * ドキュメントを書き込みます。
     * ‐ docIdを指定することで、ドキュメントIDを指定した書き込みを行うことが可能です。
     * - useAutonumberをtrueにすると自動採番を行います。
     * - useAutonumberの既定値はfalseです。自動採番を行うコレクションの場合、このメソッドをオーバーライドし、useAutonumberの既定値をtrueにすることをお勧めします。
     * @param {string|null} docId - 指定されたドキュメントID（省略可能）
     * @param {boolean} useAutonumber - 自動採番を行うかどうかのフラグ（省略可能）
     * @returns {Promise<DocumentReference>} - 作成されたドキュメントのリファレンス
     */
  }, {
    key: "create",
    value: (function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this3 = this;
        var _ref3,
          _ref3$docId,
          docId,
          _ref3$useAutonumber,
          useAutonumber,
          sender,
          _auth$currentUser,
          colRef,
          docRef,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref3 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref3$docId = _ref3.docId, docId = _ref3$docId === void 0 ? null : _ref3$docId, _ref3$useAutonumber = _ref3.useAutonumber, useAutonumber = _ref3$useAutonumber === void 0 ? false : _ref3$useAutonumber;
              /* eslint-disable */
              sender = "FireModel - create";
              if (docId) {
                console.info((0, _firestoreMessages.getMessage)(sender, "CREATE_CALLED", docId));
              } else {
                console.info((0, _firestoreMessages.getMessage)(sender, "CREATE_CALLED_NO_DOCID"));
              }
              _context2.prev = 3;
              this.createAt = new Date();
              this.updateAt = new Date();
              this.uid = (_firebase.auth === null || _firebase.auth === void 0 || (_auth$currentUser = _firebase.auth.currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) || "unknown";
              colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = docId ? (0, _firestore.doc)(colRef, docId).withConverter(_assertClassBrand(_FireModel_brand, this, _converter).call(this)) : (0, _firestore.doc)(colRef).withConverter(_assertClassBrand(_FireModel_brand, this, _converter).call(this));
              this.docId = docRef.id;
              _context2.next = 12;
              return this.beforeCreate();
            case 12:
              if (!useAutonumber) {
                _context2.next = 17;
                break;
              }
              _context2.next = 15;
              return (0, _firestore.runTransaction)(_firebase.firestore, /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(transaction) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _assertClassBrand(_FireModel_brand, _this3, _createWithAutonumber).call(_this3, transaction, _this3);
                      case 2:
                        transaction.set(docRef, _this3);
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
            case 15:
              _context2.next = 19;
              break;
            case 17:
              _context2.next = 19;
              return (0, _firestore.setDoc)(docRef, this);
            case 19:
              _context2.next = 21;
              return this.afterCreate();
            case 21:
              console.info((0, _firestoreMessages.getMessage)(sender, "CREATE_DOC_SUCCESS", _classPrivateFieldGet(_collectionPath, this), docRef.id));
              return _context2.abrupt("return", docRef);
            case 25:
              _context2.prev = 25;
              _context2.t0 = _context2["catch"](3);
              console.error("[".concat(sender, "] ").concat(_context2.t0.message));
              throw _context2.t0;
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 25]]);
      }));
      function create() {
        return _create.apply(this, arguments);
      }
      return create;
    }()
    /**
     * 自動採番を利用してドキュメントを作成します。
     * @param {Object} transaction Firestoreのトランザクションオブジェクト
     * @param {Object} item ドキュメントとして登録するデータオブジェクト
     * @returns {Promise<void>} - ドキュメントが存在しない場合は警告を出力し、存在する場合はプロパティにデータをセットします。
     */
    )
  }, {
    key: "fetch",
    value: (
    /**
     * 指定されたドキュメントIDに該当するドキュメントを取得してプロパティに該当するデータをセットします。
     * - 当該クラスのプロパティにデータをセットするため、`withConverter`を使っていません。
     * @param {string} docId - 取得するドキュメントのID
     * @returns
     */
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
              /* eslint-disable */
              sender = "FireModel - fetch";
              if (docId) {
                _context3.next = 4;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "FETCH_CALLED_NO_DOCID"));
            case 4:
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_CALLED", _classPrivateFieldGet(_collectionPath, this), docId));
              _context3.prev = 5;
              colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId);
              _context3.next = 10;
              return (0, _firestore.getDoc)(docRef);
            case 10:
              docSnapshot = _context3.sent;
              if (docSnapshot.exists()) {
                _context3.next = 14;
                break;
              }
              console.warn((0, _firestoreMessages.getMessage)(sender, "FETCH_NO_DOCUMENT", docId));
              return _context3.abrupt("return");
            case 14:
              this.initialize(docSnapshot.data());
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_SUCCESS"));
              _context3.next = 22;
              break;
            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](5);
              console.error("[".concat(sender, "] ").concat(_context3.t0.message));
              throw _context3.t0;
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[5, 18]]);
      }));
      function fetch() {
        return _fetch.apply(this, arguments);
      }
      return fetch;
    }()
    /**
     * 指定されたドキュメントIDに該当するドキュメントを取得して返します。
     * ‐ `fetch`と異なり、取得したドキュメントデータをインスタンス化された当該クラスのオブジェクトとして返します。
     * - 既にインスタンス化されたクラスオブジェクトはそのままに、新たなインスタンスが必要な場合に使用します。
     * @param {string} docId - 取得するドキュメントのID
     * @returns {Promise<Object|null>} - 取得されたドキュメントデータが返されます。ドキュメントが存在しない場合は`null`が返されます。
     */
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
              sender = "FireModel - fetchDoc";
              if (docId) {
                _context4.next = 4;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_CALLED_NO_DOCID"));
            case 4:
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_DOC_CALLED", _classPrivateFieldGet(_collectionPath, this), docId));
              _context4.prev = 5;
              colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId).withConverter(_assertClassBrand(_FireModel_brand, this, _converter).call(this));
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
    /**
     * Firestoreコレクションから条件に一致するドキュメントを取得し、そのデータを返します。
     * - 返り値の配列に格納されるのは取得したドキュメントデータで初期化された、インスタンス化された当該クラスのオブジェクトです。
     * @param {Array} constraints - Firestoreクエリの条件（whereなど）を格納した配列
     * @returns {Promise<Array<Object>>} - 取得したドキュメントのデータで初期化された、インスタンス化された当該クラスのオブジェクトの配列
     */
    )
  }, {
    key: "fetchDocs",
    value: (function () {
      var _fetchDocs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
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
              /* eslint-disable */
              sender = "FireModel - fetchDocs";
              console.info((0, _firestoreMessages.getMessage)(sender, "FETCH_DOCS_CALLED", _classPrivateFieldGet(_collectionPath, this)));
              _context5.prev = 3;
              colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
              q = _firestore.query.apply(void 0, [colRef].concat(_toConsumableArray(constraints))).withConverter(_assertClassBrand(_FireModel_brand, this, _converter).call(this));
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
              console.error("[".concat(sender, "] ").concat(_context5.t0.message));
              throw _context5.t0;
            case 16:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[3, 12]]);
      }));
      function fetchDocs() {
        return _fetchDocs.apply(this, arguments);
      }
      return fetchDocs;
    }()
    /**
     * 現在プロパティにセットされている値で、ドキュメントを更新します。
     * @returns {Promise<DocumentReference>} 更新したドキュメントへの参照
     */
    )
  }, {
    key: "update",
    value: (function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var sender, _auth$currentUser2, colRef, docRef;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              /* eslint-disable */
              sender = "FireModel - update";
              console.info((0, _firestoreMessages.getMessage)(sender, "UPDATE_CALLED", this.docId));
              _context6.prev = 2;
              if (this.docId) {
                _context6.next = 5;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "UPDATE_REQUIRES_DOCID"));
            case 5:
              colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, this.docId); // updateDocの場合、withConverter.toFirestoreは使用できない。
              _context6.next = 9;
              return this.beforeUpdate();
            case 9:
              this.updateAt = new Date();
              this.uid = (_firebase.auth === null || _firebase.auth === void 0 || (_auth$currentUser2 = _firebase.auth.currentUser) === null || _auth$currentUser2 === void 0 ? void 0 : _auth$currentUser2.uid) || "unknown";
              _context6.next = 13;
              return (0, _firestore.updateDoc)(docRef, this.toObject());
            case 13:
              _context6.next = 15;
              return this.afterUpdate();
            case 15:
              console.info((0, _firestoreMessages.getMessage)(sender, "UPDATE_DOC_SUCCESS", _classPrivateFieldGet(_collectionPath, this), this.docId));
              return _context6.abrupt("return", docRef);
            case 19:
              _context6.prev = 19;
              _context6.t0 = _context6["catch"](2);
              console.error("[".concat(sender, "] ").concat(_context6.t0.message));
              throw _context6.t0;
            case 23:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[2, 19]]);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
    /**
     * `hasMany`プロパティにセットされた条件に基づいて、当該クラスに読み込まれているドキュメントデータに
     * 依存している子ドキュメントが存在しているかどうかを返します。
     * @returns {Promise<object|boolean>} - 子ドキュメントが存在する場合は`hasMany`の該当項目を返し、存在しない場合は`false`を返します。
     */
    )
  }, {
    key: "delete",
    value: (
    /**
     * 現在のドキュメントIDに該当するドキュメントを削除します。
     * - `logicalDelete`が指定されている場合、削除されたドキュメントはarchiveコレクションに移動されます。
     * @returns {Promise<void>} - 削除が完了すると解決されるPromise
     */
    function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var sender, hasChild, colRef, docRef, docSnapshot, archiveColRef, archiveDocRef, batch;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              /* eslint-disable */
              sender = "FireModel - delete";
              console.info((0, _firestoreMessages.getMessage)(sender, "DELETE_CALLED", this.docId));
              _context7.prev = 2;
              if (this.docId) {
                _context7.next = 5;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "DELETE_REQUIRES_DOCID"));
            case 5:
              _context7.next = 7;
              return _assertClassBrand(_FireModel_brand, this, _hasChild).call(this);
            case 7:
              hasChild = _context7.sent;
              if (!hasChild) {
                _context7.next = 10;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "COULD_NOT_DELETE_CHILD_EXIST", hasChild.collection));
            case 10:
              colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, this.docId);
              _context7.next = 14;
              return (0, _firestore.getDoc)(docRef);
            case 14:
              docSnapshot = _context7.sent;
              if (docSnapshot.exists()) {
                _context7.next = 17;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_DOCUMENT_TO_DELETE", _classPrivateFieldGet(_collectionPath, this), this.docId));
            case 17:
              _context7.next = 19;
              return this.beforeDelete();
            case 19:
              if (!_classPrivateFieldGet(_logicalDelete, this)) {
                _context7.next = 29;
                break;
              }
              archiveColRef = (0, _firestore.collection)(_firebase.firestore, "".concat(_classPrivateFieldGet(_collectionPath, this), "_archive"));
              archiveDocRef = (0, _firestore.doc)(archiveColRef, this.docId);
              batch = (0, _firestore.writeBatch)(_firebase.firestore);
              batch.set(archiveDocRef, docSnapshot.data());
              batch["delete"](docRef);
              _context7.next = 27;
              return batch.commit();
            case 27:
              _context7.next = 31;
              break;
            case 29:
              _context7.next = 31;
              return (0, _firestore.deleteDoc)(docRef);
            case 31:
              _context7.next = 33;
              return this.afterDelete();
            case 33:
              console.info((0, _firestoreMessages.getMessage)(sender, "DELETE_DOC_SUCCESS", _classPrivateFieldGet(_collectionPath, this), this.docId));
              _context7.next = 40;
              break;
            case 36:
              _context7.prev = 36;
              _context7.t0 = _context7["catch"](2);
              console.error("[".concat(sender, "] ").concat(_context7.t0.message));
              throw _context7.t0;
            case 40:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[2, 36]]);
      }));
      function _delete() {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
    /**
     * 削除されたドキュメントをアーカイブコレクションから元のコレクションに復元します。
     * @param {string} docId - 復元するドキュメントのID
     * @returns {Promise<DocumentReference>} - 復元されたドキュメントのリファレンス
     * @throws {Error} - ドキュメントIDが指定されていない場合や、復元するドキュメントが存在しない場合にエラーをスローします
     */
    )
  }, {
    key: "restore",
    value: (function () {
      var _restore = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(docId) {
        var sender, archivePath, archiveColRef, archiveDocRef, docSnapshot, colRef, docRef, batch;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              /* eslint-disable */
              sender = "FireModel - restore";
              if (docId) {
                _context8.next = 5;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "RESTORE_CALLED_NO_DOCID"));
            case 5:
              console.info((0, _firestoreMessages.getMessage)(sender, "RESTORE_CALLED", docId));
            case 6:
              _context8.prev = 6;
              archivePath = "".concat(_classPrivateFieldGet(_collectionPath, this), "_archive");
              archiveColRef = (0, _firestore.collection)(_firebase.firestore, archivePath);
              archiveDocRef = (0, _firestore.doc)(archiveColRef, docId);
              _context8.next = 12;
              return (0, _firestore.getDoc)(archiveDocRef);
            case 12:
              docSnapshot = _context8.sent;
              if (docSnapshot.exists()) {
                _context8.next = 15;
                break;
              }
              throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_DOCUMENT_TO_RESTORE", archivePath, docId));
            case 15:
              colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
              docRef = (0, _firestore.doc)(colRef, docId);
              batch = (0, _firestore.writeBatch)(_firebase.firestore);
              batch["delete"](archiveDocRef);
              batch.set(docRef, docSnapshot.data());
              _context8.next = 22;
              return batch.commit();
            case 22:
              console.info((0, _firestoreMessages.getMessage)(sender, "RESTORE_SUCCESS", _classPrivateFieldGet(_collectionPath, this), docId));
              return _context8.abrupt("return", docRef);
            case 26:
              _context8.prev = 26;
              _context8.t0 = _context8["catch"](6);
              console.error("[".concat(sender, "] ").concat(_context8.t0.message));
              throw _context8.t0;
            case 30:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[6, 26]]);
      }));
      function restore(_x2) {
        return _restore.apply(this, arguments);
      }
      return restore;
    }()
    /**
     * Firestoreのリアルタイムリスナーを解除します。
     * 現在のリスナーが存在する場合、そのリスナーを解除します。
     * @returns {void}
     */
    )
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      /* eslint-disable */
      var sender = "FireModel - unsubscribe";
      console.info((0, _firestoreMessages.getMessage)(sender, "UNSUBSCRIBE_CALLED"));
      if (_classPrivateFieldGet(_listener, this)) {
        _classPrivateFieldGet(_listener, this).call(this);
        _classPrivateFieldSet(_listener, this, null);
        console.info((0, _firestoreMessages.getMessage)(sender, "UNSUBSCRIBE_SUCCESS", _classPrivateFieldGet(_collectionPath, this)));
      }
      _classPrivateFieldGet(_items, this).splice(0);
      /* eslint-enable */
    }

    /**
     * Firestoreのドキュメントに対するリアルタイムリスナーを設定します。
     * 既にリスナーが設定されている場合、そのリスナーを解除してから新しいリスナーを設定します。
     * @param {string} docId - リアルタイムリスナーを設定するドキュメントのID
     * @returns {void}
     * @throws {Error} - ドキュメントIDが指定されていない場合にエラーをスローします
     */
  }, {
    key: "subscribe",
    value: function subscribe(docId) {
      var _this4 = this;
      /* eslint-disable */
      var sender = "FireModel - subscribe";
      if (!docId) {
        throw new Error((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_CALLED_NO_DOCID", _classPrivateFieldGet(_collectionPath, this)));
      }
      console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_CALLED", _classPrivateFieldGet(_collectionPath, this), docId));
      try {
        if (_classPrivateFieldGet(_listener, this)) {
          console.info((0, _firestoreMessages.getMessage)(sender, "LISTENER_HAS_SET", _classPrivateFieldGet(_collectionPath, this)));
          this.unsubscribe();
        }
        var colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
        var docRef = (0, _firestore.doc)(colRef, docId);
        _classPrivateFieldSet(_listener, this, (0, _firestore.onSnapshot)(docRef, function (docSnapshot) {
          if (docSnapshot.exists()) {
            _this4.initialize(docSnapshot.data()); // ドキュメントデータを初期化
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

    /**
     * Firestoreコレクションに対するリアルタイムリスナーを設定し、ドキュメントの変化を監視します。
     * クエリ条件に一致するドキュメントのリスナーを設定し、結果は`#items`に格納されます。
     * @param {Array} constraints - Firestoreクエリの条件（whereなど）を格納した配列
     * @returns {Array<Object>} - リアルタイムで監視しているドキュメントのデータが格納された配列
     */
  }, {
    key: "subscribeDocs",
    value: function subscribeDocs() {
      var _this5 = this;
      var constraints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      /* eslint-disable */
      var sender = "FireModel - subscribeDocs";
      console.info((0, _firestoreMessages.getMessage)(sender, "SUBSCRIBE_DOCS_CALLED", _classPrivateFieldGet(_collectionPath, this)));
      try {
        if (_classPrivateFieldGet(_listener, this)) {
          console.info((0, _firestoreMessages.getMessage)(sender, "LISTENER_HAS_SET", _classPrivateFieldGet(_collectionPath, this)));
          this.unsubscribe();
        }
        var colRef = (0, _firestore.collection)(_firebase.firestore, _classPrivateFieldGet(_collectionPath, this));
        var q = _firestore.query.apply(void 0, [colRef].concat(_toConsumableArray(constraints))).withConverter(_assertClassBrand(_FireModel_brand, this, _converter).call(this));
        _classPrivateFieldSet(_listener, this, (0, _firestore.onSnapshot)(q, function (snapshot) {
          snapshot.docChanges().forEach(function (change) {
            var item = change.doc.data();
            var index = _classPrivateFieldGet(_items, _this5).findIndex(function (_ref5) {
              var docId = _ref5.docId;
              return docId === item.docId;
            });
            if (change.type === "added") _classPrivateFieldGet(_items, _this5).push(item);
            if (change.type === "modified") _classPrivateFieldGet(_items, _this5).splice(index, 1, item);
            if (change.type === "removed") _classPrivateFieldGet(_items, _this5).splice(index, 1);
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
  }]);
}();
function _converter() {
  var _this6 = this;
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
      var data = snapshot.data();
      return new _this6.constructor(data, _classPrivateFieldGet(_collectionPath, _this6), _classPrivateFieldGet(_hasMany, _this6), _classPrivateFieldGet(_logicalDelete, _this6));
    }
  };
}
function _createWithAutonumber(_x3, _x4) {
  return _createWithAutonumber2.apply(this, arguments);
}
function _createWithAutonumber2() {
  _createWithAutonumber2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(transaction, item) {
    var sender, autonumRef, autonumDoc, num, length, newCode, maxPossibleCode;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          /* eslint-disable */
          sender = "FireModel - createWithAutonumber";
          _context9.prev = 1;
          autonumRef = (0, _firestore.doc)(_firebase.firestore, "Autonumbers/".concat(_classPrivateFieldGet(_collectionPath, this)));
          _context9.next = 5;
          return transaction.get(autonumRef);
        case 5:
          autonumDoc = _context9.sent;
          if (autonumDoc.exists()) {
            _context9.next = 8;
            break;
          }
          throw new Error((0, _firestoreMessages.getMessage)(sender, "MISSING_AUTONUMBER", _classPrivateFieldGet(_collectionPath, this)));
        case 8:
          if (autonumDoc.data().status) {
            _context9.next = 10;
            break;
          }
          throw new Error((0, _firestoreMessages.getMessage)(sender, "INVALID_AUTONUMBER_STATUS", _classPrivateFieldGet(_collectionPath, this)));
        case 10:
          num = autonumDoc.data().current + 1;
          length = autonumDoc.data().length;
          newCode = (Array(length).join("0") + num).slice(-length);
          maxPossibleCode = Array(length + 1).join("0");
          if (!(newCode === maxPossibleCode)) {
            _context9.next = 16;
            break;
          }
          throw new Error((0, _firestoreMessages.getMessage)(sender, "NO_MORE_DOCUMENT", _classPrivateFieldGet(_collectionPath, this)));
        case 16:
          item[autonumDoc.data().field] = newCode;
          transaction.update(autonumRef, {
            current: num
          });
          _context9.next = 24;
          break;
        case 20:
          _context9.prev = 20;
          _context9.t0 = _context9["catch"](1);
          console.error("[".concat(sender, "] ").concat(_context9.t0.message));
          throw _context9.t0;
        case 24:
        case "end":
          return _context9.stop();
      }
    }, _callee9, this, [[1, 20]]);
  }));
  return _createWithAutonumber2.apply(this, arguments);
}
function _hasChild() {
  return _hasChild2.apply(this, arguments);
}
function _hasChild2() {
  _hasChild2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var _iterator, _step, item, colRef, whrObj, q, snapshot;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_hasMany, this));
          _context10.prev = 1;
          _iterator.s();
        case 3:
          if ((_step = _iterator.n()).done) {
            _context10.next = 15;
            break;
          }
          item = _step.value;
          colRef = item.type === "collection" ? (0, _firestore.collection)(_firebase.firestore, item.collection) : (0, _firestore.collectionGroup)(_firebase.firestore, item.collection);
          whrObj = (0, _firestore.where)(item.field, item.condition, this.docId);
          q = (0, _firestore.query)(colRef, whrObj, (0, _firestore.limit)(1));
          _context10.next = 10;
          return (0, _firestore.getDocs)(q);
        case 10:
          snapshot = _context10.sent;
          if (snapshot.empty) {
            _context10.next = 13;
            break;
          }
          return _context10.abrupt("return", item);
        case 13:
          _context10.next = 3;
          break;
        case 15:
          _context10.next = 20;
          break;
        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10["catch"](1);
          _iterator.e(_context10.t0);
        case 20:
          _context10.prev = 20;
          _iterator.f();
          return _context10.finish(20);
        case 23:
          return _context10.abrupt("return", false);
        case 24:
        case "end":
          return _context10.stop();
      }
    }, _callee10, this, [[1, 17, 20, 23]]);
  }));
  return _hasChild2.apply(this, arguments);
}