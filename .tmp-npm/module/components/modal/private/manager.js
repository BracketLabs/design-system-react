function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Button from '../../button';
import Icon from '../../icon';
import EventUtil from '../../../utilities/event';
var customStyles = {
  content: {
    position: 'default',
    top: 'default',
    left: 'default',
    right: 'default',
    bottom: 'default',
    border: 'default',
    background: 'default',
    overflow: 'default',
    WebkitOverflowScrolling: 'default',
    borderRadius: 'default',
    outline: 'default',
    padding: 'default'
  },
  overlay: {
    backgroundColor: 'default'
  }
}; // This component should be deprecated and appears to have
// been created in order to do modals in portals.

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Manager, _React$Component);

  function Manager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Manager)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen,
      revealed: false
    });

    _defineProperty(_assertThisInitialized(_this), "getModal", function () {
      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        React.createElement("div", {
          className: "slds-modal".concat(_this.state.revealed ? ' slds-fade-in-open' : ''),
          onClick: _this.closeModal
        }, React.createElement("div", {
          className: "slds-modal__container",
          onClick: function onClick(e) {
            EventUtil.trap(e);
          }
        }, React.createElement("div", {
          className: "slds-modal__header"
        }, React.createElement("h2", {
          className: "slds-text-heading_medium"
        }, _this.props.title), React.createElement(Button, {
          className: "slds-button slds-modal__close",
          onClick: _this.closeModal
        }, React.createElement(Icon, {
          name: "close",
          category: "utility",
          size: "small"
        }), React.createElement("span", {
          className: "slds-assistive-text"
        }, "Close"))), React.createElement("div", {
          className: "slds-modal__content"
        }, _this.props.children), React.createElement("div", {
          className: "slds-modal__footer"
        }, _this.props.footer)))
      );
    });

    _defineProperty(_assertThisInitialized(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitModal", function () {
      _this.closeModal();
    });

    _defineProperty(_assertThisInitialized(_this), "updateBodyScroll", function () {
      if (window && document && document.body) {
        if (_this.state.isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'inherit';
        }
      }
    });

    return _this;
  }

  _createClass(Manager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.revealed) {
        setTimeout(function () {
          _this2.setState({
            revealed: true
          });
        });
      }

      this.updateBodyScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.isOpen !== prevState.isOpen) {
        this.updateBodyScroll();

        if (!this.state.isOpen) {
          if (!this.isUnmounting) {
            // eslint-disable-next-line react/no-find-dom-node
            var el = ReactDOM.findDOMNode(this).parentNode;

            if (el && el.getAttribute('data-slds-modal')) {
              ReactDOM.unmountComponentAtNode(el);
              document.body.removeChild(el);
            }
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Modal, {
        isOpen: this.state.isOpen,
        onRequestClose: this.closeModal,
        style: customStyles,
        overlayClassName: "slds-modal-backdrop".concat(this.state.revealed ? ' slds-modal-backdrop_open' : '')
      }, this.getModal());
    }
  }]);

  return Manager;
}(React.Component);

_defineProperty(Manager, "defaultProps", {
  title: '',
  isOpen: false
});

export default Manager;
//# sourceMappingURL=manager.js.map