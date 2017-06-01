"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/313#2

function solve(commands) {
    let arr = [1];
    for (let i = 1; i <= commands.length; i++) {
        switch (commands[i]) {
            case 'add':
                arr.push((i + 1));
                break;

            case 'remove':
                if (arr.length > 0) {
                    arr.pop();
                }
                break;
        }
    }

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        arr.forEach(e => console.log(e));
    }
}

solve(['add', 'add', 'add', 'add']);