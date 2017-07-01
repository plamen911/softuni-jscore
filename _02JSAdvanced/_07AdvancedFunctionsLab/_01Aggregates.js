// https://judge.softuni.bg/Contests/Compete/Index/330#0
'use strict';

function solve(input) {
    input = input.map(Number);

    function reduser(arr, func) {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = func(result, arr[i]);
        }
        return result;
    }

    let sum = reduser(input, (a, b) => a + b);
    let max = reduser(input, (a, b) => Math.max(a, b));
    let min = reduser(input, (a, b) => Math.min(a, b));
    let product = reduser(input, (a, b) => a * b);
    let joined = reduser(input, (a, b) => '' + a + b);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${joined}`);
}

solve([2, 3, 10, 5]);