<script setup>
import { ref } from 'vue';
import MyCounter from './MyCounter.vue';
const title = ref("my counter");
const step = ref(1);
</script>

<template>
  <div class="app">
    <MyCounter title="카운터#1" :step="1" />
    <hr />
    <MyCounter title="카운터#2" :step="2" />
    <hr />
    <input type="text" v-model="title"/>
    <input type="number" v-model="step"/>
    <hr />
    <MyCounter :title="title" :step="step" />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 400px; margin: 0 auto; }
input { padding: 4px; margin: 4px; font-size: 14pt; }
</style>
