'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/314#6

function solve(str) {
    const regex = /\b_([A-Za-z0-9]*)\b/g;
    let m;

    let result = [];

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        result.push(m[1]);
    }

    console.log(result.join(','));
}

solve('The _id and _age variables are both integers.');