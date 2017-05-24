'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/288#2

function isLeapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 'yes' : 'no';
}

// console.log(isLeapYear(2000));