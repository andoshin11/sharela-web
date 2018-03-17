import Vuex from "vuex";
import Vue from "vue";

// import modules
import user from "./modules/user";

// Register Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    hoge: 'hoge'
  }
});
