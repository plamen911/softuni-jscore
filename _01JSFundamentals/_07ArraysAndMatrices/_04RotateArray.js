"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/313#3

function solve(arr) {
    let rounds = arr.pop();

    for (let i = 0; i < rounds % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve([1, 2, 3, 4, 2]);