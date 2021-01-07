<template>
  <div v-if="content">
    Read {{ $route.params.id }}

    <h1>{{ content.title }}</h1>
    <div style="white-space: pre-wrap;">{{ content.cpContent }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      content: null,
    };
  },
  computed: {
    ...mapState(["chapter"]),
  },

  created() {
    this.axios
      .get(
        "http://novel.kele8.cn/chapters/" +
          encodeURIComponent(this.chapter.chapters[0].link)
      )
      .then((res) => {
        console.log(res.data);
        this.content = res.data.chapter;
      });
  },
};
</script>

<style>
</style>