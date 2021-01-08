<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: mapState(["bookrack"]),
};
</script>

<style>
</style>