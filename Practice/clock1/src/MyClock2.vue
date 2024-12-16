<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import moment from "moment";

const { format = "HH:mm:ss", interval = 1000 } = defineProps(["format", "interval"])
const time = ref(null);

onMounted(() => {
  const callback = () => {
    time.value = moment().format(format);
    console.log(time.value);
  };
  callback();
  const timerId = setInterval(callback, interval);
  onBeforeUnmount(() => clearInterval(timerId));
})
</script>

<template>
  <div>{{ time }}</div>
</template>

<style scoped>
div { display: inline-block; font-size: 20pt; padding:3px 12px; border: 1px solid gray; }
</style>
