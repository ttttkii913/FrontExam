<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="App">
    <nav>
      <RouterLink to="/">학생 목록</RouterLink>
      <RouterLink to="/create">학생 등록</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
div#App { padding: 3em; margin: 3em auto; width: 800px;
  border-radius: .5em; box-shadow: .2em .2em .6em rgba(0,0,0,.25); }
a { text-decoration: none; color: black; padding: .5em 2em; border-radius: .5em; }
a.router-link-active { background-color: #eee; }
</style>
