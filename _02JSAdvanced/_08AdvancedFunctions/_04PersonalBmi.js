// https://judge.softuni.bg/Contests/Compete/Index/299#3
'use strict';

function solve(name, age, weight, height) {
    let BMI = Math.round(weight / Math.pow(height / 100, 2));
    let status;

    if (BMI < 18.5) {
        status = 'underweight';
    } else if (BMI < 25) {
        status = 'normal';
    } else if (BMI < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }

    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: BMI,
        status: status,
    };

    if (status === 'obese') {
        patient['recommendation'] = 'admission required';
    }

    return patient;
}

console.log(solve('Peter', 29, 75, 182));
// console.log(solve('Honey Boo Boo', 9, 57, 137));
// console.log(solve('Peter', 29, 75, 182));