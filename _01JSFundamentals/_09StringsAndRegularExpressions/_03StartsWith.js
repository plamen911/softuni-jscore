'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/314#2

function solve(string, search) {
    const regex = new RegExp('^' + search);
    return regex.test(string);
}

console.log(solve('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'));