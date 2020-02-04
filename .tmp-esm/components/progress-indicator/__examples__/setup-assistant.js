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

import React from 'react';
import IconSettings from "../../../../components/icon-settings";
import ProgressIndicator from "../../../../components/progress-indicator"; // `~` is replaced with design-system-react at runtime

import Button from "../../../../components/button";
import Checkbox from "../../../../components/checkbox";
var steps = [{
  id: 0,
  label: 'label #1',
  onRenderSetupAssistantAction: React.createElement(Button, {
    label: "Brand",
    variant: "brand"
  }),
  setupAssistantEstimatedTime: '4 min'
}, {
  id: 1,
  label: 'label #2',
  onRenderSetupAssistantAction: React.createElement(Button, {
    disabled: true,
    label: "Disabled",
    variant: "brand"
  }),
  setupAssistantEstimatedTime: '40 min'
}, {
  id: 2,
  label: 'label #3',
  onRenderSetupAssistantAction: React.createElement(Button, {
    iconCategory: "utility",
    iconName: "download",
    iconPosition: "left",
    label: "Download"
  })
}, {
  id: 3,
  label: 'label #4',
  onRenderSetupAssistantAction: React.createElement(Checkbox, {
    id: "checkbox-toggle-example--error",
    variant: "toggle"
  })
}, {
  id: 4,
  label: 'label #5',
  onRenderSetupAssistantAction: React.createElement(Button, {
    label: "Done"
  }),
  setupAssistantEstimatedTime: '14 min'
}];
/*
 * This example allows you to select the next step and only the next step. Typically, Progress Indicator should be paired with a modal and form errors should be explained outside of this component.
 */

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleStepEvent", function (event, data) {
      _this.setState({
        completedSteps: steps.slice(0, data.step.id),
        disabledSteps: data.step.id < steps.length ? steps.slice(data.step.id + 2, steps.length) : [],
        selectedStep: data.step
      });
    });

    _this.state = {
      steps: steps,
      completedSteps: [],
      disabledSteps: steps.slice(2, steps.length),
      selectedStep: steps[0]
    };
    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", {
        style: {
          padding: '4rem 1rem 0px',
          background: this.props.variant === 'modal' ? 'rgb(244, 246, 249)' : undefined
        }
      }, React.createElement(ProgressIndicator, {
        id: "setup-assistant-progress-indicator",
        completedSteps: this.state.completedSteps,
        disabledSteps: this.state.disabledSteps,
        onStepClick: this.handleStepEvent,
        orientation: "vertical",
        steps: this.state.steps,
        selectedStep: this.state.selectedStep,
        variant: "setup-assistant"
      })));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'ProgressIndicatorSetupAssistant';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=setup-assistant.js.map