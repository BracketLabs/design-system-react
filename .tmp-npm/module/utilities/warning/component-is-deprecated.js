/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
// This function will deliver a warning message to the browser console about the component being a deprecated component.
import lowPriorityWarning from './low-priority-warning';

var isPrototype = function isPrototypeFunction() {};

if (process.env.NODE_ENV !== 'production') {
  var hasWarned = {};

  isPrototype = function isPrototypeFunction(control, props, comment) {
    var additionalComment = comment ? " ".concat(comment) : '';

    if (!props.silenceDeprecationWarning && !hasWarned[control]) {
      /* eslint-disable max-len */
      lowPriorityWarning(false, "[Design System React] ".concat(control, " is a deprecated component. Bugfixes can be contributed, but new features and additional alignment with SLDS may be declined.").concat(additionalComment));
      /* eslint-enable max-len */

      hasWarned[control] = true;
    }
  };
}

export default isPrototype;
//# sourceMappingURL=component-is-deprecated.js.map