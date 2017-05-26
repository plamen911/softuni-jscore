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
[principal, interestRate, compoundingPeriod, timespan] = [principal, interestRate, compoundingPeriod, timespan].map(Number);

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





