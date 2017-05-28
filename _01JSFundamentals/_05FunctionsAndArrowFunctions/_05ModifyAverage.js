"use strict";
// https://judge.softuni.bg/Contests/Practice/Index/310#4

function solve(number) {
    if (getAverageOfAllDigits(number) > 5) {
        console.log(number);
        return;
    }
    while (getAverageOfAllDigits(number) <= 5) {
        number += '9';
    }

    console.log(number);

    function getAverageOfAllDigits(num) {
        let arr = num.toString().split('');
        let sum = arr.map(Number).reduce((a, b) => a + b, 0);
        return sum / arr.length;
    }
}

solve(101);