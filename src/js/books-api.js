import axios from 'axios';

export async function booksCategory() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'category-list';
  const url = BASE_URL + END_POINT;

  const res = await axios.get(url);
  return res.data;
}

export async function topBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'top-books';
  const url = BASE_URL + END_POINT;

  const res = await axios.get(url);
  return res.data;
}

export async function booksByCategory(category) {
  const BASE_URL = `https://books-backend.p.goit.global/books/`;
  const END_POINT = `category?category=${category}`;
  const url = BASE_URL + END_POINT;

  const res = await axios.get(url);
  return res.data;
}

export async function booksID() {
  const BASE_URL = `https://books-backend.p.goit.global/books/`;
  const END_POINT = `bookId`;
  const url = BASE_URL + END_POINT;

  const res = await axios.get(url);
  return res.data;
}
