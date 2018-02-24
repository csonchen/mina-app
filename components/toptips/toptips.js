// components/toptips/toptips.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    delay: {
      type: Number,
      value: 1500
    },
    show: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: '',
      observer(newVal, oldVal) {
        let { delay } = this.properties

        this.setData({ show: true })

        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.hide()
        }, delay)
      }
    },
    theme: {
      type: String,
      value: 'default'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide() {
      this.setData({ show: false, title: '', theme: 'default' })
      this.triggerEvent('hide', {})
    }
  }
})
