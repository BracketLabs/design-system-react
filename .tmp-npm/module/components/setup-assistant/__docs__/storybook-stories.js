import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Base from '../__examples__/base';
import Card from '../__examples__/card';
import HubWithExpandableSteps from '../__examples__/hub-expandable-steps';
import StepProgress from '../__examples__/step-progress';
import WithIcons from '../__examples__/with-icons';
import { SETUP_ASSISTANT } from '../../../utilities/constants';
storiesOf(SETUP_ASSISTANT, module).addDecorator(function (getStory) {
  return React.createElement("div", {
    className: "slds-p-around_medium"
  }, getStory());
}).add('Base Variant', function () {
  return React.createElement(Base, {
    action: action
  });
}).add('With Step Progress', function () {
  return React.createElement(StepProgress, {
    action: action
  });
}).add('Hub with Expandable Steps', function () {
  return React.createElement(HubWithExpandableSteps, {
    action: action
  });
}).add('In a Card', function () {
  return React.createElement(Card, {
    action: action
  });
}).add('With Icons', function () {
  return React.createElement(WithIcons, {
    action: action
  });
});
//# sourceMappingURL=storybook-stories.js.map