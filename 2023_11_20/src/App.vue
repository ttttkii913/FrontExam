<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="App">
    <nav>
      <RouterLink to="/exam1">exam1</RouterLink> |
      <RouterLink to="/exam2">exam2</RouterLink> |
      <RouterLink to="/exam3">exam3</RouterLink>
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

