<script setup>
import ExamList1 from './ExamList1.vue';
import ExamList2 from './ExamList2.vue';
import ExamList3 from './ExamList3.vue';
import ExamList4 from './ExamList4.vue';
</script>

<template>
  <div class="app">
    <ExamList1 />
    <hr />
    <ExamList2 />
    <hr />
    <ExamList3 />
    <hr />
    <ExamList4 />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 600px; margin: 0 auto; }
</style>
