<template>
  <div>
    <div>查找</div>
     <!-- <router-link :to="{name: 'search',params:{name: 'jac'}}">ss</router-link> -->
  <span>seach</span>
  <button @click='handleClick("wmai")'>wmai</button>
  <button @click='handleClick("order")'>order</button>
  <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleClick (type) {
      if(type==='wmai'){
        this.$router.push({name: 'wmai',params:{age: '12'}})
      }else if(type==='order') {
        this.$router.replace('/order')
      }
    }
  }
}
</script>

<style lang='less' scoped>
</style>
