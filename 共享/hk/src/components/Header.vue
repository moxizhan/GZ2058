<template>
  <div class="header">
    <div class="icon" @click="iconClick" :class="{active: isBorderTop}" :style="{opacity}">
      <div></div>
    </div>
    <input
      type="text"
      placeholder="请输入你的内容"
      v-model.trim="text"
      @keyup.enter="keyEnter"
    />
  </div>
</template>

<script>
import "../assets/less/header.less";

export default {
  name: "Header",

  props: ['isBorderTop','opacity'],

  data() {
    return {
      text: null,
    };
  },

  methods: {
    keyEnter() {
      this.$emit("value-to", this.text);
      this.text = "";
    },

    iconClick() {
      if (this.isBorderTop) {
        this.$emit('activeFalse');
      } else {
        this.$emit('activeTrue');
      }
      this.$emit("changeChecked", !this.isBorderTop);
    },
  },
};
</script>

