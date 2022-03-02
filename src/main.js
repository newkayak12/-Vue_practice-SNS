import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'vue-moment'
import throttle from 'lodash.throttle'
import VueQuillEditor from 'vue-quill-editor'
import signSvc from "@/service/SignSvc";


// Vue.config.productionTip = false
Vue.use(moment)

Vue.prototype.$SignSvc = signSvc

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

// Vue.config.productionTip = false
Vue.use(throttle)
Vue.use(moment)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
