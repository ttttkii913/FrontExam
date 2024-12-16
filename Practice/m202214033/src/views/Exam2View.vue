<script setup>
import { ref } from 'vue';

const todos = ref([
  { id: 1, title: "홍길동" }
]);
const title = ref('');

function addTodo() {
  const lastId = todos.value.length == 0 ? 0 :
    todos.value[todos.value.length - 1].id;
  todos.value.push({id: lastId + 1, title: title.value});
  title.value = "";
}

function deleteTodo(index) {
  if (confirm("삭제하시겠습니까?"))
    todos.value.splice(index, 1);
}
</script>

<template>
  <div>
    <h1>Exam2</h1>
    <table>
      <thead>
        <tr><td>id</td><td>name</td></tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos" v-bind:key="todo.id" @click="deleteTodo(index)">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="text" v-model.trim="title" /></td>
          <td><button type="button" v-on:click="addTodo">add</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>


table {
  border-collapse: collapse;
  margin: 20px 0;
  width: 100%;
}
thead {
  text-align: center;
}
td {
  text-align: left;
  width: 30px;
  padding: 6px;
  border-collapse: collapse;
  border-top: 1px solid gray; /* 위쪽 테두리만 추가 */
  border-left: none; /* 왼쪽 테두리 제거 */
  border-right: none; /* 오른쪽 테두리 제거 */
}

input[type=text] {
  padding: 5px;
  margin-right: 5px;
  width: 150px;
}
button {
  padding: 0.3em 1.5em;
}
tr:hover {
  background-color: rgb(255, 255, 189);
  cursor: pointer;
}
tr:last-child td {
  border-bottom: 1px solid gray;
}

td:nth-child(2) {
  padding-left: 10px; /* 왼쪽 여백 추가 */
}
</style>
