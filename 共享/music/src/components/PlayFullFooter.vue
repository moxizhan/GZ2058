<template>
  <div class="play-full-footer">
    <div class="footer-header">
          <div class="progress-currentTime" ref="progress-currentTime">
            <span>{{currentTimeNum1}}</span>
            <span>{{currentTimeNum2}}</span>
            <div>:</div>
            <span>{{currentTimeNum3}}</span>
            <span>{{currentTimeNum4}}</span>

          </div>
         <div class="progress">
     
         <!-- //进度条自定义的动态绑定最大值是歌曲的总时长 :value值为歌曲的当前时间 -->
        <input type="range" min="0" :max="duration" step="1" @input="getValue" :value="currentTime">
          <!-- //动态绑定样式: 宽度随着currentTime/duration的百分比进行变化 -->
        <span :style="{width :(currentTime/duration) * 100+'%'}"></span>
     <!-- <div class="icon"  ref="myicon" :style="{left :(currentTime/duration)*300+'px'} ></div> -->
  
    </div>
     <div class="progress-duration" ref="progress-duration">
             <span>{{ durationNum1}}</span>
             <span>{{ durationNum2}}</span>
               <div>:</div>
             <span>{{ durationNum3}}</span>
             <span>{{ durationNum4}}</span>
     </div>
     </div>
    <br>
    <div class="footer-control">
      <ul>
        <li> <img src="../assets/pre2.png"   @click.stop="$emit('play-pre')"></li>
        <li> <img  @click.stop="$emit('toggole-play-state')" v-if="paused" src="../assets/open.png" alt="" srcset="">
              <img @click.stop="$emit('toggole-play-state')" v-else  src="../assets/stop.png"></li>
        <li> <img  src="../assets/next2.png"  @click.stop="$emit('play-next')"></li>
        <!-- <li> <img src="../assets/pre1.png" alt="" srcset=""></li> -->
      </ul>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  props: ["currentTime", "duration", "paused" ,"audio"],
  data: function () {
    return {
          currentTimeNum1:0,
          currentTimeNum2:0,
          currentTimeNum3:0,
          currentTimeNum4:0,
          durationNum1:0,
          durationNum2:0,
          durationNum3:0,
          durationNum4:0,
         

    };
  },
  computed:{



  },
  methods: {
    //input输入时触发getvalue事件:
    getValue: function (e) {
      // console.log(e.target.value);
      //向父级发出@update:currentTime 带参数(e.target.value)
      this.$emit('update:currentTime', e.target.value)
    },

    
  },
  watch:{
currentTime:function(n){
  // console.log(n,"2222222222")
     //显示当前歌曲播放时间
         let m1=Math.floor(n%3600/60);
         let s1=Math.floor(n%60);
        //  console.log(m1,s1,"===========")
        //  console.log(this)
        //  console.log(Math.floor(m1 / 10 ),m1%10,"---",Math.floor(s1111/10), s1111%10)
         // 计算分钟数
          this.currentTimeNum1= Math.floor(m1/10 )
          this.currentTimeNum2= m1%10;
          //计算秒数
          this.currentTimeNum3=Math.floor(s1/10);
          this.currentTimeNum4= s1%10;
          // console.log("footer--currentime", this.currentTimeNum1,   this.currentTimeNum2,"------",   this.currentTimeNum3,  this.currentTimeNum4)


},
duration:function(n){
    //  console.log("footer( mounted)--currentTime", this.currentTime)
    //  //  console.log("footer", this.audio)
    //   console.log("footer( mounted)-duration", this.duration)

      //显示歌曲总时长
          let m=Math.floor(n%3600/60);
          let s=Math.floor(n%60);
          // console.log(m,s)
          //计算分钟数
          this.durationNum1= Math.floor(m / 10 )
          this.durationNum2= m%10;
          //计算秒数
          this.durationNum3=Math.floor(s/10);
          this.durationNum4= s%10;
// 

}
  },
  updated() {
    // console.log('footer(updated)---updated22',this.currentTime);
    //   console.log('footer(updated)---duration33',this.duration)
 },


  mounted() {
    //    console.log("footer( mounted)--currentTime", this.currentTime)
    //  //  console.log("footer", this.audio)
    //   console.log("footer( mounted)-duration", this.duration)

      //显示歌曲总时长
          let m=Math.floor(this.duration%3600/60);
          let s=Math.floor(this.duration%60);
          // console.log(m,s)
          //计算分钟数
          this.durationNum1= Math.floor(m / 10 )
          this.durationNum2= m%10;
          //计算秒数
          this.durationNum3=Math.floor(s/10);
          this.durationNum4= s%10;
// console.log("footer--durration",   this.durationNum1,  this.durationNum2,"------",  this.durationNum3,  this.durationNum4)
       
            
     

    // this.$refs.myicon.onclick=(e)=>{
    //   e.stopPropagation();

      
    //   console.log(333);
    //    this.$refs.myicon.style.backgroundColor="red";
    //    this.$refs.myicon.style.left="100px";
    // }

    

  },
    
};
</script>

<style scoped lang="less">
.play-full-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .footer-header{
display: flex;
justify-content: center;
align-items: center;

.progress-currentTime{
  display: flex;
  margin-left:15px; 
  // margin-top:10px; 
 justify-content:center;
   font-size: 12px;
   width:40px;
  text-align:center;
  line-height: 16px;
  height: 16px;
  color:white;
  // background-color: red;
}
.progress-duration{
    display: flex;
    margin-right:15px;
  //  margin-right:10px; 
  //  margin-top:10px; 
 justify-content:center;
  font-size: 12px;
 text-align:center;
 line-height: 16px;
  width: 40px;
  height: 16px;
  color:white;
  // background-color: red;
}
 .progress{
 
    width: 70%;
    height: 6px; 
    background:linear-gradient(to right ,lightblue ,lightcoral);
    position: relative;
    top:0;
    left:0;
    margin:0 auto;
    border-radius:3px;


    input{
      width: 100%;
      position: absolute;
      top:0;
      left:0;
      z-index: 99;
      opacity: 0;
    }
      span{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: rgb(71, 151, 230);
        border-radius: 3px;
      }
      .icon{
        width: 15px;
        height: 15px;
        position: absolute;
        background-color: blue;
        top: 0;
        left: 0;
         border-radius: 50%;
         transform: translateY(-25%);
         z-index: 100;
      }
  
  }



  }
 
  .footer-control{
    
  display: fixed;
    box-sizing: border-box;
    ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
     li{
     
       align-self: flex-end;
       width: 20%;
    &:nth-of-type(1){
      text-align: right;
      margin-left:15px;
    }
       &:nth-of-type(2){
      text-align: center
     
    }
      &:nth-of-type(3){
      text-align: left;
      margin-right:15px;
    }
       img{

         width: 32px;
         height: 32px;
   
         
       }
     }
    }
  }
}
</style>
