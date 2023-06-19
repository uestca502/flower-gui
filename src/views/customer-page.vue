<template>
  <div id="customer">
    <el-container>
      <el-header>我是顾客</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <span slot="title"><router-link to="/customer/buy">日常购花</router-link></span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title"><router-link to="/customer/recommend">店家推荐</router-link></span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title"><router-link to="/customer/gift">鲜花盲盒</router-link></span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title"><router-link to="/customer/discount">诗词优惠</router-link></span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title"><router-link to="/customer/car">购物车</router-link></span>
            </el-menu-item>
            <el-menu-item index="6">
              <span slot="title"><router-link to="/login">退出</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>页脚</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
#customer {
  width: 100vw;
  height: 100vh;
}
/deep/ .el-header {
  height: 10vh !important;
}
/deep/ .el-main {
  height: 80vh;
}
/deep/ .el-footer {
  height: 10vh !important;
}
a {
  text-decoration: none;
}
</style>
