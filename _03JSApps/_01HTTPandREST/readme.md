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