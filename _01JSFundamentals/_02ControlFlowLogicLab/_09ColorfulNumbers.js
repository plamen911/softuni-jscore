'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/288#8

function printColorfulNumbers(n) {
    console.log('<ul>');
    for (let i = 1; i <= n; i++) {
        let color = (i % 2 === 0) ? 'blue' : 'green';
        console.log('<li><span style=\'color:' + color + '\'>' + i + '</span></li>');
    }
    console.log('</ul>');
}

// printColorfulNumbers(10);