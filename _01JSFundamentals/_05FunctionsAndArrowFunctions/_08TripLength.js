"use strict";
// https://judge.softuni.bg/Contests/Practice/Index/310#7

function solve(points) {
    let [x1, y1, x2, y2, x3, y3] = points.map(Number);
    let p1 = { x: x1, y: y1 };
    let p2 = { x: x2, y: y2 };
    let p3 = { x: x3, y: y3 };

    let shortestDistance = Number.MAX_VALUE;
    let distance;
    let shortestVariant = '';

    distance = getDistance(p1, p2) + getDistance(p2, p3);
    if (shortestDistance > distance) {
        shortestDistance = distance;
        shortestVariant = '1->2->3: ' + shortestDistance;
    }
    distance = getDistance(p2, p1) + getDistance(p1, p3);
    if (shortestDistance > distance) {
        shortestDistance = distance;
        shortestVariant = '2->1->3: ' + shortestDistance;
    }
    distance = getDistance(p1, p3) + getDistance(p3, p2);
    if (shortestDistance > distance) {
        shortestDistance = distance;
        shortestVariant = '1->3->2: ' + shortestDistance;
    }

    console.log(shortestVariant);

    function getDistance(p1, p2) {
        let w = Math.abs(p1.x - p2.x);
        let h = Math.abs(p1.y - p2.y);
        return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
    }
}

// solve([0, 0, 2, 0, 4, 0]);
// solve([5, 1, 1, 1, 5, 4]);
// solve([-1, -2, 3.5, 0, 0, 2]);