import { shoppingList } from './shopping-list-functions.js';
export const shoppingListElement = document.querySelector(
  '.shopping-list-container'
);

export function renderShoppingListBook(shoppingList) {
  const booksToAdd = shoppingList
    .map(book => {
      return `<li class="shopping-list-book-item">
                        <div class="shopping-list-card">
            
                                <img class="shopping-list-book-cover" src="${book.book_image}" alt="cover" loading="lazy">   
                        
                                <div class="shopping-list-card-wrap">
                                    <div class="shopping-list-card-top-line">
                                        <div class="title-category-wrap">
                                            <h2 class="shopping-list-book-title">${book.title}</h2>
                                            <h3 class="shopping-list-book-category">${book.list_name}</h3>
                                        </div>

                                        <button data-id="${book._id}" type="button" class="shopping-list-item-remove-button">
                                        <svg width="16" height="16" class="icon-bin" alt="bin">
                                            <use href="./img/icons.svg#icon-bin"></use>
                                        </svg>
                                    </button>
                                    </div>
        
                                    <p class="shopping-list-book-description">${book.description}</p>
        
                                    <div class="shopping-list-card-bottom-line">
                                        <p class="shopping-list-book-author">${book.author}</p>
                                        <ul class="shopping-list-buy-links">
                                            <li class="shopping-list-buy-link-item">
                                                <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${book.buy_links[0].url}" target="_blank">
                                                <svg width="32" height="11" class="shopping-list-buy-link-amazon" alt="logo-amazon">
                                            <use href="./img/icons.svg#icon-amazon-1"></use>
                                        </svg>   
                                                </a>
                                            </li>
                                            <li class="shopping-list-buy-link-item">
                                                <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${book.buy_links[1].url} " target="_blank">
                                                <svg width="16" height="16" class="shopping-list-buy-link-applebooks" alt="logo-apple-books">
                                            <use href="./img/icons.svg#icon-apple-ibooks"></use>
                                        </svg>    
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                            </li>`;
    })
    .join('');
  return '<ul class="shopping-list-is-filled">' + booksToAdd + '</ul>';
}

export function renderEmptyShoppingList() {
  let code = ` <div class="shopping-list-is-empty">
    <p class="shopping-list-text">This page is empty, add some books and proceed to order.</p>
    <picture>
        <source srcset="
                      ./img/Book-picture-tab-min.png    1x,
                     ./img/Book-picture-tab-2x-min.png 2x" media="(min-width:768px)" />
        <source srcset="
                      ./img/Book-picture-mob-min.png    1x,
                     ./img/Book-picture-mob-2x-min.png 2x" media="(min-width:320px)" />
        <img class="shopping-list-image" src="./img/Book-picture-tab-min.png" alt="Stack of books">
    </picture>
</div>`;

  shoppingListElement.innerHTML = code;
}

export function renderFilledShoppingList() {
  return (shoppingListElement.innerHTML = renderShoppingListBook(shoppingList));
}

export function renderShoppingList() {
  if (shoppingList.length !== 0) {
    renderFilledShoppingList();
  } else {
    renderEmptyShoppingList();
  }
}
