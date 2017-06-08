'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/315#2

function solve(input) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let arr = JSON.parse(input);
    let output = '<table>\n' +
        '   <tr><th>' + Object.keys(arr[0]).join('</th><th>') + '</th></tr>\n';

    for (let item of arr) {
        output += '   <tr>';
        for (let obj of Object.values(item)) {
            output += '<td>' + obj.toString().htmlEscape() + '</td>';
        }
        output += '</tr>\n';
    }
    output += '</table>';

    console.log(output);
}

solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');

