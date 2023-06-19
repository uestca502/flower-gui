<template>
  <div id="car">
    <div v-for="flower in list" :key="flower.flowerName">{{ flower.flowerName }} 数量:{{ flower.num }} 价格：{{ flower.price }}块 库存：{{ flower.inventory }}</div>

    <div>
      <span>合计：{{ heji }}块</span>
      <div>
        <span>折扣为:{{ discount }}</span>
      </div>
      <div>
        <span>最终价格为{{ price }}</span>
      </div>
      <el-button type="primary" @click="buy">结算</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: '',
      price: 0,
      discount: 0,
      heji: 0
    }
  },
  methods: {
    buy() {
      this.$message({
        message: '结算完毕',
        type: 'success'
      })
      //库存减少
      for (var i = 0; i < this.list.length; i++) {
        var name = this.list[i].flowerName
        var j = this.$bus.flower.findIndex((value) => {
          if (value.flowerName === name) {
            return true
          }
        })
        this.$bus.flower[j].num = this.$bus.flower[j].num - this.list[i].num
      }
      this.$bus.order.push({
        info: this.$bus.car,
        price: this.price
      })
      this.list = new Array()
      this.heji = 0
      this.price = 0
      this.$bus.car = new Array()
    }
  },
  mounted() {
    this.list = this.$bus.car
    //
    for (var i = 0; i < this.list.length; i++) {
      //获取名字
      var name = this.list[i].flowerName
      //根据name找库存
      var j = this.$bus.flower.findIndex((value) => {
        if (value.flowerName === name) {
          return true
        }
      })
      this.list[i].inventory = this.$bus.flower[j].num
      this.list[i].price = this.$bus.flower[j].price * this.list[i].num
      this.price += this.list[i].price
    }
    this.heji = this.price

    this.discount = this.$bus.discount
    console.log(this.$bus.discount)
    this.price = this.price * this.discount
  }
}
</script>

<style></style>
