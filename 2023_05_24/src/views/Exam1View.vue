<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import moment from "moment";

const time = ref(null);

onMounted(() => {
  const callback = () => {
    time.value = moment().format("HH:mm:ss");
    console.log(time.value);
  };
  callback();
  const timerId = setInterval(callback, 1000);
  onBeforeUnmount(() => clearInterval(timerId));
})
</script>

<template>
  <div class="app">
    <h1>ExamOne</h1>
    <p>202214033</p><br>
    <p>유하영</p><br>
    <div>{{ time }}</div>
    <br>
</div> 
</template>

<style scoped>
div.app { 
  width: 700px; min-height: 200px;
  margin: 1em auto; padding: 1em;
}
p {  margin: 5px;  }

</style>