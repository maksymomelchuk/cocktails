function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){a.default(e,t),t.add(e)};var l,a=(l=o("7K24o"))&&l.__esModule?l:{default:l};var r=new WeakSet,d=new WeakSet;function u(){this.el.classList.add("select"),this.wrap.innerHTML=(()=>{const e=[];for(let t=65;t<=90;t+=1)e.push(`<li class="select__item" data-type="item" data-id="&#${t}">&#${t}</li>`);for(let t=49;t<=57;t+=1)e.push(`<li class="select__item" data-type="item" data-id="&#${t}">&#${t}</li>`);return e.push('<li class="select__item" data-type="item" data-id="&#48">&#48</li>'),e})().join(""),this.input.textContent=this.selectedId,this.el.querySelector(`[data-id="${this.selectedId}"]`).classList.add("selected")}function m(){this.clickHandler=this.clickHandler.bind(this),this.closeSelectOnClick=this.closeSelectOnClick.bind(this),this.el.addEventListener("click",this.clickHandler)}const h=document.querySelector(".search"),g=document.querySelector(".coctails__list"),f=document.querySelector(".cocktails__wrapper"),p=document.querySelector(".coctails-no-found"),v='<span class="heart-active">\n                  <svg\n                    class="coctails__icon"\n                    width="21"\n                    height="19"\n                    viewBox="0 0 21 19"\n                    fill="none"\n                    xmlns="http://www.w3.org/2000/svg"\n                  >\n                    <path\n                      d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"\n                      fill="#FD5103"\n                    />\n                  </svg>\n                </span>',_='<span class="heart-disactive">\n                  <svg\n                    class="coctails__icon"\n                    width="21"\n                    height="19"\n                    viewBox="0 0 21 19"\n                    fill="none"\n                    xmlns="http://www.w3.org/2000/svg"\n                  >\n                    <path\n                      d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"\n                      fill="#FD5103"\n                    />\n                    <path\n                      d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z"\n                      \n                    />\n                  </svg>\n                </span>';async function y(e){return g.innerHTML="",fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`).then((e=>e.json())).then((e=>e.drinks)).catch((e=>console.log(e)))}function L(e){if(null===e)return;const t=e.map((e=>{const{strDrink:t,strInstructions:n,strDrinkThumb:i}=e;let o="",s=[];for(let t=1;t<=15;t++)o="strIngredient"+t,e[o]&&s.push(e[o]);return{name:t,instruction:n,img:i,ingredients:s}}));return localStorage.setItem("cocktails",JSON.stringify(t)),e}async function b(e){return g.innerHTML="",fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`).then((e=>e.json())).then((e=>e.drinks)).catch((e=>console.log(e)))}async function S(e,t){const n=await e(t);await L(n);let i=1,o=k();async function s(e,t,n){if(null===e)return f.classList.add("visually-hidden"),void p.classList.remove("visually-hidden");f.classList.remove("visually-hidden"),p.classList.add("visually-hidden");const i=t*(n-1),o=i+t,s=e.slice(i,o);await w(s)}function c(e){const t=document.createElement("li");return t.classList.add("pagination__item"),t.innerText=e,i===e&&t.classList.add("pagination__item--active"),t}try{await s(n,o,i),function(e,t){const l=document.querySelector(".pagination");l&&l.remove();const a=Math.ceil(e.length/t);if(1===a)return;const r=document.createElement("ul");r.classList.add("pagination");for(let e=0;e<a;e+=1){const t=c(e+1);r.appendChild(t)}f.appendChild(r),r.addEventListener("click",(e=>{"LI"===e.target.nodeName&&(document.querySelector(".pagination__item--active").classList.remove("pagination__item--active"),e.path[0].classList.add("pagination__item--active"),i=e.target.textContent,s(n,o,i))}))}(n,o)}catch(e){}}function k(){let e;return e=window.innerWidth>=1280?9:window.innerWidth>=768?6:3,e}async function w(e){const t=e.map((e=>{const{strDrink:t,strDrinkThumb:n}=e,i=JSON.parse(localStorage.getItem("favoriteCocktails"));let o,s,c;return o=!!i&&i.findIndex((e=>e.name===t))>-1,o?(c="Remove",s=v):(c="Add to",s=_),`<li class="coctails__item">\n        <img\n          src="${n}"\n          alt="${t}"\n          width="280"\n          class="coctails__image"\n        />\n        <div class="coctails-info">\n          <h3 class="coctails__name">${t}</h3>\n          <div class="coctails__btn">\n            <button type="button" class="info__btn learn-more-btn" data-name="${t}" data-include="${o}">\n              Learn more\n            </button>\n            <button type="button" class="info__btn add-to-btn" data-favorite="${o}">\n              ${c}${s}\n            </button>\n\n          </div>\n        </div>\n      </li>`})).join("");return g.innerHTML=t,t}function C(e){const t=[];for(let n=0;n<e;n+=1){const e=fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((e=>e.json())).then((e=>e.drinks)).catch((e=>console.log(e)));t.push(e)}Promise.all(t).then((e=>e.flat())).then((e=>L(e))).then((e=>w(e)))}async function q(e){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${e}`).then((e=>e.json())).then((e=>e)).catch((e=>console.log(e)))}g.addEventListener("click",(e=>{document.querySelector(".add-to-favorite");if("BUTTON"!==e.target.nodeName)return;let{name:t,include:n,favorite:i}=e.target.dataset;if(t){const e=t,n=JSON.parse(localStorage.cocktails).find((t=>t.name===e));console.log(n)}else if("false"===i){e.target.dataset.favorite=!0,e.target.dataset.include=!0;e.target.innerHTML=`Remove${v}`;const t=e.target.previousElementSibling.dataset.name,n=JSON.parse(localStorage.cocktails).find((e=>e.name===t)),i=JSON.parse(localStorage.getItem("favoriteCocktails"))||[];i.push(n),localStorage.setItem("favoriteCocktails",JSON.stringify(i))}else if("true"===i){e.target.dataset.favorite=!1,e.target.dataset.include=!1;e.target.innerHTML=`Add to${_}`;const t=e.target.previousElementSibling.dataset.name,n=JSON.parse(localStorage.favoriteCocktails).filter((e=>e.name!==t));localStorage.setItem("favoriteCocktails",JSON.stringify(n))}})),h.addEventListener("submit",(function(){event.preventDefault(),""===h.searchQuery.value?C(k()):S(y,h.searchQuery.value);h.reset()})),C(k());const E=new class{clickHandler(e){const{type:t}=e.target.dataset;if("input"===t)this.toggle(),document.addEventListener("click",this.closeSelectOnClick);else if("item"===t){const t=e.target.dataset.id;this.select(t)}}get isOpen(){return this.el.classList.contains("open")}select(e){this.selectedId=e,this.input.textContent=this.selectedId,this.el.querySelectorAll('[data-type="item"]').forEach((e=>e.classList.remove("selected"))),this.el.querySelector(`[data-id="${e}"]`).classList.add("selected"),this.close()}closeSelectOnClick(e){const{type:t}=e.target.dataset;if("input"!==t){document.querySelector("#select").classList.remove("open"),document.removeEventListener("click",this.closeSelectOnClick)}}toggle(){this.isOpen?this.close():this.open()}open(){this.el.classList.add("open")}close(){this.el.classList.remove("open")}destroy(){this.el.removeEventListener("click",this.clickHsndler),this.el.innerHTML=""}constructor(t,n){e(c)(this,r),e(c)(this,d),this.el=document.querySelector(t),this.wrap=document.querySelector(".select__list"),this.input=document.querySelector(".select__input"),this.selectedId=n.selectedId,e(s)(this,r,u).call(this),e(s)(this,d,m).call(this)}}("#select",{selectedId:"A"});document.querySelector("#select").addEventListener("click",(function(e){if(console.log("before if"),e.path[0].classList.contains("select__item")){console.log(E.selectedId);try{console.log("try"),S(b,E.selectedId)}catch(e){console.log(e)}}}));const $=document.querySelector(".fillter__list");let x;(()=>{const e=[];for(let t=65;t<=90;t+=1)e.push(`<li class="item" data-type="item""><button  data-id="&#${t}" type="button" class="fillter_button">&#${t}</button></li>`);for(let t=49;t<=57;t+=1)e.push(`<li class="item" data-type="item" "><button data-id="&#${t}" type="button" class="fillter_button">&#${t}</button></li>`);e.push('<li class="item" data-type="item" ><button data-id="&#48" type="button" class="fillter_button">&#48</button></li>'),$.insertAdjacentHTML("beforeend",e.join(""))})(),$.addEventListener("click",(function(e){const t=e.target.dataset.id;if(e.path[0].classList.contains("fillter_button")){x&&x.classList.remove("fillter_button--current"),console.log(e.target.dataset.id);try{S(b,t)}catch(e){console.log(e)}x=e.path[0],e.path[0].classList.add("fillter_button--current")}}));const M={openBurger:document.querySelector(".menu-open"),closeBurger:document.querySelector(".close-burger-menu"),burgerMenu:document.querySelector(".container-menu")};M.openBurger.addEventListener("click",(function(){M.burgerMenu.classList.toggle("visually-hidden")})),M.closeBurger.addEventListener("click",(function(){M.burgerMenu.classList.add("visually-hidden")}));const I={openFavorite:document.querySelector(".js-link-favorite"),menuFavorite:document.querySelector(".header-list-menu"),openBurgerFavorite:document.querySelector(".js-burger-favorite"),menuBurgerFavorite:document.querySelector(".header-list-burger-menu")};I.openFavorite.addEventListener("click",(function(e){e.preventDefault(),I.menuFavorite.classList.toggle("visually-hidden")})),I.openBurgerFavorite.addEventListener("click",(function(e){e.preventDefault(),I.menuBurgerFavorite.classList.toggle("visually-hidden")})),I.menuFavorite.addEventListener("click",(function(e){const t=document.querySelector(".hero"),n=document.querySelector(".cocktails__wrapper"),i=document.querySelector(".coctails__list");if(I.menuFavorite.classList.add("visually-hidden"),"Favorite cocktails"===e.target.textContent){var o;const e=null!==(o=JSON.parse(localStorage.getItem("favoriteCocktails")))&&void 0!==o?o:[];if(console.log(e.length),Array.isArray(e)&&0!==e.length){t.classList.add("visually-hidden"),n.firstElementChild.textContent="Favorite cocktails";const o=e.map((e=>{const{name:t,img:n}=e,i=!0;return`<li class="coctails__item">\n        <img\n          src="${n}"\n          alt="${t}"\n          width="280"\n          class="coctails__image"\n        />\n        <div class="coctails-info">\n          <h3 class="coctails__name">${t}</h3>\n          <div class="coctails__btn">\n            <button type="button" class="info__btn learn-more-btn" data-name="${t}" data-include="${i}">\n              Learn more\n            </button>\n            <button type="button" class="info__btn add-to-btn" data-favorite="${i}">\n              Remove<span class="heart-active">\n                  <svg\n                    class="coctails__icon"\n                    width="21"\n                    height="19"\n                    viewBox="0 0 21 19"\n                    fill="none"\n                    xmlns="http://www.w3.org/2000/svg"\n                  >\n                    <path\n                      d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"\n                      fill="#FD5103"\n                    />\n                  </svg>\n                </span>\n            </button>\n\n          </div>\n        </div>\n      </li>`})).join("");i.innerHTML=o}else{t.classList.add("visually-hidden");const e='<h2 class="coctails__title">Favorite Cocktails</h2><p class="alert-message">You haven\'t added any favorite cocktails yet</p>';n.innerHTML=e}}}));const O=document.querySelector(".coctails__list"),T=document.querySelector(".coctails-close-btn"),j=document.querySelector(".coctails-modal__backdrop"),F=document.querySelector("body"),N=document.querySelector(".coctails-modal__list"),A=(document.querySelector(".coctails-close-btn"),document.querySelector(".ing-modal__backdrop")),H=document.querySelector(".ingridient-close-btn");O.addEventListener("click",(function(e){if(e.target.classList.contains("learn-more-btn")){j.classList.remove("is-close"),B=e.target.dataset.name;document.querySelector(".coctails-modal__title").textContent=B,F.classList.add("no-scroll");const t=document.querySelector(".coctails-modal__img"),n=JSON.parse(localStorage.cocktails).find((e=>e.name===B)),i=document.querySelector(".coctails-modal__instruction");t.src=n.img,i.textContent=n.instruction;const o=[];for(let e=0;e<n.ingredients.length;e+=1)o.push(`<li class="coctails-modal__item" data-type="coctails-modal__item"><button  data-id="${n.ingredients[e]}" type="button" class="coct__ingridient">${n.ingredients[e]}</button></li>`);N.innerHTML=o.join(""),document.addEventListener("keydown",D)}})),T.addEventListener("click",R);let B="";function D(e){"Escape"===e.code&&R()}function J(){A.classList.add("is-ingridient-hidden"),document.addEventListener("keydown",D)}function R(){j.classList.add("is-close"),F.classList.remove("no-scroll"),document.removeEventListener("keydown",J),document.removeEventListener("keydown",D)}N.addEventListener("click",(function(e){const t=document.querySelector(".ingridient-modal__title"),n=document.querySelector(".ingridient-modal__sub-title"),i=document.querySelector(".ingridient-modal__info"),o=document.querySelector(".alcohol-content");if(e.target.classList.contains("coct__ingridient")){A.classList.remove("is-ingridient-hidden");q(e.target.dataset.id).then((e=>{const s=e.ingredients[0];t.textContent=s.strIngredient,n.textContent=s.strType,i.textContent=s.strDescription,"Yes"===s.strAlcohol&&null!==s.strABV?o.textContent="Alcohol Content: "+s.strABV:"No"===s.strAlcohol&&null===s.strABV?o.textContent="Not Alcoholic":o.textContent=""}))}document.removeEventListener("keydown",D),document.addEventListener("keydown",J)})),H.addEventListener("click",(function(e){A.classList.add("is-ingridient-hidden"),document.addEventListener("keydown",D)}));const P={body:document.querySelector("body"),label:document.querySelector(".theme-switch__label")};P.label.addEventListener("click",(()=>{P.body.classList.toggle("change-toggle-color");const e=document.querySelectorAll(".heart-disactive");console.log("span",e),e.forEach((e=>e.classList.toggle("dark")));document.querySelector(".hero__filter__text").classList.toggle("dark");const t=localStorage.getItem("theme");null===t||"light"===t?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")})),setTimeout((function(){const e=localStorage.getItem("theme"),t=document.querySelectorAll(".heart-disactive");if(null!==e&&"light"!==e){document.querySelector("body").classList.toggle("change-toggle-color"),t.forEach((e=>e.classList.toggle("dark")));document.querySelector(".hero__filter__text").classList.toggle("dark")}}),300);
//# sourceMappingURL=index.b5253a57.js.map
