import { createStore } from "vuex";
const list = [];
function test1(context, payload) {
  console.log(1);
}
for (let i = 0; i < 100; i++) {
  list.push(test1);
}
export default createStore({
  state: {
    value: 1,
  },
  getters: {},
  mutations: {
    test(context, payload) {
      context.value = payload;
    },
  },
  actions: {},
  modules: {},
});
