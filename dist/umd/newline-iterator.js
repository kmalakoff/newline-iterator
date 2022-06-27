(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('index-of-newline')) :
    typeof define === 'function' && define.amd ? define(['index-of-newline'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.newlineIterator = factory(global.indexOfNewline));
})(this, (function (indexOfNewline) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var indexOfNewline__default = /*#__PURE__*/_interopDefaultLegacy(indexOfNewline);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    var hasIterator = typeof Symbol !== 'undefined' && Symbol.iterator;
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
    function newlineIterator(string) {
        var offset = 0;
        var iterator = {
            next: function () {
                if (offset >= string.length)
                    return { value: undefined, done: true };
                var _a = __read(indexOfNewline__default["default"](string, offset, true), 2), index = _a[0], skip = _a[1];
                if (index < 0) {
                    index = string.length;
                    skip = 0;
                }
                var line = string.substr(offset, index - offset);
                offset = index + skip;
                return { value: line, done: false };
            },
        };
        if (hasIterator) {
            iterator[Symbol.iterator] = function () {
                return this;
            };
        }
        return iterator;
    }

    return newlineIterator;

}));
//# sourceMappingURL=newline-iterator.js.map
