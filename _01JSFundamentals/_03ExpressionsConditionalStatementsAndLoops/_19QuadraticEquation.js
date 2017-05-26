'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#19

function solve(a, b, c) {
    [a, b, c] = [a, b, c].map(Number);

    let d = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(d)) / (2 * a);

    if (d > 0 && x1 < x2) {
        console.log(x1 + "\n" + x2);
    } else if (d > 0 && x2 < x1) {
        console.log(x2 + "\n" + x1);
    } else if (d == 0) {
        console.log(x1);
    } else {
        console.log('No');
    }
}

// solve(6, 11, -35);
// solve(1, -12, 36);
// solve(5, 2, 1);