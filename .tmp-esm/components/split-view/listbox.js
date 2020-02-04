function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import eventUtil from '../../utilities/event';
import { SPLIT_VIEW_LISTBOX } from '../../utilities/constants';
import Icon from '../icon';
import SplitViewListItemContent from './private/list-item-content';
import listItemWithContent from './private/list-item-with-content';
export var SORT_OPTIONS = Object.freeze({
  UP: 'up',
  DOWN: 'down'
});
var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `list`: aria label for the list
   * * `sort`
   *    * `sortedBy`: Clickable sort header for the list.
   *    * `descending`: Descending sorting.
   *    * `ascending`: Ascending sorting.
   */
  assistiveText: PropTypes.shape({
    list: PropTypes.string,
    sort: PropTypes.shape({
      sortedBy: PropTypes.string,
      descending: PropTypes.string,
      ascending: PropTypes.string
    }),
    unreadItem: PropTypes.string
  }),

  /**
   * CSS classes to be added to the parent `div` tag.
   */
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Event Callbacks
   * * `onSelect`: Called when a list item is selected. Previously, this event was called when an item was focused. The UX pattern has changed and this event is now called on pressing enter or mouse click.
   *    * event {object} List item click event
   *    * Meta {object}
   *       * selectedItems {array} List of selected items.
   *       * item {object} Last selected item.
   * * `onSort`: Called when the list is sorted.
   *    * event {object} Sort click event
   */
  events: PropTypes.shape({
    onSelect: PropTypes.func.isRequired,
    onSort: PropTypes.func
  }),

  /**
   * HTML id for component.
   */
  id: PropTypes.string,

  /**
   * **Text labels for internationalization**
   * * `header`: This is the header of the list.
   */
  labels: PropTypes.shape({
    header: PropTypes.string
  }),

  /**
   * The direction of the sort arrow. Option are:
   * * SORT_OPTIONS.UP: `up`
   * * SORT_OPTIONS.DOWN: `down`
   */
  sortDirection: PropTypes.oneOf([SORT_OPTIONS.UP, SORT_OPTIONS.DOWN]),

  /**
   * Allows multiple item to be selection
   */
  multiple: PropTypes.bool,

  /**
   * The list of items.
   * It is recommended that you have a unique `id` for each item.
   */
  options: PropTypes.array.isRequired,

  /**
   * Accepts an array of item objects. For single selection, pass in an array of one object.
   */
  selection: PropTypes.array,

  /**
   * Accepts an array of item objects. For single unread, pass in an array of one object.
   */
  unread: PropTypes.array,

  /**
   * Custom list item template for the list item content. The select and unread functionality wraps the custom list item.
   * This should be a React component that accepts props.
   */
  listItem: PropTypes.func
};
var defaultProps = {
  assistiveText: {
    list: 'Select an item to open it in a new workspace tab.',
    sort: {
      sortedBy: 'Sorted by',
      descending: 'Descending',
      ascending: 'Ascending'
    }
  },
  events: {},
  labels: {},
  selection: [],
  unread: []
};
/**
 * The menu with the ARIA role of a listbox.
 */

var SplitViewListbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SplitViewListbox, _React$Component);

  function SplitViewListbox(props) {
    var _this;

    _classCallCheck(this, SplitViewListbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitViewListbox).call(this, props));
    _this.listItemComponents = {};
    _this.state = {
      currentSelectedItem: null,
      currentFocusedListItem: {
        index: 0,
        item: null
      }
    }; // Generates the list item template

    _this.ListItemWithContent = listItemWithContent(props.listItem || SplitViewListItemContent);
    return _this;
  }

  _createClass(SplitViewListbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focusFirstItem();
    }
  }, {
    key: "isListItemFocused",
    value: function isListItemFocused(item) {
      return this.state.currentFocusedListItem.item === item;
    }
  }, {
    key: "isSelected",
    value: function isSelected(item) {
      return this.props.selection.includes(item);
    }
  }, {
    key: "isUnread",
    value: function isUnread(item) {
      return this.props.unread.includes(item);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (this.props.multiple && event.key === 'a' && event.ctrlKey) {
        // select / deselect all
        eventUtil.trap(event);

        if (this.props.options === this.props.selection) {
          this.deselectAllListItems(event);
        } else {
          this.selectAllListItems(event);
        }
      } else if (event.key === 'ArrowUp') {
        eventUtil.trap(event);
        this.moveToPreviousItem(event);
      } else if (event.key === 'ArrowDown') {
        eventUtil.trap(event);
        this.moveToNextItem(event);
      }
    }
  }, {
    key: "moveToNextItem",
    value: function moveToNextItem(event) {
      var nextFocusIndex = this.state.currentFocusedListItem.index === this.props.options.length - 1 ? 0 : this.state.currentFocusedListItem.index + 1;
      this.moveToIndex(event, nextFocusIndex);
    }
  }, {
    key: "moveToPreviousItem",
    value: function moveToPreviousItem(event) {
      var previousFocusIndex = this.state.currentFocusedListItem.index === 0 ? this.props.options.length - 1 : this.state.currentFocusedListItem.index - 1;
      this.moveToIndex(event, previousFocusIndex);
    }
  }, {
    key: "moveToIndex",
    value: function moveToIndex(event, index) {
      var item = this.props.options[index];
      this.focusItem(item);
    }
  }, {
    key: "focusFirstItem",
    value: function focusFirstItem() {
      var _this2 = this;

      var firstSelectedItem = this.props.options.find(function (item) {
        return _this2.props.selection.includes(item);
      }) || this.props.options[0];

      if (firstSelectedItem) {
        this.focusItem(firstSelectedItem, true);
      }
    }
  }, {
    key: "focusItem",
    value: function focusItem(item, setDataOnly) {
      var index = this.props.options.indexOf(item);

      if (!setDataOnly) {
        this.listItemComponents[index].focus();
      }

      this.setState({
        currentFocusedListItem: {
          index: index,
          item: item
        }
      });
    }
  }, {
    key: "deselectAllListItems",
    value: function deselectAllListItems(event) {
      this.setState({
        currentSelectedItem: null
      });
      this.props.events.onSelect(event, {
        selectedItems: [],
        item: null
      });
    }
  }, {
    key: "selectAllListItems",
    value: function selectAllListItems(event) {
      this.props.events.onSelect(event, {
        selectedItems: this.props.options,
        item: this.state.currentSelectedItem
      });
    }
  }, {
    key: "selectListItem",
    value: function selectListItem(item, event) {
      var selectedItems = [item];

      if (this.props.multiple) {
        if (event.metaKey) {
          selectedItems = this.props.selection.includes(item) ? this.props.selection.filter(function (i) {
            return i !== item;
          }) : [item].concat(_toConsumableArray(this.props.selection));
        } else if (event.shiftKey) {
          /* eslint-disable fp/no-mutating-methods */
          var _sort = [this.props.options.indexOf(this.state.currentSelectedItem), this.props.options.indexOf(item)].sort(),
              _sort2 = _slicedToArray(_sort, 2),
              begin = _sort2[0],
              end = _sort2[1];
          /* eslint-enable fp/no-mutating-methods */


          var addToSelection = this.props.options.slice(begin, end + 1);
          selectedItems = [].concat(_toConsumableArray(addToSelection), _toConsumableArray(this.props.selection.filter(function (i) {
            return !addToSelection.includes(i);
          })));
        }
      }

      this.setState({
        currentSelectedItem: item
      });
      this.props.events.onSelect(event, {
        selectedItems: selectedItems,
        item: item
      });
    }
  }, {
    key: "handleOnSelect",
    value: function handleOnSelect(event, _ref) {
      var item = _ref.item;
      this.selectListItem(item, event);
      this.focusItem(item);
    }
  }, {
    key: "sortDirection",
    value: function sortDirection() {
      return this.props.sortDirection ? React.createElement(Icon, {
        category: "utility",
        name: this.props.sortDirection === SORT_OPTIONS.DOWN ? 'arrowdown' : 'arrowup',
        size: "xx-small",
        className: "slds-align-top"
      }) : null;
    }
  }, {
    key: "headerWrapper",
    value: function headerWrapper(children) {
      return this.props.events.onSort ? React.createElement("a", {
        "aria-live": "polite",
        style: {
          borderTop: '0'
        },
        href: "javascript:void(0);" // eslint-disable-line no-script-url
        ,
        role: "button",
        className: "slds-split-view__list-header slds-grid slds-text-link_reset",
        onClick: this.props.events.onSort
      }, children) : React.createElement("div", {
        style: {
          borderTop: '0'
        },
        className: "slds-split-view__list-header slds-grid"
      }, children);
    }
  }, {
    key: "header",
    value: function header() {
      return this.props.labels.header ? this.headerWrapper(React.createElement("span", {
        "aria-sort": this.props.sortDirection === SORT_OPTIONS.DOWN ? this.props.assistiveText.sort.descending : this.props.assistiveText.sort.ascending
      }, React.createElement("span", {
        className: "slds-assistive-text"
      }, this.props.assistiveText.sort.sortedBy, ': '), React.createElement("span", null, this.props.labels.header, this.sortDirection()), React.createElement("span", {
        className: "slds-assistive-text"
      }, '- ', this.props.sortDirection === SORT_OPTIONS.DOWN ? this.props.assistiveText.sort.descending : this.props.assistiveText.sort.ascending))) : null;
    }
  }, {
    key: "addListItemComponent",
    value: function addListItemComponent(component, index) {
      this.listItemComponents[index] = component;
    }
  }, {
    key: "listItems",
    value: function listItems() {
      var _this3 = this;

      var ListItemWithContent = this.ListItemWithContent;
      return this.props.options.map(function (item, index) {
        return React.createElement(ListItemWithContent, {
          key: item.id || index,
          assistiveText: {
            unreadItem: _this3.props.assistiveText.unreadItem
          },
          listItemRef: function listItemRef(component) {
            _this3.addListItemComponent(component, index);
          },
          item: item,
          isFocused: _this3.isListItemFocused(item),
          isSelected: _this3.isSelected(item),
          isUnread: _this3.isUnread(item),
          events: {
            onClick: function onClick(event, meta) {
              return _this3.handleOnSelect(event, meta);
            }
          },
          multiple: _this3.props.multiple
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("div", {
        id: this.props.id,
        className: classNames('slds-grid slds-grid_vertical slds-scrollable_none', this.props.className)
      }, this.header(), React.createElement("ul", {
        className: "slds-scrollable_y",
        "aria-label": this.props.assistiveText.list,
        "aria-multiselectable": this.props.multiple,
        role: "listbox",
        onKeyDown: function onKeyDown(event) {
          return _this4.handleKeyDown(event);
        }
      }, this.listItems()));
    }
  }]);

  return SplitViewListbox;
}(React.Component);

_defineProperty(SplitViewListbox, "displayName", SPLIT_VIEW_LISTBOX);

_defineProperty(SplitViewListbox, "propTypes", propTypes);

_defineProperty(SplitViewListbox, "defaultProps", defaultProps);

export default SplitViewListbox;
//# sourceMappingURL=listbox.js.map