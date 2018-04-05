import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/todo/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/todo/main',
          text: 'Todo',
          iconPath: 'images/todo.png',
          selectedIconPath: 'images/todo_s.png'
        },
        {
          pagePath: 'pages/snc/main',
          text: 'SnC',
          iconPath: 'images/snc.png',
          selectedIconPath: 'images/snc_s.png'
        },
        {
          pagePath: 'pages/rank/main',
          text: 'Rank',
          iconPath: 'images/rank.png',
          selectedIconPath: 'images/rank_s.png'
        }
      ]
    }
  }
}
