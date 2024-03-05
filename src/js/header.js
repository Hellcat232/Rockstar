import { refs } from './refs';

export function headerBtnFuction() {
  refs.headerMenu.classList.toggle('hidden');
  const check =
    refs.burgerSvg.getAttribute('href') ==
    './img/header/symbol-defs.svg#icon-burger';
  if (check) {
    refs.burgerSvg.setAttribute(
      'href',
      './img/header/symbol-defs.svg#icon-close'
    );
    refs.headerIcon.setAttribute('width', '18');
    refs.headerIcon.setAttribute('height', '18');
    refs.headerMenu.style.padding = '5px';
  } else {
    refs.burgerSvg.setAttribute(
      'href',
      './img/header/symbol-defs.svg#icon-burger'
    );
    refs.headerIcon.setAttribute('width', '28');
    refs.headerIcon.setAttribute('height', '28');
  }
}

refs.headerBtn.addEventListener('click', headerBtnFuction);
