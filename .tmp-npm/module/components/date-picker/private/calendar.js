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
import Week from './week';
import DateUtil from '../../../utilities/date';

var DatepickerCalendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatepickerCalendar, _React$Component);

  function DatepickerCalendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatepickerCalendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatepickerCalendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focusedDate: _this.props.initialDateForCalendarRender,
      calendarHasFocus: true,
      todayFocus: false
    });

    _defineProperty(_assertThisInitialized(_this), "setCalendarRenderSeedDate", function (prevProps) {
      // Set prop that sets focus in child component once it is rendered. This occurs when the month DOM has changed. This will trigger a re-render, but no DOM change will occur, just a DOM focus.
      if (!DateUtil.isEqual(_this.props.initialDateForCalendarRender, prevProps.initialDateForCalendarRender)) {
        _this.setState({
          focusedDate: _this.props.initialDateForCalendarRender
        });

        _this.props.onRequestInternalFocusDate(undefined, {
          date: _this.props.initialDateForCalendarRender,
          triggerCallback: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectDate", function (event, _ref) {
      var date = _ref.date;

      if (!_this.props.dateDisabled({
        date: date
      })) {
        _this.setState({
          selected: date
        });

        _this.props.onSelectDate(event, {
          date: date
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestClose", function (event) {
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose(event, {});
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyboardNavigateToPreviousDay", function (event, _ref2) {
      var date = _ref2.date;
      var prevDate = DateUtil.addDays(date, -1);

      if (!DateUtil.isSameMonth(prevDate, date)) {
        _this.props.onChangeMonth(event, prevDate);
      } else {
        _this.setState({
          focusedDate: prevDate
        });

        _this.props.onRequestInternalFocusDate(event, {
          date: prevDate,
          triggerCallback: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyboardNavigateToNextDay", function (event, _ref3) {
      var date = _ref3.date;
      var nextDate = DateUtil.addDays(date, 1);

      if (!DateUtil.isSameMonth(nextDate, date)) {
        _this.props.onChangeMonth(event, nextDate);
      } else {
        _this.setState({
          focusedDate: nextDate
        });

        _this.props.onRequestInternalFocusDate(event, {
          date: nextDate,
          triggerCallback: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyboardNavigateToPreviousWeek", function (event, _ref4) {
      var date = _ref4.date;
      var prevDate = DateUtil.addDays(date, -7);

      if (!DateUtil.isSameMonth(prevDate, date)) {
        _this.props.onChangeMonth(event, prevDate);
      } else {
        _this.setState({
          focusedDate: prevDate
        });

        _this.props.onRequestInternalFocusDate(event, {
          date: prevDate,
          triggerCallback: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyboardNavigateToNextWeek", function (event, _ref5) {
      var date = _ref5.date;
      var nextDate = DateUtil.addDays(date, 7);

      if (!DateUtil.isSameMonth(nextDate, date)) {
        _this.props.onChangeMonth(event, nextDate);
      } else {
        _this.setState({
          focusedDate: nextDate
        });

        _this.props.onRequestInternalFocusDate(event, {
          date: nextDate,
          triggerCallback: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderWeeks", function () {
      var firstDayOfWeekOffset = _this.props.isIsoWeekday ? 1 : 0;
      var firstDayOfMonth = DateUtil.firstDayOfMonth(_this.props.initialDateForCalendarRender);
      var firstDayOfWeek;

      if (firstDayOfMonth.getDay() > firstDayOfWeekOffset || firstDayOfMonth.getDay() < firstDayOfWeekOffset) {
        var prevWeek = DateUtil.addWeeks(firstDayOfMonth, -1);
        firstDayOfWeek = DateUtil.nearestWeekDay(prevWeek, firstDayOfWeekOffset);
      } else {
        firstDayOfWeek = firstDayOfMonth;
      }

      var weeks = [];
      var done = false;
      var monthIndex = firstDayOfWeek.getMonth();
      var count = 0; // eslint-disable-next-line fp/no-loops

      while (!done) {
        // eslint-disable-next-line fp/no-mutating-methods
        weeks.push(React.createElement(Week, {
          calendarHasFocus: _this.state.calendarHasFocus,
          dateDisabled: _this.props.dateDisabled,
          firstDayOfWeek: firstDayOfWeek,
          key: firstDayOfWeek.toString(),
          focusedDate: _this.state.focusedDate,
          initialDateForCalendarRender: _this.props.initialDateForCalendarRender,
          onCalendarBlur: _this.props.onCalendarBlur,
          onKeyboardNavigateToPreviousDay: _this.handleKeyboardNavigateToPreviousDay,
          onKeyboardNavigateToNextDay: _this.handleKeyboardNavigateToNextDay,
          onKeyboardNavigateToPreviousWeek: _this.handleKeyboardNavigateToPreviousWeek,
          onKeyboardNavigateToNextWeek: _this.handleKeyboardNavigateToNextWeek,
          onRequestClose: _this.handleRequestClose,
          onRequestInternalFocusDate: _this.props.onRequestInternalFocusDate,
          onSelectDate: _this.handleSelectDate,
          selectedDate: _this.props.selectedDate,
          selectedDateRef: _this.props.selectedDateRef,
          todayLabel: _this.props.todayLabel
        })); // create new weeks

        firstDayOfWeek = DateUtil.addWeeks(firstDayOfWeek, 1);
        done = count > 2 && monthIndex !== firstDayOfWeek.getMonth();
        count += 1;
        monthIndex = firstDayOfWeek.getMonth();
      }

      var extraWeeks = 0; // eslint-disable-next-line fp/no-loops

      while (weeks.length < 6) {
        extraWeeks += 1; // eslint-disable-next-line fp/no-mutating-methods

        weeks.push(React.createElement("tr", {
          key: "extra_".concat(extraWeeks),
          className: "week"
        }, React.createElement("td", {
          "aria-disabled": "true",
          "aria-selected": "false",
          className: "slds-disabled-text"
        }, React.createElement("span", {
          className: "slds-day "
        }, "\xA0"))));
      }

      return weeks;
    });

    return _this;
  }

  _createClass(DatepickerCalendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.setCalendarRenderSeedDate(prevProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sunday = React.createElement("th", null, React.createElement("abbr", {
        title: this.props.weekDayLabels[0]
      }, this.props.abbreviatedWeekDayLabels[0]));
      return React.createElement("div", {
        className: "calendar"
      }, React.createElement("table", {
        className: "datepicker__month",
        role: "grid",
        "aria-labelledby": "".concat(this.props.id, "-month")
      }, React.createElement("thead", null, React.createElement("tr", null, this.props.isIsoWeekday ? null : sunday, React.createElement("th", {
        scope: "col"
      }, React.createElement("abbr", {
        title: this.props.weekDayLabels[1]
      }, this.props.abbreviatedWeekDayLabels[1])), React.createElement("th", {
        scope: "col"
      }, React.createElement("abbr", {
        title: this.props.weekDayLabels[2]
      }, this.props.abbreviatedWeekDayLabels[2])), React.createElement("th", {
        scope: "col"
      }, React.createElement("abbr", {
        title: this.props.weekDayLabels[3]
      }, this.props.abbreviatedWeekDayLabels[3])), React.createElement("th", {
        scope: "col"
      }, React.createElement("abbr", {
        title: this.props.weekDayLabels[4]
      }, this.props.abbreviatedWeekDayLabels[4])), React.createElement("th", {
        scope: "col"
      }, React.createElement("abbr", {
        title: this.props.weekDayLabels[5]
      }, this.props.abbreviatedWeekDayLabels[5])), React.createElement("th", {
        scope: "col"
      }, React.createElement("abbr", {
        title: this.props.weekDayLabels[6]
      }, this.props.abbreviatedWeekDayLabels[6])), this.props.isIsoWeekday && sunday)), React.createElement("tbody", null, this.renderWeeks(), React.createElement("tr", null, React.createElement("td", {
        colSpan: "7",
        role: "gridcell"
      }, React.createElement("a", {
        href: "javascript:void(0)" // eslint-disable-line no-script-url
        ,
        tabIndex: "0",
        className: "slds-show_inline-block slds-p-bottom_x-small",
        onClick: function onClick(event) {
          _this2.handleSelectDate(event, {
            date: new Date()
          });
        },
        onKeyDown: this.props.onLastFocusableNodeKeyDown,
        ref: this.props.todayRef
      }, this.props.todayLabel))))));
    }
  }]);

  return DatepickerCalendar;
}(React.Component);

_defineProperty(DatepickerCalendar, "displayName", 'SLDSDatepickerCalendar');

_defineProperty(DatepickerCalendar, "propTypes", {
  /**
   * Three letter abbreviations of the days of the week, starting on Sunday.
   */
  abbreviatedWeekDayLabels: PropTypes.array.isRequired,

  /**
   * dateDisabled() takes a date as input argument, returns true if given date should be disabled, otherwise returns false.
   */
  dateDisabled: PropTypes.func,

  /**
   * HTML id for component
   */
  id: PropTypes.string.isRequired,

  /**
   * Date used to create calendar that is displayed. This is typically the initial day focused when using the keyboard navigation. Focus will be set to this date if available.
   */
  initialDateForCalendarRender: PropTypes.instanceOf(Date).isRequired,

  /**
   * Makes Monday the first day of the week
   */
  isIsoWeekday: PropTypes.bool,

  /**
   * Triggered when the keyboard moves focus off the calendar.
   */
  onCalendarBlur: PropTypes.func.isRequired,

  /**
   * Displayed calendar has changed or re-rendered
   */
  onChangeMonth: PropTypes.func.isRequired,

  /**
   * Internal callback that will eventually trigger when the keyboard moves focus on the calendar. `{date: [Date object], formattedDate: [string]}`.
   */
  onRequestInternalFocusDate: PropTypes.func,

  /**
   * Triggered when the calendar is cancelled.
   */
  onRequestClose: PropTypes.func.isRequired,

  /**
   * Triggered when a date on the calendar is clicked.
   */
  onSelectDate: PropTypes.func.isRequired,

  /**
   * Currently selected date. This should be present in the input field.
   */
  selectedDate: PropTypes.instanceOf(Date),

  /**
   * Component reference / DOM node for selected day.
   */
  selectedDateRef: PropTypes.func,

  /**
   * Label of shortcut to jump to today within the calendar. This is also used for assistive text on today's date.
   */
  todayLabel: PropTypes.string.isRequired,

  /**
   * For keyboard navigation. Listens for key presses on the last focusable DOM Node, the "Today" link, so that dialog focus can be trapped.
   */
  onLastFocusableNodeKeyDown: PropTypes.func,

  /**
   * Callback that passes in the DOM reference of the Today `a` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous. `buttonRef={(component) => { if(component) console.log(component); }}`
   */
  todayRef: PropTypes.func,

  /**
   * Names of the seven days of the week, starting on Sunday.
   */
  weekDayLabels: PropTypes.array.isRequired
});

export default DatepickerCalendar;
//# sourceMappingURL=calendar.js.map