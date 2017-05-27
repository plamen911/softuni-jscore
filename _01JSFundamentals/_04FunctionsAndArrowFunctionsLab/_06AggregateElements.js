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

function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

// solve([1, 2, 3]);
aggregateElements([1, 2, 3]);