'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#5

function solve(input) {
    let words = input.join('\n').toLowerCase().split(/[^A-Za-z0-9_]/g).filter(a => a !== '');
    let wordsCount = new Map();
    for (let word of words) {
        if (!wordsCount.has(word)) {
            wordsCount.set(word, 0);
        }
        wordsCount.set(word, wordsCount.get(word) + 1);
    }

    let allWords = Array.from(wordsCount.keys()).sort();

    allWords.forEach(w =>
        console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}

solve(['Far too slow, you\'re far too slow.']);

