<script setup>
import ExamList1 from './ExamList1.vue';
import ExamList2 from './ExamList2.vue';
import ExamList3 from './ExamList3.vue';
import ExamList4 from './ExamList4.vue';
</script>

<template>
  <main class="app">
    <ExamList1 />
    <hr />
    <ExamList2 />
    <hr />
    <ExamList3 />
    <hr />
    <hr />
    <ExamList4 />
  </main>
</template>

<style scoped>
main.app { 
  width: 500px; min-height: 300px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
</style>
