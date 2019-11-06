import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

 import Search from '../components/search/Search.vue'

import Order from '../components/order/Order.vue'
import Wmai from '../components/wmai/Wmai.vue'


const router = new VueRouter({
  routes: [
    // {
    //   path: '/search/:name',
    //   // component: Search,
    //   // 路由懒加载
    //   component:()=> import('../components/search/Search.vue'),
    //   name: 'search'
    // },
    {
      path: '/search/:name',
      // component: Search,
      // 路由懒加载
      components: {
        order:()=>import('../components/order/Order.vue'),
        wmai: ()=>import('../components/wmai/Wmai.vue'),
        default:()=>import('../components/search/Search.vue')
    }
  },
  {
    path: '/wmai',
    name: 'wmai',
    component: Wmai
  },
  {
    path: '/order',
    component: Order
  },
  ]
})
export default router