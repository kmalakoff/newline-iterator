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
     */
    next(): string | null;
    [Symbol.iterator](): Iterator<string>;
}
