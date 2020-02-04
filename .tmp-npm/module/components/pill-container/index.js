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
// # Pill Container Component
// Implements the [Listbox of Pill Options design pattern](https://www.lightningdesignsystem.com/components/pills/?variant=listbox-of-pill-options) in React.
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import SelectedListBox from './private/selected-listbox';
import { PILL_CONTAINER } from '../../utilities/constants';
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `listboxLabel`: This is a label for the listbox. The default is `Selected Options:`.
   * * `removePill`: Used to remove a selected item (pill). Focus is on the pill. This is not a button. The default is `Press delete or backspace to remove`.
   */
  assistiveText: PropTypes.shape({
    listboxLabel: PropTypes.string,
    removePill: PropTypes.string
  }),

  /**
   * CSS classes to be added to the pill container
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML id for pill container
   */
  id: PropTypes.string,

  /**
   * **Text labels for internationalization**
   * * `removePillTitle`: Title on `X` icon
   */
  labels: PropTypes.shape({
    removePillTitle: PropTypes.string
  }),

  /**
   * **Array of pill objects.**
   * Each object can contain:
   * * `avatar`: An `Avatar` component.
   * * `error`: Adds error styling
   * * `icon`: An `Icon` component.
   * * `id`: A unique identifier string.
   * * `label`: A primary string of text.
   * * `title`: Text that appears on mouse hover. Most helpful for long labels.
   * ```
   * {
   * 	id: '2',
   * 	label: 'Salesforce.com, Inc.',
   * 	title: 'Salesforce.com, Inc. - Want to work here?',
   * },
   * ```
   * `options` with array length of zero will remove this component from the DOM.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.oneOfType([PropTypes.node, PropTypes.shape({
      imgSrc: PropTypes.string,
      title: PropTypes.string,
      variant: PropTypes.string
    })]),
    bare: PropTypes.bool,
    error: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.shape({
      category: PropTypes.string,
      name: PropTypes.string
    })]),
    id: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    title: PropTypes.string
  })),

  /**
   * Function called when a pill is clicked
   */
  onClickPill: PropTypes.func,

  /**
   * Function called when a pill is requested to be 'removed' via the delete key or 'X' icon click.
   */
  onRequestRemovePill: PropTypes.func,

  /**
   * Custom style object to be passed to the pill container
   */
  style: PropTypes.object,

  /**
   * Specifies the pill styling at the container level. `bare` removes border styling from all pills.
   */
  variant: PropTypes.oneOf(['base', 'bare'])
};
/**
 * A `PillContainer` is a container that holds one or more pills. Use it for a list of pills in a container that resembles an `input` form field. It is not intended for navigation.
 */

var PillContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PillContainer, _React$Component);

  function PillContainer(props) {
    var _this;

    _classCallCheck(this, PillContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PillContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getId", function () {
      return _this.props.id || _this.generatedId;
    });

    _defineProperty(_assertThisInitialized(_this), "getNewActiveOptionIndex", function (_ref) {
      var activeOptionIndex = _ref.activeOptionIndex,
          offset = _ref.offset,
          options = _ref.options;
      var nextIndex = activeOptionIndex + offset;
      return options.length > nextIndex && nextIndex >= 0 ? nextIndex : activeOptionIndex;
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlurPill", function () {
      if (!_this.preserveFocus) {
        _this.setState({
          listboxHasFocus: false
        });
      } else {
        _this.preserveFocus = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickPill", function (event, data) {
      _this.setState({
        activeSelectedOption: data.option,
        activeSelectedOptionIndex: data.index,
        listboxHasFocus: true
      });

      if (_this.props.onClickPill) {
        _this.props.onClickPill(event, {
          index: data.index,
          option: data.option
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePillFocus", function () {
      if (!_this.state.listboxHasFocus) {
        _this.setState({
          listboxHasFocus: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleNavigatePillContainer", function (event, _ref2) {
      var direction = _ref2.direction;
      var offsets = {
        next: 1,
        previous: -1
      };

      _this.setState(function (prevState) {
        var options = _this.props.options;
        var isLastOptionAndRightIsPressed = prevState.activeSelectedOptionIndex + 1 === options.length && direction === 'next';
        var isFirstOptionAndLeftIsPressed = prevState.activeSelectedOptionIndex === 0 && direction === 'previous';
        var newState;

        if (isLastOptionAndRightIsPressed) {
          newState = {
            activeSelectedOption: options[0],
            activeSelectedOptionIndex: 0,
            listboxHasFocus: true
          };
        } else if (isFirstOptionAndLeftIsPressed) {
          newState = {
            activeSelectedOption: options[options.length - 1],
            activeSelectedOptionIndex: options.length - 1,
            listboxHasFocus: true
          };
        } else {
          var newIndex = _this.getNewActiveOptionIndex({
            activeOptionIndex: prevState.activeSelectedOptionIndex,
            offset: offsets[direction],
            options: options
          });

          newState = {
            activeSelectedOption: options[newIndex],
            activeSelectedOptionIndex: newIndex,
            listboxHasFocus: true
          };
        }

        _this.preserveFocus = true;
        return newState;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestFocusPillContainer", function (event, _ref3) {
      var ref = _ref3.ref;

      if (ref) {
        _this.activeSelectedOptionRef = ref;

        _this.activeSelectedOptionRef.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestRemove", function (event, data) {
      if (_this.props.onRequestRemovePill) {
        _this.preserveFocus = true;

        _this.props.onRequestRemovePill(event, {
          index: data.index,
          option: data.option
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetActiveSelectedOption", function () {
      var options = _this.props.options;
      var activeSelectedOptionIndex = _this.state.activeSelectedOptionIndex;

      if (!options[activeSelectedOptionIndex]) {
        if (options.length > 0 && activeSelectedOptionIndex >= options.length) {
          activeSelectedOptionIndex = options.length - 1;
        } else {
          activeSelectedOptionIndex = 0;
        }
      }

      _this.setState({
        activeSelectedOption: options[activeSelectedOptionIndex] || undefined,
        activeSelectedOptionIndex: activeSelectedOptionIndex,
        listboxHasFocus: !!options[activeSelectedOptionIndex]
      });
    });

    _this.state = {
      // seeding initial state with this.props.options[0]
      activeSelectedOption: _this.props.options && _this.props.options[0] || undefined,
      activeSelectedOptionIndex: 0,
      listboxHasFocus: false
    };
    _this.activeSelectedOptionRef = null;
    _this.generatedId = shortid.generate();
    _this.preserveFocus = false;
    return _this;
  }

  _createClass(PillContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.options && this.props.options.length > 0 && !this.props.options[this.state.activeSelectedOptionIndex] || this.preserveFocus) {
        this.resetActiveSelectedOption();
        this.preserveFocus = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.options.length > 0 ? React.createElement(SelectedListBox, {
        activeOption: this.state.activeSelectedOption,
        activeOptionIndex: this.state.activeSelectedOptionIndex,
        assistiveText: {
          removePill: this.props.assistiveText.removePill,
          selectedListboxLabel: this.props.assistiveText.listboxLabel
        },
        className: this.props.className,
        events: {
          onBlurPill: this.handleBlurPill,
          onClickPill: this.handleClickPill,
          onPillFocus: this.handlePillFocus,
          onRequestFocus: this.handleRequestFocusPillContainer,
          onRequestFocusOnNextPill: this.handleNavigatePillContainer,
          onRequestFocusOnPreviousPill: this.handleNavigatePillContainer,
          onRequestRemove: this.handleRequestRemove
        },
        id: "".concat(this.getId(), "-listbox-of-pill-options"),
        isBare: this.props.variant === 'bare',
        isPillContainer: true,
        labels: this.props.labels,
        listboxHasFocus: this.state.listboxHasFocus,
        renderAtSelectionLength: 0,
        selection: this.props.options,
        style: this.props.style
      }) : null;
    }
  }]);

  return PillContainer;
}(React.Component);

PillContainer.displayName = PILL_CONTAINER;
PillContainer.defaultProps = {
  assistiveText: {
    listboxLabel: 'Selected Options:',
    removePill: 'Press delete or backspace to remove'
  },
  labels: {
    removePillTitle: 'Remove'
  }
};
PillContainer.propTypes = propTypes;
export default PillContainer;
//# sourceMappingURL=index.js.map