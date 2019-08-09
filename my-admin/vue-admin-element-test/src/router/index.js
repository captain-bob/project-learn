import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login'

import UserListManage from '@/components/page/userListManage'
import UserList from '@/components/page/userListManage/userList'

import Bmap from '@/components/page/bmap'
import BmapTest from '@/components/page/bmap/BmapTest'

import Echarts from '@/components/page/echarts'
import EchartsTest from '@/components/page/echarts/echarts-test'

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
      meta:{
        name:'主页'
      },
      redirect:'UserListManage',
      children:[
        {
          path:'UserListManage',
          name:'UserListManage',
          component:UserListManage,
          redirect:'UserListManage/UserList',
          meta:{
            name:'用户管理',
            icon:'el-icon-s-custom'
          },
          children:[
            {
              path:'UserList',
              name:'UserList',
              component:UserList,
              meta:{
                name:'用户列表',
                icon:'el-icon-s-order'
              }

            }
          ]
        },
        {
          path:'Bmap',
          name:'Bmap',
          component:Bmap,
          redirect:{name:'BmapTest'},
          meta:{
            name:'百度地图',
            icon:'el-icon-s-home'
          },
          children:[
            {
              path:'BmapTest',
              name:'BmapTest',
              component:BmapTest,
              meta:{
                name:'地图测试页',
                icon:'el-icon-milk-tea'
              }
            }
          ]
        },
        {
          path:'Echarts',
          name:'Echarts',
          component:Echarts,
          meta:{
            name:'图表管理',
            icon:'el-icon-pie-chart'
          },
          children:[
            {
              path:'EchartsTest',
              name:'EchartsTest',
              component:EchartsTest,
              meta:{
                name:'图表实例',
                icon:'el-icon-grape'
              }
            }
          ]
        }
      ]
    }
  ]
})
