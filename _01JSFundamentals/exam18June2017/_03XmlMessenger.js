// https://judge.softuni.bg/Contests/Compete/Index/633#2
'use strict';

function solve(str) {
    let from = '';
    let to = '';
    let message = '';
    let result = '';
    let hit = false;
    //
    // if (true === hasMissingAttributes(str)) {
    //     console.log(`Missing attributes`);
    //     return;
    // }

    result = tryParse1(str);
    if (false === hit && false !== result) {
        hit = true;
        from = result.from;
        to = result.to;
        message = result.message;
    }

    result = tryParse2(str);
    if (false === hit && false !== result) {
        hit = true;
        from = result.from;
        to = result.to;
        message = result.message;
    }

    if (false === hit) {
        console.log(`Invalid message format`);
    } else {
        let output = '<article>\n';
        output += '  <div>From: <span class="sender">' + from + '</span></div>\n';
        output += '  <div>To: <span class="recipient">' + to + '</span></div>\n';
        output += '  <div>\n';
        let ary = message.toString().split('\n');
        for (let i = 0; i < ary.length; i++) {
            output += '    <p>' + ary[i] + '</p>\n';
        }
        output += '  </div>\n';
        output += '</article>';

        console.log(output);
    }

    function tryParse1(str) {
        // const regex = /^<message\b.*?\bfrom="([A-Za-z0-9\.\s]+)".*?\bto="([A-Za-z0-9\.\s]+)".*?>(.*?)<\/message>$|^<message\b.*?\bto="([A-Za-z0-9.\s]+)".*?\bfrom="([A-Za-z0-9.\s]+)".*?>(.*?)<\/message>$/g;
        const regex = /^<message\b.*?\bfrom="([A-Za-z0-9.\s]+)".*?\bto="([A-Za-z0-9.\s]+)".*?>([\s\S]+)<\/message>$/g;
        let m;
        let from = '';
        let to = '';
        let message = '';
        let hit = false;

        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            hit = true;

            from = m[1];
            to = m[2];
            message = m[3];
        }

        if (true === hit) {
            return {
                from: from,
                to: to,
                message: message,
            }
        }

        return hit;
    }

    function tryParse2(str) {
        const regex = /^<message\b.*?\bto="([A-Za-z0-9.\s]+)".*?\bfrom="([A-Za-z0-9.\s]+)".*?>([\s\S]+)<\/message>$/g;
        let m;
        let from = '';
        let to = '';
        let message = '';
        let hit = false;

        while ((m = regex.exec(str)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            hit = true;

            to = m[1];
            from = m[2];
            message = m[3];
        }

        if (true === hit) {
            return {
                from: from,
                to: to,
                message: message,
            }
        }

        return hit;
    }

    function hasMissingAttributes(str) {
        let regex = /^<message\b.*?\bto="[A-Za-z0-9.\s]+".*?\bfrom="[A-Za-z0-9.\s]+".*?><\/message>$/g;
        result = regex.test(str);
        if (true === regex.test(str)) {
            return false;
        }

        regex = /^<message\b.*?\bfrom="[A-Za-z0-9.\s]+".*?\bto="[A-Za-z0-9.\s]+".*?><\/message>$/g;
        if (true === regex.test(str)) {
            return false;
        }
        return true;
    }
}

solve(`<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>`);

// solve(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
// Let's go out for a beer</message>`);
// solve(`<message from="Alice" timestamp="1497254112">Same old, same old</message>`);
// solve(`<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>`);
// solve(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);

// solve(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
// Let's go out for a beer</message>`);