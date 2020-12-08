<template>
  <div>
    {{ left }}---
    <button
      :class="{ active: filter === 'all' }"
      @click="$emit('change-filter', 'all')"
    >
      all
    </button>
    <button
      :class="{ active: filter === 'active' }"
      @click="$emit('change-filter', 'active')"
    >
      active
    </button>
    <button
      :class="{ active: filter === 'complated' }"
      @click="$emit('change-filter', 'complated')"
    >
      complated
    </button>

    <span @click="$emit('clear-all-complated')">❌ALL</span>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  props: ["filter", "left"],
  components: {},
};
</script>

<style>
button.active {
  background: red;
}
</style>