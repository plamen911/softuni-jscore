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
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
```




