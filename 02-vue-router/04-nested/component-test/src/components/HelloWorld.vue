<template>
  <div class="hello">
    <h1 @click="selfCount++">{{ selfCount }}</h1>
    <button @click="$emit('my-event')">++</button>
    <input type="text" v-on:input="$emit('input', $event.target.value)" v-on:focus="$emit('focus', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    appMsg: Object,
    count: {
      type: Number,
      default: 1,
    },
  },

  // Prop 类型 验证
  data: function () {
    return {
      selfCount: this.count,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
