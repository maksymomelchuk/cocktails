const refs = {
  openFavorite: document.querySelector('.js-link-favorite'),
  menuFavorite: document.querySelector('.header-list-menu'),
  openBurgerFavorite: document.querySelector('.js-burger-favorite'),
  menuBurgerFavorite: document.querySelector('.header-list-burger-menu'),
};

refs.openFavorite.addEventListener('click', openFavoriteMenu);
refs.openBurgerFavorite.addEventListener('click', openFavoriteBurgerMenu);

function openFavoriteMenu(e) {
  e.preventDefault();
  refs.menuFavorite.classList.toggle('visually-hidden');
}

function openFavoriteBurgerMenu(e) {
  e.preventDefault();
  refs.menuBurgerFavorite.classList.toggle('visually-hidden');
}
