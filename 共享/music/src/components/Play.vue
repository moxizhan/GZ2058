<template>

<!-- //div 是否有这个paused的类名取决于paused的boolean值 -->
  <div class="play" :class="{ paused: paused }">
    <!-- //ref操作DOM元素 -->
    <audio
      :src="
        'https://music.163.com/song/media/outer/url?id=' +
        currentMusic.id +
        '.mp3'
      "
      autoplay
      ref="audio"
    ></audio>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideOutDown"
    >
      <div
        class="play-bar"
        v-show="isShowPlayBar"
        @click="isShowPlayBar = false"
      >
        <!-- //动态绑定播放地址 --显示当前歌曲图片-->
        <img :src="currentMusic.picUrl"  class="play-bar-img"/>
        <!-- //显示歌曲名字: -->
        <h5>{{ currentMusic.name }}</h5>
        <!-- //事件阻止冒泡 -->
        <div class="control" @click.stop="togglePlayState">
          <!-- //使用画布标签画圆 -->
          <canvas ref="circle" width="50" height="50"></canvas>
          <!-- //使用精灵图 -->
          <span class="icon"> </span>
         
         
        </div>
         <div  class="jump-icon"  @click="isShowPlayBar = false"><img src="../assets/jump4.png" ></div>
      </div>
    </transition>

    <!-- //设置playfull的动画效果 -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <!-- //设置playfull是否显示由isShowPlayBar的boolean值决定: -->
      <div class="play-full" v-if="!isShowPlayBar">

         <!-- //添加遮罩层: playfull的遮罩层 动态改变当前音乐的头象-->
         <div class="mask" :style="{backgroundImage:`url('${currentMusic.picUrl}')`}" > </div>

        <PlayFullHeader @show-play-bar="isShowPlayBar = true"  :currentMusic="currentMusic"></PlayFullHeader>
        <template>
          <!-- //设置是否显示歌词 -->
          <PlayFullLyric 
          :currentTime="currentTime"
          :currentMusic="currentMusic"
           :audio="this.$refs.audio"
           :newGeChi="newGeChi"
            v-if="isShowLyric"
            @toggle-show-lyric="isShowLyric = !isShowLyric"
          ></PlayFullLyric>

          <PlayFullChart :currentMusic="currentMusic"
            :paused="paused"
            v-else
          
            @toggle-show-lyric="isShowLyric = !isShowLyric"
          ></PlayFullChart>
        </template>

        <!-- //传参 -->
        <!-- // 子传参@update:currentTime---让DOM元素的audio的当前的播放时间
        等于子模板传递的过来的参数input的value值-->
        <PlayFullFooter
        :audio="this.$refs.audio"
            :paused="paused"
          :currentTime="currentTime"
          :duration="duration"
          @update:currentTime="$refs.audio.currentTime = $event"
          @toggole-play-state="togglePlayState"
          @play-next="playNext"
           @play-pre="playPre"
        ></PlayFullFooter>
      </div>
    </transition>
  </div>
</template>

<script>
import PlayFullHeader from "@/components/PlayFullHeader.vue";
import PlayFullChart from "@/components/PlayFullChart.vue";
import PlayFullLyric from "@/components/PlayFullLyric.vue";
import PlayFullFooter from "@/components/PlayFullFooter.vue";


