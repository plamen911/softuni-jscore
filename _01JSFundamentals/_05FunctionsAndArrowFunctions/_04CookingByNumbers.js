"use strict";
// https://judge.softuni.bg/Contests/Practice/Index/310#3

function solve(input) {
    let number = input[0];
    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
        }
        console.log(number);
    }
}

function solve_v2(input) {
    let number = Number(input[0]);

    let funcs = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num - num * 0.2
    };

    input.slice(1).forEach(op => {
        number = funcs[op](number);
        console.log(number);
    });
}

function solve_v3(input) {
    let number = Number(input[0]);

    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => num + 1;
    let bake = (num) => num * 3;
    let fillet = (num) => num - num * 0.2;

    input.slice(1).forEach(op => {
        number = eval(op)(number);
        console.log(number);
    });
}

solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
console.log('---');
solve_v2([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
console.log('---');
solve_v3([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
