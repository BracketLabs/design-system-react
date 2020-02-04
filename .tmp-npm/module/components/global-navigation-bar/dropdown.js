function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # Global Navigation Dropdown Component
// ## Dependencies
// ### React
import React from 'react';
import PropTypes from 'prop-types';
import checkProps from './check-props';
import componentDoc from './component.json'; // ### Dropdown

import MenuDropdown from '../menu-dropdown';
import GlobalNavigationTrigger from './dropdown-trigger'; // ## Constants

import { GLOBAL_NAVIGATION_BAR_DROPDOWN } from '../../utilities/constants';
/**
 * This component is an implementation of `MenuDropdown` with a custom trigger. All the properties listed below are provided to the `MenuDropdown` component. Any additional properties are provided to the Custom Trigger (that is the `Button` or `li` tag).
 */

var GlobalNavigationBarDropdown = function GlobalNavigationBarDropdown(props) {
  checkProps(GLOBAL_NAVIGATION_BAR_DROPDOWN, props, componentDoc); // Separate props we care about in order to pass others along passively to the dropdown component

  var active = props.active,
      activeBackgroundColor = props.activeBackgroundColor,
      assistiveText = props.assistiveText,
      dividerPosition = props.dividerPosition,
      rest = _objectWithoutProperties(props, ["active", "activeBackgroundColor", "assistiveText", "dividerPosition"]);

  return React.createElement(MenuDropdown, _extends({
    align: "right",
    hasStaticAlignment: true // only need if using hybrid or hover
    ,
    hoverCloseDelay: 400,
    length: props.length,
    menuPosition: "relative"
  }, rest), React.createElement(GlobalNavigationTrigger, {
    active: active,
    assistiveText: assistiveText,
    activeBackgroundColor: activeBackgroundColor,
    dividerPosition: dividerPosition
  }));
}; // ### Display Name
// Always use the canonical component name (set in the core) as the React
// display name.


GlobalNavigationBarDropdown.displayName = GLOBAL_NAVIGATION_BAR_DROPDOWN; // ### Prop Types

GlobalNavigationBarDropdown.propTypes = {
  /**
   * Whether the item is active or not.
   */
  active: PropTypes.bool,

  /**
   * Allows alignment of active item with active application background color.
   */
  activeBackgroundColor: PropTypes.string,

  /**
   * **Assistive text for accessibility.**
   * This object is merged with the default props object on every render.
   * * `icon`: Text that is visually hidden but read aloud by screenreaders to tell the user what the icon means. If the button has an icon and a visible label, you can omit the <code>assistiveText.icon</code> prop and use the <code>label</code> prop.
   */
  assistiveText: PropTypes.shape({
    icon: PropTypes.string
  }),

  /**
   * Aligns the right or left side of the menu with the respective side of the trigger. This is not intended for use with `nubbinPosition`.
   */
  align: PropTypes.oneOf(['left', 'right']),

  /**
   * Extra classnames to apply to the dropdown menu.
   */
  className: PropTypes.string,

  /**
   * Determines position of separating bar.
   */
  dividerPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * CSS classes to be added to `li` element.
   */
  buttonClassName: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button.
   */
  id: PropTypes.string,

  /**
   * Provided to List to indicate number of items visible in the List. Pass `null` to display all items, or a string containing one of the numeric option values listed under [Dropdown Height](https://www.lightningdesignsystem.com/components/menus/#flavor-dropdown-height) at the right (eg. '5').
   */
  length: PropTypes.oneOf([null, '5', '7', '10']),

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

GlobalNavigationBarDropdown.defaultProps = {
  align: 'right',
  length: null
};
export default GlobalNavigationBarDropdown;
//# sourceMappingURL=dropdown.js.map