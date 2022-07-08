/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={568:e=>{e.exports={apiKey:"AIzaSyCM8xHE9RHHi98REfbZzuhY7rRfbzBHBZk",authDomain:"atmayogashala-3485c.firebaseapp.com",projectId:"atmayogashala-3485c",storageBucket:"atmayogashala-3485c.appspot.com",messagingSenderId:"961587176450",appId:"1:961587176450:web:9c07e30a5798d1dec5b31b",measurementId:"G-B1PXC0TV69"}},340:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(81),a=r.n(n),i=r(645),o=r.n(i),s=r(667),c=r.n(s),d=new URL(r(538),r.b),l=new URL(r(849),r.b),h=new URL(r(922),r.b),p=new URL(r(411),r.b),u=o()(a()),f=c()(d),g=c()(l),m=c()(h),b=c()(p);u.push([e.id,"div.products {\r\n    width: 100%;\r\n    height: auto;\r\n    margin-bottom: 50px;\r\n}\r\n\r\narticle {\r\n    min-height: 300px;\r\n    height: auto;\r\n    background-image: url("+f+");\r\n    background-size: cover;\r\n    margin-top: 45px;\r\n    background-repeat: no-repeat;\r\n    background-position-x: right;\r\n    overflow: hidden;\r\n    background-color: var(--ttc);\r\n    background-position-y: center;\r\n    margin-bottom: 45px;\r\n}\r\n\r\narticle {\r\n    background-image: url("+g+");\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    margin-top: 0;\r\n}\r\n\r\narticle div.title div:last-of-type {\r\n    font-size: 1.1em;\r\n    padding-top: 5px;\r\n    color: var(--ptc);\r\n}\r\narticle div.title div:first-of-type {\r\n    border-bottom: 2px solid var(--stc);\r\n    font-size: 2em;\r\n    padding-bottom: 5px;\r\n    color: var(--as);\r\n}\r\narticle div.title {\r\n    display: flex;\r\n    max-width: 33%;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 10px 10px 10px 10px;\r\n    min-width: 245px;\r\n    width: auto;\r\n    height: auto;\r\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.6) 100%);\r\n    border-radius: 10px;\r\n}\r\n\r\narticle div.more button {\r\n    height: 36px;\r\n    padding: 6px 12px;\r\n    background-color: var(--ap);\r\n    border: none;\r\n    border-radius: 8px;\r\n    box-shadow: var(--shadow-close);\r\n    color: var(--white);\r\n    font-family: \"Roboto-Slab-bold\";\r\n}\r\narticle div.more {\r\n    display: flex;\r\n    width: 15%;\r\n    min-height: inherit;\r\n    position: absolute;\r\n    align-items: center;\r\n    height: 100%;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 01) 100%);\r\n    justify-content: center;\r\n}\r\n\r\narticle div.card:hover {\r\n    transform: scale(1.05);\r\n}\r\narticle div.cards {\r\n    display: flex;\r\n    width: 60%;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    padding: 10px;\r\n    justify-content: space-evenly;\r\n}\r\n\r\narticle div.cards div.card {\r\n    height: 225px;\r\n    width: 160px;\r\n    margin-right: 15px;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    background-color: var(--white);\r\n    box-shadow: var(--shadow-close);\r\n    transition: transform 0.3s ease-in-out;\r\n    background: linear-gradient(0deg, #3f3f3f 0%, #bebebe 12%, var(--white) 18%);\r\n}\r\n\r\narticle div.cards div.card img {\r\n    height: 100px;\r\n}\r\n\r\narticle div.cards div.card span.description {\r\n    font-size: smaller;\r\n    color: var(--ptc);\r\n    margin: 2px 8px;\r\n    word-wrap: break-word;\r\n    display: block;\r\n    border-top: 1px solid var(--stc);\r\n}\r\narticle div.cards div.card span.author {\r\n    font-size: smaller;\r\n    color: var(--ap);\r\n    padding: 0 5px;\r\n    word-wrap: break-word;\r\n    display: block;\r\n}\r\n\r\narticle div.cards div.card span.title {\r\n    position: absolute;\r\n    color: var(--white);\r\n    /* font-family: 'Roboto-Slab-bold'; */\r\n    bottom: 125px;\r\n    left: 00px;\r\n    width: 160px;\r\n    border-radius: 0 10px 0 0;\r\n    padding: 5px 5px 5px 5px;\r\n    word-wrap: break-word;\r\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\r\n}\r\n/* Desktop Start */\r\n@media only screen and (min-width: 756px) {\r\n    div.products div.solo div.container,\r\n    div.products div.group div.container {\r\n        max-width: calc(100vw - 330px);\r\n    }\r\n\r\n    div.products > div {\r\n        background-position-y: center;\r\n    }\r\n}\r\ndiv.products div.solo {\r\n    background-image: url("+m+");\r\n    min-height: 200px;\r\n    background-position-x: left;\r\n    background-size: contain;\r\n    margin-bottom: 20px;\r\n}\r\n\r\ndiv.products div.group {\r\n    background-image: url("+b+');\r\n    min-height: 200px;\r\n    background-position-x: right;\r\n    background-size: contain;\r\n}\r\n\r\ndiv.products div.solo div.container,\r\ndiv.products div.group div.container {\r\n    min-height: 200px;\r\n    padding: 20px;\r\n    color: black;\r\n    background-color: var(--bgb);\r\n    position: relative;\r\n}\r\n\r\ndiv.products div.solo div.container {\r\n    float: right;\r\n}\r\n\r\ndiv.products div.container div.title {\r\n    font-weight: bolder;\r\n    font-size: 1.5em;\r\n}\r\n\r\ndiv.products div.container div.info {\r\n}\r\ndiv.products div.container div.more {\r\n    color: var(--ptc);\r\n}\r\n\r\ndiv.products div.container hr {\r\n    margin-top: 4px;\r\n    margin-bottom: 4px;\r\n    border: 2px solid var(--as);\r\n    width: 150px;\r\n}\r\n\r\ndiv.products div.container button {\r\n    position: absolute;\r\n    height: 36px;\r\n    padding: 6px 12px;\r\n    background-color: var(--ap);\r\n    border: none;\r\n    border-radius: 8px;\r\n    box-shadow: var(--shadow-close);\r\n    color: var(--white);\r\n    font-family: "Roboto-Slab-bold";\r\n    float: right;\r\n    bottom: 20px;\r\n    right: 20px;\r\n}\r\n\r\n/* Mobile Start */\r\n@media only screen and (max-width: 755px) {\r\n    div.products > div {\r\n        display: flex;\r\n        background-repeat: no-repeat;\r\n    }\r\n    div.products > div > div.container {\r\n        width: 100%;\r\n        max-width: 100%;\r\n        margin-top: calc(100% * 0.667);\r\n    }\r\n    article div.title {\r\n        background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent);\r\n        text-align: center;\r\n        padding-top: 20px;\r\n        max-width: 100%;\r\n        align-items: center;\r\n    }\r\n\r\n    article div.more {\r\n        width: 100%;\r\n        align-items: center;\r\n        justify-content: center;\r\n        min-height: 80px;\r\n        padding: 10px;\r\n        position: relative;\r\n        flex-direction: column;\r\n        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));\r\n    }\r\n\r\n    article div.cards div.card img {\r\n        width: 100%;\r\n        height: 137.5px;\r\n    }\r\n    article div.cards div.card span.title {\r\n        bottom: 152.5px;\r\n        width: 100%;\r\n    }\r\n    article div.cards div.card {\r\n        margin: 15px 0;\r\n        width: 220px;\r\n        height: 290px;\r\n    }\r\n    article div.cards {\r\n        width: 80%;\r\n    }\r\n\r\n    article {\r\n        display: flex;\r\n        align-items: center;\r\n        flex-direction: column;\r\n    }\r\n}\r\n',""]);const v=u},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],l=i[d]||0,h="".concat(d," ").concat(l);i[d]=l+1;var p=r(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=a(u,n);n.byIndex=s,t.splice(s,0,{identifier:h,updater:f,references:1})}o.push(h)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=r(i[o]);t[s].references--}for(var c=n(e,a),d=0;d<i.length;d++){var l=r(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},411:(e,t,r)=>{"use strict";e.exports=r.p+"21f116d0863950870f71.webp"},922:(e,t,r)=>{"use strict";e.exports=r.p+"a7e592004ec3c9f62e14.webp"},849:(e,t,r)=>{"use strict";e.exports=r.p+"836945fbeeb427d2d414.jpg"},538:(e,t,r)=>{"use strict";e.exports=r.p+"2b09ebc5d7e8fada896c.jpg"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{"use strict";var e=r(379),t=r.n(e),n=r(795),a=r.n(n),i=r(569),o=r.n(i),s=r(565),c=r.n(s),d=r(216),l=r.n(d),h=r(589),p=r.n(h),u=r(340),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const g=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const a=e[t],i=t+1<e.length,o=i?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,d=a>>2,l=(3&a)<<4|o>>4;let h=(15&o)<<2|c>>6,p=63&c;s||(p=64,i||(h=64)),n.push(r[d],r[l],r[h],r[p])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(g(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(i>>10)),t[n++]=String.fromCharCode(56320+(1023&i))}else{const i=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const a=r[e.charAt(t++)],i=t<e.length?r[e.charAt(t)]:0;++t;const o=t<e.length?r[e.charAt(t)]:64;++t;const s=t<e.length?r[e.charAt(t)]:64;if(++t,null==a||null==i||null==o||null==s)throw Error();const c=a<<2|i>>4;if(n.push(c),64!==o){const e=i<<4&240|o>>2;if(n.push(e),64!==s){const e=o<<6&192|s;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},b=function(e){return function(e){const t=g(e);return m.encodeByteArray(t,!0)}(e).replace(/\./g,"")};class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}class w extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(E,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}(a,r):"Error",o=`${this.serviceName}: ${i} (${n}).`;return new w(n,o,r)}}const E=/\{\$([^}]+)}/g;function x(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const a of r){if(!n.includes(a))return!1;const r=e[a],i=t[a];if(I(r)&&I(i)){if(!x(r,i))return!1}else if(r!==i)return!1}for(const e of n)if(!r.includes(e))return!1;return!0}function I(e){return null!==e&&"object"==typeof e}class _{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const S="[DEFAULT]";class C{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new v;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:S})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;a.add(e),this.onInitCallbacks.set(n,a);const i=this.instances.get(n);return i&&e(i,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===S?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:S:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class D{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new C(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const A=[];var k;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(k||(k={}));const O={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},L=k.INFO,B={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},T=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),a=B[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${n}]  ${e.name}:`,...r)};let M,N;const R=new WeakMap,H=new WeakMap,$=new WeakMap,j=new WeakMap,P=new WeakMap;let z={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return H.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return U(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function F(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(N||(N=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(V(this),e),U(R.get(this))}:function(...e){return U(t.apply(V(this),e))}:function(e,...r){const n=t.call(V(this),e,...r);return $.set(n,e.sort?e.sort():[e]),U(n)}:(e instanceof IDBTransaction&&function(e){if(H.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));H.set(e,t)}(e),r=e,(M||(M=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>r instanceof e))?new Proxy(e,z):e);var t,r}function U(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(U(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&R.set(t,e)})).catch((()=>{})),P.set(t,e),t}(e);if(j.has(e))return j.get(e);const t=F(e);return t!==e&&(j.set(e,t),P.set(t,e)),t}const V=e=>P.get(e),W=["get","getKey","getAll","getAllKeys","count"],G=["put","add","delete","clear"],Z=new Map;function K(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Z.get(t))return Z.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,a=G.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!W.includes(r))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),a&&i.done]))[0]};return Z.set(t,i),i}var J;J=z,z={...J,get:(e,t,r)=>K(e,t)||J.get(e,t,r),has:(e,t)=>!!K(e,t)||J.has(e,t)};class q{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const X="@firebase/app",Y="0.7.26",Q=new class{constructor(e){this.name=e,this._logLevel=L,this._logHandler=T,this._userLogHandler=null,A.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?O[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}("@firebase/app"),ee={[X]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},te=new Map,re=new Map;function ne(e,t){try{e.container.addComponent(t)}catch(r){Q.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function ae(e){const t=e.name;if(re.has(t))return Q.debug(`There were multiple attempts to register component ${t}.`),!1;re.set(t,e);for(const t of te.values())ne(t,e);return!0}const ie=new y("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});class oe{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}function se(e,t,r){var n;let a=null!==(n=ee[e])&&void 0!==n?n:e;r&&(a+=`-${r}`);const i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${a}" with version "${t}":`];return i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Q.warn(e.join(" "))}ae(new _(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}const ce="firebase-heartbeat-store";let de=null;function le(){return de||(de=function(e,t,{blocked:r,upgrade:n,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=U(o);return n&&o.addEventListener("upgradeneeded",(e=>{n(U(o.result),e.oldVersion,e.newVersion,U(o.transaction))})),r&&o.addEventListener("blocked",(()=>r())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(ce)}}).catch((e=>{throw ie.create("storage-open",{originalErrorMessage:e.message})}))),de}async function he(e,t){var r;try{const r=(await le()).transaction(ce,"readwrite"),n=r.objectStore(ce);return await n.put(t,pe(e)),r.done}catch(e){throw ie.create("storage-set",{originalErrorMessage:null===(r=e)||void 0===r?void 0:r.message})}}function pe(e){return`${e.name}!${e.options.appId}`}class ue{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ge(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=fe(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const a of e){const e=r.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),me(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),me(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=b(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function fe(){return(new Date).toISOString().substring(0,10)}class ge{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await le()).transaction(ce).objectStore(ce).get(pe(e))}catch(e){throw ie.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return he(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return he(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function me(e){return b(JSON.stringify({version:2,heartbeats:e})).length}ae(new _("platform-logger",(e=>new q(e)),"PRIVATE")),ae(new _("heartbeat",(e=>new ue(e)),"PRIVATE")),se(X,Y,""),se(X,Y,"esm2017"),se("fire-js",""),se("firebase","9.8.3","app");const be=function(e,t={}){"object"!=typeof t&&(t={name:t});const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),n=r.name;if("string"!=typeof n||!n)throw ie.create("bad-app-name",{appName:String(n)});const a=te.get(n);if(a){if(x(e,a.options)&&x(r,a.config))return a;throw ie.create("duplicate-app",{appName:n})}const i=new D(n);for(const e of re.values())i.addComponent(e);const o=new oe(e,r,i);return te.set(n,o),o}(r(568));window.firebaseApp=be,console.log("ok")})()})();