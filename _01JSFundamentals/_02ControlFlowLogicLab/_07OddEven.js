'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/288#6

function checkNumber(n) {
    if (Number(n) !== Number.parseInt(n)) {
        console.log('invalid');
    } else if (n % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

// checkNumber(1.5);

