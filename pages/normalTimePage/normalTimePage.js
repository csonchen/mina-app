const app = getApp()

Page({
  remainTimes: 100,

  data: {
    remainTimes: 100,
  },

  onShow() {
    this.refreshTime()
  },

  refreshTime() {
    console.log('===== 获取服务器时间成功 =====')
    this.setData({ remainTimes: this.remainTimes-- })
  },

  onNormalTimeEnd() {
    console.log('===== normalTime组件：倒计时结束=====')
  }
})
