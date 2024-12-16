<script setup>
import { ref } from 'vue';
const studentNo = ref("202214033");
const name = ref("홍길동");
</script>

<template>
  <div>
    <input type="text" v-model="studentNo" />
    <input type="text" v-model="name" />
  <br>
    <span>{{ studentNo }}</span>
    <span>{{  name }}</span>
  </div>
</template>

<style scoped>
  div { background-color: #f8f8f8; padding: 5px; 
    margin: 1em; text-align: center; }
  input { padding: 4px; margin-right: 1em; margin-bottom: 1px;
            display: inline-block; }
  span { display: inline-block; margin-right: 1em; }          
</style>
