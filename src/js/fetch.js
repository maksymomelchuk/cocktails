const searchBar = document.querySelector('.search-form');
const cocktailList = document.querySelector('.coctails__list');

searchBar.addEventListener('submit', onSubmit);

fetchRandom();

function onSubmit() {
  event.preventDefault();

  if (searchBar.searchQuery.value === '') {
    fetchRandom();
  } else {
    fetchByName(searchBar.searchQuery.value);
  }
}

function fetchByName(cocktailName) {
  cocktailList.innerHTML = '';
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  )
    .then(response => response.json())
    .then(data => data.drinks)
    .then(data => createMarkup(data));
}

function fetchRandom() {
  let quantity;
  if (window.innerWidth >= 1280) {
    quantity = 9;
  } else if (window.innerWidth >= 768) {
    quantity = 6;
  } else {
    quantity = 3;
  }
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

function fetchByLetter(letter) {
  cocktailList.innerHTML = '';
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(response => response.json())
    .then(data => data.drinks)
    .then(data => data.forEach(el => console.log(el)));
}

function createMarkup(array) {
  console.log(array);
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
          <p class="coctails__name">${strDrink}</p>
          <div class="coctails__btn">
            <button type="button" class="info__btn learn-more-btn">
              Learn more
            </button>
            <button type="button" class="info__btn add-to-btn">
              Add to<svg class="coctails__icon" width="18" height="18">
                <use href="./images/coctails-icon.svg#disactive-heart"></use>
              </svg>
            </button>
            <button type="button" class="info__btn remove-btn is-hidden">
              Remove<svg class="coctails__icon" width="18" height="18">
                <use href="./images/coctails-icon.svg#active-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`;
    })
    .join('');
  cocktailList.innerHTML = markup;
}
