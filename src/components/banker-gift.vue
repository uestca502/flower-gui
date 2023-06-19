<template>
  <div id="gift">
    <el-button type="success" @click="buyGift(10)">购买盲盒</el-button>
    <span v-if="giftFlowerName != ''">{{ giftFlowerName }}</span>
    <div>
      <span v-if="result != ''">{{ result }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      giftFlowerName: '',
      flowerName: ['郁金香', '康乃馨', '玫瑰', '风信子', '百合', '满天星'],
      result: '',
      num: 10
    }
  },
  methods: {
    buyGift(num) {
      const tid = setInterval(() => {
        if (num > 0) {
          num--
          this.giftFlowerName = this.flowerName[Math.round(Math.random() * 5)]
        } else {
          clearInterval(tid)
          num = 10
          this.result = '恭喜你，抽中了' + Math.round(Math.random() * 3 + 1) + '束' + this.giftFlowerName
        }
      }, 1000)
    }
  },
  mounted() {}
}
</script>
<style scoped></style>
