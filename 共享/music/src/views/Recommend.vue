<template>
  <div class="recommend">
    <RecommendPlayList :currentRecommends="currentRecommends"
      >推荐歌单</RecommendPlayList
    >
<!-- //$attrs----包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class和 style 除外)，
并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。 -->
    <RecommendNewMusic
      @update:music="$emit('update:music', $event)"
      @update:playlist="$emit('update:playlist',$event)"
      :newSongs="newSongs"
      :currentMusic="$attrs.currentMusic"
      :paused="$attrs.paused"
      >最新音乐</RecommendNewMusic
    >
  </div>
</template>

<script>
import RecommendPlayList from "@/components/RecommendPlayList.vue";
import RecommendNewMusic from "@/components/RecommendNewMusic.vue";

export default {
     // props:['currentMusic'],
     components: {
       RecommendPlayList,
       RecommendNewMusic,
     },
     data: function () {
       return {
         recommends: [],
         newSongs:[],
         recommendsIndex:0,
         count:0,
       }
     },
     computed: {
       //计算属性--获得推荐歌单的列表
       currentRecommends: function () {
         return this.recommends.slice(this.recommendsIndex*6, (this.recommendsIndex+1)*6);
       },
     },
     created() {
     
       console.log("created");

       //使用axios获取数据推荐 mv
       //finally {finallyCode - 无论 try / catch 结果如何都会执行的代码块}
  

       this.axios.get("/personalized").then((response) => {
         // console.log(response.data.result);
         this.recommends = response.data.result;
    }).finally(()=>{
      this.count=this.count+1;
       this.$root.isShowLoading =true;
    });

    //使用axios获取数据推荐新音乐
    this.axios.get("/personalized/newsong").then((response) => {
      // console.log(response.data.result);
      this.newSongs = response.data.result;
    }).finally(()=>{
      this.count=this.count+1;
       this.$root.isShowLoading =true;
    });
    //使用axios获取数据推荐新音乐id=33894312歌词
    // this.axios.get("/lyric?id=1804253414").then((response)=>{
    //   this.newGeChi= response.data.lrc.lyric;
    //   console.log( response.data.lrc.lyric);
    // });
    //   this.axios.get("/lyric?id=1803619707").then((response)=>{
    //   this.newGeChi= response.data.lrc.lyric;
    //   console.log( response.data.lrc.lyric);
    // })

   },
   
   watch:{
     //监听事件:count参数的变化
     count:function(n){
       if(n>=2){
         this.$root.isShowLoading = false;
       }
     }
   },
   //activated--->>>>被 keep-alive 缓存的组件激活时调用
   activated(){
     console.log("切换到推荐");
    //  三目运算:
     this.recommendsIndex=this.recommendsIndex >= 4?  0 : this.recommendsIndex+1;
   }
    // updated() {
    //   console.log(this.currentMusic.id)
    // },
   //   watch:{
   // currentMusic:function(n){
   //    //使用axios获取数据推荐新音乐id=33894312歌词
   //    var _thisId=n.id
   //    var _thisAddress='/lyric?id='+_thisId;
   //    console.log( _thisAddress);
   //     this.axios.get(_thisAddress).then((response)=>{
   //       this.newGeChi= response.data.lrc.lyric;
   //       console.log( " this.axios"+response.data.lrc.lyric);
   //     })
   //     }
    
   // }
}

</script>

<style>
</style>