!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("index-of-newline")):"function"==typeof define&&define.amd?define(["index-of-newline"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).newlineIterator=e(t.indexOfNewline)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],f=!0,u=!1;try{for(n=n.call(t);!(f=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);f=!0);}catch(t){u=!0,i=t}finally{try{f||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}return function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.string=t,this.offset=0}var o,f,u;return o=e,(f=[{key:"next",value:function(){if(this.offset>=this.string.length)return null;var t=i(n.default(this.string,this.offset,!0),2),e=t[0],r=t[1];e<0&&(e=this.string.length-this.offset,r=0);var o=this.string.substr(this.offset,e-this.offset);return this.offset=e+r,o}},{key:t,value:function(){var t=this;return{next:function(){var e=t.next();return null===e?{value:void 0,done:!0}:{value:e,done:!1}}}}}])&&r(o.prototype,f),u&&r(o,u),e}(Symbol.iterator)}));
//# sourceMappingURL=index.js.map