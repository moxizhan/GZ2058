<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <button @click="count++">++</button>
    <div>App - {{ count }}</div>
    <hr />

    <Count :count="count" @update:count="count++" />
    <hr />
    <Count :count="count" @update:count="count++" />

    <hr />

    <Test />
  </div>
</template>
<script>
import Count from "@/components/Count.vue";
import Test from "@/components/Test.vue";
export default {
  components: {
    Count,
    Test
  },
  data: function () {
    return {
      count: 0,
    };
  },
  // computed: {
  //   n: function () {
  //     return this.$store.state.n;
  //   },
  // },
  created() {
    console.log(this, this.$router, this.$route);
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
