// https://judge.softuni.bg/Contests/Practice/Index/352#1
'use strict';

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

let expect = require('chai').expect;

describe('SortedList Unit Tests', () => {
    describe('General tests', () => {
        it('Should be a function', () => {
            expect(typeof SortedList).to.equal('function');
        });
    });

    let myList;
    beforeEach(() => {
        myList = new SortedList();
    });

    describe('Test initial state', () => {
        it ('add exists', () => {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it ('remove exists', () => {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it ('get exists', () => {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });
        it ('size exists', () => {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });

    describe('Test add', () => {
        it ('with one element', () => {
            myList.add(5);
            expect(myList.list.join(', ')).to.equal('5', 'List did not add correctly');
        });
        it ('with many elements', () => {
            myList.add(5);
            myList.add(4);
            myList.add(3);
            expect(myList.list.join(', ')).to.equal('3, 4, 5', 'List did not sort correctly');
        });
    });

    describe('Test remove', () => {
        it ('with empty list', () => {
            expect(() => myList.remove()).throw(Error, 'Collection is empty.')
        });
        it ('with negative index', () => {
            myList.add(3);
            expect(() => myList.remove(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it ('with index equal to list length', () => {
            myList.add(3);
            expect(() => myList.remove(1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it ('with index bigger than list length', () => {
            myList.add(3);
            expect(() => myList.remove(2)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it ('with correct index (should remove)', () => {
            myList.add(3);
            myList.add(4);
            myList.add(5);
            myList.remove(1);
            expect(myList.list.join(', ')).to.equal('3, 5', 'List did not remove correctly');
        });
    });

    describe('Test get', () => {
        it ('with empty list', () => {
            expect(() => myList.get()).throw(Error, 'Collection is empty.')
        });
        it ('with negative index', () => {
            myList.add(3);
            expect(() => myList.get(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it ('with index equal to list length', () => {
            myList.add(3);
            expect(() => myList.get(1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it ('with index bigger than list length', () => {
            myList.add(3);
            expect(() => myList.get(2)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it ('with correct index (should get)', () => {
            myList.add(3);
            myList.add(5);
            myList.add(4);
            let element = myList.get(1);
            expect(element).to.equal(4, 'List did not get correctly');
        });
    });

    describe('Test size', () => {
        it('with empty list', () => {
            expect(myList.size).to.equal(0, 'List was not empty');
        });
        it('with non-empty list', () => {
            myList.add(1);
            myList.add(3);
            myList.add(2);
            expect(myList.size).to.equal(3, 'List size was not correct');
        });
    });
});