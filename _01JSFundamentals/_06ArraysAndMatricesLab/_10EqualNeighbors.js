"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#9

function solve(matrix) {
    let neighbors = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                neighbors++;
            }
            if (matrix[row][col] === matrix[row][col + 1]) {
                neighbors++;
            }
            if (row === matrix.length - 2 && matrix[row + 1][col] === matrix[row + 1][col + 1]) {
                neighbors++;
            }
        }
    }

    console.log(neighbors);
}

solve(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
);