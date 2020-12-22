<template>
  <div @click="$emit('toggle-show-lyric')" class="PlayFullChart" :class="{paused:paused}">
    <div class="PlayFullChart-img">
    <img  :src="currentMusic.picUrl" >
    </div>
    </div>
</template>

<script>
export default {
props:['currentMusic',"paused"],
created() {
  // console.log(this.currentMusic.picUrl)
  //  console.log("PlayFullChart111"+ this.currentMusic)
},
}

</script>

<style lang="less">
.PlayFullChart.paused{
  .PlayFullChart-img{
     margin: 0 auto;
    img{
      animation-play-state: paused;
    }
  }
}

.PlayFullChart{
   width: 100%;
   height: 70vh;
   margin: 0 auto;
   text-align: center;
  //  background-color: pink;
   display: flex;
   align-items: center;
   position: relative;
   .PlayFullChart-img{
    margin: 0 auto;
  

    img{
      width: 300px;
      height: 300px;
      border-radius: 50%;
      animation :moveImg  5s linear infinite;
    }
   }

}
@keyframes moveImg {
  from{
    transform: rotate(0deg)
  }to{
    transform:  rotate(360deg);
  }
}
</style>