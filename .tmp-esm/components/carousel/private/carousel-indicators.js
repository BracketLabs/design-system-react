function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."

import classnames from 'classnames';
import { CAROUSEL_INDICATORS } from '../../../utilities/constants';
/**
 * CarouselIndicators is used to display the list of indicators associated to the number of panels
 * a carousel has
 */

var CarouselIndicators =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CarouselIndicators, _React$Component);

  function CarouselIndicators() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CarouselIndicators);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarouselIndicators)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      _this["indicator".concat(_this.props.currentIndex)].focus();

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    });

    return _this;
  }

  _createClass(CarouselIndicators, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.hasFocus && this["indicator".concat(this.props.currentIndex)]) {
        this["indicator".concat(this.props.currentIndex)].focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return React.createElement("ul", {
        className: "slds-carousel__indicators slds-col slds-text-align_center",
        role: "tablist"
      }, _toConsumableArray(Array(props.noOfIndicators).keys()).map(function (index) {
        var isSelectedPanel = index === props.currentIndex;
        var indicatorActionClassName = classnames('slds-carousel__indicator-action', props.className, {
          'slds-is-active': isSelectedPanel
        });
        var assistiveText = "".concat(index);
        var title = "".concat(index);
        var id = '';

        if (props.items && props.items.length > 0) {
          // eslint-disable-next-line prefer-destructuring
          id = props.items[index].id;
          var startItemIndex = index * props.itemsPerPanel;
          var autoIndicatorText = ''; // eslint-disable-next-line fp/no-loops

          for (var i = startItemIndex; i < startItemIndex + props.itemsPerPanel; i += 1) {
            if (props.items[i] && props.items[i].heading) {
              autoIndicatorText = !autoIndicatorText ? '' : "".concat(autoIndicatorText, ", ");
              autoIndicatorText += props.items[i].heading;
            }
          }

          if (autoIndicatorText) {
            assistiveText = autoIndicatorText;
            title = autoIndicatorText;
          }
        }

        return React.createElement("li", {
          className: "slds-carousel__indicator slds-m-horizontal_xx-small",
          key: index,
          role: "presentation",
          style: {
            margin: 0,
            padding: '0 5px'
          }
        }, React.createElement("a", {
          ref: function ref(component) {
            _this2["indicator".concat(index)] = component;
          },
          id: "indicator-id-".concat(props.carouselId, "-").concat(index),
          className: indicatorActionClassName,
          role: "tab",
          tabIndex: isSelectedPanel ? '0' : '-1',
          "aria-selected": isSelectedPanel,
          "aria-controls": props.getPanelId({
            carouselId: props.carouselId,
            itemId: id
          }),
          title: title,
          onBlur: props.onBlur,
          onClick: function onClick(event) {
            return props.onClick(event, index);
          },
          onFocus: _this2.onFocus
        }, React.createElement("span", {
          className: "slds-assistive-text"
        }, assistiveText)));
      }));
    }
  }]);

  return CarouselIndicators;
}(React.Component);

CarouselIndicators.displayName = CAROUSEL_INDICATORS;
CarouselIndicators.defaultProps = {
  currentIndex: 0
}; // ### Prop Types

CarouselIndicators.propTypes = {
  /**
   * Carousel HTML ID
   */
  carouselId: PropTypes.string,

  /**
   * CSS classes that are applied to the component
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Selected indicator
   */
  currentIndex: PropTypes.number,

  /**
   * Passed from carousel parent state, dictates if indicator currently has focus
   */
  hasFocus: PropTypes.bool,

  /**
   * Array of objects with shape, needed for building a carousel items
   */
  items: PropTypes.array,

  /**
   * Number of items to be displayed at a time in the carousel
   */
  itemsPerPanel: PropTypes.number,

  /**
   * Number of indicators to be displayed (corresponds to the number of panels in the carousel)
   */
  noOfIndicators: PropTypes.number.isRequired,

  /**
   * Fires on indicator blur, allows parent carousel to adjust indicatorsHaveFocus state accordingly
   */
  onBlur: PropTypes.func,

  /**
   * Triggered when the indicator is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Fires on indicator focus, allows parent carousel to adjust indicatorsHaveFocus state accordingly
   */
  onFocus: PropTypes.func
};
export default CarouselIndicators;
//# sourceMappingURL=carousel-indicators.js.map