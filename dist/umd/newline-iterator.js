(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('index-of-newline')) :
  typeof define === 'function' && define.amd ? define(['index-of-newline'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.newlineIterator = factory(global.indexOfNewline));
})(this, (function (indexOfNewline) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var indexOfNewline__default = /*#__PURE__*/_interopDefaultLegacy(indexOfNewline);

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasIterator = typeof Symbol !== "undefined" && Symbol.iterator;
  /**
   * Create a newline iterator recognizing CR, LF, and CRLF using the Symbol.iterator interface
   *
   * @param string The string to iterate through
   *
   * ```typescript
   * import newlineIterator from "newline-iterator";
   *
   * const iterator = newlineIterator("some\r\nstring\ncombination\r");
   * const results = [];
   * for (const line of iterator) results.push(line);
   * console.log(results); // ["some", "string", "combination"];
   * ```
   */

  function newlineIterator(string) {
    var offset = 0;
    var iterator = {
      next: function next() {
        if (offset >= string.length) return {
          value: undefined,
          done: true
        };

        var _ref = indexOfNewline__default["default"](string, offset, true),
            _ref2 = _slicedToArray(_ref, 2),
            index = _ref2[0],
            skip = _ref2[1];

        if (index < 0) {
          index = string.length;
          skip = 0;
        }

        var line = string.substr(offset, index - offset);
        offset = index + skip;
        return {
          value: line,
          done: false
        };
      }
    };

    if (hasIterator) {
      iterator[Symbol.iterator] = function () {
        return this;
      };
    }

    return iterator;
  }

  return newlineIterator;

}));
//# sourceMappingURL=newline-iterator.js.map
