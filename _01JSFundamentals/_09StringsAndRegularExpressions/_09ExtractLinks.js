'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/314#7

function solve(str) {
    const regex = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/gi;

    let m;

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        console.log(m[0]);
    }
}

solve(`Join WebStars now for free, at www.web-stars.com
You can also support our partners:
Internet - www.internet.com
WebSpiders - www.webspiders101.com
Sentinel - www.sentinel.-ko`);