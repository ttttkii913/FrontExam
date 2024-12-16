<script setup>
import { ref } from 'vue';
const list = ref(["zero", "one", "two", "three", "four", "five"]);

function remove(index) {
  if (confirm("삭제하시겠습니까?"))
    list.value.splice(index, 1);
}
</script>

<template>
  <div>
    <span v-for="(s, index) in list" v-bind:key="s" v-on:click="remove(index)">
      {{ s }}
    </span>
  </div>
</template>

<style scoped>
div { margin: 1em; padding: 5px 30px; }
span { display: inline-block; margin: 5px; padding: 8px 15px; 
  border: 1px solid black; cursor: pointer; }
</style>
