<template>
  <div class="menu-container">
    <template v-for="item in menuList">
      <el-submenu :key="item.name" :index="item.name" v-if="item.children&&item.children.length>0">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{item.meta.name}}</span>
        </template>
        <!-- <el-menu-item-group> -->
        <SideBar :menuList="item.children"></SideBar>
        <!-- </el-menu-item-group> -->
      </el-submenu>
      <el-menu-item :key="item.name" :index="item.name" v-else @click="gotoPath(item.name)">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{item.meta.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    menuList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    gotoPath(name) {
      this.$router.push({ name });
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
