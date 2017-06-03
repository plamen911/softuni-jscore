"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/313#9

function solve(arr) {
    let [width, height, x, y] = arr.map(Number);

    let matrix = [];
    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            if (i === x && j === y) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        matrix.push(row);
    }

    //todo: ...


    matrix.forEach(e => console.log(e.join(' ')));
}

solve([4, 4, 0, 0]);