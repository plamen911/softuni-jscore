// https://judge.softuni.bg/Contests/Compete/Index/301#2
'use strict';

function solve(car) {
    function pickEngine(power) {
        let engines = [
            {power: 90, volume: 1800},
            {power: 120, volume: 2400},
            {power: 200, volume: 3500}
        ];

        for (let i = 0; i < engines.length; i++) {
            if (Number(power) <= engines[i].power) {
                return engines[i];
            }
        }

        return engines[engines.length - 1];
    }
    
    function pickCarriage(carriage, color) {
        return {
            type: carriage,
            color: color
        }
    }
    
    function pickWheels(wheelsize) {
        for (let i = wheelsize; i >= 0; i--) {
            if (i % 2 !== 0) {
                return [i, i, i, i];
            }
        }
        return [wheelsize, wheelsize, wheelsize, wheelsize];
    }

    return {
        model: car.model,
        engine: pickEngine(car.power),
        carriage: pickCarriage(car.carriage, car.color),
        wheels: pickWheels(car.wheelsize)
    };
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

let input = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};



