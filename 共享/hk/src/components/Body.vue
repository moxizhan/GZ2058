<template>
  <div class="body">
    <ul>
      <li v-for="(item, index) in liData" :key="item.id">
        <input type="checkbox" :checked="item.bool" @change="checkChange(item,index)" />  
        <input
          type="text"
          :value="item.text"
          :class="{ del: item.bool }"
          :disabled='!item.bool'
        />
        <span @click="btnClick(item,index)">×</span>
      </li>
    </ul>
  </div>
</template>

<script>
import "../assets/less/body.less";

export default {
  name: "Body",

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
      xx: true,
    };
  },

  methods: {
    checkChange(item,index) {
      if(item.bool){
        this.$emit('addArr',item,index);
      }else{
        this.$emit('delArr',item,index);
      }
      item.bool = !item.bool;
    },
    btnClick(item,index) {
      this.$emit("delItem", item,index);
    },
    dblHander(item) {
      this.$emit("changeValue",item);
    },
  },
};
</script>

