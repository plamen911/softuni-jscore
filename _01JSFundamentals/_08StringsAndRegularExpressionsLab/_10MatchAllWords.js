"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#9

function solve(str) {
    const regex = /\w+/g;
    let m;
    let words = [];

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        words.push(m[0]);
    }

    console.log(words.join('|'));
}

solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text');

