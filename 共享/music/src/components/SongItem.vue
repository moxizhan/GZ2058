<template>
  <li class="song-item" :class="{songactive:currentMusic && currentMusic.id === item.id}" @click="$emit('update:music', {item,index});$emit('update:playlist')">
    <div class="info">
      <h5>{{ item.name }}</h5>
      <p :class="{songactivep:currentMusic && currentMusic.id === item.id}">
        <!-- //span1小图标 -->
        <span class="span1"></span>
        <!-- //循环遍历 -->
        <span v-for="(artist, index) in item.song.artists" :key="index">
          <template v-if="index"> / </template>{{ artist.name }}
        </span><span>--{{ item.name }}</span>
      </p>
    </div>
    <div class="icon">
    <!-- //span是否有 paused的类名取决于paused的boolean值 -->
      <span
        class="playing"
        :class="{ paused: paused }"
        v-if="currentMusic && currentMusic.id === item.id"
      >
        <i></i>
        <i></i>
        <i></i>
      </span>
      <!-- //播放图片 -->
      <span v-else><img src="../assets/bofang.png" >

      </span>
    </div>
  </li>
</template>

<script>
export default {
  //从父级组件接收"item", "currentMusic", "paused" ,"index"参数
  props: ["item", "currentMusic", "paused" ,"index"],
  // created() {
  //   console.log('$root',this.$root);
  //   console.log('$parent',this.$parent);
  // },
  created() {
    // console.log("songitem--created")
  },
  watch:{
    // item:function(n){
    //   console.log(n.id);
    // },
// currentMusic:function(n){
// console.log(n.id)
// }
    
  },
  updated() {
    // console.log(this.currentMusic.id)
  }

};
</script>

<style lang="less">
li.songactive{
  overflow: hidden;
 
  background-image: linear-gradient(to right, skyblue , pink);
}
li.song-item {
    overflow: hidden;
   box-sizing: border-box;
  border-bottom:1px solid grey;
  margin:10px 5px;
  display: flex;
  .info {
    flex: 1;
    width: 80%;
    h5{
      font-size:16px;
     background-image: linear-gradient(to right, rgb(0, 149, 255)  , rgb(215, 226, 12) , rgb(31,66,56) );
  
       background-clip:text;
      color: transparent;
      font-weight: 800;
      margin-bottom:5px;
    white-space:nowrap;
     overflow:hidden;
     text-overflow:ellipsis; 
    }
    p.songactivep{
       transform: translateX(0px);
       //动画效果
        animation:movep 8s linear infinite;
    }
    
        
    p{
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
      font-weight: 300;
      font-size: 12px;
      padding-bottom:5px;

   
   
      .span1{
        &::before{
          content: "";
          display: inline-block;
          width: 12px;
          height: 8px;
        background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
        background-size: 166px 97px;
        margin-right:5px ;
        }
      }
    }
  }
  .icon {
    width: 30px;
    height: 30px;
    .playing {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      i {
        width: 6px;
        height: 30px;
        background: red;
        // display: inline-block;
        //transform-origin: x-axis y-axis z-axis;
        transform-origin: center bottom;
//alternate-reverse: :表示动画在奇数次播放时为反向播放，为偶数次播放时为正向播放。
//animation-delay--负值，请注意动画跳过 2 秒进入动画周期：
        animation: playing 0.6s linear -0.2s infinite alternate-reverse;

        &:first-of-type {
          animation-delay: 0s;
        }
        &:last-of-type {
          animation-delay: -0.4s;
        }
      }
      &.paused {
        //span有.paused 的类名的样式
        i {
          //动画播放状态停止
          animation-play-state: paused;
        }
      }
    }
  }
}
//自定义动画效果:
@keyframes playing {
  from {
    // height: 50px;
    transform: scaleY(1);
  }
  to {
    // height: 10px;
    transform: scaleY(0.2);
  }
};
 @keyframes movep {
        from{
      transform: translateX(0px);
        }to{
          transform: translateX(400px);
        }
    }
</style>