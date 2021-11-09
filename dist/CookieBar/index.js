"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _Button = _interopRequireDefault(require("../Button"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _constants = require("../constants");

var _styles = _interopRequireDefault(require("./styles.scss"));

var _global = _interopRequireDefault(require("../../scss/global.scss"));

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

var CookieBar = /*#__PURE__*/function (_Component) {
  _inherits(CookieBar, _Component);

  var _super = _createSuper(CookieBar);

  function CookieBar() {
    var _this;

    _classCallCheck(this, CookieBar);

    _this = _super.call(this);
    _this.state = {
      showModal: false,
      hideCookieBar: false
    };
    return _this;
  }

  _createClass(CookieBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._hideCookieBar = this._hideCookieBar.bind(this);

      if (_jsCookie["default"].get('cookie_consent')) {
        var cookieConsent = JSON.parse(_jsCookie["default"].get('cookie_consent'));

        if (cookieConsent.customSettingsSaved) {
          this._hideCookieBar();
        }
      }
    }
  }, {
    key: "_hideCookieBar",
    value: function _hideCookieBar() {
      this.setState({
        hideCookieBar: true
      });
    }
  }, {
    key: "_modal",
    value: function _modal() {
      var _this2 = this;

      if (this.state.showModal) {
        return (0, _preact.h)(_Modal["default"], {
          acceptAllCookies: this._acceptAllCookies.bind(this),
          primaryColor: this.props.primaryColor,
          toggleShowModal: function toggleShowModal() {
            return _this2._toggleShowModal();
          },
          hideCookieBar: this._hideCookieBar
        });
      }

      return null;
    }
  }, {
    key: "_toggleShowModal",
    value: function _toggleShowModal() {
      this.setState({
        showModal: !this.state.showModal
      });
    }
  }, {
    key: "_acceptAllCookies",
    value: function _acceptAllCookies() {
      var cookieConsent = JSON.parse(_jsCookie["default"].get('cookie_consent'));
      cookieConsent.categories.forEach(function (category) {
        return category.accepted = true;
      });
      cookieConsent.customSettingsSaved = true;

      _jsCookie["default"].set('cookie_consent', JSON.stringify(cookieConsent), {
        expires: 365
      });

      this._hideCookieBar();

      document.dispatchEvent(_constants.cookieChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.hideCookieBar) {
        return null;
      }

      return (0, _preact.h)("div", null, (0, _preact.h)("div", {
        id: "cookiebar",
        className: _styles["default"].cookiebar_container,
        style: {
          borderTop: "10px solid ".concat(this.props.primaryColor)
        }
      }, (0, _preact.h)("div", {
        className: _global["default"].container
      }, (0, _preact.h)("div", {
        className: _global["default"].col_8
      }, (0, _preact.h)("h2", {
        style: {
          color: this.props.primaryColor,
          fontSize: 20
        }
      }, (0, _preact.h)("strong", null, "Use of our cookies")), (0, _preact.h)("p", null, window.cookieBarSettings.introText, " ", window.cookieBarSettings.hasMoreInfo && (0, _preact.h)("a", {
        href: window.cookieBarSettings.moreInfoUrl
      }, "More Info ", (0, _preact.h)("span", {
        className: _global["default"].sr_only
      }, "\xA0 about cookies")))), (0, _preact.h)("div", {
        className: _global["default"].col_4
      }, (0, _preact.h)("div", {
        className: _styles["default"].header_button_container
      }, (0, _preact.h)(_Button["default"], {
        primaryColor: this.props.primaryColor,
        onClick: this._acceptAllCookies.bind(this)
      }, "Accept All ", (0, _preact.h)("span", {
        className: _global["default"].sr_only
      }, "\xA0 cookies"), " "), (0, _preact.h)("br", {
        className: _global["default"].hidden_xs
      }), (0, _preact.h)(_Button["default"], {
        primaryColor: this.props.primaryColor,
        inverted: true,
        onClick: function onClick() {
          return _this3._toggleShowModal();
        }
      }, "Manage Cookies"))))), this._modal());
    }
  }]);

  return CookieBar;
}(_preact.Component);

var _default = CookieBar;
exports["default"] = _default;