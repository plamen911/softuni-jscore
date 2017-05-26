'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#14

// print the last day of previous month
function solve([day, month, year]) {
    let dd = new Date(year, month - 1, 0);
    return dd.getDate();
}

// console.log(solve([17, 3, 2002]));
// console.log(solve([13, 12, 2004]));
