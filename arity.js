var arity = (function () {
  function put(obj, key, val) {
    return (obj[key] = obj[key] || val);
  }

  function caller(scope) {
    return function () {
      var args = arguments;
      return scope[args.length].apply(this, args);
    };
  }

  return function arity(scope) {
    var self = (scope = scope || {}).arity = {};

    scope.def = function def(name, func) {
      put(self, name, {})[func.length] = func
      return put(scope, name, caller(self[name]));
    };

    return scope;
  };
}());

arity(window);

def("times", function (a) {
  return a * a;
});

def("times", function (a, b) {
  return a * b;
});

console.log("2 * 2 =", times(2));
console.log("2 * 3 =", times(2, 3));
