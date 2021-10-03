/**
 * String iterator CR, LF, or CRLF
 *
 * @param string The string to iterate through
 */
export default class NewlineIterator {
    protected string: string;
    protected offset: number;
    constructor(string: string);
    /**
     * Get the next line if it exists
     *
     * @return The next line or null if there are no more lines
     *
     * ```typescript
     * import NewlineIterator from "newline-iterator";
     *
     * const iterator = new NewlineIterator("some\r\nstring\ncombination\r");
     * console.log(iterator.next()); // "some"
     * console.log(iterator.next()); // "string"
     * console.log(iterator.next()); // "combination"
     * console.log(iterator.next()); // null
     * ```
     */
    next(): string | null;
    /**
     * Generates an iterator using the Symbol.iterator interface
     *
     * ```typescript
     * import NewlineIterator from "newline-iterator";
     *
     * const iterator = new NewlineIterator("some\r\nstring\ncombination\r");
     * const results = [];
     * for (const line of iterator) results.push(line);
     * console.log(results); // ["some", "string", "combination"];
     * ```
     */
    [Symbol.iterator](): Iterator<string>;
}
