<template>
  <div class="SearchItemList">
    <div class="Search-icon"></div>
        <input type="text" v-model="something" @keyup.enter="searchSongDate(something)" placeholder="搜索歌曲,歌手,歌词" class="input"/>
            <!-- <p>{{xxx}}</p> -->
            <ul>
                <!-- <li v-for="(item, index) in suggests">{{item[0]}}</li> -->
                <SearchItemLi v-for="(item, index) in suggests" :text="item" :key="index" v-show='suggests'></SearchItemLi>
            </ul>
  </div>
</template>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
 
import SearchItemLi from '@/components/SearchItemLi.vue'


export default {
  components:{
    SearchItemLi
  },
data:function(){
  return{
  something: "",
   xxx : 0,
  suggests: [],
  countSearch:0,
}
  },
   methods: {
      searchSongDate(value){
        // console.log(value.length+"value.length")
        //   console.log(value.trim().length +"(value.trim().length")
        //  //判断value的值是否为空  
        // if(value !=null || value!=undefined){
        //   console.log(1111)
        // }else{
        //   console.log(2222)
        // }
//判断
if(value.trim().length==0||value.length==0||value.trim()=="+"||value.trim()=="*"||value.trim()=="+" ||value.trim()=="-"){
                    console.log("搜索不到信息")
}else{

  // console.log(value)
        //使用axiou获得参数
        this.axios({
          methods: "get",
          url:"/search",
          params:{
            keywords:value,
            limit:15,
          }
        }).then(result=>{
    

        if(result==undefined){
            console.log("result"+"搜索失败")
             this.$root.isShowLoading =true;
          }else{
         if(result.data.code==200){
           console.log(result.data.result.songs)
           return  this.suggests=result.data.result.songs
          }else{
            console.log("搜索失败")
             this.$root.isShowLoading =true;
          }
          }
       
       
     




}    ,500)
        
}
    
      

      
      
      }
         
      },
      // 生命周期 【创建】之后才有 this
      created() {
           

         
      },

      watch: {
          // something: function (n) {
          //   if(n.trim().length==0||n.length==0||n.trim()=="+"||n.trim()=="*"||n.trim()=="+" ||n.trim()=="-"){
          // return  
          // }else{
          //    //建立防抖函数
          //    var mytimer=null;
          //    if(mytimer) clearTimeout(mytimer);
          //     mytimer=setTimeout(()=>{
          //       //调用搜索可取的
          // this.suggests=this.searchSongDate(n)
          //      },500)



          // }
            
            
        
      },
      // countSearch:function(n){
      //   console.log(n)
      //   if(n>=1){
      //     this.$root.isShowLoading =false;

      //   }
      // }

            // }
        
          

}

</script>

<style lang="less">
.SearchItemList{
  position: relative;

   width: 90%;
 margin: 0 auto;
 margin-top:20px;
  .Search-icon{
    width: 16px;
    height: 16px;
    position: absolute;
    top:8px;
    left:10px;
    background-image: url('../assets/search.png');
  }
  .input{
    outline: none;
    color:black;
    width: 100%;
    height: 30px;
    margin: 0 auto;
    border-radius:12px;
    background-color: #ebecec;
    padding-left:30px
  }


}

</style>