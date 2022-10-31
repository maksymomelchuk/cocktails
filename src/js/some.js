// import axios from 'axios';
// const searchBar = document.querySelector('.search');
// const cocktailList = document.querySelector('.coctails__list');
// const noCocktails = document.querySelector('.coctails-no-found');
// const cocktailsBox = document.querySelector('.cocktails__wrapper');
// const addBtn = document.querySelector('.add-to-btn');
// const removeBtn = document.querySelector('.remove-btn');

// searchBar.addEventListener('submit', onSubmit);

// fetchRandom(checkDisplayType());

// function onSubmit() {
//   event.preventDefault();

//   if (searchBar.searchQuery.value === '') {
//     fetchRandom(checkDisplayType());
//   } else {
//     fetchByName(searchBar.searchQuery.value);
//   }
// }

// async function fetchByName(cocktailName) {
//   cocktailList.innerHTML = '';
//   return fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
//   )
//     .then(response => response.json())
//     .then(data => data.drinks)
//     .then(data => createMarkup(data));
// }

// function checkDisplayType() {
//   let quantity;
//   if (window.innerWidth >= 1280) {
//     quantity = 9;
//   } else if (window.innerWidth >= 768) {
//     quantity = 6;
//   } else {
//     quantity = 3;
//   }
//   return quantity;
// }

// function fetchRandom(quantity) {
//   const promises = [];
//   for (let i = 0; i < quantity; i += 1) {
//     const promise = fetch(
//       'https://www.thecocktaildb.com/api/json/v1/1/random.php'
//     )
//       .then(response => response.json())
//       .then(data => data.drinks);
//     promises.push(promise);
//   }
//   Promise.all(promises)
//     .then(value => value.flat())
//     .then(data => createMarkup(data));
// }

// function fetchByLetter(letter) {
//   cocktailList.innerHTML = '';
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
//     .then(response => response.json())
//     .then(data => data.drinks)
//     .then(data => createMarkup(data));
// }

// function createMarkup(array) {
//   if (array === null) {
//     console.log('array is null');
//     cocktailsBox.classList.add('is-hidden');
//     noCocktails.classList.remove('is-hidden');
//     return;
//   }
//   const markup = array
//     .map(data => {
//       const { strDrink, strDrinkThumb } = data;
//       return `<li class="coctails__item">
//         <img
//           src="${strDrinkThumb}"
//           alt="${strDrink}"
//           width="280"
//           class="coctails__image"
//         />
//         <div class="coctails-info">
//           <h3 class="coctails__name">${strDrink}</h3>
//           <div class="coctails__btn">
//             <button type="button" class="info__btn learn-more-btn">
//               Learn more
//             </button>
//             <button type="button" class="info__btn add-to-btn">
//               Add to<svg class="coctails__icon" width="18" height="18">
//                 <use href="/coctails-icon.6571b9e4.svg#disactive-heart"></use>
//               </svg>
//             </button>
//             <button type="button" class="info__btn remove-btn  is-hidden">
//               Remove<svg class="coctails__icon" width="18" height="18">
//                 <use href=".src/images/coctails-icon.svg#active-heart"></use>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </li>`;
//     })
//     .join('');
//   cocktailList.innerHTML = markup;
//   const addBtn = document.querySelector('.add-to-btn');
//   addBtn.addEventListener('click', onClick);
// }

// function onClick() {
//   console.log('click');
// }

// export { fetchByLetter, checkDisplayType, fetchByName, createMarkup };
