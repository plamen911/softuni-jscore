'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#6

function solve(input) {
    let towns = new Map();
    for (let i = 0; i < input.length; i++) {
        let [town, population] = input[i].split(' <-> ');
        if (!towns.has(town)) {
            towns.set(town, 0);
        }
        towns.set(town, towns.get(town) + Number(population));
    }

    for (let line of towns) {
        console.log(line[0] + ' : ' + line[1]);
    }
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

