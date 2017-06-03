"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#1

function solve(input) {
    console.log(input.reverse().map(a => a.split('').reverse().join('')).join(''));
}

solve(['I', 'am', 'student']);

