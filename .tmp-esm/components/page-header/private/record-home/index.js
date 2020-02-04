/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Controls from '../controls';
import DetailRow from '../detail-row';
import Icon from '../../../icon';
import MediaObject from '../../../media-object';
import Title from '../title';
var displayName = 'PageHeaderRecordHome';
var propTypes = {
  /**
   * An array of detail blocks (used in "recordHome" variant)
   */
  details: PropTypes.array,

  /**
   * The label property can be a string or a React element
   */
  label: PropTypes.node,

  /**
   * The page header icon
   */
  icon: PropTypes.element,

  /**
   * Content to appear on the right hand side of the page header
   * prop 'contentRight' will be deprecated soon, use 'onRenderActions' instead
   */
  onRenderActions: PropTypes.func,

  /**
   * The title property can be a string or a React element
   */
  title: PropTypes.node
};

var RecordHome = function RecordHome(props) {
  var icon; // Backwards compatibility

  if (props.iconName) {
    icon = React.createElement(Icon, {
      category: props.iconCategory,
      className: "slds-page-header__icon",
      name: props.iconName,
      position: props.iconPosition,
      size: props.iconSize,
      variant: props.iconVariant
    });
  } else if (props.icon) {
    var iconClasses = 'slds-page-header__icon';

    if (props.icon.props) {
      iconClasses = classnames(props.icon.props.className, iconClasses);
    }

    icon = React.cloneElement(props.icon, {
      className: iconClasses
    });
  }

  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "slds-page-header__row"
  }, React.createElement("div", {
    className: "slds-page-header__col-title"
  }, React.createElement(MediaObject, {
    body: React.createElement(React.Fragment, null, React.createElement("div", {
      className: "slds-page-header__name"
    }, React.createElement(Title, {
      content: props.title,
      label: props.label
    }))),
    figure: icon
  })), React.createElement(Controls, {
    contentRight: props.contentRight,
    onRenderActions: props.onRenderActions,
    type: "actions"
  })), props.details ? React.createElement("div", {
    className: "slds-page-header__row slds-page-header__row_gutters"
  }, React.createElement("div", {
    className: "slds-page-header__col-details"
  }, React.createElement(DetailRow, {
    details: props.details
  }))) : null);
};

RecordHome.displayName = displayName;
RecordHome.propTypes = propTypes;
export default RecordHome;
//# sourceMappingURL=index.js.map