<template>
  <div class="container">
    <div class="header">
      <el-input class="inputName" v-model="inputName" placeholder="姓名"></el-input>
      <el-button type="primary" class="ml10" @click="getUserList">查询</el-button>
    </div>
    <div class="content">
      <el-table :data="showList" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="birth" label="生日"></el-table-column>
        <el-table-column prop="addr" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="pageSizes"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="userListLength"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      inputName: "",
      userList: [],
      showList:[],//显示的表格列表
      showListArr:[],//显示的表格列表组
      currentPage4: 1,
      pageSizes: [10, 20, 30, 40],
      pageSize:0 //页面条数
    };
  },
  mounted() {
    this.getUserList();
    this.pageSize=this.pageSizes[0] //初始化页面条数
  },
  methods: {
    getUserList() {
      var params = { name: this.inputName };
      var _this = this;
      this.mAxios.Get("user/list", params).then(res => {
        _this.userList = res.data.users;
        _this.showUserList(_this.pageSize)
        _this.showList=_this.showListArr[0]
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize=val;
      this.showUserList(val);
      this.showList=this.showListArr[0]
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.showList=this.showListArr[val-1]
    }
  },
  computed: {
    userListLength() {
      return this.userList.length;
    },
    showUserList() {
      return function(num) {
        const length = this.userListLength;
        console.log(num);
        let arr = [], //最终返回的二维数组
          minArr = []; //初始一维数组截取出的小数组
        arr.push(minArr);
        for (let i = 0; i < length; i++) {
          if (minArr.length >= num) {
            minArr = [];
            arr.push(minArr);
          }
          minArr.push(this.userList[i]);
        }
        console.log(arr);
        this.showListArr=arr
      };
    }
  }
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