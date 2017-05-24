'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/288#7

function fruitOrVegetable(input) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];
    if (fruits.indexOf(input) > -1) {
        console.log('fruit');
    } else if (vegetables.indexOf(input) > -1) {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

// fruitOrVegetable('banana');