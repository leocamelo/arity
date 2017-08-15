;(function (root, factory) {
  function i(v, t) { return typeof v === t; }
  i(exports, 'object') && !i(module, 'undefined')
  ? module.exports = factory() : i(define, 'function') && define.amd
  ? define(['arity'], factory) : root.arity = factory();
}(this, function () {
  'use strict';

  function logger() {
    return arity.logger || console;
  }

  function raise(name, size) {
    return logger().error(name + '/' + size + ' is undefined');
  }

  function put(obj, key, val) {
    return (obj[key] = obj[key] || val);
  }

  function caller(scope, name) {
    return function () {
      var args = arguments;
      var size = args.length;
      var func = scope[name][size];
      return func ? func.apply(this, args) : raise(name, size);
    };
  }

  return function arity(scope) {
    var self = (scope = scope || {}).arities = {};

    scope.def = function def(name, func) {
      put(self, name, {})[func.length] = func;
      return put(scope, name, caller(self, name));
    };

    return scope;
  };
}));
