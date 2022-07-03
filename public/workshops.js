(()=>{"use strict";var n,r,e,t,o,i,a,c,s,l,p,d,u,f,v={166:(n,r,e)=>{e.d(r,{Z:()=>u});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),s=e.n(c),l=new URL(e(573),e.b),p=a()(o()),d=s()(l);p.push([n.id,"div.blogsbanner {\r\n    height: 40vw;\r\n    overflow: hidden;\r\n    background-image: url("+d+');\r\n    background-size: cover;\r\n    background-position-y: center;\r\n    position: relative;\r\n    top: -56px;\r\n    z-index: -2;\r\n    margin-bottom: -56px;\r\n    display: flex;\r\n    align-content: flex-end;\r\n    flex-wrap: wrap;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\ndiv.blogsbanner div span:last-of-type {\r\n    text-shadow: 0px 2px 4px var(--ttc);\r\n}\r\ndiv.blogsbanner div span:first-of-type {\r\n    color: var(--ptc);\r\n    font-size: 2em;\r\n    font-family: "Roboto-Slab-bold";\r\n}\r\ndiv.blogsbanner div hr {\r\n    width: calc(100% - 20px);\r\n    border: 2px solid var(--as);\r\n    margin: 5px 0;\r\n}\r\ndiv.blogsbanner div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    align-items: flex-end;\r\n    width: 50%;\r\n    background-color: #0084ff10;\r\n    height: calc(100% - 56px);\r\n    justify-content: center;\r\n    padding: 0 20px 0 40px;\r\n    text-align: end;\r\n    color: var(--ptc);\r\n    margin-top: 28px;\r\n    backdrop-filter: blur(2px);\r\n}\r\n\r\nsection {\r\n    display: flex;\r\n    margin: 25px auto;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    margin-top: 50px;\r\n}\r\n\r\nsection article {\r\n    position: relative;\r\n    display: flex;\r\n    width: 360px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--white);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\narticle ul li {\r\n    list-style: none;\r\n}\r\narticle ul li::before {\r\n    content: "arrow_right";\r\n    vertical-align: middle;\r\n    font-family: "Material Icons";\r\n    font-size: large;\r\n    position: relative;\r\n    top: -2px;\r\n    color: var(--stc);\r\n    left: -5px;\r\n}\r\narticle span.name {\r\n    font-family: "Roboto-Slab-bold";\r\n    font-size: large;\r\n    margin-top: 15px;\r\n}\r\n\r\narticle ul {\r\n    padding: 15px;\r\n}\r\n\r\nsection article img {\r\n    width: 100%;\r\n}\r\n\r\n/* Desktop View */\r\n@media only screen and (min-width: 755px) {\r\n    section:last-of-type > article.front {\r\n        transform: scale(1.1);\r\n        position: absolute;\r\n        z-index: 2;\r\n    }\r\n\r\n    section article:first-of-type {\r\n        left: 50px;\r\n    }\r\n    section article:last-of-type {\r\n        left: -50px;\r\n    }\r\n    section article {\r\n        margin: 10px;\r\n        box-shadow: var(--shadow-back);\r\n    }\r\n\r\n    section article:hover,\r\n    section article.front:hover {\r\n        transform: scale(1.15);\r\n        z-index: 5;\r\n    }\r\n}\r\n\r\n/* Mobile View */\r\n@media only screen and (max-width: 755px) {\r\n    section div.column {\r\n        display: block;\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    div.blogsbanner {\r\n        height: 300px;\r\n    }\r\n    div.blogsbanner > div {\r\n        width: 100%;\r\n        text-align: justify;\r\n        align-items: center;\r\n    }\r\n\r\n    section article {\r\n        padding: 7px;\r\n        width: 100%;\r\n    }\r\n}\r\n',""]);const u=p},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var v=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var p=e(i[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},573:(n,r,e)=>{n.exports=e.p+"ba4445cd8c1805a685ce.png"}},h={};function g(n){var r=h[n];if(void 0!==r)return r.exports;var e=h[n]={id:n,exports:{}};return v[n](e,e.exports,g),e.exports}g.m=v,g.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return g.d(r,{a:r}),r},g.d=(n,r)=>{for(var e in r)g.o(r,e)&&!g.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var r=g.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),r=g.n(n),e=g(795),t=g.n(e),o=g(569),i=g.n(o),a=g(565),c=g.n(a),s=g(216),l=g.n(s),p=g(589),d=g.n(p),u=g(166),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();