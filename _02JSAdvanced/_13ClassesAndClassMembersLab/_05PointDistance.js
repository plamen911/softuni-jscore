// https://judge.softuni.bg/Contests/Compete/Index/336#4
'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}