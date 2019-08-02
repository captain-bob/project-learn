<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <div
          class="header-one"
          :style="{width:isCollapse?'64px':'230px'}"
        >{{isCollapse?'':adminName}}</div>
        <span class="header-two el-icon-d-arrow-left" @click="navCollapse"></span>
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
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#eef1f6"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="main-content">
        <div class="content-header clearfloat">
          <strong>Home</strong>
          <el-breadcrumb separator="/" class="fr">
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myAxios from "../axios";

export default {
  name: "Home",
  data() {
    return {
      adminName: "VUEADMIN",
      userName: "张莫",
      isCollapse: false
    };
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: left;
  height: 100%;
}

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

  font: bolder 20px "微软雅黑";
  height: 60px;
  line-height: 60px;
  border-right: 1px solid #afbcdc;
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
  display: flex;
  flex-flow: column nowrap;
}

.main .content-header {
  margin-bottom: 10px;
}
.main .content-body {
  flex: auto;
  overflow-y: scroll;
}

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
