<template>
  <div class="two">
    <h1>Exam2View</h1>
    <div>
      <input type="checkbox" v-model="checked1" @change="toggleButton1" />
      <label>체크1</label>
      <input type="checkbox" v-model="checked2" @change="toggleButton2" />
      <label>체크2</label>
    </div>
    <button :disabled="!checked1">버튼1</button>
    <button :disabled="!checked2">버튼2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false
    };
  },
  methods: {
    toggleButton1() {
      if (this.checked1) {
        console.log('');
      } else {
        console.log('');
      }
    },
    toggleButton2() {
      if (this.checked2) {
        console.log('');
      } else {
        console.log('');
      }
    }
  }
};
</script>

<style scoped>
.two {
  padding: 30px;
  margin: 30px auto;
  width: 300px;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
input {
  margin-right: 10px;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
}
</style>
