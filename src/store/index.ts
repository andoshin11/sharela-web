import Vuex from "vuex";
import Vue from "vue";

// types
import { RootState } from '@/types/Store'

// import modules
import user from "./modules/user";

// Register Vuex
Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    user
  }
});
