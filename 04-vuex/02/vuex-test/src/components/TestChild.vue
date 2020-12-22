<template>
  <div>
    <h1 @click="xxx">test-child</h1>
    <p>
      <button @click="decrement">--</button> n {{ n
      }}<button @click="increment">++</button>
    </p>
    <p @click="updateMsg({ time: Date.now() })">msg {{ msg }}</p>
    <p>a {{ a }}</p>
    <p>b {{ b }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
// mapState辅助函数 会返回一个对象

import { mapMutations } from "vuex";

export default {
  data: function () {
    return {
      c: 30,
    };
  },
  //   computed: {
  //     n: function () {
  //       return this.$store.state.n;
  //     },
  //     msg: function () {
  //         return this.$store.state.msg;
  //     }
  //   },
  //   computed: mapState({
  //     n: (state) => state.n,
  //     msg: 'msg'
  //     // 'msg'  相当于  (state) => state.msg
  //   }),

  //   computed: mapState({
  //     n: "n",
  //     msg: "msg",
  //     m: function (state) {
  //       return state.n + this.c;
  //     },
  //   }),

  //   computed: mapState(["n", "msg"]),
  computed: {
    ...mapState(["n", "msg", "a", "b"]),
    m(state) {
      return state.n + this.c;
    },
  },

  //   使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。
  //   不复用的状态就没必要写到store里面

  //   methods: {
  //     increment: function () {
  //       this.$store.commit("increment");
  //     },
  //     decrement: function () {
  //       this.$store.commit("decrement");
  //     },
  //     // updateMsg: function () {
  //     //   this.$store.commit("updateMsg", Date.now());
  //     // },
  //     // 在大多数情况下，载荷应该是一个对象
  //     updateMsg: function () {
  //       this.$store.commit("updateMsg", {
  //         time: Date.now(),
  //       });
  //     },
  //   },

  methods: {
    ...mapMutations(["increment", "decrement", "updateMsg"]),
    xxx: function () {
      console.log("xxx");
    },
  },
};
</script>

<style>
</style>