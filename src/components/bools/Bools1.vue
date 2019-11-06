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
      type: [String,Number],
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