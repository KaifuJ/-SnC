<template>
<view>
  <!-- eslint-disable-next-line vue/require-v-for-key -->
  <div v-for="todo in todos">
    <!-- ignore this error -->
    <todo_item :newTodo="todo"></todo_item>
  </div>
  <button type="primary" class="circle" @tap="addTodo">+</button>
</view>
</template>

<script>
import todo_item from '@/components/todo_item'

export default {
  data () {
    return {
      todos: []
    }
  },

  components: {
    todo_item
  },

  methods: {
    addTodo: function(){
      wx.navigateTo({
        url: '../addTodo/main'
      })
    }
  },

  created: function(){
    console.log("created hook is called")
    this.todos = wx.getStorageSync('todo')
  },

  onShow: function(){
    console.log("onShow hook is called")
    this.todos = wx.getStorageSync('todo')
  }
}
</script>

<style scoped>
.circle{
    width: 70px;
    height: 70px;
    border: 0 solid #ffffff;
    border-radius: 250px;
    box-shadow: 4px 1px 1px #cccccc;
    position:absolute;
    left:290px;
    top:560px
}
</style>
