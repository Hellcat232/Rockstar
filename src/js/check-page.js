import { refs } from './refs';

function getCurrentFileName() {
  const path = window.location.pathname;
  return path.split('/').pop();
}

function addClassBasedOnFileName() {
  const fileName = getCurrentFileName();

  if (fileName === 'index.html') {
    refs.element[0].classList.add('header-current');
    refs.modalElement[0].classList.add('header-modal-current');
    refs.links[0].classList.add('link-current');
  } else {
    refs.element[1].classList.add('header-current');
    refs.modalElement[1].classList.add('header-modal-current');
    refs.links[1].classList.add('link-current');
    refs.svg.classList.add('svg-current');
  }
}

window.onload = function () {
  addClassBasedOnFileName();
};
