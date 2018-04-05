<template>
<form @submit="formSubmit" @reset="formReset">
  <view class="section">
    <view class="section__title">待办事项</view>
    <input name="input" placeholder="请输入待办内容" @input="textChange"/>
  </view>

  <view class="section">
    <view class="section__title">设置提醒</view>
    <switch :checked="newTodo.alertOrNot" @change="switchChange"/>
  </view>

  <view v-if="newTodo.alertOrNot" class="section">
    <view class="section__title">日期</view>
    <picker mode="date" :value="newTodo.date" :start="now_date" :end="after_date" @change="dateChange">
      <view class="picker">
        当前选择：{{newTodo.date}}
      </view>
    </picker>
  </view>

  <view v-if="newTodo.alertOrNot" class="section">
    <view class="section__title">时间</view>
    <picker mode="time" :value="newTodo.time" start="00:00" end="23:59" @change="timeChange">
      <view class="picker">
        当前选择：{{newTodo.time}}
      </view>
    </picker>
  </view>

  <view class="btn-area">
    <button formType="submit">Submit</button>
  </view>
</form>
</template>

<script>
export default {
  data () {
    var date = new Date()
    var date_7 = new Date()
    date_7.setDate(date.getMonth() + 7)

    var riqi = this.dateToStr(date).d
    var shijian = this.dateToStr(date).t
    var after_riqi = this.dateToStr(date_7).d

    return {
      now_date: riqi,
      after_date: after_riqi,

      newTodo: {
        text: '',
        alertOrNot: false,
        date: riqi,
        time: shijian,
        finished: false,
        priority: 1
      }
    }
  },

  methods: {
    dateToStr: function(datep){
      var riqi = datep.getFullYear().toString() + '-'
      var shijian = ''

      if(datep.getMonth() + 1 < 10){
        riqi = riqi + '0' + (datep.getMonth() + 1) + '-'
      }else{
        riqi = riqi + (datep.getMonth() + 1) + '-'
      }
      if(datep.getDate() < 10){
        riqi = riqi + '0' + datep.getDate()
      }else{
        riqi = riqi + datep.getDate()
      }

      if(datep.getHours() < 10){
        shijian = shijian + '0' + datep.getHours() + ':'
      }else{
        shijian = shijian + datep.getHours() + ':'
      }
      if(datep.getMinutes() < 10){
        shijian = shijian + '0' + datep.getMinutes()
      }else{
        shijian = shijian + datep.getMinutes()
      }
      
      return{
        d: riqi,
        t: shijian
      }
    },

    switchChange: function(){
      this.newTodo.alertOrNot = !this.newTodo.alertOrNot
    },

    textChange: function(e){
      this.newTodo.text = e.mp.detail.value
      console.log(this.newTodo.text)
    },

    dateChange: function(e){
      this.newTodo.date = e.mp.detail.value
      console.log(this.newTodo.date)
    },

    timeChange: function(e){
      this.newTodo.time = e.mp.detail.value
      console.log(this.newTodo.time)
    },

    formSubmit: function(){
      const todos = wx.getStorageSync('todo') || []
      if(this.newTodo.text === ''){
        wx.switchTab({
          url: '../todo/main'
        })
        console.log(todos)
        return
      }

      todos.unshift(JSON.parse(JSON.stringify(this.newTodo)))
      wx.setStorageSync('todo', todos)
      console.log(todos)
      wx.switchTab({
        url: '../todo/main'
      })//back to todo page
      console.log("submit finished")
    }
  },

  onShow: function(){
    console.log('onShow hook is called')
    var date = new Date()
    var date_7 = new Date()
    date_7.setDate(date.getMonth() + 7)

    var riqi = this.dateToStr(date).d
    var shijian = this.dateToStr(date).t
    var after_riqi = this.dateToStr(date_7).d

    var temp = {
        text: '',
        alertOrNot: false,
        date: riqi,
        time: shijian,
        finished: false,
        priority: 1
      }
    this.newTodo = temp
  }

}
</script>

<style scoped>

</style>
