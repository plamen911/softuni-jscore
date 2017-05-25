'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#4

function solve(grads) {
    if (grads > 360) {
        grads = grads % 360;
    } else if (grads < 0) {
        //grads = Math.abs(grads) % 360;
        grads = 360 - grads;
    }
    let rads = (360 / 400) * grads;

    return rads;
}

console.log(solve(400));