import * as basicLightbox from 'basiclightbox';
import { booksCategory, topBooks, booksByCategory, booksID } from './books-api';
import '../main';
import './render-functions';

function openModal(bookDetails) {
  const modal = basicLightbox.create(`
    <div class="modal">
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div class="modal-book-details">${bookDetails}</div>
      </div>
    </div>
  `);

  modal.show();

  const modalCloseBtn = modal.element().querySelector('.modal-close');
  modalCloseBtn.addEventListener('click', () => modal.close());
}

function handleBookClick(book) {
  const bookDetails = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <img src="${book.imageUrl}" alt="${book.title}">
  `;
  openModal(bookDetails);
}

const book = {
  title: 'Book Title',
  author: 'Author Name',
  imageUrl: 'https://example.com/book.jpg',
};

handleBookClick(book);
