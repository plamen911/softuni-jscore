// https://judge.softuni.bg/Contests/Compete/Index/336#0
'use strict';

class Rectangle {
    constructor(width, height, color) {
        this.width = width || 0;
        this.height = height || 0;
        this.color = color || 'white';
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(10, 12, 'red');
console.log(rect.calcArea());
let rect2 = new Rectangle(10, 8);
console.log('Prototype: ', Rectangle.__proto__);
let rect3 = new Rectangle(null, undefined, 'blue');
console.log(rect3);
