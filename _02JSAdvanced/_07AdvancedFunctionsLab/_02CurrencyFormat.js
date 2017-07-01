// https://judge.softuni.bg/Contests/Compete/Index/330#1
'use strict';

function solve(func) {
    let separator = ',';
    let symbol = '$';
    let symbolFirst = true;

    // function result(func) {
    //     return function(value) {
    //         return func(separator, symbol, symbolFirst, value);
    //     }
    // }
    // return result(func);

    return (function(func) {
        return function(value) {
            return func(separator, symbol, symbolFirst, value);
        }
    })(func);
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}


let dollarFormatter = solve(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71



