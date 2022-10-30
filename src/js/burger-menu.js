const refs = {
  openFavorite: document.querySelector('.js-link-favorite'),
  menuFavorite: document.querySelector('.header-list-menu'),
};

refs.openFavorite.addEventListener('click', openFavoriteMenu);

function openFavoriteMenu() {
  refs.menuFavorite.classList.toggle('is-hidden');
}