export default {
  components: {
    PlayFullHeader,
    PlayFullChart,
    PlayFullLyric,
    PlayFullFooter,
  },

  props: ["currentMusic","currentIndex", "playlist","newGeChi"],
  data: function () {
    return {
      paused: null,
      duration: 0,
      currentTime: 0,
      isShowPlayBar: true,
      //是否显示歌词:
      isShowLyric: false,
    };
  },
  // created() {
  //   console.log("created", this.$refs.usernameInput);
  //   // console.log(this.$refs.usernameInput);
  // },
  mounted() {
    
    //audio 主要有几个 方法：

    //play：播放；pause：暂停  当前时间：currentTime；歌曲时间 ：maxTime；preload：自动播放；speed：播放速度；muted：静音；playing：播放
    //this.$refs.audio表示获得当前的audio对象,操作Dom对象:
    // console.log("mounted", this.$refs.audio);
    // console.log(this.currentMusic);
    // console.log(this.$refs.usernameInput);
    //添加事件监听audio事件"pause",使用箭头函数让this的指向父级:
    let audio = this.$refs.audio;
    audio.addEventListener("pause", () => {
      console.log("暂停");
      this.paused = true;
    });
    audio.addEventListener("play", () => {
      console.log("播放");
      this.paused = false;
    });
    audio.addEventListener("durationchange", () => {
      //操作DOM 设置参数duration 等于当前audio歌曲的总时长;
      this.duration = audio.duration;
    });
    audio.addEventListener("timeupdate", () => {
      //设置当前的时间等于当前歌曲的正在播放的时间:
      this.currentTime = audio.currentTime;

      //调用方法drawCircle带两个参数(this.currentTime,this.duration)
      //画两个圆显示
      this.drawCircle(this.currentTime, this.duration);
    });

    audio.addEventListener("ended",()=>{
      //歌曲播放完成后,调用playNexT()的方法()
      this.playNext();
    })
  },
  methods: {
    //使用画圆这方法带两个参数(正在播放时间,歌曲的总时长):
    drawCircle: function (n, total) {
      //获取当前的DOM---canva对象:
      let canvas = this.$refs.circle;
      //判断canvas是否有值 ---阻止getContext("2d")报错
      if(canvas){
        let ctx = canvas.getContext("2d");
      //清除画布
      ctx.clearRect(0, 0, 50, 50);
      //画第一个圆
      ctx.beginPath();
      //设置描边颜色:
      ctx.strokeStyle = "rgba(0,0,0,0.3)";

      ctx.arc(25, 25, 20, 0, Math.PI * 2, false); //绘制圆 false为顺时针
      ctx.stroke(); //开始描边
      ctx.closePath(); //结束绘制路线

      //画第二个圆
      ctx.beginPath();
      ctx.strokeStyle = "red";
      //ctx.arc参数(圆心坐标x,y,半径,开始弧度,结束的弧度,boolean值)
      ctx.arc(25, 25, 19, Math.PI * -0.5, Math.PI * (n / total - 0.5), false);
      //描边
      ctx.stroke();
      ctx.closePath();

      }
      
    },
    //切换播放状态:
    togglePlayState: function () {
      //获取DOM---audio对象
      let audio = this.$refs.audio;
      //如果暂停为true时,让DOM元素audio开始播放;
      if (this.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
     //计算上一首歌的方法:
    calculatePre:function(){
       // 根据当前播放模式 随机 单曲循环 顺序 顺序循环
       //定义变量
       let preIndex;
       //判断如果当前的下标比 播放列表的长度-1 还小
      if(this.currentIndex <=0){
       preIndex=this.playlist.length-1;

      }else{
       preIndex=this.currentIndex-1;
      }
          //返回下一首歌的下标:
         return preIndex;


    },

   //计算下一首歌的方法:
   calculateNext:function(){
       // 根据当前播放模式 随机 单曲循环 顺序 顺序循环
       //定义变量
       let nextIndex;
       //判断如果当前的下标比 播放列表的长度-1 还小
      if(this.currentIndex<this.playlist.length-1){
        nextIndex=this.currentIndex+1;

      }else{
        nextIndex=0;
      }
          //返回下一首歌的下标:
         return nextIndex;
   },
   playNext:function(){
      console.log("下一首");
     //定义变量接收调用 calculateNext()方法下一首歌的下标值:
     let index=this.calculateNext();
     //向父组件发出@update:music方法 带两个参数( item,index)---(播放列表中下一首歌的歌曲,一首歌的下标值)
     this.$emit("update:music",{
       item:this.playlist[index],
       //index--->>>ES6简写法:index:index
       index
     });
   },
     playPre:function (){
        console.log("上一首");
     //定义变量接收调用 calculateNext()方法下一首歌的下标值:
     let index=this.calculatePre();
    this.$emit("update:music",{
       item:this.playlist[index],
       //index--->>>ES6简写法:index:index
       index

     })
    
   }

  },
  // updated() {
  //  console.log(this.$refs);
  // },

  watch: {
    //监听暂停参数的变化:function(new,old)
    paused: function (n) {
      //向父级传递@update:paused带参数n
      this.$emit("update:paused", n);
    },
    // newGeChi:function(n){
    //   console.log(n,"22222222")
    // }
  },
};
</script>

<style  scoped  lang="less">
.play {
  &.paused{
    .play-bar{
      img{
        // animation-play-state: paused|running;
        //指定动画是否正在运行或已暂停。
        animation-play-state:paused;
      }
      .control{
        span.icon{
          //显示播放图片
              background: url("../assets/open.png") no-repeat;
              
        }
      }
    }
  }
}
.play-bar{
  position:fixed;
  bottom:0;
  left:0;
  z-index: 9;
  width: 100%;
  background: skyblue;
   display: flex;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.15);
 .play-bar-img{
    width: 36px;
   height: 36px;
    margin: 7px;
    border-radius: 50%;
    //360旋转
    animation: playing 6s linear infinite;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.15);
    vertical-align: bottom;
  }
  h5{
    line-height: 50px;
    text-align: left;
    width: 60%;
       white-space:nowrap;
   overflow:hidden;
   text-overflow:ellipsis;
   
  }
.control{
  position:relative;
  text-align: center;
  span.icon{
    position:absolute;
    width: 100%;
    height: 100%;
    top:10px;
    left:0;
    transform: translateY(3px) translateX(12.5px);
      //引入暂停播放按钮     
 background: url("../assets/stop.png")  no-repeat;
  }
 
}
 .jump-icon{
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    img{
      margin-top:9px;
    }
   
  }
}
.play-full{
  // 背景渐变颜色
  background: linear-gradient(
    to right,
    rgb(56, 56, 56),
    rgb(95, 95, 95),
    rgb(56, 56, 56)
  );
 width: 100vw;
 height: 100vh;
 position: fixed;
 top:0;
 left: 0;
 z-index: 9;
.mask{
  background: url("http://p1.music.126.net/fwXShM46KdIj3hB8_lJ71g==/109951165545588869.jpg");
    background-size:cover;
    background-position:center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    //filter属性定义了元素(通常是<img>)的可视效果(例如：模糊与饱和度)。
    //blur:给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，
    //或者是屏幕上以多少像素融在一起， 所以值越大越模糊；
 
 //brightness(%)	给图片应用一种线性乘法，使其看起来更亮或更暗。
 //如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。
 //值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。

    filter:blur(10px) brightness(0.5);
}
}
@keyframes playing {
  from{
 transform: rotate(0deg);
  }to {
transform: rotate(360deg);
  }
  
}
</style>