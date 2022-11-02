const refs = {
  body: document.querySelector('body'),
  label: document.querySelector('.theme-switch__label'),
};

refs.label.addEventListener('click', () => {
  refs.body.classList.toggle('change-toggle-color');
});
