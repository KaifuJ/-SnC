<template>
  <div>
    <button v-if="display.show" @tap="showActionSheet">
      {{newTodo.text}}
      <view v-if="newTodo.alertOrNot">
        {{newTodo.date}} {{newTodo.time}}
      </view>
    </button>
  </div>
</template>

<script>
export default {
  props: ['newTodo'],

  data () {
    return{
      display: {
        show: true
      }
    }
  },

  methods: {
    showActionSheet: function(){
      const S = this.display
      const T = this.newTodo
      if(!T.finished){
        let index
        wx.showActionSheet({
          itemList: ['标记完成', '编辑', '删除'],
          success: function(e){
            index = e.tapIndex
            const todos = wx.getStorageSync('todo') || []

            if(index === 0) {
              T.finished = !T.finished
              T.oldPriority = T.priority
              T.priority = 0
              let i = 0
              for(let j = 0; j < todos.length; j++){
                if(T.text === todos[j].text 
                && T.alertOrNot === todos[j].alertOrNot 
                && T.date === todos[j].date 
                && T.time === todos[j].time 
                && T.finished === !todos[j].finished
                && T.oldPriority === todos[j].priority){
                  todos.splice(i,1,T)
                  break
                }
                i = i + 1
              }
              wx.setStorageSync('todo', todos)
            }
            if(index === 1) {
              wx.navigateTo({
                url: '../editTodo/main'
              })
            }
            if(index === 2){
              let i = 0
              for(let j = 0; j < todos.length; j++){
                if(T.text === todos[j].text 
                && T.alertOrNot === todos[j].alertOrNot 
                && T.date === todos[j].date 
                && T.time === todos[j].time 
                && T.finished === todos[j].finished){
                  todos.splice(i,1)
                  break
                }
                i = i + 1
              }
              wx.setStorageSync('todo', todos)
              S.show = false
            }
          }
        })
      }else{
        let index
        const todos = wx.getStorageSync('todo') || []
        wx.showActionSheet({
          itemList: ['标记未完成', '删除'],
          success: function(e){
            index = e.tapIndex

            if(index === 0) {
              T.finished = !T.finished
              T.priority = T.oldPriority
              let i = 0
              for(let j = 0; j < todos.length; j++){
                if(T.text === todos[j].text 
                && T.alertOrNot === todos[j].alertOrNot 
                && T.date === todos[j].date 
                && T.time === todos[j].time 
                && T.finished === !todos[j].finished){
                  todos.splice(i,1,T)
                  break
                }
                i = i + 1
              }
              wx.setStorageSync('todo', todos)
            }
            if(index === 1){
              let i = 0
              for(let j = 0; j < todos.length; j++){
                if(T.text === todos[j].text 
                && T.alertOrNot === todos[j].alertOrNot 
                && T.date === todos[j].date 
                && T.time === todos[j].time 
                && T.finished === todos[j].finished){
                  todos.splice(i,1)
                  break
                }
                i = i + 1
              }
              wx.setStorageSync('todo', todos)
              S.show = false
            }
          }
        })
      }
    }
  }
}
</script>

<style>

</style>
