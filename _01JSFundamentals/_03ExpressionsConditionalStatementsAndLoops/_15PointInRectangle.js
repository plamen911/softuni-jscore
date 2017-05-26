'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#16

function solve(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input;

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

solve([8, -1, 2, 12, -3, 3]);
