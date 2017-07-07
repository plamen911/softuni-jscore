// https://judge.softuni.bg/Contests/Compete/Index/301#3
'use strict';

function getExtensibleObject() {
    let obj = {
        extend: (template) => {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    let element = template[key];
                    if (typeof element === 'function') {
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element;
                    }
                }
            }
        }
    };

    return obj;
}

// console.log({}.__proto__);

let myObj = getExtensibleObject();
let template = {
    extensionMethod: function () {
        console.log('Stamat');
    },
    extensionProp: 'Penka'
};

myObj.extend(template);
console.log(myObj);
// console.log(myObj.__proto__);
console.log(Object.getPrototypeOf(myObj));

