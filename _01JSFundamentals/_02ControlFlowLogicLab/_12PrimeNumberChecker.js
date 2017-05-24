'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/288#11

function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

// console.log(isPrimeNumber(7));