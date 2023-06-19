import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router'
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  beforeCreate(){
        Vue.prototype.$bus=this;
        Vue.prototype.$bus.flower = new Array
        Vue.prototype.$bus.flower.push({
          flowerName:'郁金香',
          price:10,
          num:99
        })
        Vue.prototype.$bus.flower.push({
          flowerName:'康乃馨',
          price:20,
          num:99
        })
        Vue.prototype.$bus.flower.push({
          flowerName:'玫瑰',
          price:30,
          num:99
        })
        Vue.prototype.$bus.flower.push({
          flowerName:'风信子',
          price:40,
          num:99
        })
        Vue.prototype.$bus.flower.push({
          flowerName:'百合',
          price:50,
          num:99
        })
        Vue.prototype.$bus.flower.push({
          flowerName:'满天星',
          price:60,
          num:99
        })
        Vue.prototype.$bus.order = new Array
        Vue.prototype.$bus.car = new Array
        Vue.prototype.$bus.discount = 1.0
        
    },
  router
}).$mount('#app')
