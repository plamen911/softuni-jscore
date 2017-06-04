'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/314#7

function solve(str, term) {
    const regex = new RegExp('\\b' + term + '\\b', 'gi');

    let m;
    let cnt = 0;

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        cnt++;
    }

    console.log(cnt);
}

// solve('How do you plan on achieving that? How? How can you even think of that?', 'how');
solve('The waterfall was so high, that the child couldn�t see its peak.', 'the');