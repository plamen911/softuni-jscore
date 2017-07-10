// https://judge.softuni.bg/Contests/Compete/Index/335#4
'use strict';

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

describe('function nuke', () => {
    beforeEach(() => {
        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some <span>more</span> text</span>
                </div>
            </div>`
    });
    before(() => global.$ = $);
    it('should do nothing if selectors are equal', () => {
        let beforeNuke = $('body').html();
        nuke('#target', '#target');
        let afterNuke = $('body').html();
        expect(beforeNuke).to.equal(afterNuke);
    });
    it("should remove one span for ('.target', 'span')", () => {
        let initialTargetLength = $('.target').length;
        let initialSpanLength = $('span').length;
        let initialSpanTargetLength = $('.target').filter('span').length;
        if ($('.target').filter('span').has('span')) {
            initialSpanLength--;
        }
        nuke('.target', 'span');
        expect($('.target').filter('span').length).to.be.equal(0);
        expect($('span').length).to.equal(initialSpanLength - initialSpanTargetLength);
        expect($('.target').length).to.equal(initialTargetLength - initialSpanTargetLength);
    });
    it("should remove two divs for ('div', '.target')", () => {
        let initialTargetLength = $('.target').length;
        let initialDivLength = $('div').length;
        let initialDivTargetLength = $('.target').filter('div').length;
        nuke('div', '.target');
        expect($('.target').filter('div').length).to.be.equal(0);
        expect($('div').length).to.equal(initialDivLength - initialDivTargetLength);
        expect($('.target').length).to.equal(initialTargetLength - initialDivTargetLength);
    });
    it('should remove one span for', () => {
        nuke('.nested', 'span');
        expect($('span.nested').length).to.be.equal(0);
    });
    it('should return the same html if one parameter is omitted', () => {
        let beforeNuke = $('body').html();
        nuke('div');
        let afterNuke = $('body').html();
        expect(beforeNuke).to.equal(afterNuke);
    });
    it('should return the same html if one parameter is omitted', () => {
        let beforeNuke = $('body').html();
        nuke('', 'div');
        let afterNuke = $('body').html();
        expect(beforeNuke).to.equal(afterNuke);
    });
    it('should do nothing for non-existing selector', () => {
        let beforeNuke = $('body').html();
        nuke('#invalid', 'section');
        let afterNuke = $('body').html();
        expect(beforeNuke).to.equal(afterNuke);
    });
});