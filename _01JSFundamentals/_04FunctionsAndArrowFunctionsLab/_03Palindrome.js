'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/306#2

function solve(word) {
    return word === word.split('').reverse().join('');
}

// console.log(solve('racecar'));;