<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="App">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
      <RouterLink to="/notice">Notice</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
div#App {
  width: 700px; height: 400px;
  margin: 10px auto; padding: 20px;
  border: 1px solid gray;
  box-shadow: 2px 2px 2px #ddd;
}
nav a { margin-right: 10px; }
nav a.active { color: red;}
</style>
