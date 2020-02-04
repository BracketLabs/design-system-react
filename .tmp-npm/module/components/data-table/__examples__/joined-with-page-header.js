function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import Button from "../../../../components/button";
import ButtonGroup from "../../../../components/button-group";
import DataTable from "../../../../components/data-table";
import DataTableColumn from "../../../../components/data-table/column";
import DataTableCell from "../../../../components/data-table/cell";
import DataTableRowActions from "../../../../components/data-table/row-actions";
import Dropdown from "../../../../components/menu-dropdown";
import DropdownTrigger from "../../../../components/menu-dropdown/button-trigger";
import Icon from "../../../../components/icon";
import IconSettings from "../../../../components/icon-settings";
import PageHeader from "../../../../components/page-header";
import PageHeaderControl from "../../../../components/page-header/control";

var CustomDataTableCell = function CustomDataTableCell(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(DataTableCell, _extends({
    title: children
  }, props), React.createElement("a", {
    href: "javascript:void(0);",
    onClick: function onClick(event) {
      event.preventDefault();
    }
  }, children));
};

CustomDataTableCell.displayName = DataTableCell.displayName;

var actions = function actions() {
  return React.createElement(PageHeaderControl, null, React.createElement(ButtonGroup, {
    id: "button-group-page-header-actions"
  }, React.createElement(Button, {
    label: "New Lead"
  }), React.createElement(Button, {
    label: "Import Leads"
  }), React.createElement(Dropdown, {
    align: "right",
    assistiveText: {
      icon: 'More Options'
    },
    iconCategory: "utility",
    iconName: "down",
    iconVariant: "border-filled",
    id: "page-header-dropdown-object-home-nav-right",
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
  })));
};

