<template>
  <div>外卖
    <span>{{gender}}</span>

  </div>
</template>
<script>
export default {
  props: {
    gender:{
      type: String,
      default: 'nan'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
</style>
