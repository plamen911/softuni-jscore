'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#9

function solve(input) {
    let mySet = new Set();
    for (let i = 0; i < input.length; i++) {
        let arr = input[i].toLowerCase().split(/[^\w]/g).filter(a => a !== '');
        for(let j = 0; j < arr.length; j++) {
            mySet.add(arr[j]);
        }
    }
    console.log(Array.from(mySet).join(', '));
}

solve([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);