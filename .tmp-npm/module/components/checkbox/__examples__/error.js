function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react'; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings";
import Checkbox from "../../../../components/checkbox";

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
        className: "slds-grid slds-grid_pull-padded slds-grid_vertical-align-center"
      }, React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Error state'
        },
        errorText: "This field is required",
        id: "checkbox-error-example",
        labels: {
          label: 'Checkbox label'
        }
      })), React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Indeterminate'
        },
        id: "checkbox-indeterminate-example",
        indeterminate: true,
        labels: {
          label: 'Indeterminate'
        }
      })), React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Indeterminate'
        },
        id: "checkbox-indeterminate-required-example",
        labels: {
          label: 'Required'
        },
        required: true
      })), React.createElement("div", {
        className: "slds-col_padded"
      }, React.createElement(Checkbox, {
        assistiveText: {
          label: 'Disabled'
        },
        id: "checkbox-disabled-example",
        labels: {
          label: 'Disabled'
        },
        disabled: true
      }))));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'CheckboxExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=error.js.map