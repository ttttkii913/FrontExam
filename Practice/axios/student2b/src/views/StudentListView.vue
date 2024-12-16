<script setup>
import { getStudents } from '@/backendService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const students = ref([]);
onMounted(reloadStudents);

async function reloadStudents() {
  try {
    students.value = await getStudents();
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
    <h1>학생 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>학번</td><td>이름</td><td>전화</td><td>성별</td>
          <td>이메일</td><td>학과</td></tr>
      </thead>
      <tbody>
        <tr v-for="student in students" v-bind:key="student.id" @click="goEdit(student.id)">
          <td>{{ student.id }}</td>
          <td>{{ student.studentNo }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.sex }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.departmentId_data.name }}</td>
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
