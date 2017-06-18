// https://judge.softuni.bg/Contests/Compete/Index/633#1
'use strict';

function solve(params) {
    let numbers = [];
    let NOT_ENOUGH_OP_ERROR = false;
    for (let i = 0; i < params.length; i++) {
        if (['+', '-', '*', '/'].indexOf(params[i]) > -1) {
            if (numbers.length < 2) {
                NOT_ENOUGH_OP_ERROR = true;
                break;
            }
            let op1 = numbers[numbers.length - 2];
            let op2 = numbers[numbers.length - 1];
            let result = 0;
            switch (params[i]) {
                case '+':
                    result = Number(op1) + Number(op2);
                    break;
                case '-':
                    result = op1 - op2;
                    break;
                case '*':
                    result = op1 * op2;
                    break;
                case '/':
                    result = op1 / op2;
                    break;
            }
            numbers.splice(numbers.length - 2, 2);
            numbers.push(result);
        } else {
            numbers.push(Number(params[i]));
        }
    }

    if (numbers.length > 1) {
        console.log(`Error: too many operands!`);
    } else if (NOT_ENOUGH_OP_ERROR) {
        console.log(`Error: not enough operands!`);
    } else {
        console.log(numbers[0]);
    }
}

solve(
    [-1,
        1,
        '+',
        101,
        '*',
        18,
        '+',
        3,
        '/']
);

// solve([
//     3,
//     4,
//     '+'
// ]);

// solve([
//     5,
//     3,
//     4,
//     '*',
//     '-']);

// solve([
//     -1,
//     1,
//     '+',
//     101,
//     '*',
//     18,
//     '+',
//     3,
//     '/'
// ]);
//
// solve([
//     31,
//     2,
//     '+',
//     11,
//     '/'
// ]);