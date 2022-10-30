import { Select } from './select/select';
const select = new Select('#select', {
  selectedId: 'A',
});

// console.log(select.selectedId);

const input = document.querySelector('#select');

input.addEventListener('click', onInputClick);

function onInputClick(event) {
  if (event.path[0].classList.contains('select__item')) {
    console.log(select.selectedId);
  }
}

// document.addEventListener('click', closeSelectOnClick);
// function closeSelectOnClick(event) {
//   if (!event.target.classList.contains('select__input')) {
//     console.log(select.isOpen);
//     select.close();
//     document.removeEventListener('click', closeSelectOnClick);
//   }
// }
