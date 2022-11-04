import { onSubmit } from './fetch';
import { onFavoritCocktailClick } from './menu-favorite';
const refs = {
  openBurger: document.querySelector('.menu-open'),
  closeBurger: document.querySelector('.close-burger-menu'),
  burgerMenu: document.querySelector('.container-menu'),
};

refs.openBurger.addEventListener('click', openBurgerMenu);
refs.closeBurger.addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
  refs.burgerMenu.classList.toggle('visually-hidden');
  const input = document.querySelector('.search-burger');
  const list = document.querySelector('.header-list-burger-menu');
  list.addEventListener('click', onFavoritCocktailClick);
  input.addEventListener('submit', onSubmit);
}

function closeBurgerMenu() {
  refs.burgerMenu.classList.add('visually-hidden');
}
