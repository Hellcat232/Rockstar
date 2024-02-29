import { refs } from '../main';

export function categoriesTemplate(data) {
  return data
    .map(book => {
      return `<li class="sidebar-categories-item">
   ${book.list_name}
  </li>`;
    })
    .join('\n');
}

export function categoriesRender(data) {
  const markup = categoriesTemplate(data);
  refs.categories.insertAdjacentHTML('beforeend', markup);
}

export function topBooksCategoriesTemplate(data) {
  return data
    .map(({ list_name, books }) => {
      let booksTemplate;

      if (window.innerWidth >= 1440) {
        booksTemplate = topBooksTemplate(books, list_name);
      } else if (window.innerWidth >= 768) {
        booksTemplate = topBooksTemplate(books.slice(0, 3), list_name);
      } else {
        booksTemplate = topBooksTemplate(books.slice(0, 1), list_name);
      }

      return `
        <div class="best-books-category">
          <p class="best-books-subtitle">${list_name}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${booksTemplate}</li>
          </ul>
          <button class="btn-see-more" type="button" data-cat="${list_name}">SEE MORE</button>
        </div>
      `;
    })
    .join('\n');
}

export function topBooksCategoriesRender(data) {
  const markup = topBooksCategoriesTemplate(data);
  refs.bestBooks.insertAdjacentHTML('beforeend', markup);
}

export function topBooksTemplate(data, filter) {
  return data
    .filter(({ list_name }) => list_name === filter)
    .map(
      ({ author, list_name, book_image, title }) => `
    <div class="best-books-content">
      <img class="best-books-image" src="${book_image}" alt="book" />
      <p class="best-books-hidden-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${title}</h3>
    <p class="best-books-text">${author}</p>
  `
    )
    .join('\n');
}

export function clickAddClass(e) {
  const target = e.target.closest('li');
  if (!target || target === e.currentTarget) return;

  refs.categoriesItems.forEach(elem => elem.classList.remove('sidebar-active'));
  target.classList.add('sidebar-active');
}
