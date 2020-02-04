function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import DataTable from "../../../../components/data-table"; // `~` is replaced with design-system-react at runtime

import DataTableColumn from "../../../../components/data-table/column";
import IconSettings from "../../../../components/icon-settings";
var columns = [React.createElement(DataTableColumn, {
  key: "opportunity",
  label: "Opportunity Name",
  property: "opportunityName",
  width: "6em"
}), React.createElement(DataTableColumn, {
  key: "account-name",
  label: "Account Name",
  property: "accountName",
  width: "5em"
}), React.createElement(DataTableColumn, {
  key: "close-date",
  label: "Close Date",
  property: "closeDate",
  width: "5em"
}), React.createElement(DataTableColumn, {
  key: "stage",
  label: "Stage",
  property: "stage",
  width: "5em"
}), React.createElement(DataTableColumn, {
  key: "confidence",
  label: "Confidence",
  property: "confidence",
  width: "5em"
}), React.createElement(DataTableColumn, {
  key: "amount",
  label: "Amount",
  property: "amount",
  width: "5em"
}), React.createElement(DataTableColumn, {
  key: "contact",
  label: "Contact",
  property: "contact",
  width: "6em"
})];

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
      items: [{
        id: '8IKZHZZV80',
        opportunityName: 'Cloudhub',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com'
      }, {
        id: '5GJOOOPWU7',
        opportunityName: 'Cloudhub + Anypoint Connectors',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com'
      }, {
        id: '8IKZHZZV81',
        opportunityName: 'Cloudhub',
        accountName: 'Cloudhub',
        closeDate: '4/14/2015',
        stage: 'Prospecting',
        confidence: '20%',
        amount: '$25k',
        contact: 'jrogers@cloudhub.com'
      }]
    });

    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", {
        style: {
          overflow: 'auto'
        }
      }, React.createElement(DataTable, {
        items: this.state.items,
        id: "DataTableExample-1-default",
        fixedLayout: true
      }, columns)));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'DataTableExample');

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=basic-fixed-layout.js.map