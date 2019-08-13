import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import personal from '@/components/personal'
import right from '@/components/right/right'
import staff from '@/components/right/staff'
import newPage from '@/components/newPage'

Vue.use(Router)

export default new Router({
  routes: [
    // {path:'/',redirect:'/login'},//重定向
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      children: [
        {path: '', component: right, name: 'personal',},
        {path: 'staff', component: staff, name: 'staff'},
      ]
    },
    {
      path:'/newPage',
      name:'newPage',
      component:newPage
    },
  ]
})
