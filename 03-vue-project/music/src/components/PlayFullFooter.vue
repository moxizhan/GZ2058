<template>
  <div class="play-full-footer">
    <input type="range" min="0" :max="duration" step="1" @input="getValue" :value="currentTime" />
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
      this.$emit('update:currentTime', e.target.value)
    }
  },
};
</script>

<style lang="less">
.play-full-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>