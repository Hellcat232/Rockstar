// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { shoppingList, removeFromShoppingList } from "./shopping-list-functions.js";
import { renderShoppingList } from "./shopping-list-render.js";
// import '../main.js'
// import * as basicLightbox from 'basiclightbox'
// import 'basiclightbox/dist/basicLightbox.min.css'


renderShoppingList();

  document.querySelectorAll('.shopping-list-item-remove-button').forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(button.dataset.id)
        removeFromShoppingList(button.dataset.id);
        button.closest('li.shopping-list-book-item').remove();
       if(shoppingList.length === 0) {
        renderShoppingList();
       } 
    });
  });