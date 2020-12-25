<template>
  <li class="list-item" @click="$router.push('/book/' + book._id)">
    <van-card
      :lazy-load="true"
      :thumb="`http://statics.zhuishushenqi.com${book.cover}`"
      price="2.00"
      :desc="book.shortIntro"
      :title="book.title"
    />
  </li>
</template>

<script>
export default {
  props: ["book"],
};
</script>

<style lang="less">
.list-item {
  list-style: none;
  .van-card {
    .van-card__thumb {
      width: 60px;
      height: 80px;
      img {
        border-radius: 0;
      }
    }
    .van-card__content {
      .van-card__desc {
        max-height: 40px;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>