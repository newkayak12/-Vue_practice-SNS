import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import user from "@/store/user";
import Modal from "@/store/modules/modal/Modal";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user:user,
    modal:Modal
=======
import post from './post'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //vue에서 data(){return {}}와 같다.
    //필드
    content:'',

  },
  mutations: {
    // state를 변경하는 곳
  //  setter
    setContent(state,{content=''}){
      state.content = content
    }
  },
  actions: {
  //  외부와 통신하는 곳
  },
  getters:{
    //가져오는 곳
    //getter
    getConent(state){
      return state.content
    }
  },
  modules: {
    //vuex를 모듈단위로 나누고 싶으면 쓰는 곳
    post
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
  }
})
