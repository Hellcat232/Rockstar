import * as basicLightbox from 'basiclightbox';
import './books-api';

// document.addEventListener('DOMContentLoaded', function () {});

const booksEl = document.querySelector('.best-books-category');

function clickItem(event) {
  const itemEl = event.target.closest('.best-books-item');

  if (itemEl) {
    const bookId = itemEl.dataset.id;
    const selectedBook = data.find(book => book._id === bookId);

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

  const modal = basicLightbox.create(modalContent, {});

  const modalCloseBtn = document.querySelector('.modal-close-btn');

  modalCloseBtn.addEventListener('click', () => {
    modal.close();
  });

  modal.show();
}

booksEl.addEventListener('click', clickItem);

//перевіряю, чи працює
// clickItem();
