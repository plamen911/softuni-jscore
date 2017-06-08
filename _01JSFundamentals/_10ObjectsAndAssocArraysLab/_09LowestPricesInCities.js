'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#8

function solve(input) {
    let myMap = new Map();
    for (let i = 0; i < input.length; i++) {
        let [townName, productName, productPrice] = input[i].split(/\s*\|\s*/g);
        productPrice = Number(productPrice);
        if (!myMap.has(townName)) {
            myMap.set(townName, new Map());
        }
        myMap.get(townName).set(productName, productPrice);
    }

    let products = new Map();
    let towns = new Map();
    for (let [townName, prods] of myMap) {
        for (let [productName, productPrice] of prods) {
            // console.log(productName + ' / ' + productPrice);

            if (!products.has(productName)) {
                products.set(productName, Number(productPrice));
                towns.set(productName, townName);
            }
            if (products.get(productName) > productPrice) {
                products.set(productName, productPrice);
                towns.set(productName, townName);
            }
        }
    }

    products.forEach((v, k) => {
        console.log(`${k} -> ${v} (${towns.get(k)})`);
    });
}

// solve([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ]);

solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);

