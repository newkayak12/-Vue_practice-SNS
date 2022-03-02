import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/main/index'

import Like from '@/pages/like/index'
import Media from '@/pages/media/index'
import Post from '@/pages/post/index'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Main,
    redirect:'/post/',
    children:[
      {
        path:'/post/',
        component:Post
      },
      {
        path:'/like/',
        component:Like
      },
      {
        path:'/media/',
        component:Media
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
