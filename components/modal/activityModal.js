const Event = require('../../designPatterns/observer');

Component({
  options: {
    multipleSlots: true,
  },  

  properties: {
  },

  data: {
    value: '',
    show: false,
  },

  attached() {
    Event.listen('activityModal', (props) => {
      this.setData({
        ...props,
        show: true,
      })
    })
  },

  methods: {
    hide() {
      this.setData({ show: false })
      this.triggerEvent('hide')
    },

    show() {
      this.setData({ show: true })
    }
  }
})
