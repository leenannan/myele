import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/login'
import Home from '@/views/home/home'
import Index from '@/views/home/index'
import Staffs from '@/views/staffs/staffs'
import Detail from '@/views/staffs/Detail'
import Chart from '@/views/chart/chart'
import Site from '@/views/site/site'
import Bookdetail from '@/views/book/Bookdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children:[
        {
          path:'/index',
          component:Index
        },
        { 
          path:'/staffs',
          component:Staffs,
          // children:[
          //       {
          //       path: ':id',
          //       component: Detail
          //     }
          // ]
        },
         {
          path:'/detail',
          component:Detail
        },
        {
          path:'/chart',
          component:Chart
        },
        {
          path:'/site',
          component:Site
        },
        { 
          name:'Bookdetail',
          path:'/books?:id',
          component:Bookdetail
        }

      ]
    }

  ]
})
