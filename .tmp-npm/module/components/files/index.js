function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// Implements the [Files design pattern](https://lightningdesignsystem.com/components/files/) in React.
// Based on SLDS v2.4.0
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // ### shortid
// [npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)
// shortid is a short, non-sequential, url-friendly, unique id generator

import shortid from 'shortid';
import { FILES } from '../../utilities/constants';
var displayName = FILES;
var propTypes = {
  /**
   * CSS class names to be added to the container element. `array`, `object`, or `string` are accepted.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * Crop ratio for the file preview image
   */
  crop: PropTypes.oneOf(['16-by-9', '4-by-3', '1-by-1']),

  /**
   * Column class names to be added each file in the grid
   */
  columnClassName: PropTypes.string
};
var defaultProps = {
  crop: '4-by-3'
};
/**
 * Files is a component that wraps multiple file components that represent an attachment
 */

var Files =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Files, _React$Component);

  function Files() {
    _classCallCheck(this, Files);

    return _possibleConstructorReturn(this, _getPrototypeOf(Files).apply(this, arguments));
  }

  _createClass(Files, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.generatedId = shortid.generate();
    }
    /**
     * Get the File's HTML id. Generate a new one if no ID present.
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.props.id || this.generatedId;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var files = React.Children.map(this.props.children, function (option) {
        return React.createElement("li", {
          className: classNames("slds-p-horizontal_xx-small slds-size_1-of-3 slds-medium-size_1-of-4", _this.props.columnClassName)
        }, React.cloneElement(option, {
          crop: option.props.crop ? option.props.crop : _this.props.crop
        }));
      });
      return React.createElement("ul", {
        className: classNames('slds-grid slds-grid_pull-padded', this.props.className),
        id: this.getId()
      }, files);
    }
  }]);

  return Files;
}(React.Component);

Files.displayName = displayName;
Files.propTypes = propTypes;
Files.defaultProps = defaultProps;
export default Files;
//# sourceMappingURL=index.js.map