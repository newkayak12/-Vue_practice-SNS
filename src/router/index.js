import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '@/pages/main/index'
import post from '@/pages/post/index'
import like from '@/pages/like/index'
Vue.use(VueRouter)
const beforeEnterFunc = (to, from ,next)=>{

  next()
}
const routes = [
  {
    path:'/',
    component:main,
    redirect:'/post/',
    beforeEnter:beforeEnterFunc,
    children:[
      {path:'/post/', component: post},
      {path:'/like/', component: like}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
