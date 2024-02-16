"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
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
 */ "default", {
    enumerable: true,
    get: function() {
        return newlineIterator;
    }
});
var _indexofnewline = /*#__PURE__*/ _interop_require_default(require("index-of-newline"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hasIterator = typeof Symbol !== "undefined" && Symbol.iterator;
function newlineIterator(string) {
    var offset = 0;
    var iterator = {
        next: function next() {
            if (offset >= string.length) return {
                value: undefined,
                done: true
            };
            var args = (0, _indexofnewline.default)(string, offset, true);
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

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  for (var key in exports) exports.default[key] = exports[key];
  module.exports = exports.default;
}