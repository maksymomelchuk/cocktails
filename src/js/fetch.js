import axios from 'axios';

const searchBar = document.querySelector('.search');

searchBar.addEventListener('submit', onSubmit);

function onSubmit() {
  event.preventDefault();

  if (searchBar.searchQuery.value === '') {
    // fetchRandom(checkDisplayType());
  } else {
    fetchByName(searchBar.searchQuery.value);
  }
}

async function fetchByName(cocktailName) {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  );
  const data = await response.drinks;
  console.log(data);
  return data;
}

// async function clg(data) {
//   console.log(data);
// }
