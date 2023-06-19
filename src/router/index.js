import VueRouter from "vue-router";
import Vue from 'vue'
import Login from '@/views/login-page.vue'
import Customer from '@/views/customer-page.vue'
import BuyFlower from '@/components/buy-flower.vue'
import Recommend from '@/components/banker-recommend.vue'
import Gift from '@/components/banker-gift.vue'
import Discount from '@/components/poem-discount.vue'
import Car from '@/components/buy-car.vue'
import Banker from '@/views/banker-page.vue'
import BankerFlower from '@/components/banker-page-flower.vue'
import BankerGet from '@/components/banker-get.vue'
import BankerOrder from '@/components/banker-orders.vue'
//调用use函数，把VueRouter安转为Vue的插件
Vue.use(VueRouter);
const login = {
    path:'/login',component:Login
}
const customer = {
    path:'/customer',component:Customer,
     children: [
         
        { path: '', redirect:'buy'},
         { path: 'buy', component: BuyFlower },
        { path: 'recommend', component: Recommend },
        { path: 'gift', component: Gift },
        {path:'discount',component:Discount},
        {path:'car',component:Car}
        // ...其他子路由
      ]
}
const banker = {
    path:'/banker' , component:Banker,
    children:[
        {path:'flower',component:BankerFlower},
        {path:'get',component:BankerGet},
        {path:'order',component:BankerOrder}
    ]
}
const routes =[ 
    {path:'/',redirect:'/login'},
    {path:'',redirect:'/login'},
    login,
    customer,
banker]


const router = new VueRouter(
    {
       routes 
    }
)

export default router