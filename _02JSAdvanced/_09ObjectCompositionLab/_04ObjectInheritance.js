// https://judge.softuni.bg/Contests/Compete/Index/334#3
'use strict';

let fatherCar = {
    brand: 'BMW',
    model: 'X5',
    color: 'blue',
    toString: function () {
        return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}]`;
    }
};

let myCar = Object.create(fatherCar);
myCar.model = 'M4';
myCar.color = 'red';
console.log('' + myCar);

let workCar = Object.create(fatherCar);
workCar.model = 'i3';
workCar.type = 'electric';
workCar.toString = function () {
    return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}, type: ${this.type}]`;
};

console.log('' + workCar);

solve([
        'create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2'
    ]
);
