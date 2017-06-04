"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/314#0

function solve(string, delimiter) {
    string.toString().split(delimiter).forEach(a => console.log(a));
}

solve('One-Two-Three-Four-Five', '-');

