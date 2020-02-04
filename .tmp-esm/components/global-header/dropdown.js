function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Global Header Dropdown Component
// NOTE: THIS COMPONENT HAS BEEN DEPRECATED AND WILL BE REMOVED IN FUTURE MAJOR RELEASES
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types'; // ### Dropdown

import MenuDropdown from '../menu-dropdown';
import GlobalHeaderTrigger from './private/dropdown-trigger'; // This component's `checkProps` which issues warnings to developers about properties
// when in development mode (similar to React's built in development tools)

import checkProps from './check-props'; // ## Constants

import { GLOBAL_HEADER_DROPDOWN, GLOBAL_HEADER_TOOL } from '../../utilities/constants';
/**
 * This component is an implementation of `MenuDropdown` with a custom trigger. All the properties listed below are provided to the `MenuDropdown` component. Any additional properties are provided to the Custom Trigger (that is the `Button` or `li` tag).
 */

var GlobalHeaderDropdown = function GlobalHeaderDropdown(props) {
  checkProps(GLOBAL_HEADER_DROPDOWN, props);

  var globalAction = props.globalAction,
      iconVariant = props.iconVariant,
      rest = _objectWithoutProperties(props, ["globalAction", "iconVariant"]);

  var iconVariantOverride;

  if (globalAction) {
    iconVariantOverride = 'container';
  }

  return React.createElement(MenuDropdown, _extends({
    nubbinPosition: "top right"
  }, rest), React.createElement(GlobalHeaderTrigger, {
    globalAction: globalAction,
    iconSize: globalAction && 'small',
    iconVariant: iconVariantOverride || iconVariant
  }));
}; // ### Display Name
// Always use the canonical component name (set in the core) as the React
// display name.


GlobalHeaderDropdown.displayName = GLOBAL_HEADER_TOOL; // ### Prop Types

GlobalHeaderDropdown.propTypes = {
  /**
   * Aligns the right or left side of the menu with the respective side of the trigger. This is not intended for use with `nubbinPosition`.
   */
  align: PropTypes.oneOf(['left', 'right']),

  /**
   * Extra classnames to apply to the dropdown menu.
   */
  className: PropTypes.string,

  /**
   * CSS classes to be added to `li` element.
   */
  buttonClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Name of the icon. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon names.
   */
  iconName: PropTypes.string,

  /**
   * For icon variants, please reference <a href="http://www.lightningdesignsystem.com/components/buttons/#icon">Lightning Design System Icons</a>.
   */
  iconVariant: PropTypes.oneOf(['bare', 'container', 'border', 'border-filled', 'more', 'global-header']),

  /**
   * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button.
   */
  id: PropTypes.string,

  /**
   * Adds custom styling such as inverse fill and special sizing/spacing
   */
  globalAction: PropTypes.bool,

  /**
   * Positions dropdown menu with a nubbin--that is the arrow notch. The placement options correspond to the placement of the nubbin. This is implemeted with CSS classes and is best used with a `Button` with "icon container" styling. Dropdown menus will still be contained to the closest scrolling parent.
   */
  nubbinPosition: PropTypes.oneOf(['top left', 'top', 'top right', 'bottom left', 'bottom', 'bottom right']),

  /**
   *  Offset adds pixels to the absolutely positioned dropdown menu in the format: ([vertical]px [horizontal]px).
   */
  offset: PropTypes.string,

  /**
   * Triggered when an item in the menu is clicked.
   */
  onSelect: PropTypes.func,

  /**
   * An array of menu item.
   */
  options: PropTypes.array.isRequired
}; // ### Default Props

GlobalHeaderDropdown.defaultProps = {
  align: 'right',
  buttonVariant: 'icon',
  iconVariant: 'global-header',
  nubbinPosition: 'top right'
};
export default GlobalHeaderDropdown;
//# sourceMappingURL=dropdown.js.map