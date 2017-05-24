'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/288#5

function calcConeVolumeAndSurface(radius, height) {
    // http://www.calculatorsoup.com/calculators/geometry-solids/cone.php
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    let area = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}

// calcConeVolumeAndSurface(3, 5);