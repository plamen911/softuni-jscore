'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/287#7

function getDistanceBetweenPoints(x1, y1, x2, y2) {
    let p1 = {x: x1, y: y1};
    let p2 = {x: x2, y: y2};
    let a = Math.abs(p1.x - p2.x);
    let b = Math.abs(p1.y - p2.y);

    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

// console.log(getDistanceBetweenPoints(2.34, 15.66, -13.55, -2.9985));