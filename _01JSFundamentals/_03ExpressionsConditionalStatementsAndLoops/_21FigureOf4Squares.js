'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#21

function solve(n) {

    let getFigureLine = (n, ch1, ch2) => {
        let first = 0;
        let middle = n - 1;
        let last = n * 2 - 1;

        let line = '';
        for (let i = 0; i < last; i++) {
            if ([first, middle, last - 1].indexOf(i) > -1) {
                line += ch1;
            } else {
                line += ch2;
            }
        }

        return line;
    };

    let numLines = (n % 2 == 0) ? n - 1 : n;
    let middle = Math.floor(numLines / 2);

    let line = '';
    for (let i = 0; i < numLines; i++) {
        if ([0, middle, numLines - 1].indexOf(i) > -1) {
            line += getFigureLine(n, '+', '-');
        } else {
            line += getFigureLine(n, '|', ' ');
        }
        line += '\n';
    }

    console.log(line);
}

// solve(4);