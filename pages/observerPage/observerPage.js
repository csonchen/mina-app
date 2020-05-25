const Event = require('../../designPatterns/observer');

Page({
  data: {
    list: [
      {id: 1, value: '第1项'},
      {id: 2, value: '第2项'},
      {id: 3, value: '第3项'},
      {id: 4, value: '第4项'},
      {id: 5, value: '第5项'},
      {id: 6, value: '第6项'},
      {id: 7, value: '第7项'},
      {id: 8, value: '第8项'},
      {id: 9, value: '第9项'},
      {id: 10, value: '第10项'},
    ]
  },

  onLoad() {
    // 注册通知
    Event.listen('observerList', this.delete)
  },

  delete(id) {
    const newList = this.data.list.filter(item => item.id !== +id)
    this.setData({ list: newList })
  },

  toOperatePage(e) {
    const { item } = e.currentTarget.dataset
    wx.navigateTo({
      url: `./operate?id=${item.id}`
    })
  }
})