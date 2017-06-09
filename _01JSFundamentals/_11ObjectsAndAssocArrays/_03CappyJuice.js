'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/316#2

function solve(input) {
    let bottles = new Map();
    let juices = new Map();
    input.forEach(a => {
        let [juiceName, juiceQuantity] = a.split(' => ');
        if (!juices.has(juiceName)) {
            juices.set(juiceName, 0);
        }
        juices.set(juiceName, juices.get(juiceName) + Number(juiceQuantity));
        if (juices.get(juiceName) >= 1000) {
            if (!bottles.has(juiceName)) {
                bottles.set(juiceName, 0);
            }
            bottles.set(juiceName, bottles.get(juiceName) + Math.floor(juices.get(juiceName) / 1000));
            juices.set(juiceName, juices.get(juiceName) % 1000);
        }
    });

    [...bottles].forEach(a => {
        let [juiceName, juiceQuantity] = a;
        console.log(`${juiceName} => ${juiceQuantity}`);
    });
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

