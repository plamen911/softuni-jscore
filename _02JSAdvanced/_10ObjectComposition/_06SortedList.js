// https://judge.softuni.bg/Contests/Compete/Index/301#4
'use strict';

function getSortedList() {
    let internalArray = [];

    function sorted() {
        internalArray = internalArray.sort((a, b) => a - b);
    }

    return {
        size: 0,
        add: function (element) {
            internalArray.push(element);
            this.size++;
            sorted();
        },
        remove: function (index) {
            if (index >= 0 && index < internalArray.length) {
                internalArray.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < internalArray.length) {
                return internalArray[index];
            }
        }
    }
}

let myList = getSortedList();
myList.add(5);
console.log(myList.get(0));
myList.add(3);
console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);

