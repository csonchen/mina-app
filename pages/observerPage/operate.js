const Event = require('../../designPatterns/observer');

Page({
  data: {
    id: 1,
  },

  onLoad(options) {
    this.setData({id: options.id})
  },

  handleDel() {
    wx.showToast({
      title: '删除成功'
    })

    // 发送删除通知
    Event.trigger('observerList', this.data.id)

    // 定时2s后返回
    setTimeout(() => {
      wx.navigateBack()
    }, 2000)
  }
})