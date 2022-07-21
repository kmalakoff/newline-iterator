"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
module.exports = newlineIterator;
var _indexOfNewline = _interopRequireDefault(require("index-of-newline"));
function newlineIterator(string) {
    var offset = 0;
    var iterator = {
        next: function next() {
            if (offset >= string.length) return {
                value: undefined,
                done: true
            };
            var args = (0, _indexOfNewline).default(string, offset, true);
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hasIterator = typeof Symbol !== "undefined" && Symbol.iterator;
