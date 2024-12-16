<script setup>
import { getDepartments } from '@/backendService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const departments = ref([]);
onMounted(reloadDepartments);

async function reloadDepartments() {
  try {
    departments.value = await getDepartments();
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
    <h1>학과 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>이름</td><td>shortname</td><td>전화</td></tr>
      </thead>
      <tbody>
        <tr v-for="department in departments" v-bind:key="department.id" @click="goEdit(department.id)">
          <td>{{ department.id }}</td>
          <td>{{ department.name }}</td>
          <td>{{ department.shortName }}</td>
          <td>{{ department.phone }}</td>
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
