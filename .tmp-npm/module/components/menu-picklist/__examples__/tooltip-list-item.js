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
import Picklist from "../../../../components/menu-picklist"; // `~` is replaced with design-system-react at runtime

import Tooltip from "../../../../components/tooltip";

var ListItemRenderer = function ListItemRenderer(props) {
  return React.createElement(Tooltip, {
    openByDefault: props.isHighlighted,
    align: "bottom left",
    content: "".concat(props.label, " tooltip on bottom left")
  }, React.createElement("p", {
    className: "slds-truncate",
    tabIndex: 0 // eslint-disable-line jsx-a11y/no-noninteractive-tabindex

  }, props.label, " (Hover for tooltip)"));
};

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
      }, React.createElement(Picklist, {
        listItemRenderer: ListItemRenderer,
        label: "Contacts",
        onSelect: function onSelect(value) {
          console.log('selected: ', value);
        },
        options: [{
          label: 'Option A',
          value: 'A0'
        }, {
          label: 'Option B',
          value: 'B0'
        }, {
          label: 'Option C',
          value: 'C0'
        }, {
          label: 'Option D',
          value: 'D0'
        }, {
          label: 'Option E',
          value: 'E0'
        }, {
          label: 'Option FGHIJKLMNOPQRSTUVWXYZ',
          value: 'F0'
        }],
        placeholder: "Select a contact",
        value: "C0",
        silenceDeprecationWarning: true
      }));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'PicklistExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=tooltip-list-item.js.map