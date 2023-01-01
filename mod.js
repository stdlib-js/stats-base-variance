// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var l,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(r,e)||i.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=f.value,r.__proto__=l):r[e]=f.value),_="get"in f,p="set"in f,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,f.get),p&&a&&a.call(r,e,f.set),r};function l(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function _(r,e,t,n){var o,a,u,i,f,l,p,y,d,b,v,s,j;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(v=0,j=0;j<r;j++)v+=e[o],o+=t;return v}if(r<=128){for(a=e[o],u=e[o+t],i=e[o+2*t],f=e[o+3*t],l=e[o+4*t],p=e[o+5*t],y=e[o+6*t],d=e[o+7*t],o+=8*t,b=r%8,j=8;j<r-b;j+=8)a+=e[o],u+=e[o+t],i+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],p+=e[o+5*t],y+=e[o+6*t],d+=e[o+7*t],o+=8*t;for(v=a+u+(i+f)+(l+p+(y+d));j<r;j++)v+=e[o],o+=t;return v}return s=c(r/2),_(s-=s%8,e,t,o)+_(r-s,e,t,o+s*t)}function p(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e[n],n+=t;return o}return _(r,e,t,n)}function y(r,e,t,n){var o,a,u,i,f,l,c;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===n)return 0;for(o=p(r,t,n)/r,a=n<0?(1-r)*n:0,u=0,i=0,c=0;c<r;c++)u+=(f=t[a]-o)*f,i+=f,a+=n;return u/l-i/r*(i/l)}l(p,"ndarray",_),l(y,"ndarray",(function(r,e,t,n,o){var a,u,i,f,l,c,p;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(a=_(r,t,n,o)/r,u=o,i=0,f=0,p=0;p<r;p++)i+=(l=t[u]-a)*l,f+=l,u+=n;return i/c-f/r*(f/c)}));const{ndarray:d}=y;function b(r,e,t,n){return y(r,e,t,n)}l(b,"ndarray",(function(r,e,t,n,o){return d(r,e,t,n,o)}));const{ndarray:v}=b;export{b as default,v as ndarray};
//# sourceMappingURL=mod.js.map
