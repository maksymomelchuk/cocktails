import axios from 'axios';
import image from '../images/no-found-desktop.png';

const searchBar = document.querySelector('.search');
const cocktailList = document.querySelector('.coctails__list');
const cocktailsBox = document.querySelector('.cocktails__wrapper');
const cocktailsItem = document.querySelector('.coctails__item');
const noCocktails = document.querySelector('.coctails-no-found');
const learnMoreBtn = document.querySelector('.learn-more-btn');
const containerRef = document.querySelector('#main-container');

cocktailList.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  let { name, modal, favorite } = event.target.dataset;

  if (name) {
    const cocktailName = name;
    console.log('cocktailName', cocktailName);

    const cocktailFromLocalStorage = JSON.parse(localStorage.cocktails).find(
      el => el.name === cocktailName
    );
    console.log('cocktailFromLocalStorage', cocktailFromLocalStorage);
  }

  if (favorite === 'false') {
    event.target.dataset.favorite = true;
    console.log(event.target.dataset.favorite);
    const active = event.target;
    active.innerHTML = `Remove<span class="heart-active">
                  <svg class="coctails__icon" width="18" height="18">
                    <use
                      href="/coctails-icon.6571b9e4.svg#active-heart"
                    ></use>
                  </svg></span>`;
    console.log('active', active);
    // active.classList.remove('visually-hidden');
    // event.target.classList.add('visually-hidden');
    const cocktailName = event.target.previousElementSibling.dataset.name;
    console.log('cocktailName', cocktailName);
    // const cocktailFromLocalStorage = JSON.parse(localStorage.cocktails).find(
    //   el => el.name === cocktailName
    // );
    // const currentFavorites =
    //   JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
    // currentFavorites.push(cocktailFromLocalStorage);
    // localStorage.setItem('favoriteCocktails', JSON.stringify(currentFavorites));
  }
});

searchBar.addEventListener('submit', onSubmit);

function onSubmit() {
  event.preventDefault();

  if (searchBar.searchQuery.value === '') {
    fetchRandom(checkDisplayType());
  } else {
    pagination(fetchByName, searchBar.searchQuery.value);
  }
  searchBar.reset();
}

async function fetchByName(cocktailName) {
  cocktailList.innerHTML = '';
  return (
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    )
      .then(response => response.json())
      .then(data => data.drinks)
      // .then(data => addQueryToLocalStorage(data))
      .catch(error => console.log(error))
  );
}

function addQueryToLocalStorage(array) {
  if (array === null) {
    return;
  }
  const newArray = array.map(data => {
    const { strDrink, strInstructions, strDrinkThumb } = data;
    let cocktail = '';
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      cocktail = 'strIngredient' + i;
      if (data[cocktail]) {
        ingredients.push(data[cocktail]);
      }
    }
    return {
      name: strDrink,
      instruction: strInstructions,
      img: strDrinkThumb,
      ingredients: ingredients,
    };
  });
  localStorage.setItem('cocktails', JSON.stringify(newArray));
  return array;
}

async function fetchByLetter(letter) {
  cocktailList.innerHTML = '';
  return (
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(response => response.json())
      .then(data => data.drinks)
      // .then(data => addQueryToLocalStorage(data))
      .catch(error => console.log(error))
  );
}

async function pagination(callback, searchValue) {
  const data = await callback(searchValue);
  const addToLocal = await addQueryToLocalStorage(data);
  let currentPage = 1;
  let cardsPerPage = checkDisplayType();

  async function displayList(array, cards, page) {
    if (array === null) {
      console.log('array is null');
      cocktailsBox.classList.add('visually-hidden');
      noCocktails.classList.remove('visually-hidden');
      return;
    } else {
      cocktailsBox.classList.remove('visually-hidden');
      noCocktails.classList.add('visually-hidden');
    }
    const start = cards * (page - 1);
    const end = start + cards;
    const paginatedData = array.slice(start, end);
    const markup = await createMarkup(paginatedData);
  }

  function displayPagination(array, cards) {
    const pagination = document.querySelector('.pagination');
    if (pagination) {
      pagination.remove();
    }

    const pagesCount = Math.ceil(array.length / cards);
    if (pagesCount === 1) {
      return;
    }
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination');
    console.log(ulEl);
    console.log(pagesCount);
    for (let i = 0; i < pagesCount; i += 1) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    cocktailsBox.appendChild(ulEl);
    ulEl.addEventListener('click', event => {
      if (event.target.nodeName !== 'LI') {
        return;
      }
      const activePage = document.querySelector('.pagination__item--active');
      activePage.classList.remove('pagination__item--active');
      const pageToActivate = event.path[0];
      pageToActivate.classList.add('pagination__item--active');
      currentPage = event.target.textContent;
      displayList(data, cardsPerPage, currentPage);
    });
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;
    if (currentPage === page) {
      liEl.classList.add('pagination__item--active');
    }
    return liEl;
  }

  try {
    await displayList(data, cardsPerPage, currentPage);
    displayPagination(data, cardsPerPage);
  } catch (error) {}
}

function checkDisplayType() {
  let quantity;
  if (window.innerWidth >= 1280) {
    quantity = 9;
  } else if (window.innerWidth >= 768) {
    quantity = 6;
  } else {
    quantity = 3;
  }
  return quantity;
}

async function createMarkup(array) {
  const markup = array
    .map(data => {
      const favorite = localStorage.favoriteCocktails || false;
      const { strDrink, strDrinkThumb } = data;
      return `<li class="coctails__item">
        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
          width="280"
          class="coctails__image"
        />
        <div class="coctails-info">
          <h3 class="coctails__name">${strDrink}</h3>
          <div class="coctails__btn">
            <button type="button" class="info__btn learn-more-btn" data-name="${strDrink}" data-modal="open">
              Learn more
            </button>
            <button type="button" class="info__btn add-to-btn" data-favorite="${favorite}">
              Add to<span><svg class="coctails__icon" width="18" height="18">
                <use href="/coctails-icon.6571b9e4.svg#disactive-heart"></use>
              </svg></span>
            </button>
            <button type="button" class="info__btn remove-btn  visually-hidden">
              Remove<svg class="coctails__icon" width="18" height="18">
                <use href="/coctails-icon.6571b9e4.svg#active-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`;
    })
    .join('');
  cocktailList.innerHTML = markup;
  return markup;
}

function fetchRandom(quantity) {
  const promises = [];
  for (let i = 0; i < quantity; i += 1) {
    const promise = fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    )
      .then(response => response.json())
      .then(data => data.drinks)
      .catch(error => console.log(error));
    promises.push(promise);
  }
  Promise.all(promises)
    .then(value => value.flat())
    .then(data => addQueryToLocalStorage(data))
    .then(data => createMarkup(data));
}

async function fetchIngridient(ingridient) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingridient}`
  )
    .then(response => response.json())
    .then(data => console.log(data.ingredients[0]))
    .catch(error => console.log(error));
}
fetchRandom(checkDisplayType());

export { pagination, fetchByLetter };
