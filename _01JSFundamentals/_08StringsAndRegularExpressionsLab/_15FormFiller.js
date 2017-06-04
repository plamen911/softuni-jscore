"use strict";
// https://judge.softuni.bg/Contests/Compete/Index/312#14

function solve(username, email, phone, messages) {
    const regexUsername = /<![A-Za-z]+!>/g;
    const regexEmail = /<@[A-Za-z]+@>/g;
    const regexPhone = /<\+[A-Za-z]+\+>/g;

    let result = [];
    for (let message of messages) {
        message = message.replace(regexUsername, username);
        message = message.replace(regexEmail, email);
        message = message.replace(regexPhone, phone);
        result.push(message);
    }

    result.forEach(a => console.log(a));
}

solve('Pesho',  'pesho@softuni.bg',  '90-60-90',  ['Hello, <!username!>!',  'Welcome to your Personal profile.',  'Here you can modify your profile freely.',  'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',  'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',  'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);
