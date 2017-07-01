// https://judge.softuni.bg/Contests/Compete/Index/330#3
'use strict';

function solve(arr) {
    // return arr.map(Number).reduce((a, b) => Math.max(a, b));
    return Math.max.apply(null, arr.map(Number));
}

console.log(solve([-3, -1, -34, -8, -50]));
// console.log(solve([10, 20, 5]));