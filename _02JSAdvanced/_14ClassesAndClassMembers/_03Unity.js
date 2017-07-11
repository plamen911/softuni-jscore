// https://judge.softuni.bg/Contests/Compete/Index/340#2
'use strict';

class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (typeof otherRat === 'object' && otherRat.constructor.name === 'Rat') {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = [];
        result.push(this.name);
        if (this.unitedRats.length) {
            for (let i = 0; i < this.unitedRats.length; i++) {
                result.push(`##${this.unitedRats[i].name}`);
            }
        }

        return result.join('\n');
    }
}

let test = new Rat('Pesho');
console.log(test.toString());
console.log(test.getRats());
test.unite(new Rat('Gosho'));
test.unite(new Rat('Sasho'));
console.log(test.getRats());
console.log(test.toString());