<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div id="App">
    <nav>
      <RouterLink to="/exam1">Exam1</RouterLink>
      <RouterLink to="/exam2">Exam2</RouterLink>
      <RouterLink to="/exam3">Exam3</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
div#App {
  width: 500px; height: 300px;
  margin: 10px auto; padding: 20px;
  border: 1px solid gray;
  box-shadow: 2px 2px 2px #ddd;
}
nav a { margin-right: 10px; }
nav a.active { color: red;}
</style>
