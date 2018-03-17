import Vuex from "vuex";
import Vue from "vue";

// Register Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hoge: 'hoge'
  }
});
