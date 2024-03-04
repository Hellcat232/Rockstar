import axios from 'axios';

export async function booksCategory() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'category-list';
  try {
    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function topBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'top-books';
  try {
    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function booksByCategory(category) {
  const BASE_URL = `https://books-backend.p.goit.global/books/`;
  const END_POINT = `category?category=${category}`;
  try {
    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function booksID() {
  const BASE_URL = `https://books-backend.p.goit.global/books/`;
  const END_POINT = `bookId`;
  try {
    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
