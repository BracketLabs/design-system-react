function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Global Navigation Bar Component
// Implements the [Global Navigation Bar design pattern](https://www.lightningdesignsystem.com/components/global-navigation#flavor-navigation-bar) in React.
// Based on SLDS v2.1.0-rc.2
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### classNames

import classNames from 'classnames'; // ## Constants

import { GLOBAL_NAVIGATION_BAR, GLOBAL_NAVIGATION_BAR_REGION } from '../../utilities/constants';

var auditChildren = function auditChildren(children) {
  var primaryRegion; // there can be multiple secondary navigation regions

  var secondaryRegions = [];
  var tertiaryRegion;
  React.Children.forEach(children, function (child) {
    if (child && child.type.displayName === GLOBAL_NAVIGATION_BAR_REGION) {
      if (child.props.region === 'primary') {
        primaryRegion = child;
      } else if (child.props.region === 'secondary') {
        // eslint-disable-next-line fp/no-mutating-methods
        secondaryRegions.push(child);
      } else if (child.props.region === 'tertiary') {
        tertiaryRegion = child;
      }
    }
  });
  return [primaryRegion].concat(secondaryRegions, [tertiaryRegion]);
};
/**
 * Global Navigation Bar represents a list of links that either take the user to another page or parts of the page the user is in.
 */


var GlobalNavigationBar = function GlobalNavigationBar(props) {
  var _classNames;

  return React.createElement("div", {
    className: classNames('slds-context-bar', (_classNames = {}, _defineProperty(_classNames, "slds-context-bar_theme-".concat(props.cloud), props.cloud), _defineProperty(_classNames, "slds-context-bar_theme-".concat(props.theme), props.theme), _classNames), props.className)
  }, auditChildren(props.children));
}; // ### Prop Types


GlobalNavigationBar.propTypes = {
  /**
   * The items to be displayed in the Global Navigation Bar.
   */
  children: PropTypes.node,

  /**
   * CSS class names to be added to the container element.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Typically the cloud name (e.g.- "sales" or "marketing"). This primarily changes the background color.
   */
  cloud: PropTypes.string,

  /**
   * Transforms text and interactions (such as hover) to be more visually accessible.
   */
  theme: PropTypes.oneOf(['light', 'dark'])
};
GlobalNavigationBar.defaultProps = {};
GlobalNavigationBar.displayName = GLOBAL_NAVIGATION_BAR;
export default GlobalNavigationBar;
//# sourceMappingURL=index.js.map