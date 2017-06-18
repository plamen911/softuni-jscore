// https://judge.softuni.bg/Contests/Compete/Index/633#0
'use strict';

function solve(base, increment) {
    base = Number(base);
    increment = Number(increment);
    let totalStone = 0;
    let totalMarbles = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let totalSteps = 0;
    let hitPoint = (base % 2 === 0) ? 2 : 1;

    let i = 0;
    while (true) {
        totalSteps++;

        if (base <= hitPoint) {
            totalGold += Math.pow(base, 2) * increment;
            break;
        }

        let stone = Math.pow(base - 2, 2) * increment;
        let marble = 0;
        let lapis = 0;

        if ((i + 1) % 5 === 0) {
            lapis = (base * 4 - 4) * increment;
        } else {
            marble = (base * 4 - 4) * increment;
        }

        totalStone += stone;
        totalMarbles += marble;
        totalLapis += lapis;

        base -= 2;
        i++;
    }

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalSteps * increment)}`);
}

// solve(11, 1);
// solve(11, 0.75);
// solve(12, 1);
solve(23, 0.5);