<template>
  <div id="app">
    <Test :msg="msg" @change-msg="xxx" >我是插槽内容</Test>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Test from "./components/Test.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    Test,
  },
  data: function () {
    return {
      msg: "Hello Vue.js",
    };
  },
  methods: {
    xxx: function (a) {
      console.log(123, a);
      this.msg = a;
    },
  },
};
</script>

<style>
</style>
