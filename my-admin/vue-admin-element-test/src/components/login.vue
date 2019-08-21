<template>
  <el-form
    :model="loginForm"
    status-icon
    :rules="rules"
    ref="loginForm"
    label-width="auto"
    class="demo-loginForm"
    hide-required-asterisk
  >
    <h1 class="title">后台管理系统</h1>
    <el-form-item prop="user">
      <el-input placeholder="账号" type="text" v-model="loginForm.user" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input placeholder="密码" type="password" v-model="loginForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <div class="remember">
      <el-checkbox v-model="checked">记住我</el-checkbox>  <!-- 记住密码还未绑定功能 -->
    </div>
    <el-form-item class="button">
      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import myAxios from "../axios/index";

export default {
  name: "Login",
  data() {
    return {
      checked: true,
      loginForm: {
        user: "",
        password: ""
      },
      rules: {
        user: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formData) {
      this.$refs[formData].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(this.loginForm);
          const loginData = {
            username: this.loginForm.user,
            password: this.loginForm.password
          };
          myAxios
            .Post("/login", JSON.stringify(loginData))
            .then(res => {
              if (res.data.code === 200) {
                console.log(res);
                this.$store.commit('LOGIN_IN',res.data.token);
                this.$router.replace('/');
              }
              else if(res.data.code === 500) {
                alert(res.data.msg);
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 0;
}
.remember {
  display: flex;
}
.demo-loginForm {
  width: 360px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #e2e2e2;
  padding: 30px;
  border-radius: 10px;
}

.button {
  margin-bottom: 0;
}
</style>