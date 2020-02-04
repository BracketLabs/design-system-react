/* eslint-disable react/no-find-dom-node */
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import Avatar from '../../avatar';
import Icon from '../../icon';
import IconSettings from '../../icon-settings';
import SLDSPillContainer from '../../pill-container';
import { mountComponent, unmountComponent } from '../../../tests/enzyme-helpers';
import { keyObjects } from '../../../utilities/key-code';
var Simulate = TestUtils.Simulate;
var options = [{
  id: '1',
  label: 'Pill Label 1',
  title: 'Full pill label verbiage mirrored here'
}, {
  icon: React.createElement(Icon, {
    category: "standard",
    name: "account",
    title: "Account"
  }),
  id: '2',
  label: 'Pill Label 2',
  title: 'Full pill label verbiage mirrored here'
}, {
  icon: {
    category: 'standard',
    name: 'account'
  },
  id: '3',
  label: 'Pill Label 3',
  title: 'Full pill label verbiage mirrored here'
}, {
  avatar: React.createElement(Avatar, {
    imgSrc: "https://lightningdesignsystem.com/assets/images/avatar1.jpg",
    title: "User 4",
    variant: "user"
  }),
  id: '4',
  label: 'Pill Label 4',
  title: 'Full pill label verbiage mirrored here'
}, {
  avatar: {
    imgSrc: 'https://lightningdesignsystem.com/assets/images/avatar1.jpg',
    title: 'User 5'
  },
  id: '5',
  label: 'Pill Label 5',
  title: 'Full pill label verbiage mirrored here'
}, {
  bare: true,
  id: '6',
  label: 'Pill Label 6',
  title: 'Full pill label verbiage mirrored here'
}, {
  error: true,
  id: '7',
  label: 'Pill Label 7',
  title: 'Full pill label verbiage mirrored here'
}];
describe('SLDSPillContainer', function () {
  describe('Base', function () {
    var clickData = {};
    var requestRemoveData = {};
    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(SLDSPillContainer, {
      options: options,
      onClickPill: function onClickPill(event, data) {
        clickData = data;
      },
      onRequestRemovePill: function onRequestRemovePill(event, data) {
        requestRemoveData = data;
      }
    }))));
    afterEach(unmountComponent);
    it('Renders the base Pill Container correctly', function () {
      var idOfCurrentPill = 1;
      expect(this.wrapper.find('.slds-pill_container').length).to.eql(1);
      expect(this.wrapper.find('ul.slds-listbox').length).to.eql(1);
      this.wrapper.find('ul.slds-listbox .slds-pill').forEach(function (pill) {
        expect(pill.find('.slds-pill__label').text()).to.eql("Pill Label ".concat(idOfCurrentPill));
        Simulate.click(pill.getDOMNode());
        expect(clickData.option.id).to.eql("".concat(idOfCurrentPill));
        Simulate.click(pill.find('.slds-pill__remove').getDOMNode());
        expect(requestRemoveData.option.id).to.eql("".concat(idOfCurrentPill));

        if (idOfCurrentPill === 2 || idOfCurrentPill === 3) {
          expect(pill.find('.slds-icon_container.slds-icon-standard-account').length).to.eql(1);
        } else if (idOfCurrentPill === 4 || idOfCurrentPill === 5) {
          expect(pill.find('.slds-avatar.slds-avatar_circle.slds-avatar_medium').length).to.eql(1);
        } else if (idOfCurrentPill === 6) {
          expect(pill.find('.slds-pill_bare').length).to.eql(1);
        } else if (idOfCurrentPill === 7) {
          expect(pill.find('.slds-has-error').length).to.eql(1);
        }

        idOfCurrentPill += 1;
      });
    });
    it('Handles keyboard navigation properly', function () {
      var getFocusedPillLabel = function getFocusedPillLabel() {
        return document.activeElement.querySelector('.slds-pill__label').innerText;
      };

      var i = 1;
      Simulate.focus(this.wrapper.find('.slds-pill_container').find('.slds-pill').first().getDOMNode());

      for (i = 1; i < 7; i += 1) {
        Simulate.keyDown(document.activeElement, keyObjects.RIGHT);
        expect(getFocusedPillLabel()).to.eql(options[i].label);
      }

      Simulate.keyDown(document.activeElement, keyObjects.RIGHT);
      expect(getFocusedPillLabel()).to.eql(options[0].label);
      Simulate.keyDown(document.activeElement, keyObjects.LEFT);
      expect(getFocusedPillLabel()).to.eql(options[6].label);

      for (i = 0; i < 3; i += 1) {
        Simulate.keyDown(document.activeElement, keyObjects.LEFT);
      }

      Simulate.keyDown(document.activeElement, keyObjects.DELETE);
      expect(requestRemoveData.option.label).to.eql(options[3].label);
      Simulate.keyDown(document.activeElement, keyObjects.LEFT);
      Simulate.keyDown(document.activeElement, keyObjects.BACKSPACE);
      expect(requestRemoveData.option.label).to.eql(options[2].label);
    });
  });
  describe('Bare', function () {
    beforeEach(mountComponent(React.createElement(IconSettings, {
      iconPath: "/assets/icons"
    }, React.createElement(SLDSPillContainer, {
      options: options,
      variant: "bare"
    }))));
    afterEach(unmountComponent);
    it('Renders the bare Pill Container correctly', function () {
      this.wrapper.find('ul.slds-listbox .slds-pill').forEach(function (pill) {
        expect(pill.find('.slds-pill_bare').length).to.eql(1);
      });
    });
  });
});
//# sourceMappingURL=pill-container.browser-test.js.map