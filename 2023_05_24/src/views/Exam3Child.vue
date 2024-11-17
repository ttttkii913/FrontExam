<template>
    <div :style="{ backgroundColor: color}">
      <p>ExamThreeChild</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      color: {
        type: String,
        required: true,
      },
    },
  };
  </script>

<style scoped>

div {
  height: 50px;
  display: flex;
  align-items: center;  /* 수직 중앙 정렬 */
  justify-content: center;  /* 수평 중앙 정렬 */
  padding: 0 10px;  /* 좌우 여백 */
  margin-top: 20px;
}
</style>