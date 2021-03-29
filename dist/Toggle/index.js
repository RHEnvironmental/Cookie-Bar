"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _styles = _interopRequireDefault(require("./styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Toggle = function Toggle(props) {
  return (0, _preact.h)("div", {
    className: props.className && props.className
  }, (0, _preact.h)("style", null, "                    input:checked + .".concat(_styles["default"].slider, " {                        background-color: ").concat(props.primaryColor, ";                    }                                        input:focus + .").concat(_styles["default"].slider, " {                        box-shadow: 0 0 1px ").concat(props.primaryColor, ";                    }                ")), (0, _preact.h)("label", {
    className: _styles["default"]["switch"]
  }, (0, _preact.h)("input", {
    type: "checkbox",
    checked: props.checked,
    onChange: props.handleChange
  }), (0, _preact.h)("span", {
    className: _styles["default"].slider
  })));
};

var _default = Toggle;
exports["default"] = _default;