"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#3

function solve(arr) {
    arr = arr.map(Number);
    let k = arr[0];
    console.log(arr.slice(1, k + 1).join(' '));
    console.log(arr.slice(arr.length - k).join(' '));
}

// solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);