"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#0

function solve(numbers) {
    numbers = numbers.map(Number);
    // let sum = numbers[0] + numbers[numbers.length - 1];
    // console.log(sum);

    let sum = 0;
    if (numbers.length == 1) {
        sum = numbers[0] * 2;
    } else {
        let first = numbers.shift();
        let last = numbers.pop();
        sum = first + last;
    }

    console.log(sum);
}

solve(['20', '30', '40']);