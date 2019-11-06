import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'

Vue.use(VueRouter)

 // import Search from '../components/search/Search.vue'
 const router = new VueRouter({
  // 开启history模式。默认是hash模式，带#。
  //当项目上线后，不希望看到#。就要开启history模式。
  // mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  // 如果有meta，则调用方法。
  to.meta&&setTitle(to.meta.title)
  next()
  
})
export default router
