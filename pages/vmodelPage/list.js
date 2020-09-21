Page({
  data: {
    value1: '',
    value2: '',
    pageValue: '',
    list: ['列表1', '列表2', '列表3'],
  },

  onInput(event) {
    const value1 = event.detail.value
    this.setData({
      value1
    })
  }
})