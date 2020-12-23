<template>
  <div class="playlist">playlist</div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  created() {
    // console.log('====================================');
    // console.log(this.$route.query.id);
    // console.log('====================================');
    this.id = this.$route.query.id
  },

  watch: {
    // "$route.query.id": function (n) {
    //   // console.log('watch',n);
    //   this.id = n
    // },
    id: function () {
      console.log('id', this.id);
    }
  },

  beforeRouteUpdate(to, from, next) {
    // console.log('beforeUpdate',to.query.id);
    this.id = to.query.id
    next();
  },
  activated() {
    // console.log('activated',this.$route.query.id);
    this.id = this.$route.query.id
  },
};
</script>

<style>
</style>