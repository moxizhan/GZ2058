<template>
  <div class="search">
     <!-- <input type="text" v-model="something" /> -->
        <!-- <p>{{xxx}}</p> -->
        <!-- <ul>
             <li v-for="(item, index) in suggests">{{item[0]}}</li> -->
            <!-- <item v-for="(item, index) in suggests" :text="item[0]"></item> -->
        <!-- </ul> --> 
      <SearchItemList ></SearchItemList >
  </div>
</template>

<script>
 import SearchItemList from "@/components/SearchItemList.vue";
export default {

  components: {SearchItemList},

data:function(){
  return{
 something: "",

  }
},
 methods: {
      //  getData: ()=> {
      //               this.axios
      //                   .get(
      //                       "http://api.kele8.cn/agent/https://suggest.taobao.com/sug?code=utf-8&q=" +
      //                       this.something
      //                   )
      //                   .then((response) => {
      //                       console.log(this, response.data.result);
      //                       this.suggests = response.data.result;
      //                   });
      //           },
      //           // zzz: console.log(this, 123),
      //           // yyy: function () {
      //           //     console.log(this, 123);
      //           //     return ()=> {
      //           //         console.log(this);
      //           //     };
      //           // },
      //       },
      //           debouncedGetData: function() {
      //           //lodash的防抖
      //           return _.debounce(this.getData, 500)();
      //       },
      //       // 生命周期 【创建】之后才有 this
      //       // created() {
      //       //     this.debouncedGetData = _.debounce(this.getData, 500);
      //       // },

      //       watch: {
      //           something: function(n) {
      //               console.log(n);
      //               this.debouncedGetData();
      //           },
         },
       

}
</script>

<style>

</style>