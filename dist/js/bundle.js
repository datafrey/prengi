!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=61)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(33))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(17),o={}.hasOwnProperty;t.exports=function(t,n){return o.call(r(t),n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(5),o=e(19),i=e(12);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(13),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(4);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(7),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){"use strict";var r=e(10),o=e(28);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(0),o=e(11).f,i=e(4),c=e(36),u=e(7),a=e(41),f=e(50);t.exports=function(t,n){var e,s,l,p,d,v=t.target,y=t.global,h=t.stat;if(e=y?r:h?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(y?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(5),o=e(34),i=e(12),c=e(6),u=e(16),a=e(2),f=e(18),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(14),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(5),o=e(1),i=e(35);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(5),o=e(18),i=e(20),c=e(16),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(8),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(40),o=e(8);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.12.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(43),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";var r=e(51).forEach,o=e(59)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(57),o=e(1);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())||!Symbol.sham&&r&&r<41}))},function(t,n,e){var r=e(25);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(0),o=e(60),i=e(28),c=e(4);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,e){var r=e(10),o=e(0),i=e(30),c=[].slice,u=function(t){return function(n,e){var r=arguments.length>2,o=r?c.call(arguments,2):void 0;return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,e)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(4),i=e(2),c=e(7),u=e(21),a=e(37),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r,o,i,c=e(38),u=e(0),a=e(3),f=e(4),s=e(2),l=e(8),p=e(39),d=e(24),v=u.WeakMap;if(c||l.state){var y=l.state||(l.state=new v),h=y.get,g=y.has,m=y.set;r=function(t,n){if(g.call(y,t))throw new TypeError("Object already initialized");return n.facade=t,m.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var b=p("state");d[b]=!0,r=function(t,n){if(s(t,b))throw new TypeError("Object already initialized");return n.facade=t,f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(21),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(22),o=e(23),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(42),i=e(11),c=e(19);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(25),o=e(44),i=e(49),c=e(20);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(45),o=e(48).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(6),i=e(46).indexOf,c=e(24);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(6),o=e(26),i=e(47),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(27),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(52),o=e(13),i=e(17),c=e(26),u=e(54),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=7==t,d=5==t||l;return function(v,y,h,g){for(var m,b,S=i(v),x=o(S),_=r(y,h,3),L=c(x.length),w=0,E=g||u,O=n?E(v,L):e||p?E(v,0):void 0;L>w;w++)if((d||w in x)&&(b=_(m=x[w],w,S),t))if(n)O[w]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:a.call(O,m)}else switch(t){case 4:return!1;case 7:a.call(O,m)}return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},function(t,n,e){var r=e(53);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(3),o=e(55),i=e(56)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(14);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(0),o=e(22),i=e(2),c=e(23),u=e(29),a=e(58),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,e){var r,o,i=e(0),c=e(30),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(29);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";e.r(n);e(9),e(31),e(32);var r=function(t){var n,e=t.slidesContainerSelector,r=t.slideIndicatorSelector,o=t.slideIndicatorActiveClass,i=t.backBtnSelector,c=t.forwardBtnSelector,u=t.autoscrollInterval,a=void 0===u?null:u,f=document.querySelector(e),s=document.querySelectorAll(r),l=document.querySelector(i),p=document.querySelector(c),d=0;function v(){var t=f.offsetWidth,n=f.childNodes.length,e=d*(t/n);f.style.transform="translateX(-".concat(e,"px)"),s.forEach((function(t,n){d===n?t.classList.add(o):t.classList.remove(o)}))}function y(){n&&clearInterval(n)}function h(){-1===(d-=1)&&(d=f.childNodes.length-1),y(),v()}function g(t){(d+=1)===f.childNodes.length&&(d=0),t&&y(),v()}v(),s.forEach((function(t,n){t.addEventListener("click",(function(t){t.preventDefault(),d=n,y(),v()}))})),l.addEventListener("click",(function(t){t.preventDefault(),h()})),p.addEventListener("click",(function(t){t.preventDefault(),g(!0)})),a&&(n=setInterval((function(){g(!1)}),a));var m=null,b=null;f.addEventListener("touchstart",(function(t){var n=function(t){return t.touches||t.originalEvent.touches}(t)[0];m=n.clientX,b=n.clientY}),!1),f.addEventListener("touchmove",(function(t){if(m&&b){var n=t.touches[0].clientX,e=t.touches[0].clientY,r=m-n,o=b-e;Math.abs(r)>Math.abs(o)&&(r>0?g(!0):h()),m=null,b=null}}),!1)};var o=function(){var t=document.querySelector(".hamburger"),n=document.querySelector(".header__navigation"),e=document.querySelector(".header__navigation-substrate"),r=document.querySelector(".header__navigation-close");function o(){n.classList.add("header__navigation_hidden"),e.classList.add("header__navigation-substrate_hidden");setTimeout((function(){[n,e,r].forEach((function(t){return t.style.display="none"})),t.classList.remove("hamburger_hidden")}),500)}t.addEventListener("click",(function(o){o.preventDefault(),n.classList.remove("header__navigation_hidden"),e.classList.remove("header__navigation-substrate_hidden"),[n,e,r].forEach((function(t){return t.style.display="flex"})),t.classList.add("hamburger_hidden")})),r.addEventListener("click",o),e.addEventListener("click",o)};document.addEventListener("DOMContentLoaded",(function(){r({slidesContainerSelector:".promo__slider-slides",slideIndicatorSelector:".promo__slider-controllers-indicator",slideIndicatorActiveClass:"promo__slider-controllers-indicator_active",backBtnSelector:".promo__slider-controllers-back",forwardBtnSelector:".promo__slider-controllers-forward",autoscrollInterval:5e3}),r({slidesContainerSelector:".you-will-get__slider-slides",slideIndicatorSelector:".you-will-get__tab",slideIndicatorActiveClass:"you-will-get__tab_active",backBtnSelector:".you-will-get__slider-back",forwardBtnSelector:".you-will-get__slider-forward"}),o()}))}]);