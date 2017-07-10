// https://judge.softuni.bg/Contests/Compete/Index/335#1
'use strict';

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

let expect = require('chai').expect;

describe('isOddOrEven', () => {
    describe('General tests', () => {
        it('Should be a function', () => {
            expect(typeof isOddOrEven).to.equal('function');
        });
    });

    describe('Validation tests', () => {
        it ('with a number parameter, should return undefined', () => {
            expect(isOddOrEven(2)).to.equal(undefined, 'Function did not return the correct result!');
        });

        it ('with a object parameter, should return undefined', () => {
            expect(isOddOrEven({name: 'pesho'})).to.equal(undefined, 'Function did not return the correct result!');
        });
    });

    describe('Proper arguments tests', () => {
        it ('with an even test string, should return correct result', () => {
            expect(isOddOrEven('roar')).to.equal('even', 'Function did not return the correct result!');
        });

        it ('with an odd test string, should return correct result', () => {
            expect(isOddOrEven('pesho')).to.equal('odd', 'Function did not return the correct result!');
        });

        it ('with multiple consecutive checks, should return correct values', () => {
            expect(isOddOrEven('cat')).to.equal('odd', 'Function did not return the correct result!');
            expect(isOddOrEven('alabala')).to.equal('odd', 'Function did not return the correct result!');
            expect(isOddOrEven('it is even')).to.equal('even', 'Function did not return the correct result!');
        });
    });
});