// pages/minaApp/toptips/toptips.js
Page({
  showToptipsDefault() {
    this.setData({ toptipsTitle: '你好，minaApp' })
  },

  showToptipsPrimary() {
    this.setData({ toptipsTitle: '你好，minaApp', toptipsTheme: 'primary' })
  },

  onToptipsHide() {
    console.log('wewe')
  }
})