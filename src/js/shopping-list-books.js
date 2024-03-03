// import {
//   removeItemFromLocalStorage,
//   getItemFromLocalStorage,
// } from './localStorage';

import trashIcon from '../img/icons.svg#icon-trash';
import amazonIcon from '../img/shopping-list-books/amazon-default (1).png';
import appleIcon from '../img/shopping-list-books/book-default (1).png';
import booksIcon from '../img/shopping-list-books/book-pile-2x (1).png';

const shoppingList = getItemFromLocalStorage();
const shoppingListContainer = document.querySelector('.shopping-list-books');

function renderShopList() {
  if (!shoppingListContainer) {
    console.error("Element with class 'shopping-list' not found.");
    return;
  }

  if (shoppingList.length === 0) {
    shoppingListContainer.innerHTML = `<p class="shopping-list-empty-text">This page is empty, add some books and proceed to order.</p>
                                       <img class="no-book" src="../img/shopping-list-books/book-pile.png" alt="Book" />`;
    return;
  }

  shoppingListContainer.innerHTML = shoppingList
    .map(book => renderBookCard(book))
    .join('');
}

function renderBookCard(book) {
  const { book_image, title, list_name, description, author, buy_links, _id } =
    book;
  const amazonLink = buy_links.find(link => link.name === 'Amazon')?.url || '';
  const appleBookLink =
    buy_links.find(link => link.name === 'Apple Books')?.url || '';

  return `<li class="one-book">
            <img class="img-book" src="${book_image}" alt="Book" />
            <div class="description">
              <div class="up-part">
                <h2 class="book-name">${title}</h2>
                <h3 class="type-name">${list_name}</h3>
                <button data-id="${_id}" class="basket" type="button">
                  <svg class="trash" width="16" height="16">
                    <use href="./img/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="text-description">${description}</p>
              <div class="book-app">
                <h3 class="name-author">${author}</h3>
                <div class="book-links">
                  <a href="${amazonLink}" class="book-links-amazon" target="_blank"></a>
                  <a href="${appleBookLink}" class="book-links-applebook" target="_blank"></a>
                </div>
              </div>
            </div>
          </li>`;
}

shoppingListContainer.addEventListener('click', event => {
  if (event.target.classList.contains('basket')) {
    const bookId = event.target.getAttribute('data-id');
    removeItemFromLocalStorage(bookId);
    shoppingList.splice(
      shoppingList.findIndex(book => book._id === bookId),
      1
    );
    renderShopList();
  }
});

document.addEventListener('DOMContentLoaded', renderShopList);
