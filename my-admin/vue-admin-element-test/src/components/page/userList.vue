<template>
  <div class="container">
    <div class="header">
      <el-input class="inputName" v-model="inputName" placeholder="姓名"></el-input>
      <el-button type="primary" class="ml10" @click="getUserList">查询</el-button>
    </div>
    <div class="content">
      <el-table :data="userList"  style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="birth" label="生日"></el-table-column>
        <el-table-column prop="addr" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      inputName: "",
      userList: []
    };
  },
  mounted() {
    this.getUserList();
  },
  methods: {
      getUserList() {
          var params={name:this.inputName};
          var _this=this;
          this.mAxios.Get('user/list',params).then(res => {
             _this.userList=res.data.users;
          })
      }
  },
  computed: {}
};
</script>

<style scoped>
/* 公共部分 */
.ml10 {
  margin-left: 10px;
}

/* 非公共部分 */
.header {
  background: #f2f2f2;
  padding: 10px;
}
.header .inputName {
  width: 150px;
}

.content {
    border: 1px solid #e3e3e3;
    border-bottom: none;
    margin-top: 10px;
}
</style>