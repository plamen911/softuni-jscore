'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#1

function solve(input) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let output = '<table>\n' +
        '   <tr><th>name</th><th>score</th></tr>\n';

    let arr = JSON.parse(input);
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            output += '   <tr><td>' + arr[i].name.toString().htmlEscape() +
                '</td><td>' + arr[i].score.toString().htmlEscape() + '</td></tr>\n';
        }
    }

    output += '</table>'

    console.log(output);
}

solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');

