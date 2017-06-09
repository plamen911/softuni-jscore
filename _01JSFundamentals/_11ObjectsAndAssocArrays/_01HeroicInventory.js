'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/316#0

function solve(input) {
    let heroes = [];
    input.forEach(a => {
        let [heroName, heroLevel, heroItems] = a.split(' / ');
        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems && heroItems.split(', ') || []
        };
        heroes.push(hero);
    });

    console.log(JSON.stringify(heroes));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

