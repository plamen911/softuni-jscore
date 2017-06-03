"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#3

function solve(str) {
    const regex = /\((.*?)\)/g;
    let m;
    let results = [];

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        results.push(m[1]);
    }

    console.log(results.join(', '));
}

solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');

