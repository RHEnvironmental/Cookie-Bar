"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _preact = require("preact");

var Feature = function Feature(props) {
  var features = JSON.parse(localStorage.getItem('flags'));
  var feature = features.find(function (feature) {
    return feature.name === props.name;
  });

  if (feature && feature.active) {
    return (0, _preact.h)("div", null, props.children);
  }

  if (props.fallback) {
    return (0, _preact.h)("div", null, props.fallback);
  }

  return null;
};

var _default = Feature;
exports["default"] = _default;