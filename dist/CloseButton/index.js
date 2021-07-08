"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _styles = _interopRequireDefault(require("./styles.scss"));

var _global = _interopRequireDefault(require("../../scss/global.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CloseButton = function CloseButton(props) {
  return (0, _preact.h)("button", {
    className: _styles["default"].closeLine,
    onClick: props.toggleShowModal,
    style: {
      backgroundColor: props.primaryColor
    }
  }, (0, _preact.h)("span", {
    className: _global["default"].sr_only
  }, "Close cookie bar modal"), (0, _preact.h)("div", null), (0, _preact.h)("div", null));
};

var _default = CloseButton;
exports["default"] = _default;