'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/314#5

function solve(arr) {
    const regex = /(\d+)/g;
    let m;

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];

        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            result.push(m[1]);
        }
    }

    console.log(result.join(' '));
}

solve([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]);