<template>
  <div class="two">
    <h1>Exam2View</h1>
    <div>
      <input type="checkbox" v-model="checked1" @change="toggleButton1" />
      <label>체크1 </label>
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
      console.log(this.checked1 ? '체크1 활성화' : '체크1 비활성화');
    },
    toggleButton2() {
      console.log(this.checked2 ? '체크2 활성화' : '체크2 비활성화');
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
  border: 1px solid;
}
input {
  margin-right: 5px;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
  margin-right: 20px;
}
label { margin-right: 20px;}
</style>
