<template>
  <div id="app">
    <!-- 加载动画 -->
    <!-- <div class="loading" v-show="$parent.isShowLoading"> -->
    <div class="loading" v-show="$parent.isShowLoading">
      <!-- //svg标签 -->
      <svg width="30" height="30" viewBox="0 0 100 100">
        <path
          id="p"
          fill="red"
          d="M94.1 58.8c.6-2.8.9-5.8.9-8.8s-.3-6-.9-8.8l-11.7-.4c-.7-2.6-1.7-5-3-7.3l8-8.5c-3.3-4.9-7.5-9.2-12.5-12.5l-8.5 8c-2.3-1.3-4.7-2.3-7.3-3l-.3-11.6C56 5.3 53 5 50 5s-6 .3-8.8.9l-.4 11.7c-2.6.7-5 1.7-7.3 3l-8.5-8c-4.9 3.3-9.2 7.5-12.5 12.5l8 8.5c-1.3 2.3-2.3 4.7-3 7.3l-11.6.3C5.3 44 5 47 5 50s.3 6 .9 8.8l11.7.4c.7 2.6 1.7 5 3 7.3l-8 8.5c3.3 4.9 7.5 9.2 12.5 12.5l8.5-8c2.3 1.3 4.7 2.3 7.3 3l.4 11.7c2.7.5 5.7.8 8.7.8s6-.3 8.8-.9l.4-11.7c2.6-.7 5-1.7 7.3-3l8.5 8c4.9-3.3 9.2-7.5 12.5-12.5l-8-8.5c1.3-2.3 2.3-4.7 3-7.3l11.6-.3zM50 66.9c-9.3 0-16.9-7.6-16.9-16.9S40.7 33.1 50 33.1 66.9 40.7 66.9 50 59.3 66.9 50 66.9z"
        ></path>
      </svg>
    </div>

    <!-- //是否显示play播放器 -->
    <!-- //定义参数currentMusic,playlist,currentIndex
         //子组件传递的方法: @update:paused , @update:music -->
    <Play
      v-if="currentMusic"
      :newGeChi="newGeChi"
      :currentMusic="currentMusic"
      :playlist="playlist"
      :currentIndex="currentIndex"
      @update:paused="paused = $event"
      @update:music="
        currentMusic = $event.item;
        currentIndex = $event.index;
      "
    />
    <!-- homwNav导航栏 -->
    <HomeNav v-if="$route.meta.isShowNav" />

    <!-- <router-view
      @translate-music="currentMusic = $event"
      //vue 修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定。
      //<comp :foo.sync="bar"></comp>
         会被扩展为：
         
         <comp :foo="bar" @update:foo="val => bar = val"></comp>
         当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：
         
         this.$emit('update:foo', newValue)
         
        
      v-bind:currentMusic.sync="currentMusic"
    /> -->

    <!-- //使用keep--alive保持路由出口数据有默认缓存 -->
    <keep-alive>
      <!-- //路由出口处理子组件传递的方法: -->
      <!-- //子组件发出请求方法:  @update:music,  @update:playlist -->
      <router-view
        @update:music="
          currentMusic = $event.item;
          currentIndex = $event.index;
        "
        @update:playlist="playlist = $event"
        v-bind:currentMusic="currentMusic"
        v-bind:paused="paused"
      />
    </keep-alive>
  </div>
</template>

<script>
import HomeNav from "@/components/HomeNav.vue";
import Play from "@/components/Play.vue";

export default {
  components: {
    HomeNav,
    Play,
  },
  data: function () {
    return {
      newGeChi: null,
      currentMusic: null,
      paused: null,
      //播放列表
      playlist: [],
      //当前播放的下标
      currentIndex: 0,
    };
  },
  watch: {
    //监听currMusic的变化,来获取当前id的歌词
    currentMusic: function (n) {
      //使用axios获取数据推荐新音乐id=33894312歌词
      var _thisId = n.id;
      var _thisAddress = "/lyric?id=" + _thisId;
      console.log(_thisAddress);
      this.axios.get(_thisAddress).then((response) => {
        //调用处理歌词的方法:
        this.newGeChi = this.transformLyric(response.data.lrc.lyric);
        // console.log( " this.axios"+response.data.lrc.lyric);
      });
    },
  },
  methods: {
    //创建函数处理歌词
    transformLyric: function (songLyric) {
      //创建变量接收则表达式
      var patt = /\[\d{2,3}:\d{2}\.\d{2,3}\]/gi;

      //split("\n")--->>>数组以"\n"分割,返回一个数组
      //筛选数据filter((e) => e) ---->>>把数组空白的['']时间过滤掉
      //.map()---map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
      //array.map(function(currentValue,index,arr), thisValue)
      //map() 方法按照原始数组元素顺序依次处理元素。
      var arr = songLyric
        .split("\n")
        .filter((e) => e)
        .map((item) => {
          //str.match---map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
          //map() 方法按照原始数组元素顺序依次处理元素。--->>[11:25.555]
          //replace(/(\[|\])/gi, "") 去掉[]号  ------>>>11:25.555
          var time = item.match(patt)[0].replace(/(\[|\])/gi, "");
          //以":" 分割 ------>>> [11,25.555]
          var timeArr = time.split(":");
          //转化秒数----->>>数组中元素转化成number类型操作
          time = Number(timeArr[0]) * 60 + Number(timeArr[1]);
          //获取文本内容:
          var text = item.replace(patt, "");

          //返回对象格式:
          return { time, text };
        });

      //返回这个arr数组对象:
      return arr;
    },
  },

  created() {
    //寻找父级
    console.log(this.$parent);
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* This changes all the animations globally */
:root {
  --animation-duration: 300ms;
}

.loading {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.15);
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    //定义360度旋转:
    animation: loading 3s linear infinite;
  }
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
