const openLearnMore = document.querySelector('.coctails__list');
const closeLearnMore = document.querySelector('.coctails-close-btn');
const learnMoreMenu = document.querySelector('.coctails-modal__backdrop');

console.log(openLearnMore);
openLearnMore.addEventListener('click', onOpenLearnMore);
closeLearnMore.addEventListener('click', onCloseLearnMore);

function onOpenLearnMore(event) {
  // console.log(event.target.classList);
  if (event.target.classList.contains('learn-more-btn')) {
    learnMoreMenu.classList.remove('is-close');
  }
}

function onCloseLearnMore() {
  learnMoreMenu.classList.add('is-close');
}
