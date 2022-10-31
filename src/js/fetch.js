import axios from 'axios';

const searchBar = document.querySelector('.search');
const cocktailList = document.querySelector('.coctails__list');
const cocktailsBox = document.querySelector('.cocktails__wrapper');

searchBar.addEventListener('submit', onSubmit);

function onSubmit() {
  event.preventDefault();

  if (searchBar.searchQuery.value === '') {
    fetchRandom(checkDisplayType());
  } else {
    main(fetchByName, searchBar.searchQuery.value);
  }
}

async function fetchByName(cocktailName) {
  cocktailList.innerHTML = '';
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  )
    .then(response => response.json())
    .then(data => data.drinks);
}

async function fetchByLetter(letter) {
  cocktailList.innerHTML = '';
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(response => response.json())
    .then(data => data.drinks)
    .then(data => createMarkup(data));
}

async function main(callback, searchValue) {
  const data = await callback(searchValue);
  let currentPage = 1;
  let cardsPerPage = await checkDisplayType();

  async function displayList(array, cards, page) {
    const start = cards * (page - 1);
    const end = start + cards;
    const paginatedData = array.slice(start, end);
    const markup = await createMarkup(paginatedData);
  }

  function displayPagination(array, cards) {
    const pagination = document.querySelector('.pagination');
    console.log(pagination);
    if (pagination) {
      pagination.remove();
    }

    const pagesCount = Math.ceil(array.length / cards);
    if (pagesCount === 1) {
      return;
    }
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination');

    for (let i = 0; i < pagesCount; i += 1) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    cocktailsBox.appendChild(ulEl);
    ulEl.addEventListener('click', event => {
      console.log(event.target);
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

  displayList(data, cardsPerPage, currentPage);
  displayPagination(data, cardsPerPage);
}

async function checkDisplayType() {
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
  if (array === null) {
    cocktailsBox.classList.add('is-hidden');
    noCocktails.classList.remove('is-hidden');
    return;
  }
  const markup = array
    .map(data => {
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
            <button type="button" class="info__btn learn-more-btn">
              Learn more
            </button>
            <button type="button" class="info__btn add-to-btn">
              Add to<svg class="coctails__icon" width="18" height="18">
                <use href="/coctails-icon.6571b9e4.svg#disactive-heart"></use>
              </svg>
            </button>
            <button type="button" class="info__btn remove-btn  is-hidden">
              Remove<svg class="coctails__icon" width="18" height="18">
                <use href=".src/images/coctails-icon.svg#active-heart"></use>
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
      .then(data => data.drinks);
    promises.push(promise);
  }
  Promise.all(promises)
    .then(value => value.flat())
    .then(data => createMarkup(data));
}

fetchRandom(checkDisplayType());
