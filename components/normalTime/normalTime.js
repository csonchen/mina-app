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
          this.beginCountdown(newVal)
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

  detached() {
    console.log('===== normalTime组件：detached clear =====')
    this.clearTime()
  },

  pageLifetimes: {
    hide() {
      console.log('===== normalTime组件：hide clear =====')
      this.clearTime()
    }
  },
  
  methods: {
    clearTime() {
      this.inter && clearInterval(this.inter)
      this.inter = null
    },

    beginCountdown(totalSeconds) {     
      console.log('===== normalTime组件：begin =====')

      const [ days, hours, minutes, seconds ] = this.getTime(totalSeconds)
      this.setData({ minutes, seconds, hours, days })

      this.inter = setInterval(() => {
        totalSeconds = totalSeconds - 1

        const [ days, hours, minutes, seconds ] = this.getTime(totalSeconds)

        if (totalSeconds <= 0) {
          this.clearTime()
          this.triggerEvent('end')
        }

        this.setData({ minutes, seconds, hours, days, totalSeconds })
      }, 1000)
    },

    getTime(totalSeconds) {
      const days = Math.floor(totalSeconds / 86400)
      const hours = Math.floor((totalSeconds / 3600) % 24)
      const minutes = Math.floor((totalSeconds / 60) % 60)
      const seconds = Math.floor(totalSeconds % 60)
      return [days, hours, minutes, seconds]
    }
  }
})