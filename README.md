###JS Fundamentals - май 2017
https://softuni.bg/trainings/1649/js-fundamentals-may-2017

###Практическа работа в екип с JavaScript - май 2017
https://softuni.bg/trainings/1686/practical-teamwork-javascript-may-2017

```
sudo n latest
node -v
```

```
Number((5 / 3).toFixed(2))
>> 1.67
Math.round((5 / 3) * 100) / 100
>> 1.67
```

```
let [principal, interestRate, compoundingPeriod, timespan] = [principal, interestRate, compoundingPeriod, timespan].map(Number);

var tagNames = articleArgs.tagNames.split(/\s+|,/).filter(function(tag){return tag;});

var tagNames = article.tags.map(function(tag){return tag.name;});

var extension = filename.split(/[. ]+/).pop();

var newRoles = roles
    .filter(function(role) {  return userArgs.roles.indexOf(role.name) !== -1;  })
    .map(function(role) {  return role.id;  });

fs.readdirSync('./models')
	.filter(function(file) { return file.indexOf('-model') !== -1; })
	.forEach(function(file) { require(file); });

```

Promise usage
```
function getSuperheroById(id) {
    return new Promise((resolve, reject) => {
        Superhero.findOne({_id: id}, (err, superhero) => {
            if (err) {
                return reject(err);
            }
            return resolve(superhero);
        });
    });
}
//
getSuperheroById(req.params.id)
    .then(superhero => {
        //
    });
```

Get max element in array

`Math.max.apply(null, [3, 10, -1]);`

Matrix to array

```
let matrix = [
                ['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']   
             ];
console.log(matrix.reduce((row1, row2) => row1.concat(row2)));
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

RegExp.escape function in Javascript

```
RegExp.escape = (s) =>  {
    return s.toString().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

String.prototype.htmlEscape = function () {
    return this.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};
```

Look ahead

```
$re = '/([A-Za-z]+)([\d]+)(?=\s|$)/';
$str = 'Word98 ';

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

// Print the entire match result
var_dump($matches);
```

Look behind

```
$re = '/(?<=\s)([A-Za-z]+)([\d]+)/';
$str = ' Word98';

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

// Print the entire match result
var_dump($matches);
```

Negative look behind/ahead

```
$re = '/(?<!\s)\b([A-Za-z]+)([\d]+)\b/';
$str = 'Word98';

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

// Print the entire match result
var_dump($matches);
```

Non-capturing groups

```
const regex = /([A-Za-z]+)([\d]+)(?:\s+)/g;
const str = `Word98 `;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
```

Sort map

```
var map = new Map();
map.set('2-1', "foo");
map.set('0-1', "bar");
map.set('3-1', "baz");

var mapAsc = new Map([...map.entries()].sort());
```

Sort strings with `localCompare()`

```
function solve(input) {
    let usernames = new Set();
    input.forEach(a => usernames.add(a));
    Array.from(usernames).sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }).forEach(a => console.log(a));
}
```

`Math.trunc(...)` - like Math.floor for positive numbers, and like Math.ceil for negative


```
// "Module" Pattern (with Closure)

let module = (function () {
    let count = 0; // private
    return {
        increase: (num) => count += num,
        decrease: (num) => count -= num,
        value: () => count,
    };
})();

console.log(module.value()); // 0
console.log(module.increase(5)); // 5
console.log(module.decrease(2)); // 3
console.log(module.count); // undefined (not accessible)
```

```
// "Revealing Module" Pattern (with Closure)

let revModule = (function () {
    let count = 0; // private
    function change(amount) {
        return count += amount;
    }

    function increase(num) {
        return change(num);
    }

    function decrease(num) {
        return change(-num);
    }

    function value() {
        return count;
    }

    return {increase, decrease, value};
})();__

console.log(revModule.value()); // 0
console.log(revModule.increase(5)); // 5
console.log(revModule.decrease(2)); // 3
console.log(module.count); // undefined (not accessible)
```

`n` - list all installed NodeJS versions

`sudo n rm 5.3.0` - uninstall specific NodeJS version

`sudo npm update -g npm` - update npm

`npm install requirejs --save`

`npm install systemjs --save` - NodeJS like require external files

```
<!-- load the library in your host HTML -->
<script src="./node_modules/systemjs/dist/system.js"></script>
<!-- configure and load your app's path -->
<!-- Notice: include .js file extension when require js files -->
<script>
   System.config({ meta: { format: 'cjs' } });
   System.import('./app.js');
</script>
```

`npm install --save-dev babel-cli -g`

Configuring Babel for AMD and RequireJS

- Download the plugin from WebStorm's terminal

`npm install --save-dev babel-plugin-transform-es2015-modules-amd`

- Create a .babelrc configuration file in the project's root

`echo { "plugins": ["transform-es2015-modules-amd"] } > .babelrc`

Window btoa() Method - Encode a string in base-64

```
var str = "Hello World!";
var enc = window.btoa(str);

var res = "Encoded String: " + enc;
// Encoded String: SGVsbG8gV29ybGQh
```

https://www.toptal.com/designers/htmlarrows/symbols/

Parse template

```
function parse(htmlAsString, context) {
    return htmlAsString.replace(/{{\s*(\w+)\s*}}/g, (m, g1) => {
        if (context.hasOwnProperty(g1)) {
            return context[g1];
        } else {
            return m;
        }
    });
}
```

http://handlebarsjs.com/builtin_helpers.html

`https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.min.js`




