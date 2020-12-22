<template>
 <div>
     <li v-show="text" >
         <div>{{text.artists}}</div>
   
     
     </li>
 </div>
</template>

<script>
export default {
props:['text'],
 created() {

    //  console.log(this.text.artists)
    //   console.log(this.text.name)
 },
 mounted() {
    //   console.log(this.text)
    //   console.log(this.text.artists)
    //   console.log(this.text.name)
 },
watch:{
    // text:function(n){

    //     var arrsearchwatch=[...n]
    //     for( var i=0;i<arrsearchwatch.length;i++){
    //         console.log(arrsearchwatch[i].artists)
    //          console.log(arrsearchwatch[i].artists[0].name)
    //     }
             
    // }
}



}

</script>

<style>

</style>