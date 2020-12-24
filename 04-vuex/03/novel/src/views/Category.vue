<template>
  <div v-if="categories">
    <h3>男生</h3>
    <van-grid :column-num="3">
      <van-grid-item v-for="(value, index) in categories.male" :key="index">
        <h3>{{ value.name }}</h3>
        <p>{{ value.bookCount }}</p>
      </van-grid-item>
    </van-grid>

  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: null,
    };
  },
  created() {
    this.axios.get("http://novel.kele8.cn/categories").then((res) => {
      this.categories = res.data;
    });
  },
};
</script>

<style>
</style>