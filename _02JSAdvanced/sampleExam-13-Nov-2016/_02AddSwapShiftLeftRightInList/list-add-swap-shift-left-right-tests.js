let createList = require('./list-add-swap-shift-left-right');

// tests
let expect = require('chai').expect;

describe('Add / Swap / Shift Left / Right in List Unit Tests', () => {
    describe('General tests', () => {
        it('Should be a function', () => {
            expect(typeof createList).to.equal('function');
        });
    });

    it('test add single element', () => {
        let list = createList();
        list.add(5);
        expect(list.toString()).to.equal('5');
    });
    it('test add multiple elements', () => {
        let list = createList();
        list.add(5);
        list.add(10);
        list.add('Pesho');
        list.add(-800);
        list.add({name: 'Gosho', age: 20});
        expect(list.toString()).to.equal('5, 10, Pesho, -800, [object Object]');
    });
    it('test add object', () => {
        let list = createList();
        list.add({name: 'Plamen'});
        expect(list.toString()).to.equal('[object Object]');
    });
    it('test add no elements', () => {
        let list = createList();
        expect(list.toString()).to.equal('');
    });
    it('test shiftLeft with empty data', () => {
        let list = createList();
        list.shiftLeft();
        expect(list.toString()).to.equal('');
    });
    it('test shiftLeft with one element', () => {
        let list = createList();
        list.add(10);
        list.shiftLeft()
        expect(list.toString()).to.equal('10');
    });
    it('test shiftRight with empty data', () => {
        let list = createList();
        list.shiftRight();
        expect(list.toString()).to.equal('');
    });
    it('test shiftRight with one element', () => {
        let list = createList();
        list.add(3);
        list.shiftRight()
        expect(list.toString()).to.equal('3');
    });
    it('test swap with empty data', () => {
        let list = createList();
        list.swap();
        expect(list.toString()).to.equal('');
    });

    let list;
    beforeEach(() => {
        list = createList();
        list.add(1);
        list.add('two');
        list.add(3);
    });

    describe('Test initial state', () => {
        it('add exists', () => {
            expect(list.hasOwnProperty('add')).to.equal(true);
        });
        it('add is function', () => {
            expect(typeof list.add === 'function').to.equal(true);
        });
        it('shiftLeft exists', () => {
            expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
        });
        it('shiftLeft is function', () => {
            expect(typeof list.shiftLeft === 'function').to.equal(true);
        });
        it('shiftRight exists', () => {
            expect(list.hasOwnProperty('shiftRight')).to.equal(true);
        });
        it('shiftRight is function', () => {
            expect(typeof list.shiftRight === 'function').to.equal(true);
        });
        it('swap exists', () => {
            expect(list.hasOwnProperty('swap')).to.equal(true);
        });
        it('swap is function', () => {
            expect(typeof list.swap === 'function').to.equal(true);
        });
        it('toString exists', () => {
            expect(list.hasOwnProperty('toString')).to.equal(true);
        });
        it('toString is function', () => {
            expect(typeof list.toString === 'function').to.equal(true);
        });
    });

    describe('Validation tests', () => {
        it('test swap with no-number first index', () => {
            expect(list.swap('Pesho', 2)).to.equal(false, 'List did not swap correctly');
        });
        it('test swap with negative first index', () => {
            expect(list.swap(-1, 2)).to.equal(false, 'List did not swap correctly');
        });
        it('test swap with first index greater than list length', () => {
            expect(list.swap(1000, 2)).to.equal(false, 'List did not swap correctly');
        });
        it('test swap with first index equal to list length', () => {
            expect(list.swap(3, 3)).to.equal(false, 'List did not swap correctly');
        });
        it('test swap with equal indices', () => {
            expect(list.swap(1, 1)).to.equal(false, 'List did not swap correctly');
        });

        it('test swap with no-number second index', () => {
            expect(list.swap(0, 'Pesho')).to.equal(false, 'List did not swap correctly');
        });
        it('test swap with negative second index', () => {
            expect(list.swap(0, -1)).to.equal(false, 'List did not swap correctly');
        });
        it('test swap with second index === 0', () => {
            expect(list.swap(0, 0)).to.equal(false, 'List did not swap correctly');
        });
        it('test swap with second index greater than list length', () => {
            expect(list.swap(0, 10000)).to.equal(false, 'List did not swap correctly');
        });
        it('test swap with second index equal to list length', () => {
            expect(list.swap(0, 3)).to.equal(false, 'List did not swap correctly');
        });
        it('sero one modify', () => {
            list.swap(1, 0);
            expect(list.toString()).to.equal('two, 1, 3', 'List did not swap correctly');
        });
    });

    describe('Functional tests', () => {
        it('test add', () => {
            expect(list.toString()).to.equal('1, two, 3', 'List did not add correctly');
        });
        it('test shiftLeft once', () => {
            list.shiftLeft();
            expect(list.toString()).to.equal('two, 3, 1', 'List did not shiftLeft correctly');
        });
        it('test shiftLeft many times', () => {
            list.shiftLeft();
            list.shiftLeft();
            list.shiftLeft();
            expect(list.toString()).to.equal('1, two, 3', 'List did not shiftLeft correctly');
        });
        it('test shiftRight once', () => {
            list.add(['four']);
            list.shiftRight();
            expect(list.toString()).to.equal('four, 1, two, 3', 'List did not shiftRight correctly');
        });
        it('test shiftRight many times', () => {
            list.add(['four']);
            list.shiftRight();
            list.shiftRight();
            list.shiftRight();
            expect(list.toString()).to.equal('two, 3, four, 1', 'List did not shiftRight correctly');
        });
        it('test swapping [0] and [3]', () => {
            list.add(['four']);
            list.swap(0, 3);
            expect(list.toString()).to.equal('four, two, 3, 1', 'List did not swap correctly');
        });
        it('test swapping [1] and [1]', () => {
            list.add(['four']);
            list.swap(1, 1);
            expect(list.toString()).to.equal('1, two, 3, four', 'List did not swap correctly');
        });
        it('test swapping with two fraction indices...', () => {
            list.add(['four']);
            expect(list.swap(1.5, 2.53)).to.equal(false, 'List did not swap correctly');
        });
        it('test toString', () => {
            expect(list.toString()).to.equal('1, two, 3', 'List did not toString correctly');
        });
    });
});

