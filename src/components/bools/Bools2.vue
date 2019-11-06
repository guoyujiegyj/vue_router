<template>
  <div>
    <div>roles</div>
    <!-- 显示参数-->
    <span>{{age}}</span>
  </div>
</template>
<script>
export default {
  // props第二种传参方式。接收参数。
  props: {
    age: {
      type: Number,
      default: 23
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
</style>