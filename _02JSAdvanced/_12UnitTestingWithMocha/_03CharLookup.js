// https://judge.softuni.bg/Contests/Compete/Index/335#2
'use strict';

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

let expect = require('chai').expect;

describe('lookupChar', () => {
    describe('General tests', () => {
        it('Should be a function', () => {
            expect(typeof lookupChar).to.equal('function');
        });
    });

    describe('Validation tests', () => {
        it('with a not-string first parameter, should return undefined', () => {
            expect(lookupChar(13,0)).to.equal(undefined, 'Function did not return the correct result!');
        });

        it('with a non-number second parameter, should return undefined', () => {
            expect(lookupChar('pesho', 'gosho')).to.equal(undefined, 'Function did not return the correct result!');
        });

        it('with a floating point number second parameter, should return undefined', () => {
            expect(lookupChar('pesho', 3.12)).to.equal(undefined, 'Function did not return the correct result!');
        });

        it('with an incorrect index value, should return incorrect index', () => {
            expect(lookupChar('gosho', 13)).to.equal('Incorrect index', 'Function did not return the correct value!');
        });

        it('with an negative index value, should return incorrect index', () => {
            expect(lookupChar('stamat', -1)).to.equal('Incorrect index', 'Function did not return the correct value!');
        });

        it('with an index value equal to string length, should return incorrect index', () => {
            expect(lookupChar('pesho', 5)).to.equal('Incorrect index', 'Function did not return the correct value!');
        });
    });

    describe('Correct result tests', () => {
        it('with correct parameters, should return correct value', () => {
            expect(lookupChar('pesho', 0)).to.equal('p', 'Function did not return the correct result!');
        });

        it('with correct parameters, should return correct value', () => {
            expect(lookupChar('stamat', 3)).to.equal('m', 'Function did not return the correct result!');
        });
    });
});






