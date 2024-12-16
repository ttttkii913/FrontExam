<script setup>
import { ref } from 'vue';
defineProps(['title', 'step'])
const count = ref(0);
</script>

<template>
  <div>
    <h2>exam8</h2>
    <p>{{ title }}</p>
    <p class="count">{{ count }}</p>
    <hr />
    <div class="button-container">
      <button type="button" v-on:click="count += step">increase</button>
      <button type="button" v-on:click="count -= step">decrease</button>
    </div>
  </div>
</template>

<style scoped>
div {margin: 1em; padding: 5px 30px;background-color: antiquewhite;}
.container { padding: 1em; text-align: left; }
.count { color: blue; font-size: 15pt; }
.button-container { display: flex; gap: 5px; }
button { padding: 7px 45px; margin: 0; }
</style>
