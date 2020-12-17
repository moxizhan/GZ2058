<template>
  <div class="play" :class="{ paused: paused }">
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
        <img :src="currentMusic.picUrl" alt="" />
        <h5>
          {{ currentMusic.name }}
        </h5>
        <div class="control" @click.stop="togglePlayState">
          <canvas ref="circle" width="50" height="50"></canvas>
          <span class="icon"></span>
        </div>
      </div>
    </transition>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="play-full" v-if="!isShowPlayBar">
        <PlayFullHeader @show-play-bar="isShowPlayBar = true" />
        <template>
          <PlayFullLyric
            v-if="isShowLyric"
            @toggle-show-lyric="isShowLyric = !isShowLyric"
          />
          <PlayFullChart
            v-else
            @toggle-show-lyric="isShowLyric = !isShowLyric"
          />
        </template>
        <PlayFullFooter
          v-bind:currentTime="currentTime"
          v-bind:duration="duration"
          @update:currentTime="$refs.audio.currentTime = $event"
        />
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
  props: ["currentMusic", "currentIndex", "playlist"],
  components: {
    PlayFullHeader,
    PlayFullChart,
    PlayFullLyric,
    PlayFullFooter,
  },
  data: function () {
    return {
      paused: null,
      duration: 0,
      currentTime: 0,
      isShowLyric: false,
      isShowPlayBar: true,
    };
  },
  // created() {
  //   console.log("created", this.$refs.usernameInput);
  //   // console.log(this.$refs.usernameInput);
  // },
  mounted() {
    console.log("mounted", this.$refs.audio);
    // console.log(this.$refs.usernameInput);
    let audio = this.$refs.audio;
    audio.addEventListener("pause", () => {
      console.log("暂停");
      this.paused = true;
    });
    audio.addEventListener("play", () => {
      console.log("播放");
      this.paused = false;
    });

    // var _this = this
    audio.addEventListener("durationchange", () => {
      // console.log("当前歌曲时长", this.duration);
      this.duration = audio.duration;
    });

    audio.addEventListener("timeupdate", () => {
      console.log("当前播放到", this.currentTime);
      this.currentTime = audio.currentTime;

      this.drawCircle(this.currentTime, this.duration);
    });

    audio.addEventListener("ended", () => {
      // 播放完成下一曲
      this.playNext();
    });
  },
  // updated() {
  //   console.log("update", this.$refs.usernameInput);
  // },

  methods: {
    drawCircle: function (n, total) {
      let canvas = this.$refs.circle;
      let ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, 50, 50);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
      ctx.arc(25, 25, 20, 0, Math.PI * 2, false); // 绘制
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 0, 0, 0.6)";
      ctx.arc(
        25,
        25,
        19,
        Math.PI * -0.5,
        Math.PI * ((n / total) * 2 - 0.5),
        false
      ); // 绘制
      ctx.stroke();
      ctx.closePath();
    },

    togglePlayState: function () {
      let audio = this.$refs.audio;
      if (this.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },

    calculateNext: function () {
      // 根据当前播放模式 随机 单曲循环 顺序 顺序循环
      let nextIndex;
      if (this.currentIndex < this.playlist.length - 1) {
        nextIndex = this.currentIndex + 1;
      } else {
        nextIndex = 0;
      }

      return nextIndex;
    },
    playNext: function () {
      console.log("下一曲");
      // 获取当前播放索引
      // let currentIndex = this.playlist.findIndex(
      //   (song) => this.currentMusic.id === song.id
      // );
      // console.log(currentIndex);

      let index = this.calculateNext();

      this.$emit("update:music", {
        item: this.playlist[index],
        index,
      });
    },
  },

  watch: {
    paused: function (n) {
      this.$emit("update:paused", n);
    },
  },
};
</script>

<style scoped lang="less">
.play {
  &.paused {
    .play-bar {
      img {
        animation-play-state: paused;
      }
      .control {
        span.icon {
          &::before {
            content: "播放";
          }
        }
      }
    }
  }
}
.play-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  background: white;
  display: flex;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  img {
    width: 36px;
    height: 36px;
    margin: 7px;
    border-radius: 50%;
    animation: playing 6s linear infinite;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
  }
  h5 {
    flex: 1;
  }
  .control {
    position: relative;
    span.icon {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      // display: block;
      // background: rgba(240, 128, 128, 0.507);
      &::before {
        content: "暂停";
      }
    }
  }
}
.play-full {
  background: rgba(255, 0, 0, 1);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

@keyframes playing {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>