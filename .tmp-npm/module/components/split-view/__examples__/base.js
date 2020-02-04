function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import Icon from "../../../../components/icon";
import IconSettings from "../../../../components/icon-settings";
import SplitView from "../../../../components/split-view/index";
import SplitViewHeader from "../../../../components/split-view/header";
import SplitViewListbox from "../../../../components/split-view/listbox";
import Button from "../../../../components/button";
import Dropdown from "../../../../components/menu-dropdown";
import DropdownTrigger from "../../../../components/menu-dropdown/button-trigger";
import PageHeaderControl from "../../../../components/page-header/control";
var SORT_OPTIONS = {
  UP: 'up',
  DOWN: 'down'
};
var listOptions = [{
  id: '001',
  label: 'Riley Shultz',
  topRightText: '99',
  bottomLeftText: 'Biotech, Inc.',
  bottomRightText: 'Nurturing'
}, {
  id: '002',
  label: 'Jason A. - VP of Sales',
  topRightText: '92',
  bottomLeftText: 'Case Management Solutions',
  bottomRightText: 'Contacted'
}, {
  id: '003',
  label: 'Josh Smith',
  topRightText: '90',
  bottomLeftText: 'Acme, Inc.',
  bottomRightText: 'Contacted'
}, {
  id: '004',
  label: 'Bobby Tree',
  topRightText: '89',
  bottomLeftText: 'Salesforce, Inc.',
  bottomRightText: 'Closing'
}, {
  id: '005',
  label: 'Riley Shultz',
  topRightText: '74',
  bottomLeftText: 'Tesla',
  bottomRightText: 'Contacted'
}, {
  id: '006',
  label: 'Andy Smith',
  topRightText: '72',
  bottomLeftText: 'Universal Technologies',
  bottomRightText: 'New'
}, {
  id: '007',
  label: 'Jim Steele',
  topRightText: '71',
  bottomLeftText: 'BigList, Inc.',
  bottomRightText: 'New'
}, {
  id: '008',
  label: 'John Gardner',
  topRightText: '70',
  bottomLeftText: '3C Systems',
  bottomRightText: 'Contacted'
}, {
  id: '009',
  label: 'Sarah Loehr',
  topRightText: '68',
  bottomLeftText: 'MedLife, Inc.',
  bottomRightText: 'New'
}];

var headerActions = function headerActions() {
  return React.createElement(PageHeaderControl, null, React.createElement(Dropdown, {
    id: "header-nav-right-more",
    align: "right",
    assistiveText: {
      icon: 'More Options'
    },
    iconCategory: "utility",
    iconName: "down",
    iconVariant: "border-filled",
    options: [{
      label: 'Menu Item One',
      value: 'A0'
    }, {
      label: 'Menu Item Two',
      value: 'B0'
    }]
  }));
};

var headerControls = function headerControls() {
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderControl, null, React.createElement(Dropdown, {
    id: "header-right-refresh",
    assistiveText: {
      icon: 'Checkmark with right icon'
    },
    buttonVariant: "icon",
    checkmark: true,
    iconCategory: "utility",
    iconName: "side_list",
    iconSize: "large",
    iconVariant: "more",
    align: "right",
    onSelect: function onSelect(value) {
      console.log('selected: ', value);
    },
    options: [{
      label: 'Display As',
      type: 'header'
    }, {
      label: 'Table View',
      value: 'A0',
      rightIcon: {
        category: 'utility',
        name: 'table'
      }
    }, {
      label: 'List View',
      value: 'B0',
      rightIcon: {
        category: 'utility',
        name: 'side_list'
      }
    }],
    value: "B0"
  })), React.createElement(PageHeaderControl, null, React.createElement(Button, {
    assistiveText: {
      icon: 'Refresh'
    },
    iconCategory: "utility",
    iconName: "refresh",
    iconVariant: "border",
    variant: "icon"
  })));
};

