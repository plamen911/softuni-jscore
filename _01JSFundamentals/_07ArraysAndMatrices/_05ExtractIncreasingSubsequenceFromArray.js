// https://judge.softuni.bg/Contests/Compete/Index/313#4

let solve = (arr, biggestNumber = Number.NEGATIVE_INFINITY) => arr.filter(e => ([ret, biggestNumber] = [parseInt(e) >= biggestNumber, Math.max(biggestNumber, e)])[0])
    .forEach(e => console.log(e));

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);