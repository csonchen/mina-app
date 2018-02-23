// pages/minaApp/toast/toast.js
Page({
  showToast() {
    this.setData({ toastTitle: '你好，minaApp' })
  },
  showToastDelay() {
    this.setData({ toastTitle: '你好，minaApp，5秒后自动关闭', toastDelay: 5000 })
  },
  onToastHide() {
    console.log('Toast hide....')
  }
})