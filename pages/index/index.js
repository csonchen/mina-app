//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    components: [
      {
        title: 'Toast 浮动提示',
        url: '/pages/minaApp/toast/toast'
      },
      {
        title: 'Tab 选项卡',
        url: '/pages/minaApp/tab/tab'
      },
      {
        title: 'Toptips 顶部提示',
        url: '/pages/minaApp/toptips/toptips'
      }
    ]
  }
})
