import { fetchIngridient } from './fetch';

const openLearnMore = document.querySelector('.coctails__list');
const closeLearnMore = document.querySelector('.coctails-close-btn');
const learnMoreMenu = document.querySelector('.coctails-modal__backdrop');
const body = document.querySelector('body');
const ingredientList = document.querySelector('.coctails-modal__list');
const ingridientsClose = document.querySelector('.coctails-close-btn');
const ingridientModal = document.querySelector('.ing-modal__backdrop');
const ingridientCloseBtn = document.querySelector('.ingridient-close-btn');
openLearnMore.addEventListener('click', onOpenLearnMore);
closeLearnMore.addEventListener('click', onCloseLearnMore);
let coctName = '';
function onOpenLearnMore(event) {
  if (event.target.classList.contains('learn-more-btn')) {
    learnMoreMenu.classList.remove('is-close');
    coctName = event.target.dataset.name;
    const coctTitle = document.querySelector('.coctails-modal__title');
    coctTitle.textContent = coctName;
    body.classList.add('no-scroll');
    const coctImg = document.querySelector('.coctails-modal__img');

    const selectedCocktail = JSON.parse(localStorage.cocktails).find(
      el => el.name === coctName
    );
    const coctInstruction = document.querySelector(
      '.coctails-modal__instruction'
    );

    coctImg.src = selectedCocktail.img;
    coctInstruction.textContent = selectedCocktail.instruction;

    const coctIngridients = [];
    for (let i = 0; i < selectedCocktail.ingredients.length; i += 1) {
      coctIngridients.push(
        `<li class="coctails-modal__item" data-type="coctails-modal__item"><button  data-id="${selectedCocktail.ingredients[i]}" type="button" class="coct__ingridient">${selectedCocktail.ingredients[i]}</button></li>`
      );
    }

    ingredientList.innerHTML = coctIngridients.join('');

    const currentFavorites =
      JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
    const isInFavorite = currentFavorites.find(item => item.name === coctName);
    console.log(coctName);
    const addToFavoriteCocktail = document.querySelector('.add-to-favorite');
    console.log(addToFavoriteCocktail);
    if (!isInFavorite) {
      addToFavoriteCocktail.textContent = 'Add to favorite';
    } else {
      addToFavoriteCocktail.textContent = 'Remove from favorite';
    }
    // ! onCocktailCardClick(event, coctName); handler for click
    addToFavoriteCocktail.addEventListener('click', onCocktailCardClick);

    document.addEventListener('keydown', learnMoreEscPressed);
  }
}

function learnMoreEscPressed(event) {
  if (event.code === 'Escape') {
    onCloseLearnMore();
  }
}

ingredientList.addEventListener('click', onIngridientClick);

function onIngridientClick(event) {
  const ingridientTitle = document.querySelector('.ingridient-modal__title');
  const drinkType = document.querySelector('.ingridient-modal__sub-title');
  const ingrDescription = document.querySelector('.ingridient-modal__info');
  const alcoholContent = document.querySelector('.alcohol-content');
  if (event.target.classList.contains('coct__ingridient')) {
    ingridientModal.classList.remove('is-ingridient-hidden');
    const ingrName = event.target.dataset.id;

    fetchIngridient(ingrName).then(data => {
      const ingridient = data.ingredients[0];
      ingridientTitle.textContent = ingridient.strIngredient;
      drinkType.textContent = ingridient.strType;
      ingrDescription.textContent = ingridient.strDescription;
      if (ingridient.strAlcohol === 'Yes' && ingridient.strABV !== null) {
        alcoholContent.textContent = 'Alcohol Content: ' + ingridient.strABV;
      } else if (ingridient.strAlcohol === 'No' && ingridient.strABV === null) {
        alcoholContent.textContent = 'Not Alcoholic';
      } else {
        alcoholContent.textContent = '';
      }
    });
  }

  document.removeEventListener('keydown', learnMoreEscPressed);
  document.addEventListener('keydown', ingridientEscPressed);
}

function ingridientEscPressed() {
  ingridientModal.classList.add('is-ingridient-hidden');
  document.addEventListener('keydown', learnMoreEscPressed);
}

ingridientCloseBtn.addEventListener('click', onIngridientCloseBtn);

function onIngridientCloseBtn(event) {
  ingridientModal.classList.add('is-ingridient-hidden');
  document.addEventListener('keydown', learnMoreEscPressed);
}

function onCloseLearnMore() {
  learnMoreMenu.classList.add('is-close');
  body.classList.remove('no-scroll');
  document.removeEventListener('keydown', ingridientEscPressed);
  document.removeEventListener('keydown', learnMoreEscPressed);
}

function onCocktailCardClick(event) {
  const currentCocktail = event.target.parentNode.childNodes[3].textContent;
  if (event.target.textContent === 'Add to favorite') {
    event.target.textContent = 'Remove from favorite';
    // const currentFavoriteCocktails =
  } else {
    event.target.textContent = 'Add to favorite';
  }
}

// function onCocktailCardClick(event, cocktailName) {
//   if (event.target.textContent === 'Add to favorite') {
//     const cocktailFromLocalStorage = JSON.parse(localStorage.cocktails).find(
//       el => el.name === cocktailName
//     );
//     event.target.dataset.include = true;
//     // event.target.dataset.favorite = true;
//     // event.target.textContent = 'Remove from favorite';
//     const currentFavorites =
//       JSON.parse(localStorage.getItem('favoriteCocktails')) || [];
//     currentFavorites.push(cocktailFromLocalStorage);
//     localStorage.setItem('favoriteCocktails', JSON.stringify(currentFavorites));
//   } else {
//     event.target.dataset.include = false;
//     // event.target.dataset.favorite = false;
//     // event.target.textContent = 'Add to favorite';
//     const cocktailFromLocalStorage = JSON.parse(
//       localStorage.favoriteCocktails
//     ).filter(el => el.name !== cocktailName);
//     localStorage.setItem(
//       'favoriteCocktails',
//       JSON.stringify(cocktailFromLocalStorage)
//     );
//   }
// }
