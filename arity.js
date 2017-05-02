var arity = (function() {
  function format(name, pivot) {
    return name + "/" + pivot.length;
  }

  function caller(nspc, name) {
    return function() {
      var args = arguments;
      return nspc[format(name, args)].apply(null, args);
    };
  }

  return function(scope) {
    var nspc = (scope = scope || {}).arity = {};

    scope.def = function(name, fn) {
      nspc[format(name, fn)] = fn;
      return (scope[name] = scope[name] || caller(nspc, name));
    };

    return scope;
  };
}());

arity(window);

def("times", function(a) {
  return a * a;
});

def("times", function(a, b) {
  return a * b;
});

console.log("2 * 2 =", times(2));
console.log("2 * 3 =", times(2, 3));
