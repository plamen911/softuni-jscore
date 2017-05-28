"use strict";

function solve(startingYield) {
    startingYield = Number(startingYield);

    let total = 0;
    let days = 0;

    while(startingYield >= 100) {
        days++;
        total += startingYield;
        startingYield -= 10;
        total -= 26;
    }
    total -= 26;
    if (total < 0) total = 0;

    console.log(days);
    console.log(total);
}

solve(111);