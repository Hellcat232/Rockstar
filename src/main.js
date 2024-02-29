import { booksCategory } from './js/books-api';
import {
  categoriesRender,
  topBooksTemplate,
  topBooksCategoriesRender,
  clickAddClass,
} from './js/render-functions';
import { topBooks } from './js/books-api';

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

  refs.categoriesItems = document.querySelectorAll('.sidebar-categories-item');
  refs.allCategories.classList.add('sidebar-active');
  refs.categories.addEventListener('click', onCategoriesClick);
}

onPageLoad();

function onCategoriesClick(e) {
  clickAddClass(e);
}
