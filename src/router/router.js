import Order from '../components/order/Order.vue'
import Wmai from '../components/wmai/Wmai.vue'
import Bools1 from '../components/bools/Bools1.vue'
import Bools2 from '../components/bools/Bools2.vue'
import Error from '../components/error/Error.vue'

export default
[ 
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
    meta: {
      title: 'wmai'
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      title: 'order'
    }
  },
  {
    // 动态路由传参，在此占位。。
    path: '/bools1/:gender',
    component: Bools1,
    props: true,
    meta: {
      title: 'bools1'
    }
  },
  {
    path: '/bools2',
    component: Bools2,
    meta: {
      title: 'bools'
    },
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
