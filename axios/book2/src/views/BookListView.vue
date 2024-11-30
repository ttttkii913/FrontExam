<script setup>
import { getBooks } from '@/backendService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const books = ref([]);
onMounted(reloadBooks);

async function reloadBooks() {
  try {
    books.value = await getBooks();
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goEdit(id) {
  router.push("/edit/" + id);
}
</script>

<template>
  <main>
    <h1>책 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>제목</td><td>작가</td><td>카테고리</td><td>가격</td>
          <td>출판사</td></tr>
      </thead>
      <tbody>
        <tr v-for="book in books" v-bind:key="book.id" @click="goEdit(book.id)">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.categoryId_data.name }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.publisher }}</td>
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
