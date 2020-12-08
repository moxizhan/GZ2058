<template>
  <div class="todo">
    <Header
      @value-to="getValue"
      @changeChecked="changeChecked"
      :isBorderTop="isBorderTop"
      @activeTrue="activeTrue"
      @activeFalse="activeFalse"
      :opacity="opacity"
    ></Header>
    <Body
      @changeValue="changeValue"
      :liData="liDatas"
      @delItem="delItem"
      v-show="isAll"
    ></Body>

    <!-- <Body @changeValue='changeValue'
      :liData="ActiveArr"
      @delItem="delItem"
      v-show="isActive"
      @delArr="delArr"
    ></Body>
    <Body @changeValue='changeValue'
      :liData="CompletedArr"
      @delItem="delItem"
      v-show="isCompleted"
      @addArr="addArr"
    ></Body> -->
    <Footer
      v-if="liDatas.length"
      :liData="liDatas"
      @allDel="allDel"
      @notAll="notAll"
      @delAll="delAll"
      @changLis="changLis"
    ></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Todo",

  data() {
    return {
      liDatas: [
        {
          bool: false,
          id: 0,
          text: "erwrew",
        },
        {
          bool: true,
          id: 1,
          text: "vhjhghgj",
        },
        {
          bool: false,
          id: 2,
          text: "43543646",
        },
      ],
      ActiveArr: [],
      CompletedArr: [],
      isBorderTop: false,
      opacity: 0,
      id: 2,
      state: null,
      isAll: true,
      isActive: false,
      isCompleted: false,
    };
  },

  components: {
    Header,
    Body,
    Footer,
  },

  methods: {
    getValue(text) {
      const obj = { text, bool: false, id: this.id+1 };
      this.liDatas.push(obj);
      this.ActiveArr.push(obj);
      this.isBorderTop = false;
      this.isShow = true;
      this.opacity = 1;
    },
    changeChecked(value) {
      this.liDatas.forEach((item) => {
        item.bool = value;
      });
    },
    activeTrue() {
      this.isBorderTop = true;
    },
    activeFalse() {
      this.isBorderTop = false;
    },
    allDel() {
      this.isBorderTop = true;
    },
    notAll() {
      this.isBorderTop = false;
    },
    delItem(item, index) {
      if (item.bool) {
        this.CompletedArr.splice(index, 1);
      } else {
        this.ActiveArr.splice(index, 1);
      }
      if (this.liDatas.length == 1) {
        this.isShow = false;
        this.isBorderTop = false;
        this.opacity = 0;
      }
      for (let i in this.liDatas) {
        if (this.liDatas[i].id == item.id) {
          this.liDatas.splice(i, 1);
          return;
        }
      }
    },
    delAll() {
      this.liDatas = this.liDatas.filter((item, index) => {
        return item.bool == false;
      });
      if (this.liDatas.length == 0) {
        this.isShow = false;
        this.isBorderTop = false;
        this.opacity = 0;
      }
      this.CompletedArr = [];
    },
    changLis(item) {
      if (item == "Active") {
        this.isActive = true;
        this.isAll = false;
        this.isCompleted = false;
        this.ActiveArr = this.liDatas.filter((value, index) => {
          return value.bool == false;
        });
      } else if (item == "Completed") {
        this.isCompleted = true;
        this.isAll = false;
        this.isActive = false;
        this.CompletedArr = this.liDatas.filter((value, index) => {
          return value.bool == true;
        });
      } else {
        this.isAll = true;
        this.isCompleted = false;
        this.isActive = false;
      }
    },
    delArr(item, index) {
      this.ActiveArr.splice(index, 1);
      this.CompletedArr.push(item);
    },
    addArr(item, index) {
      this.CompletedArr.splice(index, 1);
      this.ActiveArr.push(item);
    },
    changeValue(item) {
      // item.bool = !item.bool;
    },
  },
};
</script>

<style lang="less" scoped>
.todo {
  width: 550px;
  margin: 0 auto;
  box-shadow: 0 0 2px 1px #ccc;
  cursor: default;
}
</style>