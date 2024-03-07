import { refs } from './refs';

export function headerBtnFuction() {
  refs.headerMenu.classList.toggle('hidden');
  refs.headerContainer.style.position = 'fixed';

  const check =
    refs.burgerSvg.getAttribute('href') == './img/symbol-defs.svg#icon-burger';
  console.log(refs.burgerSvg.getAttribute('href'));
  if (check) {
    refs.burgerSvg.setAttribute('href', './img/symbol-defs.svg#icon-close');
    refs.headerIcon.setAttribute('width', '18');
    refs.headerIcon.setAttribute('height', '18');
  } else {
    refs.burgerSvg.setAttribute('href', './img/symbol-defs.svg#icon-burger');
    refs.headerIcon.setAttribute('width', '28');
    refs.headerIcon.setAttribute('height', '28');
  }
  if (refs.headerMenu.classList.contains('hidden')) {
    refs.headerContainer.removeAttribute('style');
  }
}

refs.headerBtn.addEventListener('click', headerBtnFuction);
