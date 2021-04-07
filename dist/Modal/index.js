"use strict";

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = function Modal(props) {
  function rejectAllCookies() {
    var cookieConsent = JSON.parse(_jsCookie["default"].get('cookie_consent'));
    cookieConsent.categories.forEach(function (cookieCategory) {
      return cookieCategory.accepted = false;
    });

    _jsCookie["default"].set('cookie_consent', JSON.stringify(cookieConsent));

    props.toggleShowModal();
  }

  function saveAndExit() {
    var cookieConsent = JSON.parse(_jsCookie["default"].get('cookie_consent'));
    cookieConsent.customSettingsSaved = true;

    _jsCookie["default"].set('cookie_consent', JSON.stringify(cookieConsent));

    props.toggleShowModal();
    props.hideCookieBar();
  }

  return (0, _preact.h)("div", {
    className: _styles["default"].modal_background
  }, (0, _preact.h)("div", {
    className: _styles["default"].modal_container
  }, (0, _preact.h)("div", {
    className: _styles["default"].modal_section
  }, (0, _preact.h)(_CloseButton["default"], {
    toggleShowModal: props.toggleShowModal,
    primaryColor: props.primaryColor
  })), (0, _preact.h)("div", {
    className: "".concat(_styles["default"].modal_section, " ").concat(_styles["default"].no_border)
  }, (0, _preact.h)("h2", {
    style: {
      color: props.primaryColor
    }
  }, "Our use of cookies"), (0, _preact.h)("p", null, window.cookieBarSettings.introText, " ", window.cookieBarSettings.hasMoreInfo && (0, _preact.h)("a", {
    href: window.cookieBarSettings.moreInfoUrl
  }, "More Info")), (0, _preact.h)(_Button["default"], {
    primaryColor: props.primaryColor,
    onClick: props.acceptAllCookies
  }, "Accept All")), (0, _preact.h)("div", {
    className: "".concat(_styles["default"].modal_section, " ").concat(_styles["default"].no_border)
  }, (0, _preact.h)("h2", {
    style: {
      color: props.primaryColor
    }
  }, "Manage Consent Preferences"), (0, _preact.h)(_DropdownContainer["default"], null, window.cookieBarSettings.cookies.map(function (cookie) {
    return (0, _preact.h)(_DropdownItem["default"], {
      primaryColor: props.primaryColor,
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
    onClick: rejectAllCookies
  }, "Reject All"), (0, _preact.h)(_Button["default"], {
    primaryColor: props.primaryColor,
    onClick: saveAndExit
  }, "Save and Exit")))));
};

var _default = Modal;
exports["default"] = _default;