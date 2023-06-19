<template>
  <div id="banker">
    <el-container>
      <el-header>我是商家</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <span slot="title"><router-link to="/banker/flower">鲜花库存</router-link></span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title"><router-link to="/banker/get">今日收益</router-link></span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title"><router-link to="/banker/order">今日订单</router-link></span>
            </el-menu-item>
            <el-menu-item index="4">
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

<script></script>

<style scoped>
#banker {
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
