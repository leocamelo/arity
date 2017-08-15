;(function (root, factory) {
  function i(v, t) { return typeof v === t; }
  i(exports, 'object') && !i(module, 'undefined')
  ? module.exports = factory() : i(define, 'function') && define.amd
  ? define(['arity'], factory) : root.arity = factory();
}(this, function () {
  'use strict';

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
    var self = (scope = scope || {}).arities = {};

    scope.def = function def(name, func) {
      put(self, name, {})[func.length] = func
      return put(scope, name, caller(self[name]));
    };

    return scope;
  };
}));
