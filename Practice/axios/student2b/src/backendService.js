import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/api/tables/";

export async function getStudents() {
  const response = await axios.get("student/rows?_ordering=-id&_extend=departmentId");
  return response.data.data;
}

export async function getStudent(id) {
  const response = await axios.get("student/rows/" + id);
  return response.data.data[0];
}

export async function putStudent(student) {
  await axios.put("student/rows/" + student.id, {fields: student});
}

export async function postStudent(student) {
  await axios.post("student/rows/", {fields: student});
}

export async function deleteStudent(id) {
  await axios.delete("student/rows/" + id);
}
