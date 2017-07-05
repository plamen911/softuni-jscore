// https://judge.softuni.bg/Contests/Compete/Index/334#1
'use strict';

function result() {
    let f0 = 0;
    let f1 = 1;

    return function () {
        let f2 = f0 + f1;
        f0 = f1;
        f1 = f2;

        return f0;
    };
}

let fibResult = result();
console.log(fibResult());
console.log(fibResult());
console.log(fibResult());
console.log(fibResult());
console.log(fibResult());

