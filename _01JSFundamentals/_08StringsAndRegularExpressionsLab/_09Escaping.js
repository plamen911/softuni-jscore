"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#8

function solve(arr) {

    console.log('<ul>');
    for (let i = 0; i < arr.length; i++) {
        console.log('<li>' + stripTags(arr[i]) + '</li>');
    }
    console.log('</ul>');

    function stripTags(input) {
        let tags = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
        };
        let re = new RegExp(Object.keys(tags).join('|'), 'g');
        return input.replace(re, (matched) => tags[matched]);
    }
}

solve(['<b>unescaped text</b>', 'normal text']);

