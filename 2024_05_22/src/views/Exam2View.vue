<script setup>
import { ref } from 'vue';
const isChecked = ref(false); 
const isChecked2 = ref(false);
</script>

<template>
  <div id="app">
    <h1>Exam2View</h1>
      <input type="checkbox" v-model="isChecked" />
      <label>체크 1</label>
      <input type="checkbox" v-model="isChecked2" />
      <label>체크 2</label>
    <br />
    
    <button :disabled="!isChecked">버튼1</button>

    <button :disabled="!isChecked2">버튼2</button>

  </div>
</template>

<style scoped>
  div { padding: 1em; text-align: center; 
     border: 1px solid #aca; }
  p { font-size: 20pt; text-align: center; margin: 0; }
  #app { 
  width: 350px; min-height: 200px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
label { margin-right: 30px;}
input {
  margin-right: 5px;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
  margin-right: 20px;
}
</style>
