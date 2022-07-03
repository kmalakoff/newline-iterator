import indexOfNewline from 'index-of-newline';
const hasIterator = typeof Symbol !== 'undefined' && Symbol.iterator;
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
 */ export default function newlineIterator(string) {
    let offset = 0;
    const iterator = {
        next () {
            if (offset >= string.length) return {
                value: undefined,
                done: true
            };
            let [index, skip] = indexOfNewline(string, offset, true);
            if (index < 0) {
                index = string.length;
                skip = 0;
            }
            const line = string.substr(offset, index - offset);
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
};
