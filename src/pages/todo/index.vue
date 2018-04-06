<template>
<view>
  <div v-for="todo in todos_5">
    <todo_item :newTodo="todo"></todo_item>
  </div>

  <div v-for="todo in filterBy(this.todos, 4)">
    <todo_item :newTodo="todo"></todo_item>
  </div>

  <div v-for="todo in filterBy(this.todos, 3)">
    <todo_item :newTodo="todo"></todo_item>
  </div>

  <div v-for="todo in filterBy(this.todos, 2)">
    <todo_item :newTodo="todo"></todo_item>
  </div>

  <div v-for="todo in filterBy(this.todos, 1)">
    <todo_item :newTodo="todo"></todo_item>
  </div>

  <div v-for="todo in filterBy(this.todos, 0)">
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
      todos: [],
      todos_5: this.filterBy(this.todos, 5)
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
    },

    filterBy: function(list, num){
      console.log('FUUUUUUUUUUUUUUUUUUUCK')
      console.log(list === '')
      return list.filter(function(item){
        return item.priority === num
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
