"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#5

function solve(arr) {
    let products = arr.filter((a, i) => i % 2 === 0).join(', ');
    let sum = arr.filter((a, i) => i % 2 !== 0).map(Number).reduce((a, b) => a + b, 0);

    console.log(`You purchased ${products} for a total sum of ${sum}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);

