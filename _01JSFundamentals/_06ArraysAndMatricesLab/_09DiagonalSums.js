"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#8

function solve(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let x1 = 0;
    let x2 = arr[0].length - 1;
    for (let y = 0; y < arr.length; y++) {
        sum1 += arr[x1++][y];
        sum2 += arr[x2--][y];
    }

    console.log(sum1 + ' ' + sum2);
}

// solve([[20, 40], [10, 60]]);