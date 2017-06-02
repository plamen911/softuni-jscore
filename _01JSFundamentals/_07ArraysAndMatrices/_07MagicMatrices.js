"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/313#6

function solve(matrix) {
    function sumOfCells(cells) {
        return cells.map(Number).reduce((a, b) => a + b, 0);
    }

    function isRowSumMagical(matrix) {
        let sum;
        for (let i = 0; i < matrix.length; i++) {
            if (i === 0) {
                sum = sumOfCells(matrix[i]);
            }
            if (sum !== sumOfCells(matrix[i])) {
                return false;
            }
        }
        return true;
    }

    function isColSumMagical(matrix) {
        let sum;
        for (let i = 0; i < matrix.length; i++) {
            let tmp = [];
            for (let j = 0; j < matrix[i].length; j++) {
                tmp.push(matrix[j][i]);
            }
            if (i === 0) {
                sum = sumOfCells(tmp);
            }
            if (sum !== sumOfCells(tmp)) {
                return false;
            }
        }
        return true;
    }
    return isRowSumMagical(matrix) && isColSumMagical(matrix);
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));