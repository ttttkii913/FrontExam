import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/api/tables/";

export async function getBooks() {
  const response = await axios.get("book/rows?_ordering=-id&_extend=categoryId");
  return response.data.data;
}

export async function getBook(id) {
  const response = await axios.get("book/rows/" + id);
  return response.data.data[0];
}

export async function putBook(book) {
  await axios.put("book/rows/" + book.id, {fields: book});
}

export async function postBook(book) {
  await axios.post("book/rows/", {fields: book});
}

export async function deleteBook(id) {
  await axios.delete("book/rows/" + id);
}
