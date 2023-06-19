<template>
  <div id="get">
    <span>{{ get }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      get: 0
    }
  },
  mounted() {
    var orders = this.$bus.order
    for (var i = 0; i < orders.length; i++) {
      this.get += orders[i].price
    }
  }
}
</script>

<style></style>
