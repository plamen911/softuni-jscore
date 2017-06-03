"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#10

function solve(str) {
    const regex = /^[A-Z0-9]+@[A-z]+\.[A-Z]{2}/gi;
    let m;

    return ((m = regex.exec(str)) !== null) ? 'Valid' : 'Invalid';
}

console.log(solve('valid@email.bg'));;

