import * as basicLightbox from 'basiclightbox';
import { booksCategory, topBooks, booksByCategory, booksID } from './books-api';
import '../main';
import './render-functions';

const booksEl = document.querySelector('.best-books-category');

booksEl.addEventListener('click', event => clickItem(event));

function clickItem(event) {
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

  modal.show();
}
console.log(openModal);

// import * as basicLightbox from 'basiclightbox';
// import { booksCategory, topBooks, booksByCategory, booksID } from './books-api';
// import '../main';
// import './render-functions';

// const booksEl = document.querySelector('.best-books-category');

// booksEl.addEventListener('click', openModal);

// let instance;
// export async function openModal(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') return;
//   const bookId = event.target.dataset.id;
//   const book = await booksByCategory(bookId);

//   const { book_image, title, author, description } = book;
//   instance = basicLightbox.create(
//     `    <div class="modal-content-wrap">
//       <img class="modal-books-img" src="${book_image}" alt="" loading="eager" />
//       <div class="modal-text-wrap">
//         <div class="hello-beautiful-modal">
//           <h3 class="modal-title">${title}</h3>
//           <p class="modal-authors-name">${author}</p>
//         </div>
//         <p class="modal-book-notice">${description}</p>
//       </div>
//     </div>`,
//     {
//       onShow: () => {
//         document.addEventListener('keydown', onImage);
//       },
//       onClose: () => {
//         document.removeEventListener('keydown', onImage);
//       },
//     }
//   );
//   instance.show();
// }

// console.log(openModal);

// function onImage(event) {
//   event.preventDefault();
//   if (event.code === 'Escape') {
//     instance.close();
//   }
// }
