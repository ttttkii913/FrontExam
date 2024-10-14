<script setup>
import { ref } from 'vue'
const enabled = ref(false);
</script>

<template>
  <div class="MyForm">
    <h1>exam2</h1>
    <div class="row">
      <label><input type="checkbox" v-model="enabled" /> {{ enabled }}</label>
    </div>
  </div>
</template>

<style scoped>
div.MyForm { padding: 1em; background-color: #f8f8f8; }
div.row { margin: 0.7em; }
label:has(input[type=radio]) { margin-right: 1em; }
select { padding: 4px; width: 100px; }
</style>
