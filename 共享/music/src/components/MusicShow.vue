<template>
  <div>
    <input type="file" id="file" @change="changeFile($event)"/>
    <canvas id="canvas"></canvas>
    <audio id="audio" autoplay></audio>
  </div>
</template>

<script>
  let context

  let WIDTH
  let HEIGHT
  let dataArray
  let analyser
  let bufferLength
  let barWidth
  let barHeight
  let audio
  export default {
    name: "Index",
    data(){
      return{
      }
    },
    mounted(){
      //this.renderFrame()

    },
    watch:{
      files(){
        console.log(123)
      }
    },
    methods:{
      changeFile(e){
        // let file
        // file = document.getElementById("file");
        audio = document.getElementById("audio");
        //控制音量
        //audio.volume=0.1
        //part1: 画布
        var canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");

        canvas.width = 400;
        canvas.height=600;
        WIDTH = canvas.width;
        HEIGHT = canvas.height;
          //part2: 音频
        let files=e.target.files
          audio.src = URL.createObjectURL(files[0]);
          audio.load();

          //part3: 分析器
          var AudCtx = new AudioContext();//音频内容
          var src = AudCtx.createMediaElementSource(audio);
          analyser = AudCtx.createAnalyser();

          src.connect(analyser);
          analyser.connect(AudCtx.destination);
          analyser.fftSize = 32768;//快速傅里叶变换, 必须为2的N次方。32768

          bufferLength = analyser.frequencyBinCount;// = fftSize * 0.5

          //part4: 变量
          barWidth = (WIDTH / bufferLength) - 1;//间隔1px
          barHeight;

          dataArray = new Uint8Array(bufferLength);//8位无符号定长数组
          this.renderFrame()
      },
      renderFrame() {
        requestAnimationFrame(this.renderFrame);//方法renderFrame托管到定时器，无限循环调度，频率<16.6ms/次

        context.fillStyle = "#000";//黑色背景
        context.fillRect(0, 0, WIDTH, HEIGHT);//画布拓展全屏,动态调整

        analyser.getByteFrequencyData(dataArray);//获取当前时刻的音频数据

        //part6: 绘画声压条
        var x = 0;
        for (var i = 0; i < bufferLength; i++) {
          var data = dataArray[i];//int,0~255

          var percentV = data / 255;//纵向比例
          var percentH = i / bufferLength;//横向比例

          barHeight = HEIGHT * percentV;

          //gbk,0~255
          var r = 255 * percentV;//值越大越红
          var g = 255 * percentH;//越靠右越绿
          var b = 50;

          context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          //console.log(HEIGHT - barHeight)
          //console.log(barHeight)
          context.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 1;//间隔1px
        }
        audio.play();
      }
    }
  }
</script>

<style scoped>
  #file {
    position: fixed;
    top: 10px;
    left: 200px;
    z-index: 100;
  }

  #canvas {
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% - 200px);
    height: 100%;
  }

  audio {
    position: absolute;
    right: 0px;
    bottom: 10px;
    width: calc(100% - 200px);
  }
</style>