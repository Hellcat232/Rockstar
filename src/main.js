import { booksCategory, topBooks, booksByCategory } from './js/books-api';
import {
  categoriesRender,
  topBooksTemplate,
  topBooksCategoriesRender,
  clickAddClass,
  catLink,
  booksByCatRender,
} from './js/render-functions';

export const refs = {
  bestBooks: document.querySelector('.best-books-category'),
  categories: document.querySelector('.sidebar-categories'),
  allCategories: document.querySelector('.sidebar-all-categories'),
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
}

onPageLoad();

async function onCategoriesClick(e) {
  const categoryLink = catLink(e);
  console.log(categoryLink);
  const booksByCat = await booksByCategory(categoryLink.trim());
  console.log(booksByCat);
  booksByCatRender(booksByCat);
  clickAddClass(e);
}
