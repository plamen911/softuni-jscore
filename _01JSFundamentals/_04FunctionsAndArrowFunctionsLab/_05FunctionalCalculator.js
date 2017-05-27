'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/306#4

function solve(a, b, op) {
    let multiply = (a, b) => {
        return a * b;
    };
    let divide = (a, b) => {
        return a / b;
    };
    let sum = (a, b) => {
        return a + b;
    };
    let subtract = (a, b) => {
        return a - b;
    };
    let calc = (a, b, cb) => {
        return cb(a, b);
    };

    switch (op) {
        case '*':
            console.log(calc(a, b, multiply));
            break;
        case '/':
            console.log(calc(a, b, divide));
            break;
        case '+':
            console.log(calc(a, b, sum));
            break;
        case '-':
            console.log(calc(a, b, subtract));
            break;
    }
}

solve(2, 4, '+');
