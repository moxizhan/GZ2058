<template>
  <div class="play-full-footer">
    <div class="progress">
      <input
        type="range"
        min="0"
        :max="duration"
        step="1"
        @input="getValue"
        :value="currentTime"
      />
      <span :style="{ width: (currentTime / duration) * 100 + '%' }"></span>
    </div>

    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: ["currentTime", "duration"],
  data: function () {
    return {};
  },
  methods: {
    getValue: function (e) {
      console.log(e.target.value);
      this.$emit("update:currentTime", e.target.value);
    },
  },
};
</script>

<style lang="less">
.play-full-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .progress {
    width: 80%;
    height: 6px;
    background: linear-gradient(to right,lightblue,lightcoral);
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    border-radius: 3px;
    input {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      opacity: 0;
    }
    span {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: rgb(30, 124, 38);
      border-radius: 3px;
    }
  }
}
</style>