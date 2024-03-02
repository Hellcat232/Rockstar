import { booksCategory, topBooks, booksByCategory } from './js/books-api';
import {
  categoriesRender,
  topBooksCategoriesRender,
  clickAddClass,
  catLink,
  booksByCatRender,
  catByBtn,
  addCategoryTitle,
} from './js/render-functions';

export const refs = {
  bestBooks: document.querySelector('.best-books-category'),
  categories: document.querySelector('.sidebar-categories'),
  allCategories: document.querySelector('.sidebar-all-categories'),
  categoryTitle: document.querySelector('.best-books-title'),
  modalWindow: document.querySelector('modal-window'),
  seeMoreBtn: document.querySelector('.best-books-category'),
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
