// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { shoppingList, removeFromShoppingList } from "./shopping-list-functions.js";
import { renderShoppingList } from "./shopping-list-render.js";
// import '../main.js'
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'

window.lb = basicLightbox;

document.querySelector('#my-button').addEventListener('click', (e) => {
  console.log('clicked')
  const instance = basicLightbox.create(`
    <div class="modal">
      <div>
      <button type="button" class="modal-close-button">x</button>
      <p>
          Your first lightbox with just a few lines of code.
          Yes, it's really that simple.
      </p>
      <button type="button" class="add-to-sl-button">ADD TO SHOPPING LIST</button>
      </div>
    </div>
`)

console.log(instance);
  instance.show()
})

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