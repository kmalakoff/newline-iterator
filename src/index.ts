const REGEX_NEW_LINE = /\r?\n|\r/g;

const root = typeof window === 'undefined' ? global : window;
// biome-ignore lint/suspicious/noShadowRestrictedNames: Legacy
const Symbol: SymbolConstructor = typeof root.Symbol === 'undefined' ? ({ iterator: undefined } as unknown as SymbolConstructor) : root.Symbol;

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
export default function newlineIterator(string: string): IterableIterator<string> {
  const lines = string.split(REGEX_NEW_LINE).reverse();
  const iterator = {
    next(): IteratorResult<string, boolean> {
      if (lines.length === 1 && lines[0] === '') return { value: null, done: true };
      return lines.length > 0 ? { value: lines.pop(), done: false } : { value: null, done: true };
    },
    [Symbol.iterator](): Iterator<string> {
      return this;
    },
  };
  return iterator as IterableIterator<string>;
}
