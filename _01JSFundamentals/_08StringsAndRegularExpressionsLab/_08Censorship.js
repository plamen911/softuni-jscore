"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#7

function solve(text, search) {
    let re = new RegExp(search.join('|'), 'g');
    let str = text.replace(re, matched => '-'.repeat(matched.length));
    console.log(str);
}

solve('roses are red, violets are blue', [', violets are', 'red']);

