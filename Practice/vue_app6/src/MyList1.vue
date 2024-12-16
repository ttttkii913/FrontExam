<script setup>
const list = ["zero", "one", "two", "three", "four", "five"];
</script>

<template>
  <div>
    <span v-for="s in list" v-bind:key="s">
      {{ s }}
    </span>
  </div>
</template>

<style scoped>
div { margin: 1em; padding: 5px 30px; }
span { display: inline-block; margin: 5px; padding: 8px 15px; 
  border: 1px solid black; }
</style>
