<template>
  <div>
    <div>roles</div>
    <span>{{gender}}</span>
  </div>
</template>
<script>
export default {
  props: {
    gender: {
      // 可以是字符串和number类型。
      type: [String,Number],
      // 如果没传，默认是nan.
      default: 'nan'
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
</style>