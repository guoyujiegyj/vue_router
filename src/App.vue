<template>
  <div id="app">
    <h2>{{title}}</h2>
    <hr/>
    <div>
      <div>添加课程</div>
      <div>
        <label for="">课程名称</label>
        <input type="text" v-model="name">
      </div>
      <div>
        <label for="">课程价格</label>
        <input type="text" v-model="price">
      </div>
      <button @click="addForm">添加课程</button>
      <hr/>
    </div>
    <div>课程列表</div>
    <table class="table">
      <tr>
        <th>课程名称</th>
        <th>课程价格</th>
      </tr>
      <tr v-for="(item,i) in sourceList" :key="i">
        <td >{{item.name}}</td><td>{{item.price}}</td>
      </tr>
    </table>  
    <cart></cart>
  </div>
  
</template>

<script>
import Cart from '@/components/Cart'

export default {
  name: 'app',
  components: {
    Cart
  },
  data () {
    return {
      title: '购物车',
      // 默认渲染的课程数据。
      sourceList: [
        {id: 0, name: 'web全栈开发架构师', price: 10000},
        {id: 1, name: 'Python架构师', price: 999}
      ],
      formInfo: {},
      nexiId: 2,
      name: '',
      price: ''
    }
  },
  methods: {
    addForm() {
      // const arr = Object.keys(this.formInfo)
      // console.log(arr)

      // if(arr.length!==2) return 
      this.formInfo.name=this.name
      this.formInfo.id=this.nexiId
      this.formInfo.price=this.price
      this.sourceList.push(this.formInfo)
      this.nexiId++
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table{
  margin:0 auto;
}
</style>
