export let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

export function shoppingListhasBook(id){
    return !!shoppingList.find(book => book._id === id)
 }

export function addToShoppingList(book) {
  console.log('adding the book', book)
    console.log(!book._id, !book.book_image, !book.title, !book.list_name, !book.author, !book.buy_links)
    if (!book._id || !book.book_image || !book.title || !book.list_name || !book.author || !book.buy_links){
      throw new Error('Book _id, book_image, title, list_name, author, buy_links are required');
    }

    if (!shoppingListhasBook(book._id)) {
      shoppingList.push(book); 
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));    
    } 
}

window.atsl = addToShoppingList
window.sl = shoppingList

export function removeFromShoppingList(id) {
    shoppingList = shoppingList.filter(book => book._id !== id);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// console.log(shoppingList);
// let book = {_id: '1', book_image: 'blue', title: 'Racoons', list_name: 'Non-fiction', description: 'Book for kids', author: 'BBC', buy_links: 'Amazon',};
// addToShoppingList(book);
// console.log(shoppingList);
// removeFromShoppingList('1');
// console.log(shoppingList);