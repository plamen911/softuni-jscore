// https://judge.softuni.bg/Contests/Compete/Index/336#1
'use strict';

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName } ${this.lastName } (age: ${this.age }, email: ${this.email })`;
    }
}

// let maria = new Person('Maria', 'Petrova', 23, 'email@somenet.com');
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

console.log(p.toString());

