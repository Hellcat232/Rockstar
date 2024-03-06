import { refs } from './refs';

function getCurrentFileName() {
  const path = window.location.pathname;
  return path.split('/').pop();
}

function addClassBasedOnFileName() {
  const fileName = getCurrentFileName();
  if (fileName === 'index.html' || fileName === 'Rockstar' || fileName === '') {
    refs.element[0].classList.add('header-current');
    refs.modalElement[0].classList.add('header-modal-current');
    refs.modalLinks[0].classList.add('link-current');
    refs.links[0].style.color = '#111';
  } else {
    refs.element[1].classList.add('header-current');
    refs.modalElement[1].classList.add('header-modal-current');
    refs.modalLinks[1].classList.add('link-current');
    refs.links[1].style.color = '#111';
    refs.svg.classList.add('svg-current');
    refs.svg1.style.fill = '#111';
  }
}

window.onload = function () {
  addClassBasedOnFileName();
};
