<script setup>
import MyTrim from './MyTrim.vue';
import MyLazy from './MyLazy.vue';
import MyEnter from './MyEnter.vue';
import MyClick from './MyClick.vue';
</script>

<template>
  <div class="app">
    <MyTrim /> <hr />
    <MyLazy /> <hr />
    <MyEnter /> <hr/>
    <MyClick />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 400px; margin: 0 auto; }
</style>
