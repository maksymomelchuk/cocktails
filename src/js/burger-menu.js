const refs = {
  openBurger: document.querySelector('.menu-open'),
  closeBurger: document.querySelector('.close-burger-menu'),
  burgerMenu: document.querySelector('.container-menu'),
};

refs.openBurger.addEventListener('click', openBurgerMenu);
refs.closeBurger.addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
  refs.burgerMenu.classList.toggle('visually-hidden');
}

function closeBurgerMenu() {
  refs.burgerMenu.classList.add('visually-hidden');
}
