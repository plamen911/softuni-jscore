https://livedemo-430f1.firebaseio.com/.json

https://livedemo-430f1.firebaseio.com/locations/.json

https://livedemo-430f1.firebaseio.com/locations/Pleven/.json

Firebase security rules

```
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```

```
{
    "books": [
        null,
        {
            "author": "Ivan Vazov",
            "title": "Under the Yoke"
        },
        {
            "author": "Svetlin Nakov & Co",
            "title": "C# Fundamentals"
        }
    ]
}
```

Get Book #1

`https://livedemo-430f1.firebaseio.com/books/1/.json`


