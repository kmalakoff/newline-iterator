'use strict';

var indexOfNewline = require('index-of-newline');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var indexOfNewline__default = /*#__PURE__*/_interopDefaultLegacy(indexOfNewline);

/**
 * Create a newlinw iterator recognizing CR, LF, and CRLF using the Symbol.iterator interface
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
  let offset = 0;
  const iterator = {
    next: function () {
      if (offset >= string.length) return {
        value: undefined,
        done: true
      };
      let [index, skip] = indexOfNewline__default["default"](string, offset, true);

      if (index < 0) {
        index = string.length - offset;
        skip = 0;
      }

      const line = string.substr(offset, index - offset);
      offset = index + skip;
      return {
        value: line,
        done: false
      };
    },
    [Symbol.iterator]: function () {
      return this;
    }
  };
  return iterator;
}

module.exports = newlineIterator;
//# sourceMappingURL=index.js.map
