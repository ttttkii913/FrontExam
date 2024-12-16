<script setup>
import { ref } from 'vue';

const items = ref([
  { id: 1, title: 'one' },
  { id: 2, title: 'two' }
]);
const newItem = ref('');

const addItem = () => {
  if (newItem.value) {
    const nextId = items.value.length + 1;
    items.value.push({ id: nextId, title: newItem.value });
    newItem.value = ''; // 입력 필드 비워주기
  }
};

const removeItem = (id) => {
  items.value = items.value.filter(item => item.id !== id);
};
</script>

<template>
  <div id="app">
    <h1>Exam3View</h1>
    <table>
      <thead>
        <tr><td>no</td><td>title</td></tr>
      </thead>
        <tr v-for="item in items" v-bind:key="item.id">
        <td>{{ item.id }}</td>       
        <td @click="removeItem(item.id)">{{ item.title }}</td>
        </tr>
      </table>

    <input type="text" v-model="newItem" />
    <button type="button" @click="addItem">add</button>
  </div>
</template>

<style scoped>div { padding: 30px; margin: 30px auto; width: 400px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
tr:nth-child(1) { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
input[type=text] { padding: 5px; margin-right: 5px; width: 300px; }
button { padding: 0.3em 1.5em; }
tr:hover { 
  background-color: rgb(255, 255, 189) /* 마우스 올릴 때 노란색으로 변경 */
}
</style>
