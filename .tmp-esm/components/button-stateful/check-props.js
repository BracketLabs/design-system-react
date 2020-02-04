/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
import getComponentDocFn from '../../utilities/get-component-doc';
import sunsetProperty from '../../utilities/warning/sunset-property';

var checkProps = function checkPropsFunction() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkPropsFunction(COMPONENT, props, jsonDoc) {
    var createDocUrl = getComponentDocFn(jsonDoc);

    if (typeof props.assistiveText === 'string') {
      sunsetProperty(COMPONENT, props.assistiveText, 'assistiveText', "`assistiveText` as a string has been deprecated and is now an object to allow for multiple uses in the component. Please use `assistiveText.icon` instead. ".concat(createDocUrl('assistiveText')));
    }
  };
}

export default checkProps;
//# sourceMappingURL=check-props.js.map