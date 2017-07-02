// https://judge.softuni.bg/Contests/Compete/Index/299#2
'use strict';

let solve = (function () {
    let sum = 0;

    return function add(num) {
        sum += num;
        add.toString = function () {
            return sum;
        }

        return add;
    };
})();

// console.log(solve(1));
console.log(solve(1)(6)(-3).toString());