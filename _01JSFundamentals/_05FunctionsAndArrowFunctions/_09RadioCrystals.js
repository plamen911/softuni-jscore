"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/310#8

function solve(numArr) {
    let targetSize = Number(numArr[0]);
    let opStr = 'Cut';

    for (let i = 1; i < numArr.length; i++) {
        let microns = Number(numArr[i]);
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns, 'Cut', cut);
        microns = executeOperation(microns, 'Lap', lap);
        microns = executeOperation(microns, 'Grind', grind);
        microns = executeOperation(microns, 'Etch', etch);

        if (microns + 1 == targetSize) {
            microns = xRay(microns);
        }

        console.log(`Finished crystal ${microns} microns`);
    }

    function cut(crystal) {
        crystal /= 4;
        return crystal;
    }

    function lap(crystal) {
        crystal -= crystal * 0.2;
        return crystal;
    }

    function grind(crystal) {
        crystal -= 20;
        return crystal;
    }

    function etch(crystal) {
        crystal -= 2;
        return crystal;
    }

    function xRay(crystal) {
        console.log(`X-ray x1`);
        crystal++;
        return crystal;
    }
    
    function transportAndWash(crystal) {
        console.log(`Transporting and washing`);
        crystal = Math.floor(crystal);
        return crystal;
    }
    
    function executeOperation(microns, opStr, op) {
        let newSize = op(microns);
        let counter = 0;
        while (newSize >= targetSize || Math.floor(targetSize - newSize) === 1) {
            microns = newSize;
            newSize = op(microns);
            counter++;
        }

        if (counter > 0) {
            console.log(`${opStr} x${counter}`);
            microns = transportAndWash(microns);
        }

        return microns;
    }
}

// solve([1375, 50000]);
solve([1000, 4000, 8100]);