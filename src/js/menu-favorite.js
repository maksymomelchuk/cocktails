const refs = {
  openFavorite: document.querySelector('.js-link-favorite'),
  menuFavorite: document.querySelector('.header-list-menu'),
  openBurgerFavorite: document.querySelector('.js-burger-favorite'),
};

refs.openFavorite.addEventListener('click', openFavoriteMenu);
refs.openBurgerFavorite.addEventListener('click', openFavoriteMenu);

function openFavoriteMenu(e) {
  e.preventDefault();
  refs.menuFavorite.classList.toggle('visually-hidden');
}
