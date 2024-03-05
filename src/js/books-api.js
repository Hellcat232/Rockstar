import axios from 'axios';

const BASE_URL = `https://books-backend.p.goit.global/books/`;

const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'max-age=1300',
};

export async function booksCategory() {
  const END_POINT = 'category-list';
  try {
    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function topBooks() {
  const END_POINT = 'top-books';
  try {
    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function booksByCategory(category) {
  const END_POINT = `category?category=${category}`;
  try {
    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function booksID() {
  const END_POINT = `bookId`;
  try {
    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
