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

  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created() {
    // function defaultRedirect(routes) {
    //   routes.forEach((v, i) => {
    //     if (v.children && v.children.length > 0) {
    //       v.redirect = { name: v.children[0].name };
    //       defaultRedirect(v.children);
    //     }
    //   })

    // }
    // console.log(router);
    // defaultRedirect((router.options.routes)[1].children);
    // console.log(router.options.routes);
    // router.addRoutes(router.options.routes);
    // router.push('/');
  },
  components: { App },
  template: '<App/>'
})
