'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#15

// print the last day of previous month
function solve([num1, num2, num3]) {
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    return Math.max(num1, num2, num3);
}

console.log(solve([5, -2, 7]));
