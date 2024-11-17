<script setup>
import { ref } from 'vue';

const props = defineProps(['title', 'step']);
const count = ref(0);
const inputValue = ref(props.step); // 초기값을 props.step으로 설정
</script>

<template>
  <div id="app">
    <h1>Exam1View</h1>
    <p>{{ count }}</p>
    <br>
      <input type="text" v-model="inputValue" class="text"/>
      <button type="button" v-on:click="count += Number(inputValue)">++</button>
      <button type="button" v-on:click="count -= Number(inputValue)">--</button>
  </div>
</template>

<style scoped>
  div { padding: 1em; text-align: center; 
     border: 1px solid #aca; }

  #app { 
  width: 350px; min-height: 200px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}


button {
  padding: 0.5em 2em;
  margin: 3px;
}
p {
  color: blue;
  font-size: 30px;
}
input {
  padding: 7px;
  margin-right: 5px;
  width: 50px;
}
</style>