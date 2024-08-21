"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FireModel: true,
  auth: true,
  functions: true,
  firestore: true,
  database: true,
  storage: true,
  vapidKey: true
};
Object.defineProperty(exports, "FireModel", {
  enumerable: true,
  get: function get() {
    return _FireModel["default"];
  }
});
Object.defineProperty(exports, "auth", {
  enumerable: true,
  get: function get() {
    return _firebaseInit.auth;
  }
});
Object.defineProperty(exports, "database", {
  enumerable: true,
  get: function get() {
    return _firebaseInit.database;
  }
});
Object.defineProperty(exports, "firestore", {
  enumerable: true,
  get: function get() {
    return _firebaseInit.firestore;
  }
});
Object.defineProperty(exports, "functions", {
  enumerable: true,
  get: function get() {
    return _firebaseInit.functions;
  }
});
Object.defineProperty(exports, "storage", {
  enumerable: true,
  get: function get() {
    return _firebaseInit.storage;
  }
});
Object.defineProperty(exports, "vapidKey", {
  enumerable: true,
  get: function get() {
    return _firebaseInit.vapidKey;
  }
});
var _FireModel = _interopRequireDefault(require("./firestore/FireModel.js"));
var _firebaseInit = require("./firebase.init.js");
var _storage = require("./storage/storage.js");
Object.keys(_storage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _storage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _storage[key];
    }
  });
});
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }