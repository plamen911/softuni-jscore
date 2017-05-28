"use strict";
// https://judge.softuni.bg/Contests/Practice/Index/310#6

function solve(input) {
    input = input.map(Number);

    for (let i = 0; i < input.length; i += 2) {
        let x = input[i];
        let y = input[i + 1];
        locate(x, y);
    }

    function locate(x, y) {
        let islands = {
          'Tuvalu': { x1: 1, y1: 1, x2: 3, y2: 3 },
          'Tonga': { x1: 0, y1: 6, x2: 2, y2: 8 },
          'Samoa': { x1: 5, y1: 3, x2: 7, y2: 6 },
          'Cook': { x1: 4, y1: 7, x2: 9, y2: 8 },
          'Tokelau': { x1: 8, y1: 0, x2: 9, y2: 1 }
        };

        let hit = false;
        for (let islandName in islands) {
            let coord = islands[islandName];

            if (x >= coord.x1 && x <= coord.x2 && y >= coord.y1 && y <= coord.y2) {
                hit = true;
                console.log(islandName);
                break;
            }
        }

        if (!hit) {
            console.log('On the bottom of the ocean');
        }
    }

}

// solve([6, 4]);
// solve([4, 2, 1.5, 6.5, 1, 3]);