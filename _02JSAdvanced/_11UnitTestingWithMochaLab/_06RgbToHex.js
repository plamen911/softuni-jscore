// https://judge.softuni.bg/Contests/Compete/Index/307#5
/* globals require */
'use strict';

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }

    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }

    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }

    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect = require('chai').expect;

describe('Test RGB to Hex color', () => {
    describe('General tests', () => {
        it('Should be a function', () => {
            expect(typeof rgbToHexColor).to.equal('function');
        });
    });

    describe('Value tests', () => {
        it('Should return #FF9EAA for (255, 158, 170)', () => {
            expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
        });

        it('Should pad values with zeroes', () => {
            expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
        });

        it('Should work at lower limit', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });

        it('Should work at upper limit', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('Should accept 3 arguments', () => {
            expect(rgbToHexColor.length).to.equal(3);
        });

        it('Should return undefined for negative values', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        });

        it('Should return undefined for values greater than 255', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        });

        it('Should return undefined if value of 1st argument is greater than 255', () => {
            expect(rgbToHexColor(256, 12, 15)).to.be.undefined;
        });

        it('Should return undefined if value of 2nd argument is greater than 255', () => {
            expect(rgbToHexColor(12, 256, 15)).to.be.undefined;
        });

        it('Should return undefined if value of 3rd argument is greater than 255', () => {
            expect(rgbToHexColor(12, 15, 256)).to.be.undefined;
        });

        it('Should return undefined for fractions', () => {
            expect(rgbToHexColor(3.14, 2.71, 4.14)).to.be.undefined;
        });

        it('Should return undefined for wrong input params', () => {
            expect(rgbToHexColor('pesho', {name: 'gosho'}, [])).to.be.undefined;
        });
    });
});

