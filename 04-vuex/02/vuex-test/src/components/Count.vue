<template>
  <div>
    <p>
      Child - {{ count }}- <button @click="$emit('update:count')">++</button>
    </p>
    <p>store - {{ n }} - <button @click="xxx">++</button></p>
  </div>
</template>

<script>
export default {
  props: ["count"],
  computed: {
    n: function () {
      return this.$store.state.n;
    },
  },
  methods: {
    xxx: function () {
      this.$store.commit("increment");
    },
  },
};
</script>

<style>
</style>