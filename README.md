# arity

Function overload on JavaScript

```javascript
arity(window);

def('times', function (a) {
  return a * a;
});

def('times', function (a, b) {
  return a * b;
});

console.log('2 * 2 =', times(2));
console.log('2 * 3 =', times(2, 3));
```
