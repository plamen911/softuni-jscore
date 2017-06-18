// https://judge.softuni.bg/Contests/Practice/Index/192#2
'use strict';

function solve(input) {
    input = input.filter(a => a.toString().trim() !== '');
    let hashPattern = input.pop();
    for (let i = 0; i < input.length; i += 3) {
        let authMethod;
        let authType;
        let authToken;
        let authContent;
        let success = true;

        authMethod = getAuthMethod(input[i]).authMethod;
        if (authMethod === '') {
            success = false;
        }

        let params = getAuthToken(input[i + 1]);
        authType = params.authType;
        authToken = params.authToken;
        if (authType === '' || authToken === '') {
            success = false;
        }

        authContent = getAuthContent(input[i + 2]).authContent;
        if (authContent === '') {
            success = false;
        }

        if (!success) {
            console.log(`Response-Code:400`);
            continue;
        }

        if (authType === 'Basic' && ['POST', 'PUT', 'DELETE'].indexOf(authMethod) !== -1) {
            console.log(`Response-Method:${authMethod}&Code:401`);
            continue;
        }

        if (!isAuthTokenValid(authToken, hashPattern)) {
            success = false;
        }

        if (success === true) {
            console.log(`Response-Method:${authMethod}&Code:200&Header:${authToken}`);
        } else {
            console.log(`Response-Method:${authMethod}&Code:403`);
        }
    }
    
    function getAuthMethod(str) {
        const regex = /^Method: (GET|POST|PUT|DELETE)$/g;
        let m;
        let authMethod;

        if ((m = regex.exec(str)) !== null) {
            authMethod = m[1];
        }

        return {
            authMethod: authMethod
        };
    }

    function getAuthToken(str) {
        const regex = /^Credentials: (Basic|Bearer) ([A-Za-z0-9]+)$/g;
        let m;
        let authType;
        let authToken;

        if ((m = regex.exec(str)) !== null) {
            authType = m[1];
            authToken = m[2];
        }

        return {
            authType: authType,
            authToken: authToken,
        }
    }

    function getAuthContent(str) {
        const regex = /^Content: ([A-Za-z0-9.]+)$/g;
        let m;
        let authContent = '';

        if ((m = regex.exec(str)) !== null) {
            authContent = m[1];
        }

        return {
            authContent: authContent
        };
    }

    function __isAuthTokenValid(authToken, hashPattern) {
        let params = hashPattern.toString().split('');
        for(let i = 0; i < params.length; i += 2) {
            let digit = Number(params[i]);
            let letter = params[i + 1].toString();

            let regex = new RegExp(letter, 'g');
            let m;
            let hits = 0;

            while ((m = regex.exec(authToken)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                hits++;
            }

            if (hits === digit) {
                return true;
            }
        }

        return false;
    }

    function isAuthTokenValid(authToken, hashPattern) {
        let params = [];
        const regex = /(\d+[A-Za-z])/g;
        let m;

        while ((m = regex.exec(hashPattern)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            let ary = m[1].toString().split('');
            let letter = ary.pop();
            let digit = Number(ary.join(''));

            params.push({
                digit: digit,
                letter: letter
            });
        }

        for(let i = 0; i < params.length; i++) {
            let digit = params[i].digit;
            let letter = params[i].letter;

            let regex = new RegExp(letter, 'g');
            let m;
            let hits = 0;

            while ((m = regex.exec(authToken)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                hits++;
            }

            if (hits === digit) {
                return true;
            }
        }

        return false;
    }
}

solve([
    'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q'
]);

// solve([
//     'Method: PUT',
//     'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
//     'Content: users.asd/1782452$278///**asd123',
//     'Method: POST',
//     'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
//     'Content: Johnathan',
//     'Method: DELETE',
//     'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
//     'Content: This.is.a.sample.content',
//     '2e5g'
// ]);