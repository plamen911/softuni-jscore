"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/311#4

function solve(n, k) {
    let arr = [1];
    for (let i = 0; i < n - 1; i++) {
        let elem = 0;
        for (let j = arr.length - 1; j >= arr.length - k; j--) {
            if (j < 0) break;
            elem += arr[j];
        }
        arr.push(elem);
    }
    console.log(arr.join(' '));
}

// solve(6, 3);
// solve(8, 2);