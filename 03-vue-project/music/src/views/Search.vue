<template>
  <div class="search">
    <input
      type="text"
      @input="inputing = true"
      @keyup.enter="inputing = false"
      v-model.trim="inputValue"
    />
    <button @click="inputValue = ''">X</button>

    <hr />
    <!-- <button @click="inputValue = '迪迦奥特曼'" v-if="!inputing">
      迪迦奥特曼
    </button>
    <template v-else>
      <ul v-if="inputing">
        <li
          @click="
            inputValue = item.keyword;
            inputing = false;
          "
          v-for="(item, index) in suggests"
          :key="index"
        >
          {{ item.keyword }}
        </li>
      </ul>
      <ul v-else>
        <li>搜索结果</li>
      </ul>
    </template> -->
    <button
      @click="inputValue = '迪迦奥特曼'"
      v-if="!suggests.length && !inputing && !inputValue"
    >
      迪迦奥特曼
    </button>

    <ul v-if="inputing && suggests.length">
      <li
        @click="
          inputValue = item.keyword;
          inputing = false;
        "
        v-for="(item, index) in suggests"
        :key="index"
      >
        {{ item.keyword }}
      </li>
    </ul>

    <ul v-if="!inputing && inputValue">
      <li>搜索结果</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      suggests: [],
      inputing: false,
    };
  },

  watch: {
    inputValue: function (n) {
      if (n) {
        if (this.inputing) {
          this.axios
            .get("/search/suggest?keywords=" + n + "&type=mobile")
            .then((res) => {
              console.log("搜索建议", res.data.result.allMatch);
              this.suggests = res.data.result.allMatch;
            });
        } else {
          console.log("搜索结果");
          // this.results = true
        }
      } else {
        this.inputing = false;
        this.suggests = [];
      }
    },
  },
};
</script>

<style>
</style>