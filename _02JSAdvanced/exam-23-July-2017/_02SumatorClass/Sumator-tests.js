Sumator = require('./Sumator');

let list = new Sumator();

console.log(typeof list.__proto__.sumNums === 'function');

console.log(`list = [${list}]`);
list.add(1);
list.add(2);
list.add("three");
list.add(4);
console.log(`list = [${list}]`);
console.log("sum = " + list.sumNums());
list.add("5.5"); // not a number!
list.add(7.7);
console.log(`list = [${list}]`);
console.log("sum = " + list.sumNums());
list.removeByFilter(x => x % 2 === 0);
console.log(`list = [${list}]`);
console.log("sum = " + list.sumNums());

// tests
let expect = require('chai').expect;

describe('Sumator Class (Unit Testing)', () => {
    let list;
    beforeEach(() => {
        list = new Sumator();
    });

    describe('General tests', () => {
        it('Should be a function', () => {
            expect(typeof Sumator).to.equal('function');
        });

        it('Should have data property', () => {
            expect(list.hasOwnProperty('data')).to.be.true;
        });

        it('Data should be an array', () => {
            expect(list.data).to.be.an('array');
        })

        it('Check if add function exists', () => {
            expect(typeof list.__proto__.add === 'function').to.be.true;
        });

        it('Check if sumNums function exists', () => {
            expect(typeof list.__proto__.sumNums === 'function').to.be.true;
        });

        it('Check if removeByFilter function exists', () => {
            expect(typeof list.__proto__.removeByFilter === 'function').to.be.true;
        });

        it('Check if toString function exists', () => {
            expect(typeof list.__proto__.toString === 'function').to.be.true;
        });
    });

    describe('add', () => {
        it('with empty data, should return (empty)', () => {
            expect(list.toString()).to.equal('(empty)');
        });

        it('with a multiple elements of different types, should work correctly', () => {
            list.add('Pesho');
            list.add(5);
            let obj = {name: "gosho"};
            list.add(obj);
            expect(list.toString()).to.equal('Pesho, 5, [object Object]');
        });

        it('with a multiple elements of different types2, should work correctly', () => {
            list.add(1);
            list.add(2);
            list.add('three');
            list.add(4);
            expect(list.toString()).to.equal('1, 2, three, 4');
        });
    });

    describe('sumNums', () => {
        it('with empty data, should return (empty)', () => {
            expect(list.sumNums()).to.equal(0);
        });

        it('with a multiple elements of different types, should work correctly', () => {
            list.add('Pesho');
            list.add(5);
            list.add(3);
            let obj = {name: "gosho"};
            list.add(obj);
            expect(list.sumNums()).to.equal(8);
        });

        it('with a multiple elements of different types2, should work correctly', () => {
            list.add(1);
            list.add(2);
            list.add('three');
            list.add(4);
            expect(list.sumNums()).to.equal(7);
        });

        it('with a multiple non-numeric elements of different types, should work correctly', () => {
            list.add('Pesho');
            list.add('Maria');
            list.add(true);
            list.add('5');
            let obj = {name: "gosho"};
            list.add(obj);
            expect(list.sumNums()).to.equal(0);
        });

        it('with a multiple floating-point numbers, should work correctly', () => {
            list.add(1);
            list.add(2);
            list.add('three');
            list.add(4);
            list.add('5.5');
            list.add(7.7);
            expect(list.sumNums()).to.equal(14.7);
        });

        // it('with a very big numbers, should work correctly', () => {
        //     list.add('Pesho');
        //     list.add(Number.POSITIVE_INFINITY);
        //     list.add(3.55);
        //     let obj = {name: "gosho"};
        //     list.add(obj);
        //     // expect(() => list.sumNums()).to.throw(AssertionError);
        //     expect(() => list.sumNums()).to.equal('Infinity');
        // });
    });

    describe('removeByFilter(filterFunc)', () => {
        it('with empty data, should work correctly', () => {
            list.removeByFilter(x => x === 101);
            expect(list.toString()).to.equal('(empty)');
        });

        it('remove even items, should work correctly', () => {
            list.add(1);
            list.add(2);
            list.add('three');
            list.add(4);
            list.add('5.5');
            list.add(7.7);
            list.removeByFilter(x => x % 2 === 0);
            expect(list.toString()).to.equal('1, three, 5.5, 7.7');
        });

        it('remove even items and sum, should work correctly', () => {
            list.add(1);
            list.add(2);
            list.add('three');
            list.add(4);
            list.add('5.5');
            list.add(7.7);
            list.removeByFilter(x => x % 2 === 0);
            expect(list.sumNums()).to.equal(8.7);
        });

        it('with numeric exact match, should work correctly', () => {
            list.add('Pesho');
            list.add(5);
            list.add(101);
            list.add('101');
            let obj = {name: "gosho"};
            list.add(obj);
            list.removeByFilter(x => x === 101);
            expect(list.toString()).to.equal('Pesho, 5, 101, [object Object]');
        });

        it('with empty filter function, should work correctly', () => {
            list.add('Pesho');
            list.add(5);
            list.add(101);
            list.add('101');
            let obj = {name: "gosho"};
            list.add(obj);
            expect(() => list.removeByFilter()).to.throw(TypeError);
        });
    });

    describe('toString', () => {
        it('with empty data, should return (empty)', () => {
            expect(list.toString()).to.equal('(empty)');
        });

        it('with a multiple elements of different types, should work correctly', () => {
            list.add('Pesho');
            list.add(5);
            let obj = {name: "gosho"};
            list.add(obj);
            expect(list.toString()).to.equal('Pesho, 5, [object Object]');
        });
    });
});