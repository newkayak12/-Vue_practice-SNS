import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import main from '@/pages/main/index'
import post from '@/pages/post/index'
import like from '@/pages/like/index'
=======
import Main from '@/pages/main/index'

import Like from '@/pages/like/index'
import Media from '@/pages/media/index'
import Post from '@/pages/post/index'
>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
Vue.use(VueRouter)
const beforeEnterFunc = (to, from ,next)=>{

  next()
}
const routes = [
  {
    path:'/',
<<<<<<< HEAD
    component:main,
    redirect:'/post/',
    beforeEnter:beforeEnterFunc,
    children:[
      {path:'/post/', component: post},
      {path:'/like/', component: like}
    ]
  }
=======
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

>>>>>>> e0403201c05a7dcbd4193ba37a04054df55ab4cd
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
