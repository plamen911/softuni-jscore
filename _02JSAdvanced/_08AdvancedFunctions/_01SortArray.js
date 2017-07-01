// https://judge.softuni.bg/Contests/Compete/Index/299#0
'use strict';

function solve(inputArray, sortMethod) {
    let sortingStrategies = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };

    return inputArray.map(Number).sort(sortingStrategies[sortMethod]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));