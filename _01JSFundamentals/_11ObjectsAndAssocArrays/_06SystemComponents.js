'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/316#5

function solve(input) {
    let sys = {};
    let systemsWithComponents = {};
    input.forEach(a => {
        let [systemName, componentName, subcomponentName] = a.split(' | ');
        if (!sys.hasOwnProperty(systemName)) {
            sys[systemName] = {};
            systemsWithComponents[systemName] = [];
        }
        if (!sys[systemName].hasOwnProperty(componentName)) {
            sys[systemName][componentName] = [];
        }
        sys[systemName][componentName].push(subcomponentName);
        systemsWithComponents[systemName].push(componentName)
    });

    // sys.sort((a, b) => {
    //
    // });

    // console.log(Object.keys(sys));



    // sys.sort((a, b) => {
    //
    // });

    //console.log(sys);
    //console.log(systemsWithComponents);

    // Array.from(systemsWithComponents).sort((a, b) => {
    //     console.log('---- ' + a.length)
    //     return a.length - b.length;
    // });

    let arr = [];
    for (let a in systemsWithComponents) {
        arr.push([a, systemsWithComponents[a].length]);
    }
    // arr.sort((a, b) => {
    //
    // });

    console.log(arr);

    // systemsWithComponents.sort((a, b) => {
    //    if (a.length === b.length) {
    //
    //    }
    // });
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);

