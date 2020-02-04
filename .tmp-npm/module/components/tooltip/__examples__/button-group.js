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
import IconSettings from "../../../../components/icon-settings";
import Tooltip from "../../../../components/tooltip"; // `~` is replaced with design-system-react at runtime

import ButtonGroup from "../../../../components/button-group";
import Button from "../../../../components/button";
import Dropdown from "../../../../components/menu-dropdown";

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
      }, React.createElement(ButtonGroup, {
        className: "slds-p-bottom_medium",
        variant: "list",
        id: "button-group-tooltip"
      }, React.createElement(Tooltip, {
        id: "refresh-tooltip",
        align: "bottom",
        content: "Buttonbar Tooltip",
        variant: "list-item"
      }, React.createElement(Button, {
        id: "refresh-button",
        label: "Refresh"
      })), React.createElement(Tooltip, {
        id: "edit-tooltip",
        align: "bottom right",
        content: "Buttonbar Tooltip",
        variant: "list-item"
      }, React.createElement(Button, {
        label: "Edit",
        id: "edit-button"
      })), React.createElement(Tooltip, {
        id: "drop-tooltip",
        align: "bottom right",
        content: "Buttonbar Tooltip",
        variant: "list-item"
      }, React.createElement(Dropdown, {
        id: "options",
        assistiveText: {
          icon: 'More Options'
        },
        buttonVariant: "icon",
        iconCategory: "utility",
        iconName: "down",
        iconVariant: "border-filled",
        onSelect: function onSelect(item) {
          return console.log('selected', item);
        },
        options: [{
          label: 'A Option',
          value: 'A0'
        }, {
          label: 'B Option',
          value: 'B0'
        }, {
          label: 'C Option',
          value: 'C0'
        }]
      }))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'TooltipExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=button-group.js.map