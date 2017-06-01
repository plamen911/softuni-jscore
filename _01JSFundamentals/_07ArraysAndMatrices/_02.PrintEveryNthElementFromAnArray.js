"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/313#1

function solve(input) {
    let step = input.pop();
    input.filter((e, i) => i % step === 0).forEach(e => console.log(e));
}

solve([5, 20, 31, 4, 20, 2]);