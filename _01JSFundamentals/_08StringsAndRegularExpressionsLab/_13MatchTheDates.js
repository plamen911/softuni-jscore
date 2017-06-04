"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#12

function solve(str) {
    const regex = /[\s|\.|,]([0-9]{1,2}\-[A-Z]{3}\-[0-9]{4})[\s|\.|,]/gi;
    let m;

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        let arr = m[1].split('-');
        console.log(`${m[1]} (Day: ${arr[0]}, Month: ${arr[1]}, Year: ${arr[2]})`);
    }
}

solve(`1-Jan-1999 is a valid date. So is 01-July-2000. I am an awful liar, by the way – Ivo, 28-Sep-2016.`);

