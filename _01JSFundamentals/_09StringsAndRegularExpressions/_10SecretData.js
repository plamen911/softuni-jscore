'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/314#9

function solve(str) {
    const regexUsername = /(\*[A-Z][A-Z-a-z]*)(\s+)/g;
    let result;

    result = str.replace(regexUsername, (m, m1, m2) => {
        return '|'.repeat(m1.length) + m2;
    });

    console.log(result);
}

solve(`Agent *Ivankov was in the room when it all happened.
The person in the room was heavily armed.
Agent *Ivankov had to act quick in order.
He picked up his phone and called some unknown number. 
I think it was +555-49-796
I can't really remember...
He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21
Then after that he disappeared from my sight.
As if he vanished in the shadows.
A moment, shorter than a second, later, I saw the person flying off the top floor.
I really don't know what happened there.
This is all I saw, that night.
I cannot explain it myself...`);