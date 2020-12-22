

<template>
  <div class="hot">
    <h1>This is an hot page</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log("Hot created");
    this.$root.isShowLoading = true;
    this.axios
      .get("/top/list?idx=1")
      .then((response) => {
        console.log(
          response.data.playlist.trackIds
            .slice(0, 20)
            .map((e) => e.id)
            .join()
        );
        this.$root.isShowLoading = true;
        this.axios
          .get(
            "/song/detail?ids=" +
              response.data.playlist.trackIds
                .slice(0, 20)
                .map((e) => e.id)
                .join()
          )
          .then((response) => {
            console.log(response.data);
          })
          .finally(() => {
            this.$root.isShowLoading = false;
          });
      })
      .finally(() => {
        this.$root.isShowLoading = false;
      });
  },
  mounted() {
    console.log("Hot mounted");
  },
};

// <template>
//   <div class="hot">
//     <h1>This is an hot page</h1>
//   </div>
// </template>
</script>
