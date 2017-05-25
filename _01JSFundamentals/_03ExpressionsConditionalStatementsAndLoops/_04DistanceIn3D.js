'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#3
// https://stackoverflow.com/questions/22845995/three-js-how-can-i-calculate-the-distance-between-two-3d-positions

function solve(numbers) {
    let v1 = {
        x: numbers[0],
        y: numbers[1],
        z: numbers[2]
    };

    let v2 = {
        x: numbers[3],
        y: numbers[4],
        z: numbers[5]
    };

    let dx = v1.x - v2.x;
    let dy = v1.y - v2.y;
    let dz = v1.z - v2.z;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

// solve([3.5, 0, 1, 0, 2, -1]);    // >> 4.5
// console.log(solve([1, 1, 0, 5, 4, 0]));  // >> 5