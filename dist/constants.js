"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookieChange = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var event = document.createEvent('CustomEvent');
event.initCustomEvent('consentCookieChange', true, true, _jsCookie["default"].get('cookie_consent'));
var cookieChange = event;
exports.cookieChange = cookieChange;