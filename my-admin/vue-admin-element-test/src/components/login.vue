<template>
  <el-form
    :model="loginForm"
    status-icon
    :rules="rules"
    ref="loginForm"
    label-width="auto"
    class="demo-loginForm"
    hide-required-asterisk="true"
  >
    <el-form-item prop="user">
      <el-input type="text" v-model="loginForm.user" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="button">
      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      <el-button @click="resetForm('loginForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
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
    submitForm(formData) {},
    resetForm(formData) {}
  }
};
</script>

<style scoped>
.demo-loginForm {
  width: 30%;
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