'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#0

function solve(arr) {
    let obj = [];

    arr.filter((a, i) => i !== 0)
        .map(a =>
            a.split('|')
            .map(b => b.trim())
            .filter(c => c !== '')
        )
        .forEach(a => obj.push({'Town': a[0], 'Latitude': Number(a[1]), 'Longitude': Number(a[2])}));

    console.log(JSON.stringify(obj));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

