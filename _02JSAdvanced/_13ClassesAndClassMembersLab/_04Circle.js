// https://judge.softuni.bg/Contests/Compete/Index/336#3
'use strict';

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        if (radius <= 0) {
            throw new RangeError('Radius must be positive');
        }
        this._radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}