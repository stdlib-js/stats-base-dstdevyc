// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,_,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,d="set"in t,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),d&&i&&i.call(e,r,t.set),e};function c(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(e,r,t,n){var o,a,i,u,l,f,c;if(f=e-r,e<=0||f<=0)return NaN;if(1===e||0===n)return 0;for(o=t[a=n<0?(1-e)*n:0],a+=n,i=0,c=2;c<=e;c++)i+=1/(c*(c-1))*(l=c*(u=t[a])-(o+=u))*l,a+=n;return i/f}function d(e,r,t,n,o){var a,i,u,l,f,c,_;if(c=e-r,e<=0||c<=0)return NaN;if(1===e||0===n)return 0;for(a=t[o],i=o+n,u=0,_=2;_<=e;_++)u+=1/(_*(_-1))*(f=_*(l=t[i])-(a+=l))*f,i+=n;return u/c}c(_,"ndarray",d);var p=Math.sqrt;function y(e,r,t,n){return p(_(e,r,t,n))}function s(e,r,t,n,o){return p(d(e,r,t,n,o))}c(y,"ndarray",s),e.default=y,e.ndarray=s,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dstdevyc={});
//# sourceMappingURL=browser.js.map
