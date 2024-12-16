<script setup>
import MyCheckbox1 from './MyCheckBox1.vue';
import MyCheckbox2 from './MyCheckBox2.vue';
import ThreeState from './ThreeState.vue';
</script>

<template>
  <div class="app">
    <MyCheckbox1 />
    <hr />
    <MyCheckbox2 />
    <hr />
    <ThreeState />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 400px; margin: 0 auto; }
</style>

<!-- three status - 로딩중 만들기
<script setup>
import ThreeState from './ThreeState.vue';

</script>

<template>
  <main class="app">
    <ThreeState />
  </main>
</template>

<style scoped>
main.app { 
  width: 400px; 
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
</style> 
-->
