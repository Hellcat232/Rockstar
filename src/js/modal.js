import * as basicLightbox from 'basiclightbox';
import { booksCategory, topBooks, booksByCategory, booksID } from './books-api';
import '../main';
import './render-functions';

const book = {
  title: 'Book Title',
  author: 'Author Name',
  imageUrl: 'https://example.com/book.jpg',
};

const instance = basicLightbox.create(
  `
   <div class="modal">
       <h2>${book.title}</h2>
    <p>${book.author}</p>
    <img src="${book.imageUrl}" alt="${book.title}">
    </div>
`
);

instance.show();

function openModal(bookDetails) {}

function handleBookClick(book) {
  const bookDetails = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <img src="${book.imageUrl}" alt="${book.title}">
  `;
  openModal(bookDetails);
}
