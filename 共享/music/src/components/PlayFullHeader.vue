<template>
<div class="PlayFullBar">
  <div class="PlayFullBar-icon" @click="$emit('show-play-bar')"><img src="../assets/jump3.png">  </div>
  <div class="PlayFullBar-songName"><span>{{currentMusic.name}}</span></div>
</div>
</template>

<script>
export default {
  props: ["currentMusic"],
  created() {
    // console.log(this.currentMusic)
  },
 mounted() {
  //  console.log('mounted',this.currentMusic)
 },
 updated() {
    // console.log('updated',this.currentMusic)
 },
}
</script>

<style scoped lang="less">
.PlayFullBar{
  width: 100%;
  height: 50px;
  display: flex;
    // 背景渐变颜色
  background: linear-gradient(
    to right,
    rgb(56, 56, 56),
    rgb(95, 95, 95),
    rgb(56, 56, 56)
  );
  border-bottom:1px solid grey;
  align-items: center;
  color:white;
   box-shadow: 0 0 8px 0 rgba(0,0,0,0.15);
.PlayFullBar-icon{
  width: 15%;
  margin-left:7px;
      
      
}
.PlayFullBar-songName{
  width: 70%;
  overflow: hidden;
   white-space:wrap;
  span{
    font-size: 14px;
    font-weight: 800;
    line-clamp: 2;
    white-space: wrap;
    text-overflow:ellipsis; 
  }
}
}

</style>