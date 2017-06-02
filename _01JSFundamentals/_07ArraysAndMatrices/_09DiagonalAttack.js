"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/313#8

function solve(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    let len = matrix.length;
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let diagonals = {};
    for (let i = 0; i < len; i++) {
        // if (typeof matrix[i][i] === 'undefined') {
        //     break;
        // }
        leftDiagonalSum += matrix[i][i];
        rightDiagonalSum += matrix[len - 1 - i][i];

        diagonals['' + i + ':' + i] = '' + i + ':' + i;
        diagonals['' + (len - 1 - i) + ':' + i] = '' + (len - 1 - i) + ':' + i;
    }

    if (leftDiagonalSum === rightDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (typeof diagonals['' + i + ':' + j] === 'undefined') {
                    matrix[i][j] = leftDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(e => console.log(e.join(' ')));
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);