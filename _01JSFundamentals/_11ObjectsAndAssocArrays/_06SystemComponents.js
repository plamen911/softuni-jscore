'use strict';
// https://judge.softuni.bg/Contests/Compete/Index/316#5

function solve(input) {
    let sys = new Map();
    input.forEach(a => {
        let [systemName, componentName, subcomponentName] = a.split(' | ');
        if (!sys.has(systemName)) {
            sys.set(systemName, new Map());
        }
        if (!sys.get(systemName).has(componentName)) {
            sys.get(systemName).set(componentName, new Set());
        }
        sys.get(systemName).get(componentName).add(subcomponentName);
    });

    [...sys]
        .sort((a, b) => {
            let [aKey, aVal] = [...a];
            let [bKey, bVal] = [...b];
            let componentsA = [...aVal].length;
            let componentsB = [...bVal].length;
            if (componentsA === componentsB) {
                return aKey.toString().localeCompare(bKey.toString());
            }
            return componentsB - componentsA;
        })
        .forEach(a => {
            let [systemName, components] = [...a];
            console.log(systemName);
            [...components].forEach(c => {
                let [componentName, subcomponents] = [...c];
                console.log(`|||${componentName}`);
                [...subcomponents].forEach(s => {
                    console.log(`||||||${s}`);
                });
            });
        });
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

