function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable max-lines */
// Import your external dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import assign from 'lodash.assign';
import { Simulate, findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
/* Enzyme Helpers that can mount and unmount React component instances to
 * the DOM and set `this.wrapper` and `this.dom` within Mocha's `this`
 * context [full source here](tests/enzyme-helpers.js). `this` can
 * only be referenced if inside `function () {}`.
 */

import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers'; // Import your internal dependencies (for example):

import Dropdown from '../../menu-dropdown';
import IconSettings from '../../icon-settings';
import Tooltip from '../../tooltip';
import List from '../../utilities/menu-list';
import { keyObjects } from '../../../utilities/key-code';
/* Set Chai to use chaiEnzyme for enzyme compatible assertions:
 * https://github.com/producthunt/chai-enzyme
 */

chai.use(chaiEnzyme());
var menuOptions = [{
  label: 'A super short',
  value: 'A0'
}, {
  label: 'B Option Super Super Long',
  value: 'B0'
}, {
  label: 'C Option',
  value: 'C0'
}, {
  disabled: true,
  label: 'D Option',
  value: 'D0'
}];
var defaultProps = {
  iconCategory: 'utility',
  iconName: 'down',
  id: 'sample-dropdown',
  label: 'Test',
  menuPosition: 'relative',
  openOn: 'click',
  options: menuOptions,
  placeholder: 'Select a contact',
  value: 'B0'
};
/* eslint-disable react/prop-types */

var DropdownCustomContent = function DropdownCustomContent(props) {
  return React.createElement("div", {
    id: "custom-dropdown-menu-content"
  }, React.createElement("div", {
    className: "slds-m-around_medium"
  }, React.createElement("div", {
    className: "slds-tile slds-tile_board slds-m-horizontal_small"
  }, React.createElement("p", {
    className: "tile__title slds-text-heading_small"
  }, "Art Vandelay"), React.createElement("div", {
    className: "slds-tile__detail"
  }, React.createElement("p", {
    className: "slds-truncate"
  }, React.createElement("a", {
    id: "custom-dropdown-menu-content-link",
    className: "slds-m-right_medium",
    href: "javascript:void(0);",
    onClick: props.onClick
  }, "Settings"), React.createElement("a", {
    href: "javascript:void(0);",
    onClick: props.onClick
  }, "Log Out"))))));
};

DropdownCustomContent.displayName = 'DropdownCustomContent';
/* A re-usable demo component fixture outside of `describe` sections
 * can accept props within each test and be unmounted after each tests.
 * This wrapping component will be similar to your wrapping component
 * you will create in the React Storybook for manual testing.
 */

var DemoComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoComponent, _React$Component);

  function DemoComponent() {
    _classCallCheck(this, DemoComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(DemoComponent).apply(this, arguments));
  }

  _createClass(DemoComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, React.createElement(Dropdown, _extends({}, defaultProps, this.props), this.props.children));
    }
  }]);

  return DemoComponent;
}(React.Component);

DemoComponent.displayName = 'DropdownDemoComponent';
DemoComponent.defaultProps = defaultProps;

var getNodes = function getNodes(_ref) {
  var wrapper = _ref.wrapper;
  return {
    trigger: wrapper.find('.slds-dropdown-trigger'),
    button: wrapper.find('.slds-dropdown-trigger button'),
    menu: wrapper.find('.slds-dropdown'),
    customContent: wrapper.find('#custom-dropdown-menu-content'),
    customContentLink: wrapper.find('#custom-dropdown-menu-content #custom-dropdown-menu-content-link')
  };
};
/* All tests for component being tested should be wrapped in a root `describe`,
 * which should be named after the component being tested.
 * When read aloud, the cumulative `describe` and `it` names should form a coherent
 * sentence, eg "Date Picker default structure and css is present with expected
 * attributes set". If you are having trouble constructing a cumulative short
 * sentence, this may be an indicator that your test is poorly structured.
 * String provided as first parameter names the `describe` section. Limit to nouns
 * as much as possible/appropriate.`
 */


