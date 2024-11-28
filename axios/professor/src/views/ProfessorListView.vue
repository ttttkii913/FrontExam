<script setup>
import { getProfessors } from '@/backendService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const professors = ref([]);
onMounted(reloadProfessors);

async function reloadProfessors() {
  try {
    professors.value = await getProfessors();
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
    <h1>교수 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>이름</td><td>학과명</td><td>전화</td>
          <td>이메일</td><td>연구실</td></tr>
      </thead>
      <tbody>
        <tr v-for="professor in professors" v-bind:key="professor.id" @click="goEdit(professor.id)">
          <td>{{ professor.id }}</td>
          <td>{{ professor.name }}</td>
          <td>{{ professor.departmentId_data.name }}</td>
          <td>{{ professor.phone }}</td>
          <td>{{ professor.email }}</td>
          <td>{{ professor.office }}</td>
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
