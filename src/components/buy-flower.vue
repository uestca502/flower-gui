<template>
  <div id="buy">
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
    <el-input-number v-model="num" :min="1" :max="10" label="购花数量"></el-input-number>
    <el-button type="primary"><span @click="buy">放入购物车</span></el-button>
    <!--鲜花展示-->
    <div id="display">
      <div id="top">
        <div class="flower-div">
          <div id="flower1"></div>
          <span>鲜花1</span>
        </div>
      </div>
      <div id="bottom"></div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>是否确认放入购物车</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="buysuccess">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: '',
      dialogVisible: false,
      num: 1
    }
  },
  methods: {
    buy() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {})
    },
    buysuccess() {
      this.$message({
        message: '放入购物车成功',
        type: 'success'
      })
      this.dialogVisible = false
      this.$bus.car.push({ flowerName: this.value, num: this.num })
    }
  },
  mounted() {
    //从bus获取
    var data = this.$bus.flower
    for (var i = 0; i < data.length; i++) {
      this.options.push({
        value: data[i].flowerName,
        label: data[i].flowerName
      })
    }
  }
}
</script>
<style scoped>
#buy {
  width: 100%;
  height: 100%;
}
#display {
  display: flex;
  flex-direction: column;
  height: 80%;
}
#top {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
#bottom {
  flex: 1;
}
#top .flower-div {
  width: 20%;
}
#top div span {
  margin-left: 35%;
}
#flower1 {
  width: 100%;
  height: 80%;
  background-image: url('@/assets/flower1.jpg');
  background-size: 100% 100%;
}
</style>