describe('SLDSMenuDropdown', function () {
  describe('Styling', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      menuStyle: {
        height: '500px'
      },
      width: "small"
    })));
    afterEach(unmountComponent);
    it('has correct CSS classes and style', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu).to.exist;
      expect(openNodes.menu).to.have.style('height', '500px');
      expect(openNodes.menu.hasClass('slds-dropdown_small')).to.equal(true);
    });
  });
  describe('Inverse', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      inverse: true
    })));
    afterEach(unmountComponent);
    it('has correct CSS class for inverse', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.hasClass('slds-dropdown_inverse')).to.equal(true);
    });
  });
  describe('Custom Content Present', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      nubbinPosition: "top left",
      openOn: "click"
    }, React.createElement(DropdownCustomContent, null), React.createElement(List, {
      options: [{
        label: 'Custom Content Option'
      }].concat(menuOptions)
    }))));
    afterEach(unmountComponent);
    it('has content with custom ID is present', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.customContent.length).to.equal(1);
    });
    it('closes when custom content is clicked', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      openNodes.customContentLink.simulate('click', {});
      var closedNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(closedNodes.customContent.length).to.equal(0);
    });
    it("has additional ListItem from list child's options prop", function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      var buttonId = nodes.trigger.prop('id');
      nodes.button.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.find("li#".concat(buttonId, "-item-0")).text()).to.equal('Custom Content Option');
    });
  });
  describe('Clickable', function () {
    var onClick = sinon.spy();
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      onClick: onClick
    })));
    afterEach(unmountComponent);
    it('does not expand on hover', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      expect(nodes.menu.length).to.equal(0);
      nodes.trigger.simulate('mouseEnter', {});
      var hoverNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(hoverNodes.menu.length).to.equal(0);
    });
    it('expands/contracts on click', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      expect(nodes.menu.length).to.equal(0);
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.length).to.equal(1);
      openNodes.trigger.simulate('click', {});
      var closedNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(closedNodes.menu.length).to.equal(0);
    });
    it('preserves click behavior', function () {
      onClick.resetHistory();
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      expect(onClick.calledOnce);
    });
  });
  describe('Expanded', function () {
    var selected;
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      onSelect: function onSelect(selectedOption) {
        selected = selectedOption;
      }
    })));
    afterEach(unmountComponent);
    it('selects an item on click', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      expect(nodes.menu.length).to.equal(0);
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      openNodes.menu.find('li a').first().simulate('click', {});
      expect(selected.value).to.equal('A0');
    });
  });
  describe('accessible markup for label Dropdowns', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, null)));
    afterEach(unmountComponent);
    it('<ul> has role menu & aria-labelledby', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.find('ul')).to.have.attr('role', 'menu');
      var nodeId = openNodes.trigger.prop('id');
      expect(openNodes.menu.find('ul')).attr('aria-labelledby', nodeId);
    });
    it('<a> inside <li> has role menuitem', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      var anchorRole = openNodes.menu.find('li a').first().prop('role');
      var match = anchorRole === 'menuitem' || anchorRole === 'menuitemradio' || anchorRole === 'menuitemcheckbox';
      expect(match).to.be.true;
    });
    it('if option.disabled, add aria-disabled to <a> that has role menuitem', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      var lastItemAriaDisabledRole = openNodes.menu.find('li a').at(3).prop('aria-disabled');
      expect(lastItemAriaDisabledRole).to.be.true;
    });
  });
  describe('accessible markup for Icon Only Dropdowns', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      assistiveText: {
        icon: 'more options'
      },
      buttonVariant: "icon",
      checkmark: true,
      iconCategory: "utility",
      iconName: "down",
      iconVariant: "border-filled"
    })));
    afterEach(unmountComponent);
    it('<button> has assistiveText', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      expect(nodes.button.find('.slds-assistive-text').text()).to.equal('more options');
    });
  });
  describe('Keyboard behavior', function () {
    var selected;
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      onSelect: function onSelect(selectedOption) {
        selected = selectedOption;
      }
    })));
    afterEach(unmountComponent);
    it('opens menu with enter', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      expect(nodes.menu.length).to.equal(0);
      nodes.button.simulate('keyDown', keyObjects.ENTER);
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.length).to.equal(1);
    });
    it('opens menu with down arrow key', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      expect(nodes.menu.length).to.equal(0);
      nodes.button.simulate('keyDown', keyObjects.DOWN);
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.length).to.equal(1);
    });
    it('selects an item with keyboard', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      openNodes.menu.simulate('keyDown', keyObjects.DOWN);
      openNodes.menu.simulate('keyDown', keyObjects.DOWN);
      openNodes.menu.simulate('keyDown', keyObjects.ENTER);
      expect(selected.value).to.equal('B0');
    });
    it('closes Menu on esc', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      expect(nodes.menu.length).to.equal(0);
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.length).to.equal(1);
      openNodes.menu.find('.slds-dropdown__item a').first().simulate('keyDown', keyObjects.ESCAPE);
      var closedNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(closedNodes.menu.length).to.equal(0);
    });
  });
  describe('multiple selection', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      multiple: true,
      checkmark: true
    })));
    afterEach(unmountComponent);
    it('selects multiple items and renders checkmarks', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('click', {});
      var openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.find('.slds-dropdown__item svg').length).to.equal(1);
      var firstNode = openNodes.menu.find('.slds-dropdown__item a').at(0);
      firstNode.simulate('click');
      openNodes = getNodes({
        wrapper: this.wrapper
      });
      expect(openNodes.menu.find('.slds-dropdown__item svg').length).to.equal(2); // item with checkmark has proper aria markup

      expect(firstNode).attr('aria-checked', 'true');
      expect(firstNode).attr('role', 'menuitemcheckbox');
    });
  }); // Hover and hybrid hover UX patterns are not approved UX patterns due to accessibility concerns

  describe('Hoverable', function () {
    var body;

    var renderDropdown = function renderDropdown(inst) {
      body = document.createElement('div');
      document.body.appendChild(body);
      /* deepscan-disable REACT_ASYNC_RENDER_RETURN_VALUE */
      // eslint-disable-next-line react/no-render-return-value

      return ReactDOM.render(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, inst), body);
      /* deepscan-enable REACT_ASYNC_RENDER_RETURN_VALUE */
    };

    function removeDropdownTrigger() {
      ReactDOM.unmountComponentAtNode(body);
      document.body.removeChild(body);
    }

    var createDropdown = function createDropdown(props) {
      return React.createElement(Dropdown, assign({}, defaultProps, props));
    };

    createDropdown.displayName = 'createDropdown';

    var dropItDown = function dropItDown(props) {
      return renderDropdown(createDropdown(props));
    };

    var getMenu = function getMenu(dom) {
      return dom.querySelector('.slds-dropdown');
    };

    var cmp;
    var btn;
    beforeEach(function () {
      cmp = dropItDown({
        buttonClassName: 'dijkstrafied',
        openOn: 'hover',
        hoverCloseDelay: 2
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-dropdown-trigger');
    });
    afterEach(function (done) {
      // due to hover-close delay, removal from DOM must be delayed
      setTimeout(function () {
        removeDropdownTrigger();
        done();
      }, 100);
    });
    it('gives the button correct aria properties', function () {
      expect(btn.firstChild.getAttribute('aria-haspopup')).to.equal('true');
    });
    it('sets the label', function () {
      expect(btn.textContent).to.equal('Test');
    });
    it('expands the dropdown on hover', function () {
      expect(getMenu(body)).to.equal(null);
      Simulate.mouseEnter(btn, {});
      expect(getMenu(body).className).to.include('slds-dropdown');
      Simulate.mouseLeave(btn, {});
    });
    it('closes on blur based on timeout delay', function (done) {
      expect(getMenu(body)).to.equal(null);
      Simulate.mouseEnter(btn, {});
      Simulate.mouseLeave(btn);
      expect(getMenu(body)).to.not.equal(null);
      setTimeout(function () {
        expect(getMenu(body)).to.equal(null);
        done();
      }, 3);
    });
    it("doesn't close on quick hover outside", function (done) {
      expect(getMenu(body)).to.equal(null);
      Simulate.mouseEnter(btn, {});
      Simulate.mouseLeave(btn);
      setTimeout(function () {
        Simulate.mouseEnter(btn, {});
        expect(getMenu(body)).to.not.equal(null);
        setTimeout(function () {
          expect(getMenu(body)).to.not.equal(null);
          done();
        }, 3);
      }, 1);
    });
  });
  describe('Hybrid-able', function () {
    var body;

    var renderDropdown = function renderDropdown(inst) {
      body = document.createElement('div');
      document.body.appendChild(body);
      /* deepscan-disable REACT_ASYNC_RENDER_RETURN_VALUE */
      // eslint-disable-next-line react/no-render-return-value

      return ReactDOM.render(React.createElement(IconSettings, {
        iconPath: "/assets/icons"
      }, inst), body);
      /* deepscan-enable REACT_ASYNC_RENDER_RETURN_VALUE */
    };

    function removeDropdownTrigger() {
      ReactDOM.unmountComponentAtNode(body);
      document.body.removeChild(body);
    }

    var createDropdown = function createDropdown(props) {
      return React.createElement(Dropdown, assign({}, defaultProps, props));
    };

    createDropdown.displayName = 'createDropdown';

    var dropItDown = function dropItDown(props) {
      return renderDropdown(createDropdown(props));
    };

    var getMenu = function getMenu(dom) {
      return dom.querySelector('.slds-dropdown');
    };

    var cmp;
    var btn;
    var onClick = sinon.spy();
    beforeEach(function () {
      cmp = dropItDown({
        openOn: 'hybrid',
        onClick: onClick,
        hoverCloseDelay: 1
      });
      btn = findRenderedDOMComponentWithClass(cmp, 'slds-dropdown-trigger');
    });
    afterEach(function () {
      removeDropdownTrigger();
    });
    it('doesnt expand on hover', function () {
      expect(getMenu(body)).to.equal(null);
      Simulate.mouseEnter(btn, {});
      expect(getMenu(body)).to.equal(null);
    });
    it('opens on click, closes on mouseLeave', function (done) {
      // open
      expect(getMenu(body)).to.equal(null);
      Simulate.click(btn, {});
      expect(getMenu(body).className).to.include('slds-dropdown'); // close

      Simulate.mouseEnter(btn, {});
      Simulate.mouseLeave(btn);
      expect(getMenu(body)).to.not.equal(null);
      setTimeout(function () {
        expect(getMenu(body)).to.equal(null);
        done();
      }, 2);
    });
  });
  describe('Tooltips function as expected', function () {
    beforeEach(mountComponent(React.createElement(DemoComponent, {
      options: [{
        label: 'Test item A',
        value: 'A0'
      }, {
        label: 'Test item B',
        value: 'B0',
        tooltipContent: 'Testing tooltip content'
      }, {
        label: 'Test item C',
        value: 'C0'
      }],
      tooltipMenuItem: React.createElement(Tooltip, null)
    })));
    afterEach(unmountComponent);
    it('Tooltip component shows when focused on menu item.', function () {
      var nodes = getNodes({
        wrapper: this.wrapper
      });
      nodes.trigger.simulate('focus');
      nodes.trigger.simulate('keyDown', keyObjects.ENTER);
      nodes.trigger.simulate('keyDown', keyObjects.DOWN);
      var tooltip = this.wrapper.find('#sample-dropdown-item-1-tooltip');
      expect(tooltip.length).to.equal(1);
    });
  });
});
//# sourceMappingURL=dropdown.browser-test.js.map