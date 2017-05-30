"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#5

function solve(arr) {
    let result = arr.filter((a, i) => {
            return i % 2 !== 0;
        })
        .map(a => {
            return a * 2;
        })
        .reverse()
        .join(' ');

    console.log(result);
}

// solve([10, 15, 20, 25]);