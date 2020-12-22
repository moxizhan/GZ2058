import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        n: 10,
        msg: "hello",
        a: 1,
        b: 2,
    },
    mutations: {
        // Mutation 必须是同步函数
        increment: function(state) {
            state.n++;
        },
        decrement: function(state) {
            state.n--;
        },
        // updateMsg: function(state, p) {
        //     state.msg = p;
        // },
        // 尽量保证  mutation 方法 如果带的参数一定 state就是一定的

        updateMsg: function(state, payload) {
            state.msg = payload.time;
        },
    },
    actions: {},
    modules: {},
});
