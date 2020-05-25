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
    Event.trigger('observerList', this.data.id)
  }
})