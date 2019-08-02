import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login'
import UserList from '@/components/page/userList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden:true
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'UserList',
          name:'UserList',
          component:UserList
        }
      ]
    }
  ]
})
