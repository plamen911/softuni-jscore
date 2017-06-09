'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/316#1

function solve(input) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let output = '<table>\n';
    input.forEach(a => {
       let obj = JSON.parse(a);
       output += `	<tr>
		<td>${obj.name.toString().htmlEscape()}</td>
		<td>${obj.position.toString().htmlEscape()}</td>
		<td>${Number(obj.salary)}</td>
	<tr>\n`;
    });
    output += '</table>';
    console.log(output);
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);

