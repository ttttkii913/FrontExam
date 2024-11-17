<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="App">
    <nav>
      <RouterLink to="/exam1">ExamOne</RouterLink> |
      <RouterLink to="/exam2">ExamTwo</RouterLink> |
      <RouterLink to="/exam3">ExamThree</RouterLink> |
      <RouterLink to="/exam4">ExamFour</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

