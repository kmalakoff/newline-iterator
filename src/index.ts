import indexOfNewline from "index-of-newline";

export interface IterableIterator {
  next(): IteratorResult<string>;
  [Symbol.iterator](): IteratorResult<string>;
}

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
export default function newlineIterator(string: string): IterableIterator {
  let offset = 0;
  const iterator = {
    next: function (): IteratorResult<string, boolean> {
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
    [Symbol.iterator]: function (): IteratorResult<string, boolean> {
      return this;
    },
  } as IterableIterator;
  return iterator;
}
