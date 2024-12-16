<script setup>
import { ref } from 'vue';
import ExamList1 from './ExamList1.vue';
import ExamList2 from './ExamList2.vue';
import ExamList3 from './ExamList3.vue';
import ExamList4 from './ExamList4.vue';
import ExamList5 from './ExamList5.vue';
import ExamList6 from './ExamList6.vue';
import ExamList7 from './ExamList7.vue';
import ExamList8 from './ExamList8.vue';
import ExamList9 from './ExamList9.vue';
import ExamList10 from './ExamList10.vue';
const step = ref(1);
const count = ref(0);
</script>

<template>
  <div class="app">
    <ExamList1 :step="step" :value="count" />
    <hr />
    <ExamList2 />
    <hr />
    <ExamList3 />
    <hr />
    <ExamList4 :step="step"/>
    <hr />
    <ExamList5 />
    <hr />
    <ExamList6 />
    <hr />
    <ExamList7 :title="title" :step="step"/>
    <hr />
    <ExamList8  />
    <hr />
    <ExamList9 />
    <hr />
    <ExamList10 />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 1000px; margin: 0 auto; }
</style>
