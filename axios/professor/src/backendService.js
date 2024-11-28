import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/api/tables/";

export async function getProfessors() {
  const response = await axios.get("professor/rows?_ordering=id&_extend=departmentId");
  return response.data.data;
}

export async function getProfessor(id) {
  const response = await axios.get("professor/rows/" + id);
  return response.data.data[0];
}

export async function putProfessor(professor) {
  await axios.put("professor/rows/" + professor.id, {fields: professor});
}

export async function postProfessor(professor) {
  await axios.post("professor/rows/", {fields: professor});
}

export async function deleteProfessor(id) {
  await axios.delete("professor/rows/" + id);
}
