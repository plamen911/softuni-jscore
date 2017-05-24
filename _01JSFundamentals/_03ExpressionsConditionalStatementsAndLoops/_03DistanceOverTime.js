'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#2

function solve(numbers) {
    let speedA = numbers[0];
    let speedB = numbers[1];
    let time = numbers[2] / (60 * 60);

    return Math.abs((speedA * time) - (speedB * time)) * 1000;
}

console.log(solve([0, 60, 3600]));