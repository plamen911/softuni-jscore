// https://judge.softuni.bg/Contests/Compete/Index/335#0
'use strict';

function validateRequest(req) {
    if (!req.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!req.hasOwnProperty('uri') || req.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!req.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!req.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    if (!['GET', 'POST', 'DELETE', 'CONNECT'].includes(req.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriRegex = /^[\w.]+$/;
    if(! (req.uri && ( uriRegex.test(req.uri) || req.uri === '*'))){
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(req.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageRegex = /^[^<>\\&'"]*$/;
    if(! ( req.hasOwnProperty('message') && (messageRegex.test(req.message) || req.message === ''))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return req;
}

try {
    let req = {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    };

    req = {
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    };

    req = {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
    };

    let result = validateRequest(req);
    console.log(result);

} catch (err) {
    console.log(err.message);
}
