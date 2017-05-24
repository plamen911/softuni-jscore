'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/288#4

function getTriangleArea(a, b, c) {
    // https://en.wikipedia.org/wiki/Heron's_formula
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

// console.log(getTriangleArea(2, 3.5, 4));