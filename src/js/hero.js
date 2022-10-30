import { Select } from './select/select';
import { fetchByLetter } from './fetch';
const select = new Select('#select', {
  selectedId: 'A',
});

// console.log(select.selectedId);

const input = document.querySelector('#select');

input.addEventListener('click', onInputClick);

function onInputClick(event) {
  if (event.path[0].classList.contains('select__item')) {
    console.log(select.selectedId);
    try {
      fetchByLetter(select.selectedId);
    } catch (error) {
      console.log(error);
    }

    // const screenHeight = document.documentElement.clientHeight;
    // console.log(screenHeight);
    // const cardHeight = document
    //   .querySelector('.coctails__list')
    //   .getBoundingClientRect().top;
    // console.log(cardHeight);
    // window.scrollBy({
    //   top: cardHeight * 100,
    //   behavior: 'smooth',
    // });
  }
}
const fillter__list = document.querySelector('.fillter__list');
const getTabletTemplate = () => {
  const filterArr = [];
  for (let i = 65; i <= 90; i += 1) {
    filterArr.push(
      `<li class="item" data-type="item" data-id="&#${i}"><button type="button" class="fillter_button">&#${i}</button></li>`
    );
  }
  for (let i = 49; i <= 57; i += 1) {
    filterArr.push(
      `<li class="item" data-type="item" data-id="&#${i}"><button type="button" class="fillter_button">&#${i}</button></li>`
    );
  }
  filterArr.push(
    `<li class="item" data-type="item" data-id="&#48"><button type="button" class="fillter_button">&#48</button></li>`
  );

  fillter__list.insertAdjacentHTML('beforeend', filterArr.join(''));
  // return selectArr;
};

getTabletTemplate();

fillter__list.addEventListener('click', fillterClick);
let currentEl;
function fillterClick(event) {
  const symbol = event.target.textContent;

  if (event.path[0].classList.contains('fillter_button')) {
    if (currentEl) {
      currentEl.classList.remove('fillter_button--current');
    }
    try {
      fetchByLetter(symbol);
    } catch (error) {
      console.log(error);
    }

    currentEl = event.path[0];

    event.path[0].classList.add('fillter_button--current');
  }
}
