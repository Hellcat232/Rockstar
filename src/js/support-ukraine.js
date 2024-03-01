document.addEventListener("DOMContentLoaded", function() {
  const listItems = document.querySelectorAll('.item-charity');
  const btnScrollUp = document.querySelector('.btn-scroll-up');
  const btnScrollDown = document.querySelector('.btn-scroll-down');

  // Показать от 1 до 6
  showItems(0, 5);

  btnScrollDown.addEventListener('click', scrollDown);
  btnScrollUp.addEventListener('click', scrollUp);

  function scrollDown() {
      hideItems(0, 3);
      showItems(3, 8);
      btnScrollDown.classList.add('hidden');
      btnScrollUp.classList.remove('hidden');
  }

  function scrollUp() {
      hideItems(3, 8);
      showItems(0, 5);
      btnScrollDown.classList.remove('hidden');
      btnScrollUp.classList.add('hidden');
  }

  function showItems(startIndex, endIndex) {
      for (let i = startIndex; i <= endIndex; i++) {
          listItems[i].classList.remove('hidden');
      }
  }

  function hideItems(startIndex, endIndex) {
      for (let i = startIndex; i <= endIndex; i++) {
          listItems[i].classList.add('hidden');
      }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.charity-image');

  images.forEach(image => {
    image.addEventListener('click', () => {
      const url = image.getAttribute('data-url');
      window.open(url, '_blank');
    });
  });
});