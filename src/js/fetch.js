const searchBar = document.querySelector('.search-form');

searchBar.addEventListener('submit', onSubmit);

function onSubmit() {
  event.preventDefault();

  if (searchBar.searchQuery.value === '') {
    fetchRandom();
  } else {
    fetchByName(searchBar.searchQuery.value);
  }
}

function fetchByName(cocktailName) {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  )
    .then(response => response.json())
    .then(data => data.drinks)
    .then(data => data.forEach(element => console.log(element)));
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
    .then(data => data.forEach(el => console.log(el)));
}

function fetchByLetter(letter) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(response => response.json())
    .then(data => data.drinks)
    .then(data => data.forEach(el => console.log(el)));
}

fetchByLetter(3);
