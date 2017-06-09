'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/316#3

function solve(input) {
    let productMap = {};
    let productArr = [];
    input.forEach(a => {
        let [productName, productPrice] = a.split(' : ');
        productMap[productName] = Number(productPrice);
        productArr.push(productName);
    });

    let productGroups = new Map();
    productArr.sort().forEach(productName => {
        let productPrice = productMap[productName];
        let group = productName.charAt(0);
        if (!productGroups.has(group)) {
            productGroups.set(group, []);
        }
        productGroups.get(group).push(`${productName}: ${productPrice}`);
    });

    [...productGroups].forEach(a => {
        let [group, lines] = a;
        console.log(group);
        lines.forEach(b => console.log(`  ${b}`));
    });
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

