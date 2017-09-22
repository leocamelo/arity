;(function (root, factory) {
  function i(v, t) { return typeof v === t; }
  i(exports, 'object') && !i(module, 'undefined') ? module.exports = factory()
  : i(define, 'function') && define.amd ? define(['arity'], factory)
  : root.arity = factory();
}(this, function () {
  'use strict';

  function logger() {
    return arity.logger || console;
  }

  function raise(name, size) {
    return logger().error(name + '/' + size + ' is undefined');
  }

  function fetchSet(obj, key, func, args) {
    return (obj[key] = obj[key] || func.apply(undefined, args));
  }

  function caller(bucket, name) {
    return function () {
      var args = arguments;
      var size = args.length;
      var func = bucket[name][size];
      return func ? func.apply(this, args) : raise(name, size);
    };
  }

  return function arity(scope) {
    var bucket = {};
    var arities = null;

    scope = scope || {};

    scope.def = function (name, func) {
      arities = null;
      fetchSet(bucket, name, Object)[func.length] = func;
      return fetchSet(scope, name, caller, [bucket, name]);
    };

    scope.getArities = function () {
      return arities || (function () {
        var arities = [];
        for (var func in bucket) {
          for (var arity in bucket[func]) {
            arities.push(func + '/' + arity);
          }
        }
        return arities.sort();
      }());
    };

    return scope;
  };
}));
