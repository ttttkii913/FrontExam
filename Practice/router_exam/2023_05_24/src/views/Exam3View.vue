<script setup>
import Exam3Child from './Exam3Child.vue';
import { ref } from 'vue';

const selectedColor = ref('yellow'); // 기본 선택 색상
</script>

<template>
  <div class="app">
    <h1>ExamThree</h1>
    <select v-model="selectedColor">
      <option value="yellow">yellow</option>
      <option value="green">green</option>
      <option value="red">red</option>
      <option value="blue">blue</option>
    </select>
    <Exam3Child :color="selectedColor" />
  </div>
</template>


<style scoped>
div.app { 
  width: 400px; min-height: 200px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
  flex-direction: column; /* 상하 배치 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

</style>
