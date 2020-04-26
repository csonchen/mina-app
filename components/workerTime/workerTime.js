const worker = wx.createWorker('workers/timeWorker.js')

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
          worker.postMessage({
            remainSeconds: newVal
          })

          worker.onMessage((res) => {
            this.setData({ ...res })
          })
        }
      }
    } 
  },

  data: {
    totalSeconds: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  
  methods: {}
})