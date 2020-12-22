<template>
  <div class="playfullLyric" @click="$emit('toggle-show-lyric')">
    <div class="playfullLyric-text">
      <ul
        class="lyric"
        ref="lyric"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
      >
        <li v-for="(item, index) in str" :key="index">
          {{ item.text || "---" }}
        </li>
      </ul>

      <!-- <div>{{str}}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      str: null,
      arrLyric: [],
      scrollY: 0,
    };
  },
  props: ["newGeChi", "audio", "currentTime"],
  created() {
    // console.log("lyric--created"+this.newGeChi')
  },
  mounted() {
    this.str = this.newGeChi;

    //  console.log("lyric--mounted"+this.newGeChi)
  },
  updated() {
    //获取ul
    let Lyric = this.$refs.lyric;
    if (Lyric) {
      // console.log("lyric-mounted"+ Lyric)
      this.str = this.newGeChi;
      var _newArr = [...this.str];

      let that = this;
      this.audio.ontimeupdate = function () {
        if (!that.touching) {
          var currentTime = this.currentTime;
          //数组.findIndex--->>>遍历数组,
          //返回传入一个测试条件（函数）符合条件的数组第一个元素位置(下标)。
          var i = _newArr.findIndex((element) => {
            //条件:元素的时间比当前的时间大
            return element.time > currentTime;
          });

          //操作DOM元素

          Lyric.style.marginTop = -30 * (i - 1) + 250 + "px";
          var lis = Lyric.querySelectorAll("li");
          for (let k = 0; k < lis.length; k++) {
            lis[k].style.color = "black";
          }

          //判断lis[i-1]是否存在--防止style报错:
          if (lis[i - 1]) {
            lis[i - 1].style.color = "red";
          }
        }
      };
    }

    // console.log("lyric--updated"+this.str)
  },
  watch: {
    newGeChi: function (n) {
      // console.log(n,"33333");
      this.str = n;
      // console.log("lyric----watch"+  this.str)
    },
    //  currentTime:function(n){
    //    //当前的播放时间
    //      console.log(n,"currentTime");

    //  }

    scrollY: function (n) {
      let Lyric = this.$refs.lyric;

      var currentTime = this.currentTime;
      //数组.findIndex--->>>遍历数组,
      //返回传入一个测试条件（函数）符合条件的数组第一个元素位置(下标)。
      this.i = this.str.findIndex((element) => {
        //条件:元素的时间比当前的时间大
        return element.time > currentTime;
      });
      // console.log(Lyric, currentTime, this.i);

      //操作DOM元素

      Lyric.style.marginTop = -30 * (this.i - 1 + n) + 250 + "px";
      var lis = Lyric.querySelectorAll("li");
      for (let k = 0; k < lis.length; k++) {
        lis[k].style.color = "black";
      }

      //判断lis[i-1]是否存在--防止style报错:
      if (lis[this.i - 1 + n]) {
        lis[this.i - 1 + n].style.color = "red";
      }
    },
  },
  //创建方法
  methods: {
    touchstart: function (e) {
      this.touching = true;
      // console.log("touchstart", e.touches[0].clientY);
      this.y = e.touches[0].clientY;
    },
    touchmove: function (e) {
      // console.log("touchmove", e.touches[0].clientY);
      // console.log(Math.floor((this.y - e.touches[0].clientY) / 30));
      this.scrollY = Math.floor((this.y - e.touches[0].clientY) / 30);
      console.log(this.scrollY);
    },
    touchend: function () {
      this.touching = false;
      let ct = this.newGeChi[this.i - 1 + this.scrollY].time;
      this.audio.currentTime = ct;
    },
  },
};
</script>

<style lang="less">
.playfullLyric {
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  // background-color:skyblue;
  text-align: center;
  .playfullLyric-text {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    // background-color:yellow;
    .lyric {
      font-weight: 700;
      line-height: 30px;
      margin-top: 250px;
      font-size: 20px;
      // li{
      //   // background-color: pink;
      // }
    }
  }
}
</style>