var controls = function controls() {
  return React.createElement(React.Fragment, null, React.createElement(PageHeaderControl, null, React.createElement(Dropdown, {
    align: "right",
    id: "page-header-dropdown-object-home-content-right",
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
    assistiveText: {
      icon: 'List View Controls'
    },
    iconCategory: "utility",
    iconName: "settings",
    iconVariant: "more"
  })))), React.createElement(PageHeaderControl, null, React.createElement(Dropdown, {
    align: "right",
    assistiveText: {
      icon: 'Change view'
    },
    iconCategory: "utility",
    iconName: "settings",
    iconVariant: "more",
    id: "page-header-dropdown-object-home-content-right-2",
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
    assistiveText: {
      icon: 'Change view'
    },
    iconCategory: "utility",
    iconName: "table",
    iconVariant: "more",
    variant: "icon"
  })))), React.createElement(PageHeaderControl, null, React.createElement(Button, {
    assistiveText: {
      icon: 'Edit List'
    },
    iconCategory: "utility",
    iconName: "edit",
    iconVariant: "border",
    variant: "icon"
  })), React.createElement(PageHeaderControl, null, React.createElement(Button, {
    assistiveText: {
      icon: 'Refresh'
    },
    iconCategory: "utility",
    iconName: "refresh",
    iconVariant: "border",
    variant: "icon"
  })), React.createElement(PageHeaderControl, null, React.createElement(ButtonGroup, {
    id: "button-group-page-header-controls"
  }, React.createElement(Button, {
    assistiveText: {
      icon: 'Charts'
    },
    iconCategory: "utility",
    iconName: "chart",
    iconVariant: "border",
    variant: "icon"
  }), React.createElement(Button, {
    assistiveText: {
      icon: 'Filters'
    },
    iconCategory: "utility",
    iconName: "filterList",
    iconVariant: "border",
    variant: "icon"
  }))));
};

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Example)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      sortColumn: 'opportunityName',
      sortColumnDirection: {
        opportunityName: 'asc'
      },
      items: [{
        id: '896a6a60',
        opportunityName: 'Acme - 1,200 Widgets',
        accountName: 'Acme',
        closeDate: '4/10/15',
        stage: 'Value Proposition',
        confidence: '70%',
        amount: '$25,000,000',
        contact: 'jrogers@acme.com'
      }, {
        id: '44da9dcd',
        opportunityName: 'Acme - 200 Widgets',
        accountName: 'Acme',
        closeDate: '1/31/15',
        stage: 'Prospecting',
        confidence: '30%',
        amount: '$5,000,000',
        contact: 'bob@acme.com'
      }, {
        id: 'f988a721',
        opportunityName: 'salesforce.com - 1,000 Widgets',
        accountName: 'salesforce.com',
        closeDate: '1/31/15 3:45PM',
        stage: 'Id. Decision Makers',
        confidence: '60%',
        amount: '$25,000',
        contact: 'nathan@salesforce.com'
      }, {
        id: 'd7679cdd',
        opportunityName: 'Acme - 800 Widgets',
        accountName: 'Acme',
        closeDate: '6/11/18',
        stage: 'Value Proposition',
        confidence: '85%',
        amount: '$970,000',
        contact: 'jrogers@acme.com'
      }, {
        id: '0085f7a0',
        opportunityName: 'Acme - 744 Widgets',
        accountName: 'Acme',
        closeDate: '4/15/17',
        stage: 'Prospecting',
        confidence: '56%',
        amount: '$3,110,000',
        contact: 'bob@acme.com'
      }, {
        id: 'b7acc778',
        opportunityName: 'salesforce.com - 847 Widgets',
        accountName: 'salesforce.com',
        closeDate: '5/23/18 1:02PM',
        stage: 'Id. Decision Makers',
        confidence: '62%',
        amount: '$18,000',
        contact: 'nathan@salesforce.com'
      }, {
        id: '17991de5',
        opportunityName: 'Acme - 1,621 Widgets',
        accountName: 'Acme',
        closeDate: '5/16/17',
        stage: 'Value Proposition',
        confidence: '70%',
        amount: '$23,600,000',
        contact: 'jrogers@acme.com'
      }, {
        id: '09b2cee9',
        opportunityName: 'Acme - 430 Widgets',
        accountName: 'Acme',
        closeDate: '6/12/18',
        stage: 'Prospecting',
        confidence: '42%',
        amount: '$4,222,222',
        contact: 'bob@acme.com'
      }, {
        id: 'd0035700',
        opportunityName: 'salesforce.com - 677 Widgets',
        accountName: 'salesforce.com',
        closeDate: '7/21/17 10:11AM',
        stage: 'Id. Decision Makers',
        confidence: '42%',
        amount: '$24,200',
        contact: 'nathan@salesforce.com'
      }, {
        id: '4a526f0c',
        opportunityName: 'Acme - 1,444 Widgets',
        accountName: 'Acme',
        closeDate: '3/18/18',
        stage: 'Value Proposition',
        confidence: '66%',
        amount: '$22,000,000',
        contact: 'jrogers@acme.com'
      }, {
        id: '9a5dbdb2',
        opportunityName: 'Acme - 320 Widgets',
        accountName: 'Acme',
        closeDate: '1/31/18',
        stage: 'Prospecting',
        confidence: '36%',
        amount: '$4,322,000',
        contact: 'bob@acme.com'
      }, {
        id: '356dbb52',
        opportunityName: 'salesforce.com - 4,000 Widgets',
        accountName: 'salesforce.com',
        closeDate: '2/21/17 8:33PM',
        stage: 'Id. Decision Makers',
        confidence: '72%',
        amount: '$15,000',
        contact: 'nathan@salesforce.com'
      }],
      selection: []
    });

    _defineProperty(_assertThisInitialized(_this), "handleChanged", function (event, data) {
      _this.setState({
        selection: data.selection
      });

      console.log(event, data);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowAction", function (item, action) {
      console.log(item, action);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSort", function (sortColumn) {
      if (_this.props.log) {
        for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          rest[_key2 - 1] = arguments[_key2];
        }

        _this.props.log('sort').apply(void 0, [sortColumn].concat(rest));
      }

      var sortProperty = sortColumn.property;
      var sortDirection = sortColumn.sortDirection;
      var newState = {
        sortColumn: sortProperty,
        sortColumnDirection: _defineProperty({}, sortProperty, sortDirection),
        items: _toConsumableArray(_this.state.items)
      }; // needs to work in both directions

      newState.items = newState.items.sort(function (a, b) {
        var val = 0;

        if (a[sortProperty] > b[sortProperty]) {
          val = 1;
        }

        if (a[sortProperty] < b[sortProperty]) {
          val = -1;
        }

        if (sortDirection === 'desc') {
          val *= -1;
        }

        return val;
      });

      _this.setState(newState);
    });

    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        style: {
          height: '200px',
          width: '100%',
          marginBottom: '150px'
        }
      }, React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(PageHeader, {
        onRenderActions: actions,
        icon: React.createElement(Icon, {
          assistiveText: {
            label: 'User'
          },
          category: "standard",
          name: "lead"
        }),
        info: "10 items \u2022 sorted by name",
        joined: true,
        label: "Leads",
        onRenderControls: controls,
        title: React.createElement("h1", {
          className: "slds-page-header__title slds-p-right_x-small"
        }, React.createElement(Dropdown, {
          id: "page-header-dropdown-object-home-header",
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
          label: "Dropdown",
          responsive: true,
          variant: "base"
        })))),
        truncate: true,
        variant: "object-home"
      }), React.createElement(DataTable, {
        assistiveText: {
          actionsHeader: 'actions',
          columnSort: 'sort this column',
          columnSortedAscending: 'asc',
          columnSortedDescending: 'desc',
          selectAllRows: 'Select all rows',
          selectRow: 'Select this row'
        },
        fixedHeader: true,
        fixedLayout: true,
        items: this.state.items,
        id: "DataTableExample-FixedHeaders",
        joined: true,
        onRowChange: this.handleChanged,
        onSort: this.handleSort,
        selection: this.state.selection,
        selectRows: "checkbox"
      }, React.createElement(DataTableColumn, {
        isSorted: this.state.sortColumn === 'opportunityName',
        label: "Name",
        primaryColumn: true,
        property: "opportunityName",
        sortable: true,
        sortDirection: this.state.sortColumnDirection.opportunityName
      }, React.createElement(CustomDataTableCell, null)), React.createElement(DataTableColumn, {
        label: "Account Name",
        property: "accountName"
      }), React.createElement(DataTableColumn, {
        label: "Close Date",
        property: "closeDate"
      }), React.createElement(DataTableColumn, {
        label: "Stage",
        property: "stage"
      }), React.createElement(DataTableColumn, {
        isSorted: this.state.sortColumn === 'confidence',
        label: "Confidence",
        property: "confidence",
        sortable: true,
        sortDirection: this.state.sortColumnDirection.confidence
      }), React.createElement(DataTableColumn, {
        label: "Amount",
        property: "amount"
      }), React.createElement(DataTableColumn, {
        label: "Contact",
        property: "contact"
      }, React.createElement(CustomDataTableCell, null)), React.createElement(DataTableRowActions, {
        options: [{
          id: 0,
          label: 'Add to Group',
          value: '1'
        }, {
          id: 1,
          label: 'Publish',
          value: '2'
        }, {
          id: 2,
          label: 'Third of Seven',
          value: '3'
        }, {
          id: 3,
          label: 'Fourth of Seven',
          value: '4'
        }, {
          id: 4,
          label: 'Fifth of Seven',
          value: '5'
        }, {
          id: 5,
          label: 'Sixth of Seven',
          value: '6'
        }, {
          id: 6,
          label: 'Seventh of Seven',
          value: '7'
        }],
        menuPosition: "overflowBoundaryElement",
        onAction: this.handleRowAction,
        dropdown: React.createElement(Dropdown, {
          length: "7"
        })
      }))));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'JoinedWithPageHeaderExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=joined-with-page-header.js.map