var headerTitle = React.createElement("div", {
  className: "slds-media__body"
}, React.createElement("h1", {
  className: "slds-text-heading_small slds-text-color_default slds-p-right_x-small"
}, React.createElement(Dropdown, {
  id: "header-title-leads",
  options: [{
    label: 'Menu Item One',
    value: 'A0'
  }, {
    label: 'Menu Item Two',
    value: 'B0'
  }, {
    label: 'Menu Item Three',
    value: 'C0'
  }, {
    type: 'divider'
  }, {
    label: 'Menu Item Four',
    value: 'D0'
  }]
}, React.createElement(DropdownTrigger, null, React.createElement(Button, {
  className: "slds-button_reset slds-type-focus",
  iconCategory: "utility",
  iconName: "down",
  iconPosition: "right",
  label: "My Leads",
  responsive: true,
  variant: "base"
})))));

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      isOpen: typeof props.isOpen === 'boolean' ? props.isOpen : true,
      options: listOptions,
      selected: [listOptions[listOptions.length - 2]],
      unread: [listOptions[0], listOptions[2]],
      sortDirection: SORT_OPTIONS.DOWN
    };
    _this.sortList = _this.sortList.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Example, [{
    key: "sortList",
    value: function sortList() {
      var sortDirection = this.state.sortDirection === SORT_OPTIONS.DOWN ? SORT_OPTIONS.UP : SORT_OPTIONS.DOWN;
      this.setState({
        options: this.state.options.sort(function (a, b) {
          return sortDirection === SORT_OPTIONS.DOWN ? a.label > b.label : b.label > a.label;
        }),
        sortDirection: sortDirection
      });
    } // For multiple elements you need to pass an array in order for the scrolling to in the SplitViewList to work.
    // React also requires a key prop on each items [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html#keys).

  }, {
    key: "masterView",
    value: function masterView() {
      var _this2 = this;

      return [React.createElement(SplitViewHeader, {
        key: "1",
        onRenderActions: headerActions,
        onRenderControls: headerControls,
        icon: React.createElement(Icon, {
          assistiveText: {
            label: 'User'
          },
          category: "standard",
          name: "lead"
        }),
        info: "42 items \u2022 Updated just now",
        title: headerTitle,
        truncate: true,
        variant: "object-home"
      }), React.createElement(SplitViewListbox, {
        key: "2",
        labels: {
          header: 'Lead Score'
        },
        sortDirection: this.state.sortDirection,
        options: this.state.options,
        events: {
          onSort: this.sortList,
          onSelect: function onSelect(event, _ref) {
            var selectedItems = _ref.selectedItems,
                item = _ref.item;

            _this2.setState({
              unread: _this2.state.unread.filter(function (i) {
                return i !== item;
              }),
              selected: selectedItems
            });
          }
        },
        selection: this.state.selected,
        unread: this.state.unread
      })];
    }
  }, {
    key: "detailView",
    value: function detailView() {
      return this.state.selected.length ? this.state.selected.map(function (item) {
        return React.createElement("dl", {
          key: item.id,
          className: "slds-box slds-m-left_medium slds-m-bottom_medium slds-list_horizontal slds-wrap"
        }, React.createElement("dt", {
          className: "slds-item_label slds-text-color_weak slds-truncate",
          title: "Name"
        }, "Name:"), React.createElement("dd", {
          className: "slds-item_detail slds-truncate",
          title: item.label
        }, item.label), React.createElement("dt", {
          className: "slds-item_label slds-text-color_weak slds-truncate",
          title: "Value"
        }, "Value:"), React.createElement("dd", {
          className: "slds-item_detail slds-truncate",
          title: item.topRightText
        }, item.topRightText), React.createElement("dt", {
          className: "slds-item_label slds-text-color_weak slds-truncate",
          title: "Company"
        }, "Company:"), React.createElement("dd", {
          className: "slds-item_detail slds-truncate",
          title: item.bottomLeftText
        }, item.bottomLeftText), React.createElement("dt", {
          className: "slds-item_label slds-text-color_weak slds-truncate",
          title: "Status"
        }, "Status:"), React.createElement("dd", {
          className: "slds-item_detail slds-truncate",
          title: item.bottomRightText
        }, item.bottomRightText));
      }) : React.createElement("div", null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", {
        style: {
          height: '90vh'
        }
      }, React.createElement(SplitView, {
        events: {
          onClose: function onClose() {
            _this3.setState({
              isOpen: false
            });
          },
          onOpen: function onOpen() {
            _this3.setState({
              isOpen: true
            });
          }
        },
        id: "base-example",
        isOpen: this.state.isOpen,
        master: this.masterView(),
        detail: this.detailView()
      })));
    }
  }]);

  return Example;
}(React.Component);

Example.displayName = 'SplitViewBase';
export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=base.js.map