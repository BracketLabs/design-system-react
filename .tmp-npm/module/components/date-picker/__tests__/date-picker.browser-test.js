function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import your external dependencies
import React from 'react';
import PropTypes from 'prop-types';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import moment from 'moment';
import { mount } from 'enzyme';
import IconSettings from '../../icon-settings'; // Import your internal dependencies (for example):

import Datepicker from '../../date-picker';
import Input from '../../input';
import KEYS from '../../../utilities/key-code'; // eslint-disable-next-line camelcase

import UNSAFE_DirectionSettings from '../../utilities/UNSAFE_direction';

var makeRtl = function makeRtl(component) {
  return (// eslint-disable-next-line
    React.createElement(UNSAFE_DirectionSettings.Provider, {
      value: "rtl"
    }, React.createElement("div", {
      dir: "rtl"
    }, component))
  );
};
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */


chai.use(chaiEnzyme());
var defaultProps = {
  id: 'sample-datepicker',
  value: new Date(2007, 0, 6)
};
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var DemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoComponent, _React$Component);

  function DemoComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DemoComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DemoComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(DemoComponent, [{
    key: "render",
    // event handlers
    value: function render() {
      var component = React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Datepicker, _extends({
        formatter: function formatter(date) {
          return date ? moment(date).format('M/D/YYYY') : '';
        },
        parser: function parser(dateString) {
          return moment(dateString, 'MM-DD-YYYY').toDate();
        }
      }, this.props)));
      return this.props.isRtl ? makeRtl(component) : component;
    }
  }]);

  return DemoComponent;
}(React.Component);
/* All tests for component being tested should be wrapped in a root `describe`,
 * which should be named after the component being tested.
 * When read aloud, the cumulative `describe` and `it` names should form a coherent
 * sentence, eg "Date Picker default structure and css is present with expected
 * attributes set". If you are having trouble constructing a cumulative short
 * sentence, this may be an indicator that your test is poorly structured.
 * String provided as first parameter names the `describe` section. Limit to nouns
 * as much as possible/appropriate.`
 */


_defineProperty(DemoComponent, "displayName", 'DatepickerDemoComponent');

_defineProperty(DemoComponent, "propTypes", {
  isOpen: PropTypes.bool,
  isRtl: PropTypes.bool
});

_defineProperty(DemoComponent, "defaultProps", defaultProps);

