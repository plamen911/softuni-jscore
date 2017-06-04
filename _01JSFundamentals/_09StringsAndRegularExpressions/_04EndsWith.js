'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/314#3

function solve(string, search) {
    RegExp.escape = (s) =>  {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    const regex = new RegExp(RegExp.escape(search) + '$');

    return regex.test(string);
}

console.log(solve('This sentence ends with fun?', 'fun?'));