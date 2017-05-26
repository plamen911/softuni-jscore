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

    switch (op) {
        case '*':
            console.log(multiply(a, b));
            break;
        case '/':
            console.log(divide(a, b));
            break;
        case '+':
            console.log(sum(a, b));
            break;
        case '-':
            console.log(subtract(a, b));
            break;
    }
}

// solve(2, 4, '+');
