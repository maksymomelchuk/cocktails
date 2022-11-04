const refs = {
  body: document.querySelector('body'),
  label: document.querySelector('.theme-switch__label'),
  input: document.querySelector('.burger-switch__input'),
};
console.log(refs.labelBurger);

refs.label.addEventListener('click', () => {
  refs.body.classList.toggle('change-toggle-color');
});

refs.input.addEventListener('click', () => {
  refs.body.classList.toggle('change-toggle-color');
});
