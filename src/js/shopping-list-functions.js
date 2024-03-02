let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

export function shoppingListhasBook(id){
    return !!shoppingList.find(book => book._id === id)
 }

export function addToShoppingList(book) {
    if (!book._id || !book.book_image || !book.title || !book.list_name || !book.description || !book.author || !book.buy_links){
      throw new Error('Book id, cover, title, category, description, author, buyLinks are required');
    }

    if (!shoppingListhasBook(book._id)) {
      shoppingList.push(book); 
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));    
    } 
}

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