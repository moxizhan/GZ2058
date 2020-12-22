<template>
  <section>
    <!-- <h3><slot></slot></h3> -->
    <BorderedTitle><slot></slot></BorderedTitle>
    <ul>
      <!-- //SongItem遍历数据: -->
      <!-- //向父级传递@update:music  @update:playlist方法 -->
      <SongItem
        @update:music="$emit('update:music', $event)"
        @update:playlist="$emit('update:playlist',newSongs)"
        v-for="(song,index) in newSongs"
        :key="song.id"
        :item="song"
        :index="index"
        :currentMusic="$attrs.currentMusic"
        :paused="$attrs.paused"
      />
      
    </ul>
    <div class="bottom"></div>
  </section>
</template>

<script>
import BorderedTitle from "@/components/BorderedTitle.vue";
import SongItem from "@/components/SongItem.vue";

export default {

  //从父级组件接收参数 newSongs
  props: {
    newSongs: {
      type: Array,
    },
  },
  components: {
    BorderedTitle,
    SongItem,
  },
};
</script>

<style lang="less">
section{
  .bottom{
    width: 100%;
    height: 50px;
    // background: red;
  }
}
</style>