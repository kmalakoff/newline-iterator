"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=t(require("index-of-newline"));function e(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function n(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,i,o=[],u=!0,l=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(o.push(n.value),!r||o.length!==r);u=!0);}catch(t){l=!0,i=t}finally{try{u||null==e.return||e.return()}finally{if(l)throw i}}return o}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}let o;o=Symbol.iterator;module.exports=class{constructor(t){e(this,"string",void 0),e(this,"offset",void 0),this.string=t,this.offset=0}next(){if(this.offset>=this.string.length)return null;let t=n(r.default(this.string,this.offset,!0),2),e=t[0],i=t[1];e<0&&(e=this.string.length-this.offset,i=0);const o=this.string.substr(this.offset,e-this.offset);return this.offset=e+i,o}[o](){return{next:()=>{const t=this.next();return null===t?{value:void 0,done:!0}:{value:t,done:!1}}}}};
//# sourceMappingURL=index.js.map