describe('SLDSDatepicker', function describeFunction() {
  var wrapper;
  var triggerClassSelector = 'button.slds-input__icon';
  describe('Assistive technology', function () {
    afterEach(function () {
      return wrapper.unmount();
    });
    it('has aria-haspopup, correct aria-expanded on input trigger.', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        isOpen: true
      }));
      var inputTrigger = wrapper.find(triggerClassSelector);
      expect(inputTrigger).to.have.attr('aria-haspopup', 'true');
      var ariaExpanded = inputTrigger.find('button');
      expect(ariaExpanded).to.have.attr('aria-expanded', 'true');
    });
  }); // PROPS AND CHILDREN

  describe('Optional props', function () {
    var customPlaceholder = 'With custom Input';
    var optionalProps = {
      input: React.createElement(Input, {
        placeholder: customPlaceholder
      })
    };
    afterEach(function () {
      return wrapper.unmount();
    });
    it('has custom input with custom placeholder', function () {
      wrapper = mount(React.createElement(DemoComponent, optionalProps));
      expect(wrapper.find('input')).to.have.attr('placeholder', customPlaceholder);
    });
  }); // EVENTS

  describe('onClose, onRequestClose, onOpen callbacks are set', function describeFunction2() {
    afterEach(function () {
      return wrapper.unmount();
    });
    it('onOpen is executed when trigger is clicked, onClose is executed when date is selected', function (done) {
      wrapper = mount(React.createElement(DemoComponent, {
        menuPosition: "relative",
        onClose: function onClose() {
          setTimeout(function () {
            var month = wrapper.find('.datepicker__month');
            expect(month).to.not.be.present;
            done();
          }, 0);
        },
        onRequestClose: function onRequestClose() {
          var month = wrapper.find('.datepicker__month');
          expect(month).to.be.present;
        },
        onOpen: function onOpen() {
          setTimeout(function () {
            var firstDayOfMonth = wrapper.find('.datepicker__month [aria-disabled=false]').first();
            expect(firstDayOfMonth).to.be.present;
            firstDayOfMonth.simulate('click', {});
          }, 0);
        }
      }));
      var trigger = wrapper.find(triggerClassSelector);
      trigger.simulate('click', {});
    });
    it('onChange is triggered when date is selected', function (done) {
      wrapper = mount(React.createElement(DemoComponent, {
        menuPosition: "relative",
        onChange: function onChange(event, data) {
          setTimeout(function () {
            // test callback parameters
            expect(data.date.getTime()).to.equal(new Date('1/1/2007').getTime());
            expect(data.formattedDate).to.equal('1/1/2007');
            done();
          }, 0);
        },
        onOpen: function onOpen() {
          setTimeout(function () {
            var firstDayOfMonth = wrapper.find('.datepicker__month [aria-disabled=false]').first();
            expect(firstDayOfMonth).to.exist;
            firstDayOfMonth.simulate('click', {});
          });
        }
      }));
      var trigger = wrapper.find(triggerClassSelector);
      trigger.simulate('click', {});
    });
  });
  describe('keyboard interactions', function () {
    /* Test event callback functions using Simulate. For more information, view
     * https://github.com/airbnb/enzyme/blob/master/docs/api/ReactWrapper/simulate.md
     */
    describe('Esc when menu is open', function () {
      afterEach(function () {
        return wrapper.unmount();
      });
      it('opens on trigger click, closes on ESC', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          menuPosition: "relative",
          onClose: function onClose() {
            setTimeout(function () {
              var month = wrapper.find('.datepicker__month');
              expect(month).to.not.be.present;
              done();
            }, 0);
          },
          onOpen: function onOpen() {
            setTimeout(function () {
              var firstDayOfMonth = wrapper.find('.datepicker__month [aria-disabled=false]').first();
              firstDayOfMonth.simulate('keyDown', {
                key: 'Esc',
                keyCode: KEYS.ESCAPE,
                which: KEYS.ESCAPE
              });
            }, 0);
          }
        }));
        var trigger = wrapper.find(triggerClassSelector);
        trigger.simulate('click', {});
      });
      it('navigates to next week', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          menuPosition: "relative",
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2007, 0, 13).getTime());
            done();
          }
        }));
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Down',
          keyCode: KEYS.DOWN,
          which: KEYS.DOWN
        });
      });
      it('navigates to next day', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          menuPosition: "relative",
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2007, 0, 7).getTime());
            done();
          }
        }));
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Right',
          keyCode: KEYS.RIGHT,
          which: KEYS.RIGHT
        });
      });
      it('navigates to next day with the opposite button for RTL', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isRtl: true,
          isOpen: true,
          menuPosition: "relative",
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2007, 0, 7).getTime());
            done();
          }
        }));
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Left',
          keyCode: KEYS.LEFT,
          which: KEYS.LEFT
        });
      });
      it('navigates to previous week (that is of a previous month)', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          menuPosition: "relative",
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2006, 11, 30).getTime());
            done();
          }
        }));
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Up',
          keyCode: KEYS.UP,
          which: KEYS.UP
        });
      });
      it('navigates to previous day', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          menuPosition: "relative",
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2007, 0, 5).getTime());
            done();
          }
        }));
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Left',
          keyCode: KEYS.LEFT,
          which: KEYS.LEFT
        });
      });
      it('navigates to previous day with the opposite button for RTL', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isRtl: true,
          isOpen: true,
          menuPosition: "relative",
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.date.getTime()).to.equal(new Date(2007, 0, 5).getTime());
            done();
          }
        }));
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Right',
          keyCode: KEYS.RIGHT,
          which: KEYS.RIGHT
        });
      });
      it('calendar blur, focus on previous month button', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          menuPosition: "relative",
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.ref.textContent).to.equal('Previous month');
            done();
          }
        }));
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Tab',
          keyCode: KEYS.TAB,
          which: KEYS.TAB
        });
      });
      it('calendar blur, focus on today', function (done) {
        wrapper = mount(React.createElement(DemoComponent, {
          isOpen: true,
          menuPosition: "relative",
          onCalendarFocus: function onCalendarFocus(event, data) {
            expect(data.ref.textContent).to.equal('Today');
            done();
          }
        }));
        var selectedDay = wrapper.find('.datepicker__month [aria-selected=true]');
        selectedDay.simulate('keyDown', {
          key: 'Tab',
          keyCode: KEYS.TAB,
          shiftKey: true,
          which: KEYS.TAB
        });
      });
    });
  });
  describe('Disabled', function describeFunction2() {
    var triggerClicked = sinon.spy();
    var dialogOpened = sinon.spy();
    afterEach(function () {
      return wrapper.unmount();
    });
    it('onOpen is not called when disabled', function () {
      wrapper = mount(React.createElement(DemoComponent, {
        disabled: true,
        menuPosition: "relative",
        onClick: triggerClicked,
        onOpen: dialogOpened
      }));
      wrapper.simulate('click', {});
      expect(dialogOpened.callCount).to.equal(0);
    });
  });
  describe('Disable dates', function () {
    afterEach(function () {
      return wrapper.unmount();
    });
    it('disable weekends', function (done) {
      // this only tests if onChange fires
      var handleChangeSpy = sinon.spy();
      wrapper = mount(React.createElement(DemoComponent, {
        isOpen: true,
        menuPosition: "relative",
        value: new Date(2007, 0, 5),
        dateDisabled: function dateDisabled(_ref) {
          var date = _ref.date;
          return date.getDay() > 5 || date.getDay() < 1;
        },
        onChange: handleChangeSpy
      }));
      var input = wrapper.find('input').first();
      expect(input).to.have.value('1/5/2007');
      var disabledDay = wrapper.find('.datepicker__month [aria-disabled=true]').first();
      disabledDay.simulate('click', {});
      expect(handleChangeSpy.calledOnce).to.equal(false);
      var day = wrapper.find('.datepicker__month [aria-disabled=false]').first();
      day.simulate('click', {});
      expect(handleChangeSpy.calledOnce).to.equal(true);
      done();
      var trigger = wrapper.find(triggerClassSelector);
      trigger.simulate('click', {});
    });
  });
});
//# sourceMappingURL=date-picker.browser-test.js.map