'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/316#4

function solve(input) {
    let cars = new Map();
    input.forEach(a => {
        let [carBrand, carModel, producedCars] = a.split(' | ');
        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }
        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, 0);
        }
        cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + Number(producedCars));
    });

    [...cars].forEach(a => {
        let [carBrand, carModels] = [...a];
        console.log(carBrand);
        [...carModels].forEach(b => {
            let [carModel, producedCars] = [...b];
            console.log(`###${carModel} -> ${producedCars}`);
        });
    });
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);

