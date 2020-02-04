/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
import Modal from 'react-modal';
/*
 * The following are component utility methods that aid in global settings.
*/

var assetsPath = 'assets/';
var appRoot;
var settings = {
  setAssetsPath: function setAssetsPath(path) {
    if (path) {
      assetsPath = path;
    }
  },
  getAssetsPath: function getAssetsPath() {
    return String(assetsPath);
  },

  /*
   * The app element allows you to specify the portion of your app that should be hidden (via aria-hidden)
  to prevent assistive technologies such as screenreaders from reading content outside of the content of
  your modal.  It can be specified in the following ways:
   * element
  Modal.setAppElement(appElement);
   * query selector - uses the first element found if you pass in a class.
  Modal.setAppElement('#your-app-element');
  */
  setAppElement: function setAppElement(el) {
    if (el) {
      appRoot = el;
      Modal.setAppElement(el);
    }
  },
  getAppElement: function getAppElement() {
    return appRoot;
  }
};
export default settings;
//# sourceMappingURL=settings.js.map