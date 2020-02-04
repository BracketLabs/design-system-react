/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import escapeRegExp from 'lodash.escaperegexp';
/**
 * SLDS recommends auto-complete/search inputs menus have a limit of 10 items.
 */

var filter = function filter(_ref) {
  var inputValue = _ref.inputValue,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 10 : _ref$limit,
      options = _ref.options,
      selection = _ref.selection;
  var inputValueRegExp = new RegExp(escapeRegExp(inputValue), 'ig'); // eslint-disable-next-line fp/no-mutating-methods

  return options.filter(function (option) {
    var searchTermFound = option.label ? option.label.match(inputValueRegExp) : false;
    var isSeparator = option.type === 'separator';
    var notAlreadySelected = !selection.some(function (sel) {
      return sel.id === option.id;
    });
    return (!inputValue || isSeparator || searchTermFound) && notAlreadySelected;
  }).splice(0, limit);
};

export default filter;
//# sourceMappingURL=filter.js.map