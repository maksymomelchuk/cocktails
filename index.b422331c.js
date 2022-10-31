!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},c=t.parcelRequired7c6;null==c&&((c=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var c={id:e,exports:{}};return n[e]=c,t.call(c.exports,c,c.exports),c.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=c),c.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){a.default(e,t),t.add(e)};var l,a=(l=c("5k7tO"))&&l.__esModule?l:{default:l};var u={};function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,n){t&&d(e.prototype,t);n&&d(e,n);return e};var h=new WeakSet,f=new WeakSet,v=function(){"use strict";function t(n,i){e(o)(this,t),e(r)(this,h),e(r)(this,f),this.el=document.querySelector(n),this.wrap=document.querySelector(".select__list"),this.input=document.querySelector(".select__input"),this.selectedId=i.selectedId,e(s)(this,h,p).call(this),e(s)(this,f,m).call(this)}return e(u)(t,[{key:"clickHandler",value:function(e){var t=e.target.dataset.type;if("input"===t)this.toggle(),document.addEventListener("click",this.closeSelectOnClick);else if("item"===t){var n=e.target.dataset.id;this.select(n)}}},{key:"isOpen",get:function(){return this.el.classList.contains("open")}},{key:"select",value:function(e){this.selectedId=e,this.input.textContent=this.selectedId,this.el.querySelectorAll('[data-type="item"]').forEach((function(e){return e.classList.remove("selected")})),this.el.querySelector('[data-id="'.concat(e,'"]')).classList.add("selected"),this.close()}},{key:"closeSelectOnClick",value:function(e){"input"!==e.target.dataset.type&&(document.querySelector("#select").classList.remove("open"),document.removeEventListener("click",this.closeSelectOnClick))}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){this.el.classList.add("open")}},{key:"close",value:function(){this.el.classList.remove("open")}},{key:"destroy",value:function(){this.el.removeEventListener("click",this.clickHsndler),this.el.innerHTML=""}}]),t}();function p(){this.el.classList.add("select"),this.wrap.innerHTML=function(){for(var e=[],t=65;t<=90;t+=1)e.push('<li class="select__item" data-type="item" data-id="&#'.concat(t,'">&#').concat(t,"</li>"));for(var n=49;n<=57;n+=1)e.push('<li class="select__item" data-type="item" data-id="&#'.concat(n,'">&#').concat(n,"</li>"));return e.push('<li class="select__item" data-type="item" data-id="&#48">&#48</li>'),e}().join(""),this.input.textContent=this.selectedId,this.el.querySelector('[data-id="'.concat(this.selectedId,'"]')).classList.add("selected")}function m(){this.clickHandler=this.clickHandler.bind(this),this.closeSelectOnClick=this.closeSelectOnClick.bind(this),this.el.addEventListener("click",this.clickHandler)}var y=document.querySelector(".search"),b=document.querySelector(".coctails__list"),_=document.querySelector(".coctails-no-found"),g=document.querySelector(".cocktails__wrapper");document.querySelector(".add-to-btn"),document.querySelector(".remove-btn");function k(){var e;e=window.innerWidth>=1280?9:window.innerWidth>=768?6:3;for(var t=[],n=0;n<e;n+=1){var i=fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){return e.drinks}));t.push(i)}Promise.all(t).then((function(e){return e.flat()})).then((function(e){return L(e)}))}function w(e){b.innerHTML="",fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(e)).then((function(e){return e.json()})).then((function(e){return e.drinks})).then((function(e){return L(e)}))}function L(e){if(null===e)return console.log("array is null"),g.classList.add("is-hidden"),void _.classList.remove("is-hidden");var t=e.map((function(e){var t=e.strDrink,n=e.strDrinkThumb;return'<li class="coctails__item">\n        <img\n          src="'.concat(n,'"\n          alt="').concat(t,'"\n          width="280"\n          class="coctails__image"\n        />\n        <div class="coctails-info">\n          <h3 class="coctails__name">').concat(t,'</h3>\n          <div class="coctails__btn">\n            <button type="button" class="info__btn learn-more-btn">\n              Learn more\n            </button>\n            <button type="button" class="info__btn add-to-btn">\n              Add to<svg class="coctails__icon" width="18" height="18">\n                <use href="./images/coctails-icon.svg#disactive-heart"></use>\n              </svg>\n            </button>\n            <button type="button" class="info__btn remove-btn  is-hidden">\n              Remove<svg class="coctails__icon" width="18" height="18">\n                <use href="./images/coctails-icon.svg#active-heart"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n      </li>')})).join("");b.innerHTML=t,document.querySelector(".add-to-btn").addEventListener("click",S)}function S(){console.log("click")}y.addEventListener("submit",(function(){event.preventDefault(),""===y.searchQuery.value?k():(e=y.searchQuery.value,b.innerHTML="",fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){return e.json()})).then((function(e){return e.drinks})).then((function(e){return L(e)})));var e})),k();var q=new v("#select",{selectedId:"A"});document.querySelector("#select").addEventListener("click",(function(e){if(e.path[0].classList.contains("select__item")){console.log(q.selectedId);try{w(q.selectedId)}catch(e){console.log(e)}}}));var j,O=document.querySelector(".fillter__list");!function(){for(var e=[],t=65;t<=90;t+=1)e.push('<li class="item" data-type="item""><button  data-id="&#'.concat(t,'" type="button" class="fillter_button">&#').concat(t,"</button></li>"));for(var n=49;n<=57;n+=1)e.push('<li class="item" data-type="item" "><button data-id="&#'.concat(n,'" type="button" class="fillter_button">&#').concat(n,"</button></li>"));e.push('<li class="item" data-type="item" ><button data-id="&#48" type="button" class="fillter_button">&#48</button></li>'),O.insertAdjacentHTML("beforeend",e.join(""))}(),O.addEventListener("click",(function(e){var t=e.target.dataset.id;if(e.path[0].classList.contains("fillter_button")){j&&j.classList.remove("fillter_button--current"),console.log(e.target.dataset.id);try{w(t)}catch(e){console.log(e)}j=e.path[0],e.path[0].classList.add("fillter_button--current")}}));var E={openBurger:document.querySelector(".menu-open"),closeBurger:document.querySelector(".close-burger-menu"),burgerMenu:document.querySelector(".container-menu")};E.openBurger.addEventListener("click",(function(){E.burgerMenu.classList.toggle("visually-hidden")})),E.closeBurger.addEventListener("click",(function(){E.burgerMenu.classList.add("visually-hidden")}));var M={openFavorite:document.querySelector(".js-link-favorite"),menuFavorite:document.querySelector(".header-list-menu")};M.openFavorite.addEventListener("click",(function(e){e.preventDefault(),M.menuFavorite.classList.toggle("visually-hidden")}))}();
//# sourceMappingURL=index.b422331c.js.map
