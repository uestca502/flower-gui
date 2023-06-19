<template>
  <div id="order">
    <div v-for="order in orders" :key="order.price">
      <span v-for="flower in order.info" :key="flower.flowerName">鲜花名：{{ flower.flowerName }} 数量：{{ flower.num }}</span> <span> 结算金额为:{{ order.price }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orders: []
    }
  },
  mounted() {
    this.orders = this.$bus.order
  }
}
</script>
<style scoped></style>
