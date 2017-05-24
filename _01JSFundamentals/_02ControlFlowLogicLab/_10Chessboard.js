'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/288#9

function chessboard(n) {
    console.log('<div class="chessboard">');

    let k = 0;
    let color = 'white';
    for (let i = 0; i < n; i++) {
        console.log('  <div>');
        for (let j = 0; j < n; j++) {
            color = (color === 'white') ? 'black' : 'white';
            console.log('    <span class="' + color + '"></span>');
            k++;
        }
        console.log('  </div>');

        if (n % 2 === 0) {
            color = (color === 'white') ? 'black' : 'white';
        }
    }

    console.log('</div>');
}

// chessboard(2);