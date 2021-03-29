"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookieChange = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cookieChange = new CustomEvent("consentCookieChange", {
  detail: _jsCookie["default"].get('cookie_consent'),
  bubbles: true,
  composed: true
});
exports.cookieChange = cookieChange;