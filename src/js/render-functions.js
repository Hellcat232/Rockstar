import { refs } from '../main';

export function categoriesTemplate(data) {
  return data
    .map(book => {
      return `<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${book.list_name}
   </a>
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
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${list_name}">SEE MORE</button>
        </div>
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
      ({ author, list_name, book_image, title, _id }) => `
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${_id}">
      <img class="best-books-image" src="${book_image}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${title}</h3>
    <p class="best-books-text">${author}</p>
    </div>
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

export function catLink(e) {
  const categoryLink = e.target.closest('a').textContent;
  return `${categoryLink}`;
}

export function booksByCatTemplate(data) {
  return data
    .map(
      ({ author, list_name, book_image, title, _id }) => `
<div class="hardcover-wrap">
            <ul class="hardcover-list">
                <li class="hardcover-item" id="${_id}">
                    <img class="hardcover-img" src="${book_image}" alt="card">
                    <p class="hardcover-overlay-text ">quick view</p>
                    <h3 class="hardcover-subtitle">${title}</h3>
                    <p class="hardcover-descr">${author}</p>
                </li>
            </ul>
</div>`
    )
    .join('\n');
}

export function booksByCatRender(data) {
  const markup = booksByCatTemplate(data);
  refs.bestBooks.innerHTML = markup;
}
