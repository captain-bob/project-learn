// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mock from './mock/mock'
import mAxios from './axios/index'
import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './style/index.scss'

mock.bootsrap();

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.mAxios = mAxios

 


router.beforeEach((to, from, next) => {

  if (to.path != '/login') {
    store.commit('setCurrentRoute', to.matched);
    
    store.commit('setActiveRoute', to.name);
  }
  if (store.state.token) {
    if(store.state.permission.role) {
      console.log('1111')
      next();
    }
    else {
      console.log(store)
      // debugger
      store.dispatch('permission/FETCH_PERMISSION').then(() => {
        
        next({path:to.path});
        
      });    
    }
  }
  else {
    
    if (to.name == 'Login') {
      next();
    }
    else {
      next({ path: '/login' });
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created() {
  },
  components: { App },
  template: '<App/>'
})
