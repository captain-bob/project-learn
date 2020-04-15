<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <div
          class="header-one"
          :style="{width:isCollapse?'64px':'230px'}"
        >{{isCollapse?'':adminName}}</div>
        <span
          class="header-two"
          :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"
          @click="navCollapse"
        ></span>
      </div>
      <div class="header-three">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{userName}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="main">
      <div class="main-nav">
        <el-menu
          :default-active="this.$store.state.activeRoute"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#eef1f6"
          :class="{navcollapse:isCollapse}"
        >
          <SideBar :menuList="this.$store.state.permission.navRoutes"></SideBar>
        </el-menu>
      </div>
      <div class="main-content">
        <div class="content-header clearfloat">
          <strong class="marginL10">{{this.$store.getters.routeHeader}}</strong>
          <el-breadcrumb separator="/" class="fr marginR10 content-header-right">
            <el-breadcrumb-item
              v-for="(item,i) in curentRoute"
              :key="item.name"
              :to="{name:item.name}"
              :class="{'is-link-last':(i==curentRoute.length-1)}"
            >{{item.meta.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content-body">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myAxios from "../axios";

import SideBar from "./module/sideBar";

export default {
  name: "Home",
  components: {
    SideBar
  },
  data() {
    return {
      adminName: "VUEADMIN",
      userName: "张莫",
      isCollapse: false,
      defaultActive: ""
    };
  },
  computed: {
    realRouter: function() {
      var router = this.$router.options.routes.find(v => v.name == "Home");
      return router.children;
    },
    curentRoute: function() {
      // return this.$route.matched;
      return this.$store.state.currentroute;
    }
    /* activeDefault用于element-ui导航组件设置当前激活菜单属性，本项目我用store的activeRoute替换了 */
    // activeDefault:function() {
    //   this.defaultActive=this.$route.name;
    //   return this.defaultActive;
    // }
  },
  methods: {
    navCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  },
  mounted() {
    // console.log(users)
    myAxios.Get("user/list", "").then(res => {
      console.log(res.data);
    });
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 公共样式 */
.marginL10 {
  margin-left: 10px;
}
.marginR10 {
  margin-right: 10px;
}

.container {
  text-align: left;
  height: 100%;
}
/* -------页面加载动画-------- */

.fade-enter-active {
  /* will-change: transform; */
  transition: opacity 0.5s;
  /* transform: translate3d(100%, 0, 0); */
}
.fade-enter {
  opacity: 0;
}
/* .fade-leave-active {
  will-change: transform;
  transform: translate3d(-100%, 0, 0);
} */

/* -------页面加载动画-------- */

.header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  background: #20a0ff;
  color: #fff;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-one {
  /* width: 230px; */
  text-align: center;

  overflow: hidden;
  /* visibility: hidden; */
 

  font: bolder 20px "微软雅黑";
  height: 60px;
  line-height: 60px;
  border-right: 1px solid #afbcdc;
  transition: all 0.25s linear 0s;
  -moz-transition: all 0.25s linear 0s;
  -webkit-transition: all 0.25s linear 0s;
  -o-transition: all 0.25s linear 0s;
}

.header-two {
  font-size: 23px;
  margin-left: 10px;
}

.header-three {
  margin-right: 60px;
}
.header-three .el-dropdown-link {
  color: #fff;
}

.el-icon-d-arrow-left {
  color: #fff;
}

.main {
  display: flex;
  height: calc(100% - 60px);
}

.main-nav {
  background: #eef1f6;
}
.main .main-nav .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  /* background: #eef1f6; */
  border-right: none;
}

.main-content {
  flex: auto;
  padding: 15px;
  overflow-y: scroll;
  /* display: flex;
  flex-flow: column nowrap; */
}

.main .content-header {
  margin-bottom: 10px;
  background: #e2e2e2;
  height: 50px;
  line-height: 50px;
}

.main .content-header-right {
  height: 50px;
  line-height: 50px;
}

/* .main .content-body { */
/* flex: auto; */
/* overflow-y: scroll; */
/* } */

.clearfloat::after {
  display: block;
  content: ".";
  visibility: hidden;
  clear: both;
  height: 0;
}
.fr {
  float: right;
}
</style>
