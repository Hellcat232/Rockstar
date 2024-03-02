const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const closeButton = document.querySelector('.close');
const addToShoppingListButton = document.getElementById('addToShoppingList');

openModalButton.addEventListener('click', function () {
  modal.style.display = 'block';
  modalBackdrop.style.display = 'block';
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
  modalBackdrop.style.display = 'none';
});

addToShoppingListButton.addEventListener('click', function () {
  // Додати код для додавання книги до списку покупок тут
});

modalBackdrop.addEventListener('click', function () {
  modal.style.display = 'none';
  modalBackdrop.style.display = 'none';
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
  }
});
