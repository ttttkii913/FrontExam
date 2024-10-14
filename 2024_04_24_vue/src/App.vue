<script setup>
import { ref } from 'vue';
import ExamList1 from './ExamList1.vue';
import ExamList2 from './ExamList2.vue';
import ExamList3 from './ExamList3.vue';

const step = ref(1);
const count = ref(0);
</script>

<template>
  <main class="app">
    <h2>exam1</h2>
    <ExamList1 :step="step" :value="count" />
    <hr />
    <ExamList2 />
    <hr />
    <ExamList3 />
    
  </main>
</template>

<style scoped>
main.app { 
  width: 1000px; min-height: 200px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
input { padding: 4px; margin: 4px; font-size: 14pt;}
</style>
