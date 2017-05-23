'use strict';

// https://judge.softuni.bg/Contests/Compete/Index/287#1
function sumVat(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }

    let VAT = sum * 0.20;
    let total = sum * 1.20;
    console.log("sum = " + sum);
    console.log("VAT = " + VAT);
    console.log("total = " + total);
}

// sumVat([1.20, 2.60, 3.50]);

