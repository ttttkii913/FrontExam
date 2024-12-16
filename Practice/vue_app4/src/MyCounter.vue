<script setup>
import { ref } from 'vue';
defineProps(['title', 'step'])
const count = ref(0);
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ count }}</p>
    <button type="button" v-on:click="count += step">Increase</button>
    <button type="button" v-on:click="count -= step">Decrease</button>
  </div>
</template>

<style scoped>
  div { margin: 1em; padding: 5px 30px; background-color: #fff3f3; }
  div {  text-align: center; 
    background-color: #e8ffe8; border: 1px solid #aca; }
  p { font-size: 20pt; text-align: center; margin: 0; }
  button { padding: 0.7em 1.5em; margin: 5px; }
</style>
