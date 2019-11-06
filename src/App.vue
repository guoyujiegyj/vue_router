<template>
  <div id="app">
    <router-link to="/search/jack">查找</router-link>
    <!--第一种：动态路由通过props传参-->
    <router-link to="/bools1/2">方法一</router-link>
    <!--第二种：动态路由通过props传参-->
    <router-link to="/bools2">方法二</router-link>
    <!---->
    <router-link to="/error"></router-link>
    <!--路由过渡，通过name去设置样式。key是必须的。-->
    <!-- <transition-group name='rou'> -->
    <transition-group :name='routerTransition'>
      <router-view key="defalut"></router-view>
      <!--命名路由：根据名字进行路由跳转。-->
      <router-link key="search" :to="{name: 'search'}">查找</router-link>
      <router-link key="searc" :to="{name: 'search',params:{name: 'jac'}}">ss</router-link> 
    </transition-group>
    
   
   
  </div>
  
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      routerTransition: ''
    }
  },
  methods: {

  },
  watch: {
    // 监视路由。
    '$route'(to){
      // 只为meta为wmai的组件设置过渡样式。
      // if(to.meta.title==='wmai'){
      //   this.routerTransition='rou'
      // }else{
      //   this.routerTransition=''
      // }

      console.log(to.path)
      // 只为to.path为bools2的设置过渡样式。
      if(to.path==='/bools2'){
        
        this.routerTransition='rou'
      }else{
        this.routerTransition=''
      }
      
    }
  }
}
</script>
<style lang='stylus' scoped>
.rou-enter{
  opacity: 0;
}
.rou-enter-active{
  transition: opacity 1s ease;
}
.rou-enter-to{
  opacity: 1;
}
.rou-leave{
  opacity: 1;
}
.rou-leave-active{
  transition: opacity 1s ease;
}
.rou-leave-to{
  opacity: 0;
}
</style>
