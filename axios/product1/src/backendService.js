import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/api/tables/";

export async function getProducts() {
  const response = await axios.get("product/rows?_ordering=-id&_extend=categoryId");
  return response.data.data;
}

export async function getProduct(id) {
  const response = await axios.get("product/rows/" + id);
  return response.data.data[0];
}

export async function putProduct(product) {
  await axios.put("product/rows/" + product.id, {fields: product});
}

export async function postProduct(product) {
  await axios.post("product/rows/", {fields: product});
}

export async function deleteProduct(id) {
  await axios.delete("product/rows/" + id);
}
