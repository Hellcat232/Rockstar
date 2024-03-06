import '../css/pop-up.css'
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import { shoppingListhasBook, addToShoppingList, removeFromShoppingList } from './shopping-list-functions';


export function bindPopUps(books) {
    books.forEach(book => {
      const bookElement = document.getElementById(book._id); 
      if (!bookElement) {
        return;
      }
      bookElement.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`${book._id} clicked`);

function showPopUp(book) {
  const instance = basicLightbox.create(`
          <div class="modal">
            <button class="modal-close-btn" type="button">
            <svg class="modal-close-svg" width="16" height="16">
              <use href="./img/icons.svg#icon-close"></use>
            </svg>
            </button>
                            <div class="pop-up-card-wrap">
                              <img class="pop-up-book-cover" src="${book.book_image}" alt="cover">
                                  <div class="pop-up-card-top-line">
                                          <h2 class="pop-up-book-title">${book.title}</h2>
                                          <p class="pop-up-book-author">${book.author}</p>
                                          <p class="pop-up-book-description">${book.description}</p>
                                      <div class="pop-up-card-bottom-line">
                                          <ul class="pop-up-buy-links">
                                              <li class="pop-up-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${book.buy_links[0].url}" target="_blank">
                                                  <svg width="32" height="11" class="pop-up-buy-link-amazon" alt="logo-amazon">
                                              <use href="./img/icons.svg#icon-amazon-1"></use>
                                          </svg>   
                                                  </a>
                                              </li>
                                              <li class="shopping-list-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="pop-up-buy-link" href="${book.buy_links[1].url} " target="_blank">
                                                  <svg width="16" height="16" class="pop-up-buy-link-applebooks" alt="logo-apple-books">
                                              <use href="./img/icons.svg#icon-apple-ibooks"></use>
                                          </svg>    
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                 </div>
                                 </div>
                            
            <button data-id="${book._id}" type="button" class="add-to-sl-button">${shoppingListhasBook(book._id) ? 'Remove from the shopping list' : 'Add to shopping list'}</button>
            <p class='book-added-text'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
            
          </div>
        `,
    {
      onShow: () => {
        document.addEventListener("keydown", onModalClose);
      },
      onClose: () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("keydown", onModalClose);
      },
    }
  );

  instance.show();

  document.body.style.overflow = "hidden";

  function onModalClose(e) {
    console.log(e.code);
    if (e.code === "Escape"){
      instance.close();
    } 
  }

  document.querySelector('.modal-close-btn').addEventListener('click', (e) => {
    instance.close();
  })

}

showPopUp(book);
        
        document.querySelector('.add-to-sl-button').addEventListener('click', (e) => {
          if(shoppingListhasBook(book._id)){
            removeFromShoppingList(book._id)
            document.querySelector('.book-added-text').style.display = "none"; 
            document.querySelector('.add-to-sl-button').textContent = 'Add to shopping list';
          } else {
            addToShoppingList(book)
            document.querySelector('.book-added-text').style.display = "block"; 
            document.querySelector('.add-to-sl-button').textContent = 'Remove from the shopping list';
          }
        })
      })
    });
  }