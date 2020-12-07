<template>
  <div class="test">
    <h1><slot></slot></h1>
    <div @click="$emit('change-msg', Date.now())">test - {{ msg }}</div>
    <hr />

    <p>{{ msg }}</p>
    <p v-text="msg"></p>
    <p v-html="html">xss</p>
    <p v-once>{{ msg }}</p>

    <hr />

    <p v-if="bool">条件为真</p>
    <p v-else>条件为假</p>

    <hr />
    <p v-show="bool">简单切换display</p>

    <ul>
      <li
        :style="{ backgroundColor: todo.complated ? 'red' : '' }"
        :class="{ active: todo.complated }"
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        {{ todo.text }}
      </li>
    </ul>

    <input type="text" v-model.number.lazy.trim="inputText" />

    <a
      href="http://www.baidu.com"
      @click.prevent.stop.capture.self="clickHandler(123, $event)"
      >百度链接</a
    >
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["msg"],
  data: function () {
    return {
      html: '<a onclick="alert(123)">百度</a>',
      bool: true,

      todos: [
        {
          complated: false,
          text: "1111",
          id: 1,
        },
        {
          complated: true,
          text: "2222",
          id: 2,
        },
        {
          complated: false,
          text: "4444",
          id: 4,
        },
      ],
      inputText: "123",
    };
  },

  computed: {},
  watch: {},

  methods: {
    clickHandler: function (a, e) {
      console.log("click", a, e);
    },
  },
};
</script>

<style>
.test {
  background: lightblue;
}
</style>