import indexOfNewline from 'index-of-newline';

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
  return {
    next() {
      if (offset >= string.length) return {
        value: undefined,
        done: true
      };
      let [index, skip] = indexOfNewline(string, offset, true);

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

    [Symbol.iterator]() {
      return this;
    }

  };
}

export { newlineIterator as default };
//# sourceMappingURL=index.js.map
