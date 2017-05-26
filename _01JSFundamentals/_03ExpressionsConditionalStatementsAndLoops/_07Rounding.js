'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#7

function solve([number, precision]) {
    [number, precision] = [number, precision].map(Number);
    if (precision > 15) {
        precision = 15;
    }

    return Number(number.toFixed(precision));
}

// console.log(solve([3.1415926535897932384626433832795, 2]));
// console.log(solve([10.5, 3]));
