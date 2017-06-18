// https://judge.softuni.bg/Contests/Compete/Index/633#0
'use strict';

function solve(size, increment) {
    size = Number(size);
    increment = Number(increment);

    let base = size;
    let stonesArr = [];
    let marblesArr = [];
    let lapisArr = [];
    let goldArr = [];
    let steps = 0;

    for (let i = 0; i < 7; i++) {
        let stones = 0;
        let marbles = 0;
        let lapis = 0;
        let gold = 0;
        steps++;

        if (size - 2 <= 0) {
            // gold = Math.pow(size - 2, 2);
            gold = (base % 2 === 0) ? 2 : 1;
            // console.log(`gold: ${gold} / size: ${size}`);
            goldArr.push(gold);
            break;
        } else {

            stones = Math.pow(size - 2, 2);
            if (i && ((i + 1) % 5 === 0)) {
                lapis = Math.pow(size, 2) - stones;
                marbles = 0;
            } else {
                marbles = Math.pow(size, 2) - stones;
                lapis = 0;
            }

            // console.log(`Stone required: ${stones}`);
            // console.log(`Marble required: ${marbles}`);
            // console.log(`Lapis Lazuli required: ${lapis}`);
            //
            // console.log();

            size -= 2;
        }

        stonesArr.push(stones);
        marblesArr.push(marbles);
        lapisArr.push(lapis);
        goldArr.push(gold);
    }

    let totalStone = stonesArr.map(a => a * increment).reduce((a, b) => a + b, 0);
    let totalMarble = marblesArr.map(a => a * increment).reduce((a, b) => a + b, 0);
    let totalLapisLazuli = lapisArr.map(a => a * increment).reduce((a, b) => a + b, 0);
    let totalGold = goldArr.map(a => a * increment).reduce((a, b) => a + b, 0);
    let totalHeight = steps * increment;

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}

// solve(11, 1);
//solve(11, 0.75);
solve(12, 1);