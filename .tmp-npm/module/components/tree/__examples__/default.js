function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
import IconSettings from "../../../../components/icon-settings";
import Tree from "../../../../components/tree";
import log from "../../../../utilities/log";
import Search from '../../forms/input/search';
var sampleNodes = {
  0: {
    id: 0,
    nodes: [1, 2, 3, 7]
  },
  1: {
    label: 'Grains',
    type: 'item',
    id: 1
  },
  2: {
    label: 'Fruits',
    type: 'branch',
    id: 2,
    nodes: [4, 5]
  },
  3: {
    label: 'Nuts',
    type: 'branch',
    _iconClass: 'glyphicon-file',
    id: 3,
    nodes: [8, 9, 10, 11]
  },
  4: {
    assistiveText: 'Ground Fruits',
    label: 'Ground Fruits',
    type: 'branch',
    id: 4,
    nodes: [12, 13, 14]
  },
  5: {
    label: 'Tree Fruits',
    type: 'branch',
    id: 5,
    nodes: [15, 16, 17, 18, 19, 6]
  },
  6: {
    label: 'Raspberries',
    type: 'item',
    id: 6
  },
  7: {
    label: 'Empty folder',
    type: 'branch',
    id: 7
  },
  8: {
    label: 'Almonds',
    type: 'item',
    id: 8
  },
  9: {
    label: 'Cashews',
    type: 'item',
    id: 9
  },
  10: {
    label: 'Pecans',
    type: 'item',
    id: 10
  },
  11: {
    label: 'Walnuts',
    type: 'item',
    id: 11
  },
  12: {
    label: 'Watermelon',
    type: 'item',
    id: 12
  },
  13: {
    label: 'Canteloupe',
    type: 'item',
    _iconClass: 'glyphicon-file',
    id: 13
  },
  14: {
    label: 'Strawberries',
    type: 'item',
    id: 14
  },
  15: {
    label: 'Peaches',
    type: 'item',
    id: 15
  },
  16: {
    label: 'Pears',
    type: 'item',
    _iconClass: 'glyphicon-file',
    id: 16
  },
  17: {
    label: 'Citrus',
    type: 'branch',
    id: 17,
    nodes: [20, 21, 22, 23]
  },
  18: {
    label: 'Apples',
    type: 'branch',
    id: 18,
    nodes: [24, 25, 26, 27]
  },
  19: {
    label: 'Cherries',
    type: 'branch',
    id: 19,
    nodes: [28, 29, 30, 31, 32, 33]
  },
  20: {
    label: 'Orange',
    type: 'item',
    id: 20
  },
  21: {
    label: 'Grapefruit',
    type: 'item',
    id: 21
  },
  22: {
    label: 'Lemon',
    type: 'item',
    id: 22
  },
  23: {
    label: 'Lime',
    type: 'item',
    id: 23
  },
  24: {
    label: 'Granny Smith',
    type: 'item',
    id: 24
  },
  25: {
    label: 'Pinklady',
    type: 'item',
    _iconClass: 'glyphicon-file',
    id: 25
  },
  26: {
    label: 'Rotten',
    type: 'item',
    id: 26
  },
  27: {
    label: 'Jonathan',
    type: 'item',
    id: 27
  },
  28: {
    label: 'Balaton',
    type: 'item',
    id: 28
  },
  29: {
    label: 'Erdi Botermo',
    type: 'item',
    id: 29
  },
  30: {
    label: 'Montmorency',
    type: 'item',
    id: 30
  },
  31: {
    label: 'Queen Ann',
    type: 'item',
    id: 31
  },
  32: {
    label: 'Ulster',
    type: 'item',
    id: 32
  },
  33: {
    label: 'Viva',
    type: 'item',
    id: 33
  }
};
/*
Sample of normalized hash table created
{
	 "0":{
			"id":0,
			"nodes":[
				 1,
				 2,
				 3,
				 7
			]
	 },
	 "1":{
			"label":"Grains",
			"type":"item",
			"id":1
	 },
	 "2":{
			"label":"Fruits",
			"type":"branch",
			"id":2,
			"nodes":[
				 4,
				 5
			]
	 },
	 "3":{
			"label":"Nuts",
			"type":"branch",
			"_iconClass":"glyphicon-file",
			"id":3,
			"nodes":[
				 8,
				 9,
				 10,
				 11
			]
	 },
	 "4":{
			"assistiveText":"Ground Fruits",
			"label":{
				 "type":"span",
				 "key":null,
				 "ref":null,
				 "props":{
						"children":"Ground Fruits"
				 },
				 "_owner":null,
				 "_store":{

				 }
			},
			"type":"branch",
			"id":4,
			"nodes":[
				 12,
				 13,
				 14
			]
	 }
}
 */

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
      nodes: _this.props.nodes || sampleNodes,
      searchTerm: _this.props.searchable ? 'fruit' : undefined
    });

    _defineProperty(_assertThisInitialized(_this), "getNodes", function (node) {
      return node.nodes ? node.nodes.map(function (id) {
        return _this.state.nodes[id];
      }) : [];
    });

    _defineProperty(_assertThisInitialized(_this), "handleExpandClick", function (event, data) {
      log({
        action: _this.props.action,
        customLog: _this.props.log,
        event: event,
        eventName: 'Expand Branch',
        data: data
      });
      var selected = data.select ? true : data.node.selected;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          nodes: _objectSpread({}, prevState.nodes, _defineProperty({}, data.node.id, _objectSpread({}, data.node, {
            expanded: data.expand,
            selected: selected
          })))
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event, data) {
      log({
        action: _this.props.action,
        customLog: _this.props.log,
        event: event,
        eventName: 'Node Selected',
        data: data
      });

      if (_this.props.multipleSelection) {
        if (!_this.props.noBranchSelection || _this.props.noBranchSelection && data.node.type !== 'branch') {
          // Take the previous state, expand it, overwrite the `nodes` key with the previous state's `nodes` key expanded with the id of the node just clicked selected
          _this.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              nodes: _objectSpread({}, prevState.nodes, _defineProperty({}, data.node.id, _objectSpread({}, data.node, {
                selected: data.select
              })))
            });
          });
        }
      } else if (_this.props.noBranchSelection && data.node.type === 'branch') {
        // OPEN BRANCH/FOLDER WHEN CLICKED
        // Although not codified in SLDS, this takes the click callback and turns it into the expand callback, and should be used for item only selection.
        _this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            nodes: _objectSpread({}, prevState.nodes, _defineProperty({}, data.node.id, _objectSpread({}, data.node, {
              expanded: !data.node.expanded
            })))
          });
        });
      } else {
        // SINGLE SELECTION
        // Take the previous state, expand it, overwrite the `nodes` key with the previous state's `nodes` key expanded with the id of the node just clicked selected and the previously selected node unselected.
        _this.setState(function (prevState) {
          // Gaurd against no selection with the following. `selectedNode`
          // is the previously selected "current state" that is about to
          // be updated
          var selectedNode = prevState.selectedNode ? _defineProperty({}, prevState.selectedNode.id, _objectSpread({}, prevState.nodes[prevState.selectedNode.id], {
            selected: false
          })) : {};
          return _objectSpread({}, prevState, {
            nodes: _objectSpread({}, prevState.nodes, _objectSpread(_defineProperty({}, data.node.id, _objectSpread({}, data.node, {
              selected: data.select
            })), selectedNode)),
            selectedNode: data.node
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event, data) {
      log({
        action: _this.props.action,
        event: event,
        eventName: 'Tree scrolled',
        data: data
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (event) {
      _this.setState({
        searchTerm: event.target.value
      });
    });

    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement("div", null, this.props.searchable ? React.createElement("div", null, React.createElement(Search, {
        assistiveText: {
          label: 'Search Tree'
        },
        id: "example-search",
        value: this.state.searchTerm,
        onChange: this.handleSearchChange
      }), React.createElement("br", null)) : null, React.createElement(Tree, {
        assistiveText: this.props.assistiveText,
        className: this.props.className,
        getNodes: this.props.getNodes || this.getNodes,
        heading: !this.props.noHeading && this.props.heading,
        id: this.props.id,
        listStyle: this.props.listStyle,
        listClassName: this.props.listClassName,
        nodes: this.state.nodes['0'].nodes,
        onExpandClick: this.props.onExpandClick || this.handleExpandClick,
        onClick: this.props.onClick || this.handleClick,
        onScroll: this.props.onScroll || this.handleScroll,
        searchTerm: this.props.searchTerm || this.state.searchTerm
      })));
    }
  }]);

  return Example;
}(React.Component);

_defineProperty(Example, "displayName", 'DemoTree');

_defineProperty(Example, "defaultProps", {
  heading: 'Miscellaneous Foods',
  id: 'example-tree'
});

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
//# sourceMappingURL=default.js.map