// https://judge.softuni.bg/Contests/Compete/Index/287#3

function filterByAge(minimumAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let people = [];
    people.push({name: firstPersonName, age: firstPersonAge});
    people.push({name: secondPersonName, age: secondPersonAge});
    // for (let person of people) {
    //     if (person.age >= minimumAge) {
    //         console.log(person);
    //     }
    // }
    people
        .filter(function (p) {
            return p.age >= minimumAge;
        })
        .forEach(function (p) {
            console.log(p);
        });
}

// filterByAge(12, 'Ivan', 15, 'Asen', 9);