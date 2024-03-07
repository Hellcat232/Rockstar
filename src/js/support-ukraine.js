const listItems = document.querySelectorAll('.item-charity');
const btnScrollUp = document.querySelector('.btn-scroll-up');
const btnScrollDown = document.querySelector('.btn-scroll-down');
const swiper = document.querySelector('.swiper');
const scrollSpeed = 2;

showItems(0, 5);

btnScrollDown.addEventListener('click', scrollDown);
btnScrollUp.addEventListener('click', scrollUp);

function scrollDown() {
  scrollSmoothly(
    swiper,
    swiper.scrollTop + (swiper.scrollHeight - swiper.scrollTop) / scrollSpeed
  );
  btnScrollDown.classList.add('hidden');
  btnScrollUp.classList.remove('hidden');
}

function scrollUp() {
  scrollSmoothly(swiper, 0);
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

function scrollSmoothly(element, to) {
  const duration = 500;
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;

  function easeInOutQuad(time, start, change, duration) {
    time /= duration / 2;
    if (time < 1) return (change / 2) * time * time + start;
    time--;
    return (-change / 2) * (time * (time - 2) - 1) + start;
  }

  function animateScroll(elapsedTime) {
    elapsedTime += increment;
    const position = easeInOutQuad(elapsedTime, start, change, duration);
    element.scrollTop = position;
    if (elapsedTime < duration) {
      setTimeout(function () {
        animateScroll(elapsedTime);
      }, increment);
    }
  }

  animateScroll(0);
}
//===============================================================
const images = document.querySelectorAll('.charity-image');

images.forEach(image => {
  image.addEventListener('click', () => {
    const url = image.getAttribute('data-url');
    window.open(url, '_blank');
  });
});
