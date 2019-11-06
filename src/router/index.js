import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

 // import Search from '../components/search/Search.vue'

import Order from '../components/order/Order.vue'
import Wmai from '../components/wmai/Wmai.vue'
import Bools1 from '../components/bools/Bools1.vue'
import Bools2 from '../components/bools/Bools2.vue'
import Error from '../components/error/Error.vue'

const router = new VueRouter({
  // 开启history模式。默认是hash模式，带#。
  //当项目上线后，不希望看到#。就要开启history模式。
  mode: 'history',
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
    
    path: '/wmai/:gender',
    name: 'wmai',
    component: Wmai,
  },
  {
    path: '/order',
    component: Order
  },
  {
    // 动态路由传参，在此占位。。
    path: '/bools1/:gender',
    component: Bools1,
    props: true
  },
  {
    path: '/bools2',
    component: Bools2,
    props: {
      age: 20,
    }
  },
  {
    // 当 没有对的路由应匹配时。
    path: '*',
    component: Error
  }
  ]
})
export default router