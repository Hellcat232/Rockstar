import * as basicLightbox from 'basiclightbox';
import { booksCategory, topBooks, booksByCategory, booksID } from './books-api';
import '../main';
import './render-functions';

const data = booksByCategory();

// document.addEventListener('DOMContentLoaded', function () {});

// booksEl.addEventListener('click', event => clickItem(event));

function clickItem(event, data) {
  const itemEl = event.target.closest('.best-books-item');
  let selectedBook;

  if (itemEl) {
    const bookId = itemEl.dataset.id;

    if (event.target.nodeName === 'IMG') {
      const selectedBook = event.target.dataset.id;
    }

    if (selectedBook) {
      openModal(selectedBook);
    }
  }
}

function openModal(book) {
  const modalContent = `
    <div class="modal-content-wrap">
      <img class="modal-books-img" src="${book.book_image}" alt="" loading="eager" />
      <div class="modal-text-wrap">
        <div class="hello-beautiful-modal">
          <h3 class="modal-title">${book.title}</h3>
          <p class="modal-authors-name">${book.author}</p>
        </div>
        <p class="modal-book-notice">${book.description}</p>
      </div>
    </div>
  `;

  const modal = basicLightbox.create(modalContent);

  const modalCloseBtn = document.querySelector('.modal-close-btn');

  modalCloseBtn.addEventListener('click', () => {
    modal.close();
  });

  // modal.show();
}