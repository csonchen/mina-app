// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    activeIndex: {
      type: Number,
      value: 0
    },
    theme: {
      type: String,
      value: ''
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
    change(event) {
      let { activeIndex } = this.data
      let idx = event.currentTarget.dataset.idx

      if (activeIndex == idx) return

      activeIndex = idx
      this.setData({ activeIndex })
      this.triggerEvent('change', { activeIndex })
    }
  }
})
