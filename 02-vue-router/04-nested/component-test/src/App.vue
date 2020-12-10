<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!-- <Test :msg="msg" @change-msg="msg = $event" /> -->
    <!-- <Test :msg="msg" @update:msg="msg = $event" /> -->
    <Test :msg.sync="msg" />

    <hr />
    <Test2 v-bind.sync="post" />

    <hr />

    <base-button></base-button>
    <base-icon></base-icon>
    <BaseInput></BaseInput>

    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :app-msg="{ a: '10' }" :count="n" @my-event="n++" />
    <HelloWorld
      :app-msg="{ a: '10' }"
      class="test"
      @click.native="xxx"
      @input="yyy"
      @focus="zzz"
    />
    <!-- 将原生事件绑定到组件 -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Test,
    Test2,
  },
  data: function () {
    return {
      n: 10,
      msg: "hello",
      post: {
        title: "我是标题",
        content: "我是内容",
      },
    };
  },
  methods: {
    xxx: function () {
      console.log(123);
    },
    yyy: function (n) {
      console.log(n);
    },
    zzz: function () {
      console.log("focus");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
