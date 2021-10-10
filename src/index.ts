import indexOfNewline from "index-of-newline";

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
export default function newlineIterator(string: string): IterableIterator<string> {
  let offset = 0;
  return {
    next(): IteratorResult<string, boolean> {
      if (offset >= string.length) return { value: undefined, done: true };
      let [index, skip] = indexOfNewline(string, offset, true) as number[];
      if (index < 0) {
        index = string.length - offset;
        skip = 0;
      }
      const line = string.substr(offset, index - offset);
      offset = index + skip;
      return { value: line, done: false };
    },
    [Symbol.iterator](): Iterator<string> {
      return this;
    },
  } as IterableIterator<string>;
}
