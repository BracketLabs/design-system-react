function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import ProgressRing from '../../../components/progress-ring';
import IconSettings from '../../icon-settings';
import Icon from '../../../components/icon';

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, _getPrototypeOf(Example).apply(this, arguments));
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", {
        className: "slds-grid slds-grid_pull-padded slds-grid_vertical-align-center slds-wrap"
      }, React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 0
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        flowDirection: "fill",
        value: 40
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 0,
        hasIcon: true,
        icon: React.createElement(Icon, {
          assistiveText: {
            label: 'Warning'
          },
          category: "utility",
          name: "warning"
        })
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 0,
        hasIcon: true,
        icon: React.createElement(Icon, {
          assistiveText: {
            label: 'Expired'
          },
          category: "utility",
          name: "lock"
        })
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 20,
        theme: "complete"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        flowDirection: "fill",
        value: 40,
        theme: "complete"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 100,
        theme: "complete",
        hasIcon: true
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 100,
        theme: "complete"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 20,
        theme: "warning"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        flowDirection: "fill",
        value: 40,
        theme: "warning"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 100,
        theme: "warning",
        hasIcon: true
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 100,
        theme: "warning"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 20,
        theme: "expired"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        flowDirection: "fill",
        value: 40,
        theme: "expired"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 100,
        theme: "expired",
        hasIcon: true
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 100,
        theme: "expired"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 20,
        theme: "active"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        flowDirection: "fill",
        value: 40,
        theme: "active"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        flowDirection: "fill",
        value: 70,
        theme: "active",
        hasIcon: true
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        value: 100,
        theme: "active"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        size: "large",
        value: 20,
        theme: "active"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        flowDirection: "fill",
        size: "large",
        value: 40,
        theme: "warning"
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        flowDirection: "fill",
        size: "large",
        value: 70,
        theme: "expired",
        hasIcon: true
      })), React.createElement("div", {
        className: "slds-col_padded slds-m-top_x-large slds-size_1-of-4 slds-align_absolute-center"
      }, React.createElement(ProgressRing, {
        size: "large",
        value: 100,
        theme: "complete"
      }))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'ProgressRingExamples');

export default Example;
//# sourceMappingURL=examples.js.map