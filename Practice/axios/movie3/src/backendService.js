import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/api/tables/";

export async function getMovies() {
  const response = await axios.get("movie/rows?_ordering=title&_extend=genreId");
  return response.data.data;
}

export async function getMovie(id) {
  const response = await axios.get("movie/rows/" + id);
  return response.data.data[0];
}

export async function putMovie(movie) {
  await axios.put("movie/rows/" + movie.id, {fields: movie});
}

export async function postMovie(movie) {
  await axios.post("movie/rows/", {fields: movie});
}

export async function deleteMovie(id) {
  await axios.delete("movie/rows/" + id);
}

export async function getGenres() {
    const response = await axios.get("genre/rows?_ordering=-id");
    return response.data.data;
}
export async function getGenre(id) {
    const response = await axios.get("genre/rows/" + id);
    return response.data.data[0];
}
  
  export async function putGenre(genre) {
    await axios.put("genre/rows/" + genre.id, {fields: genre});
}
  
  export async function postGenre(genre) {
    await axios.post("genre/rows/", {fields: genre});
}
  
  export async function deleteGenre(id) {
    await axios.delete("genre/rows/" + id);
}