import {
  booksCategory,
  topBooks,
  booksByCategory,
  booksID,
} from './js/books-api';
import {
  categoriesRender,
  topBooksCategoriesRender,
  clickAddClass,
  catLink,
  booksByCatRender,
  catByBtn,
  addCategoryTitle,
} from './js/render-functions';

import './js/modal';
import { headerBtnFuction } from './js/header';

export const refs = {
  bestBooks: document.querySelector('.best-books-category'),
  categories: document.querySelector('.sidebar-categories'),
  allCategories: document.querySelector('.sidebar-all-categories'),
  categoryTitle: document.querySelector('.best-books-title'),
  modalWindow: document.querySelector('modal-window'),
  seeMoreBtn: document.querySelector('.best-books-category'),
  headerBtn: document.querySelector('.header-burger-btn'),
  headerIcon: document.querySelector('.header-burger-icon'),
  headerMenu: document.querySelector('.header-modal-menu'),
  burgerSvg: document.querySelector('#burger-svg'),
};

async function onPageLoad() {
  const data = await booksCategory();
  const topBooksResponse = await topBooks();
  categoriesRender(data);
  topBooksCategoriesRender(topBooksResponse);

  refs.oneCategory = document.querySelector('.sidebar-category-link');
  refs.categoriesItems = document.querySelectorAll('.sidebar-categories-item');
  refs.allCategories.classList.add('sidebar-active');
  refs.categories.addEventListener('click', onCategoriesClick);
  refs.seeMoreBtn.addEventListener('click', onSeeMoreClick);
}

onPageLoad();

async function onSeeMoreClick(e) {
  const booksByCat = await booksByCategory(catByBtn(e));
  booksByCatRender(booksByCat);
  addCategoryTitle(catByBtn(e));
}

async function onCategoriesClick(e) {
  if (catLink(e) === 'All categories') onPageLoad();
  const booksByCat = await booksByCategory(catLink(e));
  booksByCatRender(booksByCat);
  addCategoryTitle(catLink(e));
  clickAddClass(e);
}

refs.headerBtn.addEventListener('click', headerBtnFuction);
