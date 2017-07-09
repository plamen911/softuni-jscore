// https://judge.softuni.bg/Contests/Compete/Index/307#4
/* globals require */
'use strict';

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false;   // Non-arrays are non-symmetric 
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse 
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect;

describe('Test symmetry', () => {
    describe('General tests', () => {
        it('Should be a function', () => {
            expect(typeof isSymmetric).to.equal('function');
        });
    });

    describe('Value tests', () => {
        it('Should return false if not an array passed - 1,2,2,1', () => {
            expect(isSymmetric('1,2,2,1')).to.be.false;
        });

        it('Should return true for [1, 2, 3, 3, 2, 1]', () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        });

        it('Should return false for [1, 2, 3, 3, 2, 3]', () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 3])).to.be.false;
        });

        it('Should return true for [1, 2, 3, 2, 1]', () => {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        });

        it('Should return false for [1, 2, 3, 2, 3]', () => {
            expect(isSymmetric([1, 2, 3, 2, 3])).to.be.false;
        });

        it('Should return false for [1, 2]', () => {
            expect(isSymmetric([1, 2])).to.be.false;
        });

        it('Should return true for [1]', () => {
            expect(isSymmetric([1])).to.be.true;
        });

        it('Should return true for [5,\'hi\',{a:5},new Date(),{a:5},\'hi\',5]', () => {
            expect(isSymmetric([5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5])).to.be.true;
        });
        it('Should return false for [5,\'hi\',{a:5},new Date(),{X:5},\'hi\',5]', () => {
            expect(isSymmetric([5, 'hi', {a: 5}, new Date(), {X: 5}, 'hi', 5])).to.be.false;
        });
    });
});