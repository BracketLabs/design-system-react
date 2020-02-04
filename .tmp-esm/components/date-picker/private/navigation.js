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
import PropTypes from 'prop-types';
import YearPicklist from './year-picklist';
import Button from '../../button';
import DateUtil from '../../../utilities/date';

var DatepickerMonthNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatepickerMonthNavigation, _React$Component);

  function DatepickerMonthNavigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatepickerMonthNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatepickerMonthNavigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getMonthLabel", function () {
      return _this.props.monthLabels[new Date(_this.props.initialDateForCalendarRender).getMonth()];
    });

    _defineProperty(_assertThisInitialized(_this), "getYearLabel", function () {
      return new Date(_this.props.initialDateForCalendarRender).getFullYear();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "handleYearSelect", function (initialDateForCalendarRender) {
      _this.props.onChangeMonth(undefined, initialDateForCalendarRender);
    });

    _defineProperty(_assertThisInitialized(_this), "previousMonthClicked", function () {
      _this.props.onChangeMonth(undefined, DateUtil.addMonths(_this.props.initialDateForCalendarRender, -1));
    });

    _defineProperty(_assertThisInitialized(_this), "nextMonthClicked", function () {
      _this.props.onChangeMonth(undefined, DateUtil.addMonths(_this.props.initialDateForCalendarRender, 1));
    });

    return _this;
  }

  _createClass(DatepickerMonthNavigation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        className: "slds-datepicker__filter slds-grid"
      }, React.createElement("div", {
        className: "slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow",
        style: {
          flex: 1.75
        }
      }, React.createElement("div", {
        className: "slds-align-middle"
      }, React.createElement(Button, {
        assistiveText: {
          icon: this.props.assistiveTextPreviousMonth
        },
        iconCategory: "utility",
        iconName: "left",
        iconVariant: "container",
        onKeyDown: this.props.onPreviousMonthKeyDown,
        onClick: this.previousMonthClicked,
        buttonRef: function buttonRef(component) {
          _this2.props.previousMonthRef(component);
        },
        variant: "icon",
        type: "button"
      })), React.createElement("h2", {
        id: "".concat(this.props.id, "-month"),
        className: "slds-align-middle",
        "aria-live": "assertive",
        "aria-atomic": true
      }, this.getMonthLabel(), ' ', React.createElement("span", {
        className: "slds-assistive-text"
      }, this.getYearLabel())), React.createElement("div", {
        className: "slds-align-middle"
      }, React.createElement(Button, {
        assistiveText: {
          icon: this.props.assistiveTextNextMonth
        },
        iconCategory: "utility",
        iconName: "right",
        iconVariant: "container",
        onClick: this.nextMonthClicked,
        variant: "icon",
        type: "button"
      }))), React.createElement(YearPicklist, {
        assistiveTextYear: this.props.assistiveTextYear,
        id: this.props.id,
        initialDateForCalendarRender: this.props.initialDateForCalendarRender,
        onChangeMonth: this.handleYearSelect,
        relativeYearFrom: this.props.relativeYearFrom,
        relativeYearTo: this.props.relativeYearTo
      }));
    }
  }]);

  return DatepickerMonthNavigation;
}(React.Component);

_defineProperty(DatepickerMonthNavigation, "displayName", 'SLDSDatepickerMonthNavigation');

_defineProperty(DatepickerMonthNavigation, "propTypes", {
  /**
   * Label for button to go to the next month
   */
  assistiveTextNextMonth: PropTypes.string.isRequired,

  /**
   * Label for button to go to the previous month
   */
  assistiveTextPreviousMonth: PropTypes.string.isRequired,

  /**
   * Label for year picklist/combobox
   */
  assistiveTextYear: PropTypes.string.isRequired,

  /**
   * HTML id for component
   */
  id: PropTypes.string,

  /**
   * Date used to create calendar that is displayed. This is typically the initial day focused when using the keyboard navigation. Focus will be set to this date if available.
   */
  initialDateForCalendarRender: PropTypes.instanceOf(Date).isRequired,

  /**
   * Displayed calendar has changed or re-rendered
   */
  onChangeMonth: PropTypes.func.isRequired,

  /**
   * Names of the months
   */
  monthLabels: PropTypes.array.isRequired,

  /**
   * For keyboard navigation. In order to trap focus within the dialog, the first DOM node with a tab index should be listened to.
   */
  onPreviousMonthKeyDown: PropTypes.func,

  /**
   * Callback that passes in the DOM reference of the `<button>` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous.
   */
  previousMonthRef: PropTypes.func.isRequired,

  /**
   * Offset of year from current year that can be selected in the year selection dropdown. (2017 - 5 = 2012).
   */
  relativeYearFrom: PropTypes.number,

  /**
   * Offset of year from current year that can be selected in the year selection dropdown. (2017 + 5 = 2012).
   */
  relativeYearTo: PropTypes.number
});

export default DatepickerMonthNavigation;
//# sourceMappingURL=navigation.js.map