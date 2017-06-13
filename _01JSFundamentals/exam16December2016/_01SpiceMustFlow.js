"use strict";

function solve(startingValue) {
    startingValue = Number(startingValue);
    let theSpice = startingValue;
    let theYield = startingValue;
    let total = 0;
    let days = 0;

    while (theYield >= 100) {
        theSpice = theYield - 26;
        theYield -= 10;

        total += theSpice;
        days++;
    }

    total -= 26;
    if (total < 0) {
        total = 0;
    }

    console.log(days);
    console.log(total);
}

// solve(111);
solve(450);