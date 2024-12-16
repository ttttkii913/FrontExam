<script setup>
import { ref } from 'vue';

const items = ref([
  { id: 1, name: '홍길동', age: 16 }
]);
const newName = ref('');
const newAge = ref(0);

const addItem = () => {
  if (newName.value && newAge.value) {
    const nextId = items.value.length + 1;
    items.value.push({ id: nextId, name: newName.value, age: parseInt(newAge.value) });
    newName.value = ''; // name 입력 필드 비워주기
    newAge.value = ''; // age 입력 필드 비워주기
  }
};
const removeItem = (index) => {
  if (confirm("삭제하시겠습니까?")) {
    items.value.splice(index, 1);
  }
};
</script>

<template>
    <h1>Exam3</h1>
    <table>
      <thead>
        <tr><td>id</td><td>name</td><td>age</td></tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.id">
          <td>{{ item.id }}</td>       
          <td @click="removeItem(item.id)">{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="text" v-model="newName" /></td>
          <td><input type="text" v-model="newAge"/></td>
          <td><button type="button" @click="addItem">add</button></td>
        </tr>
      </tbody>
    </table>
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
  padding-left: 10px;
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
</style>
