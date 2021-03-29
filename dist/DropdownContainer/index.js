"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _styles = _interopRequireDefault(require("../Modal/styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropdownContainer = function DropdownContainer(props) {
  return (0, _preact.h)("div", {
    className: _styles["default"].dropdown_container
  }, props.children);
};

var _default = DropdownContainer;
exports["default"] = _default;