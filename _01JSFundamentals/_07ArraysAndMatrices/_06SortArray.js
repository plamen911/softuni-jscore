"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/313#5

function solve(arr) {
    arr
        .sort((a, b) => {
            if (a.length === b.length) {
                if (a.toLowerCase() < b.toLowerCase()) return -1;
                if (a.toLowerCase() > b.toLowerCase()) return 1;
                return 0;
            } else {
                return a.length - b.length;
            }
        })
        .forEach(a => console.log(a));
}

solve(['alpha', 'beta', 'gamma']);