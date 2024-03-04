import './js/action-functions';
import { onPageLoad, scrollTop } from './js/action-functions';

import './js/modal';
import { headerBtnFuction } from './js/header';
import { colorSchemeChange } from './js/color-toggle';
import { choosenColorScheme } from './js/color-toggle';
import './js/modal';
import './js/support-ukraine';

export const refs = {
  bestBooks: document.querySelector('.best-books-category'),
  categories: document.querySelector('.sidebar-categories'),
  allCategories: document.querySelector('.sidebar-all-categories'),
  categoryTitle: document.querySelector('.best-books-title'),
  loader: document.querySelector('.loader'),
  loader1: document.querySelector('.loader1'),
  scrollToEl: document.querySelector('.global-books-block'),
  modalWindow: document.querySelector('modal-window'),
  seeMoreBtn: document.querySelector('.best-books-category'),
  headerBtn: document.querySelector('.header-burger-btn'),
  headerIcon: document.querySelector('.header-burger-icon'),
  headerMenu: document.querySelector('.header-modal-menu'),
  burgerSvg: document.querySelector('#burger-svg'),
  headerToggle: document.querySelector('#headerToggle'),
  root: document.querySelector(':root'),
  btnToTop: document.querySelector('.to-top'),
};

onPageLoad();
scrollTop();
// handleBookClick(book);
refs.headerBtn.addEventListener('click', headerBtnFuction);
refs.headerToggle.addEventListener('change', colorSchemeChange);
choosenColorScheme();
