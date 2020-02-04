function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-console, react/prop-types, react/jsx-pascal-case */
import React from 'react';
import Combobox from "../../../../components/combobox";
import Icon from "../../../../components/icon";
import comboboxFilterAndLimit from "../../../../components/combobox/filter";
import IconSettings from "../../../../components/icon-settings"; // eslint-disable-next-line camelcase

import UNSAFE_DirectionSettings from "../../../../components/utilities/UNSAFE_direction";
var accounts = [{
  id: '1',
  label: 'A very very very very very very very very very very very long title to show how menu width will behave',
  subTitle: 'Account • San Francisco ',
  type: 'account'
}, {
  id: '2',
  label: 'Salesforce.com, Inc.',
  subTitle: 'Account • San Francisco',
  type: 'account'
}, {
  id: '3',
  label: "Paddy's Pub",
  subTitle: 'Account • Boston, MA',
  type: 'account'
}, {
  id: '4',
  label: 'Opportunities',
  subTitle: 'Opportunity • San Francisco, CA',
  type: 'account'
}, {
  id: '5',
  label: 'Nakatomi Investments',
  subTitle: 'Opportunity • Chicago, IL',
  type: 'opportunity'
}, {
  id: '6',
  label: 'Acme Landscaping',
  subTitle: "\xA0",
  type: 'account'
}, {
  id: '7',
  label: 'Acme Construction',
  subTitle: 'Opportunity • Grand Marais, MN',
  type: 'opportunity'
}];
var accountsWithIcon = accounts.map(function (elem) {
  return _objectSpread({}, elem, {
    icon: React.createElement(Icon, {
      assistiveText: {
        label: 'Account'
      },
      category: "standard",
      name: elem.type
    })
  });
});
/**
 * Combobox rendered in RTL mode. Note that styles might look broken since `salesforce-lightning-design-system.css` styles are loaded in LTR mode.
 * SLDS doesn't ship a static version of their css in RTL at the moment.
 */

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      inputValue: '',
      selection: []
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        dir: "rtl"
      }, React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("h1", null, "1. Combobox in RTL mode."), React.createElement("h2", {
        style: {
          fontSize: '10px'
        }
      }, "Note that ", React.createElement("i", null, "design-system.css"), " styles are in LTR. See example code for more info."), React.createElement(UNSAFE_DirectionSettings.Provider, {
        value: "rtl"
      }, React.createElement(Combobox, {
        isOpen: true,
        id: "combobox-base-inherit-menu-width",
        disabled: this.props.disabled,
        inheritWidthOf: "menu",
        events: {
          onChange: function onChange(event, _ref) {
            var value = _ref.value;

            if (_this2.props.action) {
              _this2.props.action('onChange')(event, value);
            } else if (console) {
              console.log('onChange', event, value);
            }

            _this2.setState({
              inputValue: value
            });
          },
          onRequestRemoveSelectedOption: function onRequestRemoveSelectedOption(event, data) {
            _this2.setState({
              inputValue: '',
              selection: data.selection
            });
          },
          onSubmit: function onSubmit(event, _ref2) {
            var value = _ref2.value;

            if (_this2.props.action) {
              _this2.props.action('onChange')(event, value);
            } else if (console) {
              console.log('onChange', event, value);
            }

            _this2.setState({
              inputValue: '',
              selection: [].concat(_toConsumableArray(_this2.state.selection), [{
                label: value,
                icon: React.createElement(Icon, {
                  assistiveText: {
                    label: 'Account'
                  },
                  category: "standard",
                  name: "account"
                })
              }])
            });
          },
          onSelect: function onSelect(event, data) {
            if (_this2.props.action) {
              _this2.props.action('onSelect').apply(void 0, [event].concat(_toConsumableArray(Object.keys(data).map(function (key) {
                return data[key];
              }))));
            } else if (console) {
              console.log('onSelect', event, data);
            }

            _this2.setState({
              inputValue: '',
              selection: data.selection
            });
          }
        },
        labels: {
          label: 'Search',
          placeholder: 'Search Salesforce'
        },
        menuMaxWidth: "500px",
        multiple: true,
        options: comboboxFilterAndLimit({
          inputValue: this.state.inputValue,
          limit: 10,
          options: accountsWithIcon,
          selection: this.state.selection
        }),
        selection: this.state.selection,
        value: this.state.inputValue
      }))));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'ComboboxExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base-inherit-menu-width-RTL.js.map