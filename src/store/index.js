import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/user";
import Modal from "@/store/modules/modal/Modal";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user:user,
    modal:Modal
  }
})
