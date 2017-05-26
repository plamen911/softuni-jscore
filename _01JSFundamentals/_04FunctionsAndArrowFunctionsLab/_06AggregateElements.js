'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/306#5

function solve(input) {
    let sum = (input) => {
        let s = [0];
        input.forEach(a => {
            s[0] += a;
        });
        return s[0];
    };

    let sumInverse = (input) => {
        let s = [0];
        input.forEach(a => {
            s[0] += 1 / a;
        });
        return s[0];
    };

    let concat = (input) => {
        return input.join('');
    };

    console.log(sum(input));
    console.log(sumInverse(input));
    console.log(concat(input));
}

solve([1, 2, 3]);
