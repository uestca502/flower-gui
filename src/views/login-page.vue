<template>
  <div id="login">
    <div id="login-content">
      <div id="login-content-box">
        <div><span>账号：</span><el-input v-model="userName" placeholder="用户名"></el-input></div>
        <div><span>密码：</span><el-input v-model="password" placeholder="密码" show-password></el-input></div>
        <div>
          <el-button><span @click="gotoCustomer">游客进入</span></el-button>
          <el-button type="primary" @click="login">管理员登录</el-button>
        </div>
      </div>
    </div>
    <div id="right"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    gotoCustomer() {
      //去顾客区
      this.$router.push('/customer')
    },
    login() {
      if (this.userName === 'dailisi' && this.password === 'dailisi') {
        this.$router.push('/banker')
      } else {
        this.$message.error('用户名或密码错误')
        this.userName = ''
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>
#login {
  width: 100vw;
  height: 100vh;
  background-image: url(~@/assets/flower.png);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: flex-end;
}
#login-content {
  height: 30vh;
  width: 40vw;
  background-color: blue;
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
