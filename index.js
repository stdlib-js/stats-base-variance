// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var l,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(r,e)||a.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=f.value,r.__proto__=l):r[e]=f.value),_="get"in f,p="set"in f,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,f.get),p&&i&&i.call(r,e,f.set),r};function l(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function _(r,e,t,n){var o,i,u,a,f,l,p,d,y,b,s,v,j;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(s=0,j=0;j<r;j++)s+=e[o],o+=t;return s}if(r<=128){for(i=e[o],u=e[o+t],a=e[o+2*t],f=e[o+3*t],l=e[o+4*t],p=e[o+5*t],d=e[o+6*t],y=e[o+7*t],o+=8*t,b=r%8,j=8;j<r-b;j+=8)i+=e[o],u+=e[o+t],a+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],p+=e[o+5*t],d+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(s=i+u+(a+f)+(l+p+(d+y));j<r;j++)s+=e[o],o+=t;return s}return v=c(r/2),_(v-=v%8,e,t,o)+_(r-v,e,t,o+v*t)}function p(r,e,t){var n,o,i;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,i=0;i<r;i++)o+=e[n],n+=t;return o}return _(r,e,t,n)}function d(r,e,t,n){var o,i,u,a,f,l,c;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=p(r,t,n)/r,i=n<0?(1-r)*n:0,u=0,a=0,c=0;c<r;c++)u+=(f=t[i]-o)*f,a+=f,i+=n;return u/l-a/r*(a/l)}l(p,"ndarray",_),l(d,"ndarray",(function(r,e,t,n,o){var i,u,a,f,l,c,p;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(i=_(r,t,n,o)/r,u=o,a=0,f=0,p=0;p<r;p++)a+=(l=t[u]-i)*l,f+=l,u+=n;return a/c-f/r*(f/c)}));const{ndarray:y}=d;function b(r,e,t,n){return d(r,e,t,n)}return l(b,"ndarray",(function(r,e,t,n,o){return y(r,e,t,n,o)})),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).variance=e();
//# sourceMappingURL=index.js.map
