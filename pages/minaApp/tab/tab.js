// pages/minaApp/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    activeIndex2: 0,
    list: ['选项1', '选项2', '选项3'],
    list2: ['选项1', '选项2']
  },

  onTabChange(event) {
    let idx = event.detail.activeIndex
    this.setData({ activeIndex: idx })
  },

  onTabChange2(event) {
    let idx = event.detail.activeIndex
    this.setData({ activeIndex2: idx })
  }
})