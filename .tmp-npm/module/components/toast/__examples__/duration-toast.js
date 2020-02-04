function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import Toast from "../../../../components/toast"; // `~` is replaced with design-system-react at runtime

import ToastContainer from "../../../../components/toast/container"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button"; // `~` is replaced with design-system-react at runtime

import IconSettings from "../../../../components/icon-settings";

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      isOpen: true
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", null, React.createElement(ToastContainer, null, this.state.isOpen ? React.createElement(Toast, {
        duration: 15000,
        labels: {
          heading: '26 potential duplicate leads were found.',
          headingLink: 'Select Leads to Merge'
        },
        onClickHeadingLink: function onClickHeadingLink() {
          console.log('Link clicked.');
        },
        onRequestClose: function onRequestClose() {
          _this2.setState({
            isOpen: false
          });
        }
      }) : null), React.createElement(Button, {
        label: "Toggle toast",
        onClick: function onClick() {
          _this2.setState(function (prevState) {
            return {
              isOpen: !prevState.isOpen
            };
          });
        }
      })));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'ToastExample';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=duration-toast.js.map