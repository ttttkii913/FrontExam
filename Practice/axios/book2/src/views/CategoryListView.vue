<script setup>
import { getCategorys } from '@/backendService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const categorys = ref([]);
onMounted(reloadCategorys);

async function reloadCategorys() {
  try {
    categorys.value = await getCategorys();
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goEdit(id) {
  router.push("category/edit/" + id);
}
</script>

<template>
  <main>
    <h1>카테고리 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>제목</td></tr>
      </thead>
      <tbody>
        <tr v-for="category in categorys" v-bind:key="category.id" @click="goEdit(category.id)">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
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
