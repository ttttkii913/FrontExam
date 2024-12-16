<script setup>
import MyForm from './MyForm.vue';
import MyForm2 from './MyForm2.vue';
</script>

<template>
  <div class="app">
    <MyForm />
    <hr />
    <MyForm2 />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 400px; margin: 0 auto; }
</style>
