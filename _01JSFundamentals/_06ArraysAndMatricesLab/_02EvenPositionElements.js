"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#1

function solve(arr) {
    let output = arr.filter((a, i) => { return i % 2 === 0; }).join(' ');
    console.log(output);
}

// solve(['20', '30', '40']);
// solve(['5', '10']);