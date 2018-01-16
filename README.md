# arity

Function overloading on JavaScript

### Use window setup on browser

```javascript
arity(window);

def('times', function (a) { return a * a; });
def('times', function (a, b) { return a * b; });

console.log('2 * 2 =', times(2));
console.log('2 * 3 =', times(2, 3));
```

### Or simple setup everywhere

```javascript
const arity = require('arity');
const scope = arity();

scope.def('times', (a) => a * a);
scope.def('times', (a, b) => a * b);

console.log('2 * 2 =', scope.times(2));
console.log('2 * 3 =', scope.times(2, 3));
```
