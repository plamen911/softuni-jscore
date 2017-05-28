"use strict";
// https://judge.softuni.bg/Contests/Practice/Index/310#2

function solve(quiz) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';

    for (let i = 0; i < quiz.length; i += 2) {
        let question = quiz[i];
        let answer = quiz[i + 1];
        xml += '<question>\n' + question + '\n</question>\n';
        xml += '<answer>\n' + answer + '\n</answer>\n';
    }

    xml += '</quiz>';

    console.log(xml);
}

// solve(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);