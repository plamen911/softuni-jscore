"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#11

function solve(str) {
    const regex = /\s+|,|\(|\)|;|\./gi;

    str.split(regex).filter(a => a.trim()).forEach(a => console.log(a));
}

solve('let sum = 4 * 4,b = "wow";');

