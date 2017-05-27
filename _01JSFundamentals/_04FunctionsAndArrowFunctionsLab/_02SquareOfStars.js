'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/306#1

function solve(n = 5) {
    if (n == 1) return '*';

    for (let i = 1; i <= n; i++) {
        console.log('* '.repeat(n));
    }
}

// solve(5);