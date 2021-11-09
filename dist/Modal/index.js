"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _Button = _interopRequireDefault(require("../Button"));

var _CloseButton = _interopRequireDefault(require("../CloseButton"));

var _DropdownContainer = _interopRequireDefault(require("../DropdownContainer"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

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

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    _classCallCheck(this, Modal);

    return _super.apply(this, arguments);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById('modal-title').focus();
    }
  }, {
    key: "_rejectAllCookies",
    value: function _rejectAllCookies() {
      var cookieConsent = JSON.parse(_jsCookie["default"].get('cookie_consent'));
      cookieConsent.categories.forEach(function (cookieCategory) {
        return cookieCategory.accepted = false;
      });
      cookieConsent.customSettingsSaved = true;

      _jsCookie["default"].set('cookie_consent', JSON.stringify(cookieConsent), {
        expires: 365
      });

      this.props.toggleShowModal();
      this.props.hideCookieBar();
    }
  }, {
    key: "_saveAndExit",
    value: function _saveAndExit() {
      var cookieConsent = JSON.parse(_jsCookie["default"].get('cookie_consent'));
      cookieConsent.customSettingsSaved = true;

      _jsCookie["default"].set('cookie_consent', JSON.stringify(cookieConsent), {
        expires: 365
      });

      this.props.toggleShowModal();
      this.props.hideCookieBar();
    }
  }, {
    key: "_trapModalFocus",
    value: function _trapModalFocus(e) {
      // add all the elements inside modal which you want to make focusable
      var focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      var modal = document.querySelector('#modal-container'); // select the modal by it's id

      var firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

      var focusableContent = modal.querySelectorAll(focusableElements);
      var lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

      var isTabPressed = e.key === 'Tab' || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus(); // add focus for the last focusable element

          e.preventDefault();
        }
      } else {
        // if tab key is pressed
        if (document.activeElement === lastFocusableElement) {
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus(); // add focus for the first focusable element

          e.preventDefault();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return (0, _preact.h)("div", {
        className: _styles["default"].modal_background
      }, (0, _preact.h)("div", {
        id: "modal-container",
        tabIndex: "0",
        onKeyDown: function onKeyDown(e) {
          return _this._trapModalFocus(e);
        },
        className: _styles["default"].modal_container,
        role: "dialog",
        "aria-labelledby": "modal-title",
        "aria-modal": "true",
        style: {
          borderTop: "10px solid ".concat(this.props.primaryColor)
        }
      }, (0, _preact.h)("div", {
        className: "".concat(_styles["default"].modal_section, " ").concat(_styles["default"].no_border)
      }, (0, _preact.h)("h2", {
        id: "modal-title",
        tabIndex: "-1",
        className: _styles["default"].modal_main_header,
        style: {
          color: this.props.primaryColor
        }
      }, "Our use of cookies"), (0, _preact.h)(_CloseButton["default"], {
        id: "modal-header-close-button",
        toggleShowModal: this.props.toggleShowModal,
        primaryColor: this.props.primaryColor
      }), (0, _preact.h)("p", null, window.cookieBarSettings.introText, " ", window.cookieBarSettings.hasMoreInfo && (0, _preact.h)("a", {
        href: window.cookieBarSettings.moreInfoUrl
      }, "More Info ", (0, _preact.h)("span", {
        className: _global["default"].sr_only
      }, "\xA0 about cookies"))), (0, _preact.h)(_Button["default"], {
        primaryColor: this.props.primaryColor,
        onClick: this.props.acceptAllCookies
      }, "Accept All")), (0, _preact.h)("div", {
        className: "".concat(_styles["default"].modal_section, " ").concat(_styles["default"].no_border, " ").concat(_styles["default"].modal_scroll)
      }, (0, _preact.h)("h3", {
        style: {
          color: this.props.primaryColor
        }
      }, "Manage Consent Preferences"), (0, _preact.h)(_DropdownContainer["default"], null, window.cookieBarSettings.cookies.map(function (cookie) {
        return (0, _preact.h)(_DropdownItem["default"], {
          primaryColor: _this.props.primaryColor,
          categoryID: cookie.categoryID,
          category: cookie.category,
          categoryDescription: cookie.categoryDescription,
          categoryCookies: cookie.categoryCookies
        });
      }))), (0, _preact.h)("div", {
        className: _styles["default"].modal_section
      }, (0, _preact.h)("div", {
        className: _styles["default"].footer_buttons_container
      }, (0, _preact.h)(_Button["default"], {
        cancel: true,
        onClick: this._rejectAllCookies.bind(this)
      }, "Reject All"), (0, _preact.h)(_Button["default"], {
        id: "modal-footer-close-button",
        primaryColor: this.props.primaryColor,
        onClick: this._saveAndExit.bind(this)
      }, "Save and Exit")))));
    }
  }]);

  return Modal;
}(_preact.Component);

var _default = Modal;
exports["default"] = _default;