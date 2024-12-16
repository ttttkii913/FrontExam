<script setup>
import { ref, onMounted } from 'vue';

const todos = ref([]);
const title = ref('');
const date = ref('');

const KEY = "todo1.todos";

onMounted(() => {
  const json = localStorage.getItem(KEY);
  if (json) todos.value = JSON.parse(json);
})

function addTodo() {
  const lastId = todos.value.length == 0 ? 0 :
    todos.value[todos.value.length - 1].id;
  todos.value.push({id: lastId + 1, title: title.value, done: false, date: date.value});
  localStorage.setItem(KEY, JSON.stringify(todos.value))
  title.value = "";
  date.value = '';
}

function deleteTodo(index) {
  if (confirm("삭제하시겠습니까?")) {
    todos.value.splice(index, 1);
    localStorage.setItem(KEY, JSON.stringify(todos.value))
  }
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(todos.value))
}
</script>

<template>
  <div>
    <h1>할 일</h1>
    <table>
      <thead>
        <tr><td>ID</td><td>할일</td><td>날짜</td></tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos"
            v-bind:key="todo.id" v-bind:class="{gray: todo.done}">
          <td>{{ todo.id }}</td>
          <td>{{ todo.date }}</td>  <!-- 날짜 출력 -->
          <td>
            <input type="checkbox" v-model="todo.done" v-on:change="save"/>
            {{ todo.title }}
            <span v-on:click="deleteTodo(index)">x</span>
          </td>
        </tr>
        <tr v-if="todos.length == 0">
          <td></td><td>할 일이 없습니다</td>
        </tr>
      </tbody>
    </table>
    <input type="text" v-model.trim="title" />
    <input type="date" v-model="date" />  <!-- 날짜 입력 필드 추가 -->
    <button type="button" v-on:click="addTodo">추가</button>
  </div>
</template>

<style scoped>
div { margin: 1em; padding: 5px 30px; }
h1 { border-bottom: 1px solid gray; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
thead { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
td:nth-child(2) { text-align: center; } /* 할일 칼럼은 왼쪽 정렬 */
input[type=text] { padding: 5px; margin-right: 5px; width: 300px; }
button { padding: 0.3em 1.5em; margin-right: 5px; margin-left: 5px; } /*왼쪽 마진으로 날짜 입력 버튼이랑 간격 띄움 */
span { font-weight: bold; cursor: pointer; float: right; }
span:hover { color: red; }
tr:has(span:hover) { background-color: #ffd; }
tr.gray { background-color: #f8f8f8; color: #bbb; text-decoration: line-through; }
input[type=checkbox] { accent-color: #bbb; }
</style>
