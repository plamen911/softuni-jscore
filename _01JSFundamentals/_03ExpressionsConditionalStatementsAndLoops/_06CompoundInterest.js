'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/308#5

function solve([principal, interestRate, compoundingPeriod, timespan]) {
    [principal, interestRate, compoundingPeriod, timespan] = [principal, interestRate, compoundingPeriod, timespan].map(Number);

    let compoundingFrequency = 12 / compoundingPeriod;

    let compoundInterest = principal * Math.pow(1 + interestRate / (100 * compoundingFrequency), compoundingFrequency * timespan);

    return compoundInterest.toFixed(2);
}

// console.log(solve([1500, 4.3, 3, 6]));
