!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("5k7tO",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(t,e){l.default(t,e),e.add(t)};var s,l=(s=o("5k7tO"))&&s.__esModule?s:{default:s};var u={};function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t,e,n){e&&d(t.prototype,e);n&&d(t,n);return t};var f=new WeakSet,h=new WeakSet,p=function(){"use strict";function e(n,r){t(i)(this,e),t(c)(this,f),t(c)(this,h),this.el=document.querySelector(n),this.wrap=document.querySelector(".select__list"),this.input=document.querySelector(".select__input"),this.selectedId=r.selectedId,t(a)(this,f,v).call(this),t(a)(this,h,m).call(this)}return t(u)(e,[{key:"clickHandler",value:function(t){var e=t.target.dataset.type;if("input"===e)this.toggle(),document.addEventListener("click",this.closeSelectOnClick);else if("item"===e){var n=t.target.dataset.id;this.select(n)}}},{key:"isOpen",get:function(){return this.el.classList.contains("open")}},{key:"select",value:function(t){this.selectedId=t,this.input.textContent=this.selectedId,this.el.querySelectorAll('[data-type="item"]').forEach((function(t){return t.classList.remove("selected")})),this.el.querySelector('[data-id="'.concat(t,'"]')).classList.add("selected"),this.close()}},{key:"closeSelectOnClick",value:function(t){"input"!==t.target.dataset.type&&(document.querySelector("#select").classList.remove("open"),document.removeEventListener("click",this.closeSelectOnClick))}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){this.el.classList.add("open")}},{key:"close",value:function(){this.el.classList.remove("open")}},{key:"destroy",value:function(){this.el.removeEventListener("click",this.clickHsndler),this.el.innerHTML=""}}]),e}();function v(){this.el.classList.add("select"),this.wrap.innerHTML=function(){for(var t=[],e=65;e<=90;e+=1)t.push('<li class="select__item" data-type="item" data-id="&#'.concat(e,'">&#').concat(e,"</li>"));for(var n=49;n<=57;n+=1)t.push('<li class="select__item" data-type="item" data-id="&#'.concat(n,'">&#').concat(n,"</li>"));return t.push('<li class="select__item" data-type="item" data-id="&#48">&#48</li>'),t}().join(""),this.input.textContent=this.selectedId,this.el.querySelector('[data-id="'.concat(this.selectedId,'"]')).classList.add("selected")}function m(){this.clickHandler=this.clickHandler.bind(this),this.closeSelectOnClick=this.closeSelectOnClick.bind(this),this.el.addEventListener("click",this.clickHandler)}var g={};function y(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)}))}};var _={},b=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new q(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var _={};s(_,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(O([])));L&&L!==n&&r.call(L,i)&&(_=L);var w=y.prototype=m.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=y,s(w,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(S.prototype),s(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(_);try{regeneratorRuntime=b}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=b:Function("r","regeneratorRuntime = r")(b)}var L=document.querySelector(".search"),w=document.querySelector(".coctails__list"),k=document.querySelector(".cocktails__wrapper"),S=document.querySelector(".coctails-no-found"),x='<span class="heart-active">\n                  <svg\n                    class="coctails__icon"\n                    width="21"\n                    height="19"\n                    viewBox="0 0 21 19"\n                    fill="none"\n                    xmlns="http://www.w3.org/2000/svg"\n                  >\n                    <path\n                      d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"\n                      fill="#FD5103"\n                    />\n                  </svg>\n                </span>',E='<span class="heart-disactive">\n                  <svg\n                    class="coctails__icon"\n                    width="21"\n                    height="19"\n                    viewBox="0 0 21 19"\n                    fill="none"\n                    xmlns="http://www.w3.org/2000/svg"\n                  >\n                    <path\n                      d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"\n                      fill="#FD5103"\n                    />\n                    <path\n                      d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z"\n                      \n                    />\n                  </svg>\n                </span>';function C(t){t.preventDefault(),""===t.target.searchQuery.value?P(F()):I(q,t.target.searchQuery.value),t.target.reset(),document.querySelector(".container-menu").classList.add("visually-hidden")}function q(t){return O.apply(this,arguments)}function O(){return(O=t(g)(t(_).mark((function e(n){return t(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w.innerHTML="",t.abrupt("return",fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n)).then((function(t){return t.json()})).then((function(t){return t.drinks})).catch((function(t){return console.log(t)})));case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function j(t){if(null!==t){var e=t.map((function(t){for(var e=t.strDrink,n=t.strInstructions,r=t.strDrinkThumb,o="",i=[],a=1;a<=15;a++)t[o="strIngredient"+a]&&i.push(t[o]);return{name:e,instruction:n,img:r,ingredients:i}}));return localStorage.setItem("cocktails",JSON.stringify(e)),t}}function T(t){return M.apply(this,arguments)}function M(){return(M=t(g)(t(_).mark((function e(n){return t(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w.innerHTML="",t.abrupt("return",fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(n)).then((function(t){return t.json()})).then((function(t){return t.drinks})).catch((function(t){return console.log(t)})));case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function I(t,e){return N.apply(this,arguments)}function N(){return N=t(g)(t(_).mark((function e(n,r){var o,i,a,c,s,l,u;return t(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(t,e,n){return s.apply(this,arguments)},s=function(){return(s=t(g)(t(_).mark((function e(n,r,o){var i,a,c;return t(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==n){t.next=6;break}return k.classList.add("visually-hidden"),S.classList.remove("visually-hidden"),t.abrupt("return");case 6:k.classList.remove("visually-hidden"),S.classList.add("visually-hidden");case 7:return a=(i=r*(o-1))+r,c=n.slice(i,a),t.next=12,A(c);case 12:t.sent;case 13:case"end":return t.stop()}}),e)})))).apply(this,arguments)},l=function(t,e){var n=document.querySelector(".pagination");n&&n.remove();var r=Math.ceil(t.length/e);if(1!==r){var s=document.createElement("ul");s.classList.add("pagination");for(var l=0;l<r;l+=1){var d=u(l+1);s.appendChild(d)}k.appendChild(s),s.addEventListener("click",(function(t){"LI"===t.target.nodeName&&(document.querySelector(".pagination__item--active").classList.remove("pagination__item--active"),t.path[0].classList.add("pagination__item--active"),i=t.target.textContent,c(o,a,i))}))}},u=function(t){var e=document.createElement("li");return e.classList.add("pagination__item"),e.innerText=t,i===t&&e.classList.add("pagination__item--active"),e},e.next=6,n(r);case 6:return o=e.sent,e.next=9,j(o);case 9:return e.sent,i=1,a=F(),e.prev=16,e.next=19,c(o,a,i);case 19:l(o,a),e.next=24;break;case 22:e.prev=22,e.t0=e.catch(16);case 24:case"end":return e.stop()}}),e,null,[[16,22]])}))),N.apply(this,arguments)}function F(){return window.innerWidth>=1280?9:window.innerWidth>=768?6:3}function A(t){return H.apply(this,arguments)}function H(){return(H=t(g)(t(_).mark((function e(n){var r;return t(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.map((function(t){var e,n,r,o=t.strDrink,i=t.strDrinkThumb,a=JSON.parse(localStorage.getItem("favoriteCocktails"));return(e=!!a&&a.findIndex((function(t){return t.name===o}))>-1)?(r="Remove",n=x):(r="Add to",n=E),'<li class="coctails__item">\n        <img\n          src="'.concat(i,'"\n          alt="').concat(o,'"\n          width="280"\n          class="coctails__image"\n        />\n        <div class="coctails-info">\n          <h3 class="coctails__name">').concat(o,'</h3>\n          <div class="coctails__btn">\n            <button type="button" class="info__btn learn-more-btn" data-name="').concat(o,'" data-include="').concat(e,'">\n              Learn more\n            </button>\n            <button type="button" class="info__btn add-to-btn" data-favorite="').concat(e,'">\n              ').concat(r).concat(n,"\n            </button>\n\n          </div>\n        </div>\n      </li>")})).join(""),w.innerHTML=r,t.abrupt("return",r);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function P(t){for(var e=[],n=0;n<t;n+=1){var r=fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(t){return t.json()})).then((function(t){return t.drinks})).catch((function(t){return console.log(t)}));e.push(r)}Promise.all(e).then((function(t){return t.flat()})).then((function(t){return j(t)})).then((function(t){return A(t)}))}function B(t){return D.apply(this,arguments)}function D(){return(D=t(g)(t(_).mark((function e(n){return t(_).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=".concat(n)).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return console.log(t)})));case 1:case"end":return t.stop()}}),e)})))).apply(this,arguments)}w.addEventListener("click",(function(t){document.querySelector(".add-to-favorite");if("BUTTON"===t.target.nodeName){var e=t.target.dataset,n=e.name,r=(e.include,e.favorite);if(n){var o=n,i=JSON.parse(localStorage.cocktails).find((function(t){return t.name===o}));console.log(i)}else if("false"===r){t.target.dataset.favorite=!0,t.target.dataset.include=!0,t.target.innerHTML="Remove".concat(x);var a=t.target.previousElementSibling.dataset.name,c=JSON.parse(localStorage.cocktails).find((function(t){return t.name===a})),s=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];s.push(c),localStorage.setItem("favoriteCocktails",JSON.stringify(s))}else if("true"===r){t.target.dataset.favorite=!1,t.target.dataset.include=!1,t.target.innerHTML="Add to".concat(E);var l=t.target.previousElementSibling.dataset.name,u=JSON.parse(localStorage.favoriteCocktails).filter((function(t){return t.name!==l}));localStorage.setItem("favoriteCocktails",JSON.stringify(u))}}})),L.addEventListener("submit",C),P(F());var J=new p("#select",{selectedId:"A"});document.querySelector("#select").addEventListener("click",(function(t){if(console.log("before if"),t.path[0].classList.contains("select__item")){console.log(J.selectedId);try{console.log("try"),I(T,J.selectedId)}catch(t){console.log(t)}}}));var G,R=document.querySelector(".fillter__list");!function(){for(var t=[],e=65;e<=90;e+=1)t.push('<li class="item" data-type="item""><button  data-id="&#'.concat(e,'" type="button" class="fillter_button">&#').concat(e,"</button></li>"));for(var n=49;n<=57;n+=1)t.push('<li class="item" data-type="item" "><button data-id="&#'.concat(n,'" type="button" class="fillter_button">&#').concat(n,"</button></li>"));t.push('<li class="item" data-type="item" ><button data-id="&#48" type="button" class="fillter_button">&#48</button></li>'),R.insertAdjacentHTML("beforeend",t.join(""))}(),R.addEventListener("click",(function(t){var e=t.target.dataset.id;if(t.path[0].classList.contains("fillter_button")){G&&G.classList.remove("fillter_button--current");try{I(T,e)}catch(t){console.log(t)}G=t.path[0],t.path[0].classList.add("fillter_button--current")}}));var W={openFavorite:document.querySelector(".js-link-favorite"),menuFavorite:document.querySelector(".header-list-menu"),openBurgerFavorite:document.querySelector(".js-burger-favorite"),menuBurgerFavorite:document.querySelector(".header-list-burger-menu")};function Y(t){var e=document.querySelector(".hero"),n=document.querySelector(".cocktails__wrapper"),r=document.querySelector(".coctails__list");if(W.menuFavorite.classList.add("visually-hidden"),"Favorite cocktails"===t.target.textContent){var o,i=null!==(o=JSON.parse(localStorage.getItem("favoriteCocktails")))&&void 0!==o?o:[];if(Array.isArray(i)&&0!==i.length){e.classList.add("visually-hidden"),n.firstElementChild.textContent="Favorite cocktails";var a=i.map((function(t){var e=t.name,n=t.img,r=!0,o="Remove";return'<li class="coctails__item">\n        <img\n          src="'.concat(n,'"\n          alt="').concat(e,'"\n          width="280"\n          class="coctails__image"\n        />\n        <div class="coctails-info">\n          <h3 class="coctails__name">').concat(e,'</h3>\n          <div class="coctails__btn">\n            <button type="button" class="info__btn learn-more-btn" data-name="').concat(e,'" data-include="').concat(r,'">\n              Learn more\n            </button>\n            <button type="button" class="info__btn add-to-btn" data-favorite="').concat(r,'">\n              ').concat(o,'<span class="heart-active">\n                  <svg\n                    class="coctails__icon"\n                    width="21"\n                    height="19"\n                    viewBox="0 0 21 19"\n                    fill="none"\n                    xmlns="http://www.w3.org/2000/svg"\n                  >\n                    <path\n                      d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"\n                      fill="#FD5103"\n                    />\n                  </svg>\n                </span>\n            </button>\n\n          </div>\n        </div>\n      </li>')})).join("");r.innerHTML=a}else{e.classList.add("visually-hidden");n.innerHTML='<h2 class="coctails__title">Favorite Cocktails</h2><p class="alert-message">You haven\'t added any favorite cocktails yet</p>'}}document.querySelector(".container-menu").classList.add("visually-hidden")}W.openFavorite.addEventListener("click",(function(t){t.preventDefault(),W.menuFavorite.classList.toggle("visually-hidden")})),W.openBurgerFavorite.addEventListener("click",(function(t){t.preventDefault(),W.menuBurgerFavorite.classList.toggle("visually-hidden")})),W.menuFavorite.addEventListener("click",Y);var Z={openBurger:document.querySelector(".menu-open"),closeBurger:document.querySelector(".close-burger-menu"),burgerMenu:document.querySelector(".container-menu")};Z.openBurger.addEventListener("click",(function(){Z.burgerMenu.classList.toggle("visually-hidden");var t=document.querySelector(".search-burger");document.querySelector(".header-list-burger-menu").addEventListener("click",Y),t.addEventListener("submit",C)})),Z.closeBurger.addEventListener("click",(function(){Z.burgerMenu.classList.add("visually-hidden")}));var U=document.querySelector(".coctails__list"),V=document.querySelector(".coctails-close-btn"),Q=document.querySelector(".coctails-modal__backdrop"),z=document.querySelector("body"),K=document.querySelector(".coctails-modal__list"),X=(document.querySelector(".coctails-close-btn"),document.querySelector(".ing-modal__backdrop")),$=document.querySelector(".ingridient-close-btn");U.addEventListener("click",(function(t){if(t.target.classList.contains("learn-more-btn")){Q.classList.remove("is-close"),tt=t.target.dataset.name,document.querySelector(".coctails-modal__title").textContent=tt,z.classList.add("no-scroll");var e=document.querySelector(".coctails-modal__img"),n=JSON.parse(localStorage.cocktails).find((function(t){return t.name===tt})),r=document.querySelector(".coctails-modal__instruction");e.src=n.img,r.textContent=n.instruction;for(var o=[],i=0;i<n.ingredients.length;i+=1)o.push('<li class="coctails-modal__item" data-type="coctails-modal__item"><button  data-id="'.concat(n.ingredients[i],'" type="button" class="coct__ingridient">').concat(n.ingredients[i],"</button></li>"));K.innerHTML=o.join(""),document.addEventListener("keydown",et)}})),V.addEventListener("click",rt);var tt="";function et(t){"Escape"===t.code&&rt()}function nt(){X.classList.add("is-ingridient-hidden"),document.addEventListener("keydown",et)}function rt(){Q.classList.add("is-close"),z.classList.remove("no-scroll"),document.removeEventListener("keydown",nt),document.removeEventListener("keydown",et)}K.addEventListener("click",(function(t){var e=document.querySelector(".ingridient-modal__title"),n=document.querySelector(".ingridient-modal__sub-title"),r=document.querySelector(".ingridient-modal__info"),o=document.querySelector(".alcohol-content");if(t.target.classList.contains("coct__ingridient")){X.classList.remove("is-ingridient-hidden"),B(t.target.dataset.id).then((function(t){var i=t.ingredients[0];e.textContent=i.strIngredient,n.textContent=i.strType,r.textContent=i.strDescription,"Yes"===i.strAlcohol&&null!==i.strABV?o.textContent="Alcohol Content: "+i.strABV:"No"===i.strAlcohol&&null===i.strABV?o.textContent="Not Alcoholic":o.textContent=""}))}document.removeEventListener("keydown",et),document.addEventListener("keydown",nt)})),$.addEventListener("click",(function(t){X.classList.add("is-ingridient-hidden"),document.addEventListener("keydown",et)}));var ot,it,at={body:document.querySelector("body"),label:document.querySelector(".theme-switch__label")};at.label.addEventListener("click",(function(){at.body.classList.toggle("change-toggle-color");var t=document.querySelectorAll(".heart-disactive");console.log("span",t),t.forEach((function(t){return t.classList.toggle("dark")})),document.querySelector(".hero__filter__text").classList.toggle("dark");var e=localStorage.getItem("theme");null===e||"light"===e?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")})),ot=localStorage.getItem("theme"),it=document.querySelectorAll(".heart-disactive"),null!==ot&&"light"!==ot&&(document.querySelector("body").classList.toggle("change-toggle-color"),it.forEach((function(t){return t.classList.toggle("dark")})),document.querySelector(".hero__filter__text").classList.toggle("dark"))}();
//# sourceMappingURL=index.b7708546.js.map