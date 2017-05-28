"use strict";
// https://judge.softuni.bg/Contests/Practice/Index/310#1

function solve([speed, area]) {
    let speedLimit = getSpeedLimit(area);
    console.log(getSpeedWarning(speed - speedLimit));

    function getSpeedLimit(area) {
        let speedLimits = {
            'motorway': 130,
            'interstate': 90,
            'city': 50,
            'residential': 20,
        };

        return speedLimits[area];
    }

    function getSpeedWarning(overSpeed) {
        if (overSpeed > 0 && overSpeed <= 20) return 'speeding';
        if (overSpeed > 20 && overSpeed <= 40) return 'excessive speeding';
        if (overSpeed > 40) return 'reckless driving';
        return '';
    }
}

// solve([40, 'city']);
// solve([120, 'interstate']);
// solve([21, 'residential']);