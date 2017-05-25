// https://judge.softuni.bg/Contests/Compete/Index/288#1
function calcBoxes(numBottles, boxCapacity) {
    // let numBoxes = Number.parseInt(numBottles / boxCapacity);
    // if ((numBoxes * boxCapacity) < numBottles) {
    //     numBoxes++;
    // }
    //
    // return numBoxes;

    return Math.ceil(numBottles / boxCapacity);
}

// console.log(calcBoxes(15, 7));