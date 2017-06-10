"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/316#6

function solve(input) {
    let usernames = new Set();
    input.forEach(a => usernames.add(a));
    Array.from(usernames).sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }).forEach(a => console.log(a));
}

solve([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);