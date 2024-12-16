<script setup>
import MyExam1 from './MyExam1.vue';
import MyExam2 from './MyExam2.vue';
import MyExam3 from './MyExam3.vue';
import MyExam4 from './MyExam4.vue';
import MyExam5 from './MyExam5.vue';
</script>

<template>
  <div class="app">
    <MyExam1 />
    <hr /><MyExam2 />
    <hr />
    <MyExam3 />
    <hr />
    <MyExam4 />
    <hr />
    <MyExam5 />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 400px; margin: 0 auto; }
</style>
