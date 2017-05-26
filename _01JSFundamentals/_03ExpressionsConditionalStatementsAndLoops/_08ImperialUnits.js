'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#8

function solve(unit) {
    let feet = Math.floor(Number(unit) / 12);
    let reminder = Number(unit) - feet * 12;
    return `${feet}'-${reminder}"`
}

// console.log(solve(36));
