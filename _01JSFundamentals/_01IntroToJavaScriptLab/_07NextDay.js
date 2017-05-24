'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/287#6

function getNextDay(year, month, day) {
    let dd = new Date(year, month - 1, day);
    dd.setTime(dd.getTime() + 1 * 60 * 60 * 24 * 1000);
    return dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-' + dd.getDate();
}

// console.log(getNextDay(2016, 9, 30));