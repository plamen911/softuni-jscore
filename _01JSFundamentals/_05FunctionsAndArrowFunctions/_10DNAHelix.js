"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/310#9

function solve(num) {
    let sequence = 'ATCGTTAGGG'.split('');

    let funcs = {
        line0: (a, b) => console.log(`**${a}${b}**`),
        line1: (a, b) => console.log(`*${a}--${b}*`),
        line2: (a, b) => console.log(`${a}----${b}`),
        line3: (a, b) => console.log(`*${a}--${b}*`)
    };

    let j = 0;
    let k = 0;
    for (let i = 0; i < num; i++) {
        let a = sequence[j];
        let b = sequence[j + 1];
        funcs['line' + k](a, b);
        k++;
        j += 2;
        if (j > sequence.length - 1) {
            j = 0;
        }
        if (k == 4) {
            k = 0;
        }
    }
}

solve(10);