<template>
  <div id="poem">
    <div>上联：天王盖地虎</div>
    <div>
      下联：<el-input v-model="xialian" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="match">确定</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xialian: ''
    }
  },
  methods: {
    match() {
      if (this.xialian === '宝塔镇河妖') {
        this.$message({
          message: '回答正确，获得8.5折折扣券',
          type: 'success'
        })
        this.$bus.discount = 0.85
      } else {
        this.$message({
          message: '回答错误',
          type: 'warning'
        })
        this.xialian = ''
      }
    }
  }
}
</script>

<style scoped>
/deep/ .el-input {
  display: inline-block;
  width: 30%;
}
</style>
