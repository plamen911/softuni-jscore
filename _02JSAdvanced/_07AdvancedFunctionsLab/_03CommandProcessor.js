// https://judge.softuni.bg/Contests/Compete/Index/330#2
'use strict';

function solve(arr) {
    let p = (function () {
            let str = '';

            return function (commandArgs) {
                let tokens = commandArgs
                    .toString()
                    .split(' ')
                    .filter(a => a !== '');

                switch (tokens[0]) {
                    case 'append':
                        str += tokens[1];
                        break;
                    case 'removeStart':
                        str = str.slice(Number(tokens[1]));
                        break;
                    case 'removeEnd':
                        str = str.slice(0, str.length - Number(tokens[1]));
                        break;
                    case 'print':
                        console.log(str);
                        break;
                }
            }
        })();

    for (let i = 0; i < arr.length; i++) {
        p(arr[i]);
    }
}

solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);
