"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#4

function solve(arr) {
    let cities = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let [a, b] = arr[i].split('|').map(a => a.trim()).filter(a => a !== '')
        cities.push(a);
        sum += parseInt(b);
    }
    console.log(cities.join(', '));
    console.log(sum);
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);

