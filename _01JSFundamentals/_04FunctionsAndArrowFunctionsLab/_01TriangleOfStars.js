'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/306#0

function solve(n) {
    if (n == 1) return '*';

    // upper part
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
    // bottom part
    for (let i = n - 1; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}

// solve(5);