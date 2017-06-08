'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#4

function solve(input) {
    let words = input.join('\n').split(/[^A-Za-z0-9_]/g).filter(a => a !== '');
    let obj = {};
    for (let word of words) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }
        obj[word]++;
    }

    console.log(JSON.stringify(obj));
}

solve(['Far too slow, you\'re far too slow.']);

