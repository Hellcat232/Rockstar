let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

export function shoppingListhasBook(id){
    return !!shoppingList.find(book => book.id === id)
 }

export function addToShoppingList(book) {
    if (!book.id || !book.cover || !book.title || !book.category || !book.description || !book.author || !book.buyLinks){
      throw new Error('Book id, cover, title, category, description, author, buyLinks are required');
    }

    if (!shoppingListhasBook(book.id)) {
      shoppingList.push(book); 
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));    
    } 
}

export function removeFromShoppingList(id) {
    shoppingList = shoppingList.filter(book => book.id !== id);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

console.log(shoppingList)
let  book = {id: '1', title: 'Fox', cover: 'blue', category: 'non-fiction', description: 'For kids', author: 'BBC', buyLinks: 'Amazon',}
addToShoppingList(book)
console.log(shoppingList)
// removeFromShoppingList('1')
// console.log(shoppingList);