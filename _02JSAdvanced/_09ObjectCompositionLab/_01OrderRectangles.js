// https://judge.softuni.bg/Contests/Compete/Index/334#0
'use strict';

function solve(rectsData) {
    let rects = [];
    for (let [width, height] of rectsData) {
        let rect = createRect(width, height);
        rects.push(rect);
    }

    rects.sort((a, b) => a.compareTo(b));

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: (other) => {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };

        return rect;
    }

    return rects;
}

console.log(solve([[10, 5], [5, 12]]));;


