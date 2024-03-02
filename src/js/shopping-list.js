// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { shoppingList, removeFromShoppingList } from "./shopping-list-functions.js";
import { renderShoppingList } from "./shopping-list-render.js";

renderShoppingList();

// const paginationsOptions = {
//     totalItems: 20,
//     itemsPerPage: 3,
//     visiblePages: 3,
//     page: 1,
//     centerAlign: false,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     template: {
//       page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//       currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//           '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//           '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//           '<span class="tui-ico-ellip">...</span>' +
//         '</a>'
//     }
//   };
  
//   const pagination = new Pagination('pagination', options);

//   if (shoppingList.length > 3) {
//     pagination.on('afterMove', function(eventData) {
//         var currentPage = eventData.page;
//         console.log(currentPage);
//       });
//       pagination.on('beforeMove', function(eventData) {
//         var currentPage = eventData.page;
//         if (currentPage === 20) {
//           return false;
//           // return true;
//         }
//       });
//   }

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