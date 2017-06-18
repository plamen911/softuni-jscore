// https://judge.softuni.bg/Contests/Practice/Index/192#2
'use strict';

function solve(input) {
    input = input.filter(a => a.toString().trim() !== '');

    for (let i = 0; i < input.length; i++) {
        let [amount, attacker] = input[i].toString().split(' ');
        amount = Number(amount);
        let damage = amount * 60;



    }

}

solve([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
]);