'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#13

function solve(properties) {
    let obj = {};
    for (let i = 0; i < properties.length; i += 2) {
        obj[properties[i]] = properties[i + 1];
    }
    return obj;
}

// console.log(solve(['ssid', '90127461', 'status', 'admin', 'expires', '600']));
