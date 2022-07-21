(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.newlineIterator = factory());
})(this, (function () { 'use strict';

    /**
     * Find indexOf CR, LF, or CRLF
     *
     * @param string The search string
     * @param offset The offset for searching
     * @param includeLength Include the length in the return value
     * @returns When includeLength is true, returns a pair of [offset, length] to provide the length of CR (1), LF (1) or CRLF (2)
     */ function indexOfNewline(string) {
        var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, includeLength = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (offset < 0) throw new Error("Unexpected negative offset");
        if (offset > string.length) throw new Error("Offset is longer than the string. Offset: ".concat(offset, ". String: ").concat(string.length));
        while(offset < string.length){
            var value = string[offset];
            if (value === "\n") return includeLength ? [
                offset,
                1
            ] : offset;
            else if (value === "\r") {
                return includeLength ? [
                    offset,
                    string[offset + 1] === "\n" ? 2 : 1
                ] : offset;
            }
            offset++;
        }
        return includeLength ? [
            -1,
            0
        ] : -1;
    }

    var hasIterator = typeof Symbol !== "undefined" && Symbol.iterator;
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
