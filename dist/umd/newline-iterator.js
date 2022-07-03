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

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
            for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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
                var ref = _slicedToArray(indexOfNewline(string, offset, true), 2), index = ref[0], skip = ref[1];
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
