"use strict";
// https://judge.softuni.bg/Contests/Practice/Index/310#5

function solve(points) {
    let [x1, y1, x2, y2] = points.map(Number);

    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);

    function isValid(x1, y1, x2, y2) {
        let x = x1 - x2;
        let y = y1 - y2;
        let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        let valid = Math.ceil(distance) === Number.parseInt(distance.toFixed(0));
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${valid ? 'valid' : 'invalid'}`);
    }
}

// solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);