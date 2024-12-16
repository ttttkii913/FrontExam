<template>
    <div class="table-container">
      <h1>ExamFour</h1>
      <table>
        <tbody>
            <tr>
            <td>index</td>
            <td>value</td>
          </tr>
          <tr v-for="(item, index) in list" :key="index">
            <td>{{ index }}</td>
            <td>{{ item }}</td>
          </tr>
        </tbody>
      </table>
      <Exam4Child :addWord="addWord" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import Exam4Child from './Exam4Child.vue';  
  const list = ref([]);
  
  function addWord(value) {
    list.value.push(value);
  }
  </script>
  <style scoped>
  
  span { display: inline-block; margin: 5px; padding: 8px 15px; 
    border: 1px solid black; cursor: pointer; }
  input { padding: 4px; margin: 5px; }
  button { padding: 4px 10px; }
  table { border-collapse: collapse; width: 300px; }
  td { padding: 5px; border: 1px solid #aaa;  text-align: center; }
  td:first-child { 
    width: 200px; /* item 출력 부분 넓이 */
  }
  tr:first-child td {
  background-color: #d3d3d3; /* 첫 번째 행의 모든 td에 회색 배경 */
}
  
  td:last-child { 
    width: 200px; /* 버튼 크기에 맞게 */
  }

  .table-container {
    display: flex; 
  justify-content: center; /* 수평 중앙 */
  align-items: center; /* 수직 중앙 */
  flex-direction: column; /* 상하 배치 */    /* 수직 중앙 정렬 */
}
  </style>