<script setup>
import { ref } from 'vue';
const list = ref(["zero", "one", "two"]);
const word = ref("")

function remove(index) {
  if (confirm("삭제하시겠습니까?"))
    list.value.splice(index, 1);
}

function addWord() {
  list.value.push(word.value);
  word.value = "";
}
</script>

<template>
  <div class="app">
    <h1>Exam2</h1>
    <table>
      <tbody>
      <tr v-for="(item, index) in list" v-bind:key="index">
        <td>{{ item }}</td>
        <td><button type="button" v-on:click="remove(index)">삭제</button></td>
      </tr>
    </tbody>
    </table>
    <br>
  <input type="text" v-model="word" />
  <button type="button" @click="addWord">추가</button>
</div> 
</template>

<style scoped>
div.app { 
  width: 500px; min-height: 200px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
span { display: inline-block; margin: 5px; padding: 8px 15px; 
  border: 1px solid black; cursor: pointer; }
input { padding: 4px; margin: 5px; }
button { padding: 4px 10px; }
table { border-collapse: collapse; margin: 0 auto; width: 300px;}
td { padding: 5px; border: 1px solid #aaa;  text-align: center; }
td:first-child { 
  width: 300px; /* item 출력 부분 넓이 */
}

td:last-child { 
  width: 70px; /* 버튼 크기에 맞게 */
}
</style>