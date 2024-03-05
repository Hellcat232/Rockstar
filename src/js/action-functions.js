import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { booksCategory, topBooks, booksByCategory, booksID } from './books-api';
import {
  categoriesRender,
  topBooksCategoriesRender,
  clickAddClass,
  catLink,
  booksByCatRender,
  catByBtn,
  addCategoryTitle,
} from './render-functions';
import { refs } from './refs';
import { bindPopUps } from './pop-up';

export async function onPageLoad() {
  refs.loader.classList.remove('hidden');
  refs.loader1.classList.remove('hidden');

  try {
    const data = await booksCategory();
    const topBooksResponse = await topBooks();
    categoriesRender(data);
    topBooksCategoriesRender(topBooksResponse);
    refs.loader.classList.add('hidden');
    refs.loader1.classList.add('hidden');
    // console.log('on page load');
    let books = topBooksResponse
      .flatMap(category => {
        return category.books;
      })
      .filter((book, index, self) => {
        return self.indexOf(book) === index;
      });
    bindPopUps(books);
  } catch (err) {
    errNotify(err);
  }

  refs.oneCategory = document.querySelector('.sidebar-category-link');
  refs.categoriesItems = document.querySelectorAll('.sidebar-categories-item');
  refs.allCategories.classList.add('sidebar-active');
  refs.categories.addEventListener('click', onCategoriesClick);
  // refs.seeMoreBtn.addEventListener('click', onSeeMoreClick);
  document.querySelectorAll('.btn-see-more').forEach(btn => {
    btn.addEventListener('click', onSeeMoreClick);
  });
}

async function onSeeMoreClick(e) {
  refs.loader1.classList.remove('hidden');
  try {
    const booksByCat = await booksByCategory(catByBtn(e));

    booksByCatRender(booksByCat);
    addCategoryTitle(catByBtn(e));
    refs.loader1.classList.add('hidden');
    refs.scrollToEl.scrollIntoView({
      behavior: 'smooth',
    });

    bindPopUps(booksByCat);
  } catch (err) {
    errNotify(err);
  }
}

async function onCategoriesClick(e) {
  if (catLink(e) === undefined) return;
  refs.loader.classList.remove('hidden');

  try {
    const booksByCat = await booksByCategory(catLink(e));
    console.log(catLink(e));

    if (catLink(e) === 'All categories') {
      //   console.log('from onCategoriesClick');
      onPageLoad();
    }

    booksByCatRender(booksByCat);
    addCategoryTitle(catLink(e));
    console.log(catLink(e));
    clickAddClass(e);
    refs.loader.classList.add('hidden');
    if (window.innerWidth < 1440)
      refs.scrollToEl.scrollIntoView({
        behavior: 'smooth',
      });

    bindPopUps(booksByCat);
  } catch (err) {
    errNotify(err);
  }
}

export function errNotify(err) {
  iziToast.warning({
    title: 'Caution',
    message: `Error: ${err}`,
    position: 'topRight',
  });
  throw err;
}

export function scrollTop() {
  window.addEventListener('scroll', onScrollShowBtn);
  let prevScrollPos = window.pageYOffset;

  function onScrollShowBtn() {
    window.scrollY > 200
      ? refs.btnToTop.classList.add('show')
      : refs.btnToTop.classList.remove('show');

    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      document.querySelector('.header-container').style.top = '0';
    } else {
      document.querySelector('.header-container').style.top = '-118px';
    }

    prevScrollPos = currentScrollPos;
  }

  refs.btnToTop.addEventListener('click', onClickGoTop);

  function onClickGoTop() {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 70);
        onClickGoTop();
      }, 10);
    }
  }
}
