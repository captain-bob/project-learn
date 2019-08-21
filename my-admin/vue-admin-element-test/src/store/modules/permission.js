import myAxios from '../../axios/index'
import router,{asyncRoutes} from '../../router/index'
import {filterRoutes} from '../../util/filterRoutes' //页面权限过滤
import {redirect} from '../../util/redirect'  //页面重定向，重定向第一个子页面。
 

export default {
    namespaced:true,
    state:{
        role:'', //用户角色，控制导航栏菜单生成.
        addRoutes:'', //动态添加的路由表
        navRoutes:'', //生成导航栏的路由表
    },
    getters: {

    },
    mutations: {
        GET_ROLE(state,role) {
            state.role=role;
        },
        GET_ADDROUTES(state,routes) {
            state.addRoutes=routes;
        },
        GET_NAVROUTES(state,routes) {
            state.navRoutes=routes;
        },
    },
    actions: {
      async  FETCH_PERMISSION({state,commit}) {
           var data=await myAxios.Get('/userinfo');
           if(data.data.code==500) {
              alert(data.data.msg);
           }else if(data.data.code==200) {
            
              var role=data.data.role;
              var routes=asyncRoutes[0].children;

              commit('GET_ROLE',role);

              routes=filterRoutes(role,routes); 
              redirect(routes)//左侧导航栏

              asyncRoutes[0].children=routes;
              redirect(asyncRoutes);
              asyncRoutes.push({
                  path:'*',
                  redirect:'/404'
              }); //最终需要动态添加的路由表

              commit('GET_NAVROUTES',routes);

              commit('GET_ADDROUTES',asyncRoutes);

              router.addRoutes(asyncRoutes);
           }
        },
    }
}