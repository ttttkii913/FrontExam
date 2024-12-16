<script setup>
import { getGenres } from '@/backendService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const genres = ref([]);
onMounted(reloadGenres);

async function reloadGenres() {
  try {
    genres.value = await getGenres();
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goEdit(id) {
  router.push("/edit/genre/" + id);
}
</script>

<template>
  <main>
    <h1>장르 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>장르 제목</td></tr>
      </thead>
      <tbody>
        <tr v-for="genre in genres" v-bind:key="genre.id" @click="goEdit(genre.id)">
          <td>{{ genre.id }}</td>
          <td>{{ genre.title }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { margin: 3em 0; width: 100%; }
thead { background-color: #eee; text-align: center; }
td { border-bottom: 1px solid gray; padding: .5em; }
td:nth-child(1) { text-align: center; width: 3em; }
tbody tr:hover { background-color: #ffd; cursor: pointer }
</style>
