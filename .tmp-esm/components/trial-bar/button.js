function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Button from '../button';
import { TRIAL_BAR_BUTTON } from '../../utilities/constants'; // This component accepts the same props as Button.
// eslint-disable-next-line react/forbid-foreign-prop-types

var propTypes = Button.propTypes;
/**
 *  A [Button](/components/buttons/) within the Trial Bar.
 */

var TrialBarButton = function TrialBarButton(props) {
  return React.createElement(Button, _extends({}, props, {
    inverse: true,
    style: {
      border: 0,
      padding: 0
    },
    className: "slds-m-right_small"
  }));
};

TrialBarButton.propTypes = propTypes;
TrialBarButton.displayName = TRIAL_BAR_BUTTON;
export default TrialBarButton;
//# sourceMappingURL=button.js.map