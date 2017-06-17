// https://judge.softuni.bg/Contests/Practice/Index/372#1
'use strict';

function solve(input) {
    let sections = input.map(Number);
    let concretePerDay = 195;
    let concreteCost = 1900;

    let usedConcreteArr = [];
    do {
        let usedConcrete = 0;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sections[i]++;
                usedConcrete += concretePerDay;
            }
        }
        usedConcreteArr.push(usedConcrete);
    } while (!isDone(sections));

    let totalConcrete = usedConcreteArr.reduce((a, b) => Number(a) + Number(b), 0);

    console.log(usedConcreteArr.join(', '));
    console.log(`${concreteCost * totalConcrete} pesos`);

    function isDone(sections) {
        return (sections.reduce((a, b) => Number(a) + Number(b), 0) / sections.length) % 30 === 0;
    }
}

//solve([21, 25, 28]);
solve([17]);