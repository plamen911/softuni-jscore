'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#7

function solve(input) {
    let towns = new Map();
    for (let i = 0; i < input.length; i++) {
        let [town, product, amounts] = input[i].split(' -> ');
        let [amountOfSales, priceForOneUnit] = amounts.split(' : ').map(Number);
        if (!towns.has(town)) {
            towns.set(town, new Map());
        }
        if (!towns.get(town).has(product)) {
            towns.get(town).set(product, 0);
        }
        towns.get(town).set(product, towns.get(town).get(product) + (amountOfSales * priceForOneUnit));
    }

    towns.forEach((v, k) => {
        console.log(`Town - ${k}`);
        v.forEach((v1, k1) => {
            console.log('$$$' + k1 + ' : ' + v1);
        })
    });
}

solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);

