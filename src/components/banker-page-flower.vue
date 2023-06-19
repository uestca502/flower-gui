<template>
  <div id="flower">
    <div v-for="flower in flowers" :key="flower.flowerName">
      <span>{{ flower.flowerName }}</span> <span> 库存{{ flower.num }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flowers: []
    }
  },

  mounted() {
    this.flowers = this.$bus.flower
  }
}
</script>
<style></style>
