<script setup>
defineProps({
  message: String
});
</script>

<template>
  <div class="message-container">
    <p>{{ message }}</p> <!-- props로 받은 message를 출력 -->
  </div>
</template>

<style scoped>
.message-container {
  background-color: lightcoral;
  padding: 1em;
}
</style>
