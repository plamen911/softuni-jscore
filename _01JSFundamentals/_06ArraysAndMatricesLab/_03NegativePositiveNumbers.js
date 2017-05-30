"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#2

function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else if (arr[i] >= 0) {
            result.push(arr[i]);
        }
    }

    result.forEach(a => console.log(a));
}

// solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);