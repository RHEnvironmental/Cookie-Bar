"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _constants = require("../constants");

var _styles = _interopRequireDefault(require("./styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownItem = /*#__PURE__*/function (_Component) {
  _inherits(DropdownItem, _Component);

  var _super = _createSuper(DropdownItem);

  function DropdownItem() {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _super.call(this);
    _this.state = {
      showItemContent: false,
      categoryAccepted: false,
      cookieConsent: {}
    };
    return _this;
  }

  _createClass(DropdownItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var cookieConsent = JSON.parse(_jsCookie["default"].get('cookie_consent'));
      var categoryToUpdate = cookieConsent.categories.find(function (category) {
        return category.id === _this2.props.categoryID;
      });
      this.setState({
        cookieConsent: cookieConsent,
        categoryAccepted: categoryToUpdate.accepted
      });
    }
  }, {
    key: "_toggleShowItemContent",
    value: function _toggleShowItemContent() {
      this.setState({
        showItemContent: !this.state.showItemContent
      });
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(e, categoryId) {
      var isChecked = e.target.checked; // Do stuff here for cookie category being activated / de-activated.

      var categoryToUpdate = this.state.cookieConsent.categories.find(function (category) {
        return category.id === categoryId;
      });
      categoryToUpdate.accepted = isChecked;

      _jsCookie["default"].set('cookie_consent', JSON.stringify(this.state.cookieConsent));

      document.dispatchEvent(_constants.cookieChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return (0, _preact.h)("div", {
        className: _styles["default"].dropdown_item
      }, (0, _preact.h)("div", {
        className: _styles["default"].dropdown_item_title_container
      }, (0, _preact.h)("div", {
        className: _styles["default"].arrow_container,
        onClick: this._toggleShowItemContent.bind(this)
      }, (0, _preact.h)("div", {
        className: this.state.showItemContent ? "".concat(_styles["default"].arrow, " ").concat(_styles["default"].up) : "".concat(_styles["default"].arrow, " ").concat(_styles["default"].down)
      })), (0, _preact.h)("div", {
        className: _styles["default"].dropdown_item_title,
        onClick: this._toggleShowItemContent.bind(this)
      }, (0, _preact.h)("h3", null, this.props.category)), (0, _preact.h)("div", {
        className: _styles["default"].category_toggle
      }, this.props.categoryID === 1 ? (0, _preact.h)("p", {
        className: _styles["default"].always_active,
        style: {
          color: this.props.primaryColor
        }
      }, "Always Active") : (0, _preact.h)(_Toggle["default"], {
        className: _styles["default"].toggle,
        checked: this.state.categoryAccepted,
        primaryColor: this.props.primaryColor,
        handleChange: function handleChange(e) {
          return _this3._handleChange(e, _this3.props.categoryID);
        }
      }))), this.state.showItemContent && (0, _preact.h)("div", {
        className: _styles["default"].dropdown_item_content
      }, (0, _preact.h)("p", null, this.props.categoryDescription), (0, _preact.h)("table", {
        className: _styles["default"].cookie_table
      }, (0, _preact.h)("tr", null, (0, _preact.h)("th", null, "Cookie"), (0, _preact.h)("th", null, "Description")), this.props.categoryCookies.map(function (cookie) {
        return (0, _preact.h)("tr", null, (0, _preact.h)("td", null, cookie.name), (0, _preact.h)("td", null, cookie.description));
      }))));
    }
  }]);

  return DropdownItem;
}(_preact.Component);

var _default = DropdownItem;
exports["default"] = _default;