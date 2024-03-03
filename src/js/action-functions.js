import { booksCategory, topBooks, booksByCategory, booksID } from './books-api';
import {
  categoriesRender,
  topBooksCategoriesRender,
  clickAddClass,
  catLink,
  booksByCatRender,
  catByBtn,
  addCategoryTitle,
} from './render-functions';
import { refs } from '../main';

export async function onPageLoad() {
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

async function onSeeMoreClick(e) {
  const booksByCat = await booksByCategory(catByBtn(e));
  booksByCatRender(booksByCat);
  addCategoryTitle(catByBtn(e));
}

async function onCategoriesClick(e) {
  const booksByCat = await booksByCategory(catLink(e));
  if (catLink(e) === 'All categories') onPageLoad();
  booksByCatRender(booksByCat);
  addCategoryTitle(catLink(e));
  clickAddClass(e);
}
