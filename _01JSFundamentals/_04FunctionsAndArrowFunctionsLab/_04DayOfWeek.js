'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/306#3

function solve(dayOfWeek) {
    let daysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    let num = daysOfWeek.indexOf(dayOfWeek);

    return (num > -1) ? num + 1 : 'error';
}

console.log(solve('Monday'));;