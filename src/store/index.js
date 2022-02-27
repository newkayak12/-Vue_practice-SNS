import Vue from 'vue'
import Vuex from 'vuex'
import Modal from "@/store/modules/modal/Modal";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal:Modal
  }
})
