"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#7

function solve(arr) {
    let biggest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > biggest) {
                biggest = arr[i][j];
            }
        }
    }
    console.log(biggest);
}

// solve([[20, 50, 10], [8, 33, 145]]);
solve([-1, 2]);
// solve([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]);