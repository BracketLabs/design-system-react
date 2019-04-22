"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("../../button"));

var _constants = require("../../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
// # CarouselItem Component
// Implements the [CarouselItem design pattern](https://www.lightningdesignsystem.com/components/carousel/) in React.

/**
 * A carousel allows multiple pieces of featured content to occupy an allocated amount of space.
 */
var CarouselItem = function CarouselItem(props) {
  return _react.default.createElement("div", {
    id: "content-id-".concat(props.id),
    className: "slds-carousel__panel slds-m-horizontal_xx-small slds-list_horizontal",
    role: "tabpanel",
    "aria-hidden": "false",
    "aria-labelledby": "indicator-id-".concat(props.id),
    style: {
      margin: 0,
      maxWidth: "".concat(props.itemWidth, "px"),
      padding: '0 8px'
    }
  }, props.onRenderItem ? props.onRenderItem({
    item: props
  }) : _react.default.createElement("a", {
    className: "slds-carousel__panel-action slds-text-link_reset",
    href: props.href,
    onClick: props.onClick,
    style: {
      backgroundColor: 'white',
      margin: 'auto'
    },
    tabIndex: props.isInCurrentPanel ? '0' : '-1'
  }, _react.default.createElement("div", {
    className: "slds-carousel__image"
  }, _react.default.createElement("img", {
    src: props.src,
    alt: props.imageAssistiveText || props.heading
  })), _react.default.createElement("div", {
    className: "slds-carousel__content",
    style: {
      height: 'auto'
    }
  }, _react.default.createElement("h2", {
    className: "slds-carousel__content-title"
  }, props.heading), _react.default.createElement("div", {
    className: "slds-p-bottom_x-small slds-text-body_small",
    style: {
      minHeight: '40px'
    }
  }, props.description), props.buttonLabel && _react.default.createElement(_button.default, {
    className: "slds-button_outline-brand",
    label: props.buttonLabel,
    tabIndex: props.isInCurrentPanel ? '0' : '-1'
  }))));
};

CarouselItem.displayName = _constants.CAROUSEL_ITEM;
CarouselItem.propTypes = {
  /**
   * Label of the button to be displayed. If not provided, no button will be rendered.
   */
  buttonLabel: _propTypes.default.string,

  /**
   * CSS classes that are applied to the component
   */
  className: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),

  /**
   * Visible paragraph text to be displayed on the carousel item
   */
  description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * Carousel Item's visible heading
   */
  heading: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
  href: _propTypes.default.string,

  /**
   * Id of the item component.
   */
  id: _propTypes.default.number.isRequired,

  /**
   * Image alt text
   */
  imageAssistiveText: _propTypes.default.string,

  /**
   * Boolean indicating whether this item is currently visible in the active parent carousel panel
   */
  isInCurrentPanel: _propTypes.default.bool,

  /**
   * Width of the carousel item
   */
  itemWidth: _propTypes.default.number,

  /**
   * Accepts a custom carousel item rendering function
   */
  onRenderItem: _propTypes.default.func,

  /**
   * Path of the image to be used
   */
  src: _propTypes.default.string.isRequired
};
CarouselItem.defaultProps = {
  href: 'javascript:void(0);'
};
var _default = CarouselItem;
exports.default = _default;