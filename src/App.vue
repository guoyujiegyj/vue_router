<template>
  <div id="app">
    <router-link to="/search/jack">查找</router-link>
    <router-link to="/bools1/2">方法一</router-link>
    <router-view></router-view>
    <!--命名路由：根据名字进行路由跳转。-->
    <!-- <router-link :to="{name: 'search'}">查找</router-link> -->
    <!-- <router-link :to="{name: 'search',params:{name: 'jac'}}">ss</router-link> -->
    
   
   
  </div>
  
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang='stylus' scoped>
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
