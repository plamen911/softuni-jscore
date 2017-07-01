// https://judge.softuni.bg/Contests/Compete/Index/299#1
'use strict';

function solve() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    let sortedTypes = [];
    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }

    sortedTypes
        .sort((a, b) => Number(b[1]) - Number(a[1]))
        .forEach(a => console.log(`${a[0]} = ${a[1]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });