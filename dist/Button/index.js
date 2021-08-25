"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _styles = _interopRequireDefault(require("./styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Button = function Button(props) {
  var setStyles = {
    primary: props.primary,
    cancel: props.cancel,
    inverted: props.inverted
  }; // The below is not being used really but it does work so I would like to keep it here.

  var setClasses = function setClasses() {
    var classArray = [];

    for (var _i = 0, _Object$entries = Object.entries(setStyles); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value) {
        classArray.push(_styles["default"][key]);
      }
    }

    return classArray;
  };

  var inlineStyles = function inlineStyles() {
    var primaryButtonColor = props.primaryColor;

    if (props.cancel) {
      primaryButtonColor = '#5A5A5A';
    }

    return {
      backgroundColor: props.inverted ? '#fff' : primaryButtonColor,
      borderColor: primaryButtonColor,
      color: props.inverted ? primaryButtonColor : '#fff'
    };
  };

  return (0, _preact.h)("button", {
    id: props.id,
    className: "".concat(_styles["default"].button, " ").concat(setClasses()),
    style: inlineStyles(),
    onClick: props.onClick
  }, props.children);
};

var _default = Button;
exports["default"] = _default;