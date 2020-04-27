Component({
  inter: null,

  properties: {
    label: {
      type: String,
      value: ''
    },
    remainSecond: {
      type: Number,
      value: 0,
      observer(newVal, oldVal) {
        if (newVal && newVal > 0) {
          this.worker = wx.createWorker('workers/timeWorker.js')
          console.log('==== worker创建了 ====')

          // worker线程通信 - 发送
          this.worker.postMessage({
            remainSeconds: newVal
          })

          // worker线程通信 - 接收
          this.worker.onMessage((res) => {
            console.log("time:", res)
            this.setData({ ...res })
          })
        }
      }
    } 
  },

  detached() {
    this.worker.terminate()
    console.log('==== worker销毁了 ====')
  },

  data: {
    totalSeconds: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }
})