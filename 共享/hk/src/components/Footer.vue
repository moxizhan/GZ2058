<template>
  <div class="footer">
    <div class="left">{{ leftText }}</div>
    <div class="btn">
      <div
        v-for="(item, index) in btnLis"
        :key="item"
        :class="{ active: currentIndex == index }"
        @click="btnClick(item,index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="rightBox">
      <div class="right" :class="{ active: isActive }" @click="clickHander">
        Clear completed
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/footer.less";

export default {
  name: "Footer",

  props: {
    liData: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
  },

  data() {
    return {
      btnLis: ["All", "Active", "Completed"],
      isActive: false,
      currentIndex: 0,
    };
  },

  computed: {
    leftText() {
      const length = this.liData.filter((item) => {
        return item.bool == false;
      }).length;

      if (length < this.liData.length) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }

      if (length == 0) {
        this.$emit("allDel");
      } else {
        this.$emit("notAll");
      }

      if (length < 2) {
        return length + " item left";
      } else {
        return length + " items left";
      }
    },
  },

  methods: {
    clickHander() {
      this.$emit("delAll");
    },
    btnClick(item,index) {
      this.currentIndex = index;
      this.$emit('changLis',item);
    },
  },
};
</script>
