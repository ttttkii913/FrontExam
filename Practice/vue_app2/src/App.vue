<script setup>
import HelloOne from './HelloOne.vue'
import HelloTwo from './HelloTwo.vue'
import HelloThree from './HelloThree.vue';
</script>

<template>
  <div class="app">
    <HelloOne />
    <hr /><HelloTwo />
    <hr /><HelloThree />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 400px; margin: 0 auto; }
</style>
