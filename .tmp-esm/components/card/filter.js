function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// ### React
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import InputIcon from '../icon/input-icon';
import { CARD_FILTER } from '../../utilities/constants';
/**
 * A default filter or search input for Cards that contain items.
 */

var Filter = function Filter(props) {
  var id = props.id,
      placeholder = props.placeholder,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, ["id", "placeholder", "onChange"]);

  return React.createElement(Input, _extends({}, rest, {
    assistiveText: {
      label: placeholder
    },
    iconLeft: React.createElement(InputIcon, {
      name: "search",
      category: "utility"
    }),
    id: id,
    onChange: onChange,
    placeholder: placeholder
  }));
}; // ### Display Name
// Always use the canonical component name as the React display name.


Filter.displayName = CARD_FILTER; // ### Prop Types

Filter.propTypes = {
  /**
   * The HTML `id` from the card with a suffixe.
   */
  id: PropTypes.string,

  /**
   * This callback fires when the input changes.
   */
  onChange: PropTypes.func,

  /**
   * Text present in input until the user enters text. This text will also be used for a visually hidden label on the filter `input` element for accessibility.
   */
  placeholder: PropTypes.string.isRequired
};
Filter.defaultProps = {
  placeholder: 'Find in List'
};
export default Filter;
//# sourceMappingURL=filter.js.map