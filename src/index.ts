import indexOfNewline from "index-of-newline";

/**
 * String iterator CR, LF, or CRLF
 *
 * @param string The string to iterate through
 */
export default class NewlineIterator {
  protected string: string;
  protected offset: number;

  constructor(string: string) {
    this.string = string;
    this.offset = 0;
  }

  /**
   * Get the next line if it exists
   *
   * @return The next line or null if there are no more lines
   */
  next(): string | null {
    if (this.offset >= this.string.length) return null;
    let [index, skip] = indexOfNewline(this.string, this.offset, true) as number[];
    if (index < 0) {
      index = this.string.length - this.offset;
      skip = 0;
    }
    const line = this.string.substr(this.offset, index - this.offset);
    this.offset = index + skip;
    return line;
  }

  [Symbol.iterator](): Iterator<string> {
    return {
      next: (): IteratorResult<string> => {
        const result = this.next();
        return result === null ? { value: undefined, done: true } : { value: result, done: false };
      },
    };
  }
}
