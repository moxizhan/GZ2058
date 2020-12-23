<template>
  <div class="home">
    <HomeHeader :gender="gender" />

    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      :show-indicators="false"
      :loop="true"
    >
      <van-swipe-item
        v-for="(item, index) in gender === 'male' ? bannerMale : bannerFemale"
        :key="index"
      >
        <van-image width="100%" :src="item.img" />
      </van-swipe-item>
    </van-swipe>

    <HomeList v-if="maleHot" :booklists="maleHot">男生热门</HomeList>
    <HomeList v-if="maleFinish" :booklists="maleFinish">男生完本</HomeList>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from "@/components/HomeHeader.vue";
import HomeList from "@/components/HomeList.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    HomeHeader,
    HomeList,
  },
  data() {
    return {
      gender: "male",
      bannerMale: [],
      bannerFemale: [],
      category: null,
      maleHot: null,
      maleFinish: null,
    };
  },
  computed: {},
  created() {
    this.axios.get("/banner.json").then((response) => {
      this.bannerMale = response.data.male;
      this.bannerFemale = response.data.female;
    });

    this.axios.get("http://novel.kele8.cn/rank-category").then((response) => {
      this.category = response.data;
    });

    this.axios
      .get("http://novel.kele8.cn/rank/54d42d92321052167dfb75e3")
      .then((response) => {
        this.maleHot = response.data.ranking;
      });

    this.axios
      .get("http://novel.kele8.cn/rank/564eb878efe5b8e745508fde")
      .then((response) => {
        this.maleFinish = response.data.ranking;
      });
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next((vm) => {
      // 通过 `vm` 访问组件实例
      vm.gender = to.query.gender || "male";
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // console.log(to, from);
    this.gender = to.query.gender || "male";
    next();
  },
};
</script>
