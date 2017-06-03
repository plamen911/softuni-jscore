"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#5

function solve(input) {
    let usernames = [];
    input.forEach(e => {
        let arr = e.split('@');
        usernames.push(arr[0] + '.' + arr[1].split('.').map(a => a.charAt(0)).join(''));
    });
    console.log(usernames.join(', '));
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);

