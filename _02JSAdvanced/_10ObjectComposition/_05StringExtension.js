// https://judge.softuni.bg/Contests/Compete/Index/301#4
'use strict';

String.prototype.ensureStart = function (str) {
    let newString = this;
    if (newString.indexOf(str) !== 0) {
        newString = str + newString;
    }
    return newString;
};

String.prototype.ensureEnd = function (str) {
    let newString = this;
    if (newString.slice(-str.length) !== str) {
        newString = newString + str;
    }
    return newString;
};

String.prototype.isEmpty = function () {
    return this.length === 0;
};

String.prototype.truncate = function (n) {
    let newString = this;
    if (n < 4) {
        return '.'.repeat(n);
    }
    if (newString.length <= n) {
        return newString;
    }

    let words = newString.split(' ').filter(a => a !== '');
    let tmpWords = [];
    let lastString = '';
    for (let i = 0; i < words.length; i++) {
        tmpWords.push(words[i]);
        let str = tmpWords.join(' ') + '...';
        if (str.length > n && lastString.length) {
            return lastString;
        }
        lastString = str;
    }

    return newString.slice(-(n - 3)) + '...';
};

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
// str = String.format('The {0} {1} fox', 'quick', 'brown');
// str = String.format('jumps {0} {1}', 'dog');

//let str = 'hello...';