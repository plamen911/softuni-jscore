// https://judge.softuni.bg/Contests/Compete/Index/633#1
'use strict';

function OLD_solve(params) {
    let numbers = [];
    let operands = [];
    for (let i = 0; i < params.length; i++) {
        if (['+', '-', '*', '/'].indexOf(params[i]) > -1) {
            operands.push(params[i]);
        } else {
            numbers.push(Number(params[i]));
        }
    }

    console.log(operands);
    console.log(numbers);

    let error = '';

    for (let i = 0; i < operands.length; i++) {
        if (numbers.length < 2) {
            error = 'Error: not enough operands!';
            break;
        }
        let op1 = numbers[numbers.length - 1];
        let op2 = numbers[numbers.length - 2];
        let result = 0;
        switch (operands[i]) {
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
    }

    if (error !== '') {
        console.log(error);
    } else if (numbers.length === 1) {
        console.log(numbers[0]);
    } else if(numbers.length === 0) {
        console.log(`Error: too many operands!`);
    }
    console.log();
    console.log(numbers);
}

function OLD_OLD_solve(params) {
    let numbers = [];
    let operands = [];
    for (let i = 0; i < params.length; i++) {
        if (['+', '-', '*', '/'].indexOf(params[i]) > -1) {
            operands.push(params[i]);
        } else {
            numbers.push(Number(params[i]));
        }
    }

    let result = 0;
    let op1 = numbers[0];
    let op2 = numbers[1];
    let j = 1;
    for (let i = 0; i < operands.length; i++) {
        switch (operands[i]) {
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

        op1 = result;
        op2 = numbers[++j];
    }

    console.log(result);
}

function solve(params) {
    let numbers = [];
    let NOT_ENOUGH_OP_ERROR = false;
    for (let i = 0; i < params.length; i++) {

        //console.log(numbers);

        if (['+', '-', '*', '/'].indexOf(params[i]) > -1) {
            //console.log('----:::' + params[i] + ' / ' + numbers.length);
            if (numbers.length < 2) {
                NOT_ENOUGH_OP_ERROR = true;
                //console.log(`Error: not enough operands!`);
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

    //console.log(numbers);

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