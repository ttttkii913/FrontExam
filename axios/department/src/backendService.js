import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/api/tables/";

export async function getDepartments() {
  const response = await axios.get("department/rows?_ordering=id");
  return response.data.data;
}

export async function getDepartment(id) {
  const response = await axios.get("department/rows/" + id);
  return response.data.data[0];
}

export async function putDepartment(department) {
  await axios.put("department/rows/" + department.id, {fields: department});
}

export async function postDepartment(department) {
  await axios.post("department/rows/", {fields: department});
}

export async function deleteDepartment(id) {
  await axios.delete("department/rows/" + id);
}
