'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/314#4

function solve(string) {
    console.log(string.toString().split(' ').map(a => a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()).join(' '));
}

solve('Capitalize these words');