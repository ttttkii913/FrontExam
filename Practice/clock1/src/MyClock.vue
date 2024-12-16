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
  <div>{{ time }}</div>
</template>

<style scoped>
div { display: inline-block; font-size: 20pt; padding:3px 12px; border: 1px solid gray; }
</style>
