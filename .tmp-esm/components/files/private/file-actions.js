/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # FileActions Component
// Implements the [FileActions design pattern](https://www.lightningdesignsystem.com/components/files/) in React.
import React from 'react';
import PropTypes from 'prop-types';
import { FILES_ACTIONS } from '../../../utilities/constants';
import Button from '../../button';
import Icon from '../../icon';
/**
 * A carousel allows multiple pieces of featured content to occupy an allocated amount of space.
 */

var FileActions = function FileActions(props) {
  var actions = React.createElement("div", {
    className: "slds-file__actions-menu"
  }, React.createElement("div", {
    className: "slds-button-group",
    role: "group"
  }, typeof props.onClickDownload === 'function' ? React.createElement(Button, {
    type: "button",
    variant: "icon",
    iconSize: "x-small",
    onClick: props.onClickDownload,
    title: "Download",
    className: "slds-button_icon-inverse"
  }, React.createElement(Icon, {
    assistiveText: {
      label: props.assistiveText.download
    },
    category: "utility",
    name: "download",
    size: "xx-small",
    inverse: props.hasNoVisibleTitle
  })) : null, props.moreActionsDropdown ? React.cloneElement(props.moreActionsDropdown, {
    assistiveText: {
      icon: props.assistiveText.moreActions
    },
    overlay: false,
    buttonVariant: 'icon',
    buttonInverse: props.hasNoVisibleTitle,
    className: 'dsr-file__more-actions-dropdown ',
    triggerClassName: 'dsr-file__more-actions'
  }) : null));

  if (typeof props.onClickDownload === 'function' || props.moreActionsDropdown) {
    if (!props.hasNoVisibleTitle) {
      return actions;
    }

    return React.createElement("div", {
      className: "slds-file__title slds-file__title_scrim"
    }, actions);
  }

  return null;
};

FileActions.displayName = FILES_ACTIONS;
FileActions.propTypes = {
  /**
   *  Action to be done on clicking download button; doesnt show download button if empty
   */
  onClickDownload: PropTypes.func,

  /**
   *  Dropdown for More Actions; doesn't show More actions button if empty
   */
  moreActionsDropdown: PropTypes.node,

  /**
   *  Labels for the file component
   */
  hasNoVisibleTitle: PropTypes.bool
};
export default FileActions;
//# sourceMappingURL=file-actions.js.map