import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)

 // import Search from '../components/search/Search.vue'
 export default new VueRouter({
  // 开启history模式。默认是hash模式，带#。
  //当项目上线后，不希望看到#。就要开启history模式。
 // mode: 'history',
  routes
})
