(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('index-of-newline')) :
  typeof define === 'function' && define.amd ? define(['index-of-newline'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.newlineIterator = factory(global.indexOfNewline));
})(this, (function (indexOfNewline) { 'use strict';

  var hasIterator = typeof Symbol !== 'undefined' && Symbol.iterator;
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
   */ function newlineIterator(string) {
      var offset = 0;
      var iterator = {
          next: function next() {
              if (offset >= string.length) return {
                  value: undefined,
                  done: true
              };
              var args = indexOfNewline(string, offset, true);
              var index = args[0];
              var skip = args[1];
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
          iterator[Symbol.iterator] = function() {
              return this;
          };
      }
      return iterator;
  }

  return newlineIterator;

}));
//# sourceMappingURL=newline-iterator.js.map
