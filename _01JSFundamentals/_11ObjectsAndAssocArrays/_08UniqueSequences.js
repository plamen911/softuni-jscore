"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/316#7

function solve(dataRows) {
    let uniqueSequences = [];
    for (let dataRow of dataRows) {
        let numArr = JSON.parse(dataRow)
            .map(Number)
            .sort((a, b) => b - a);
        let curSum = numArr.reduce((a, b) => a + b, 0);
        if (!uniqueSequences.find(arr => {
                return arr.reduce((a, b) => a + b, 0) === curSum;
            })
        ) {
            uniqueSequences.push(numArr);
        }
    }

    uniqueSequences
        .sort((a, b) => a.length > b.length)
        .forEach(a => {
            console.log('[' + a.join(', ') + ']');
        })
}

solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);