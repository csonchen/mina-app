const Event = require('../../designPatterns/observer');

Component({
  options: {
    multipleSlots: true,
  },  

  properties: {
  },

  data: {
    value: '',
    type: 'pic',
    pic: '/asserts/OIP.jpeg',
    show: false,
  },

  attached() {
    Event.listen('modal', (props) => {
      this.setData({
        ...props,
        show: true,
      })
    })
  },

  methods: {
    hide() {
      this.setData({ show: false })
    },

    show() {
      this.setData({ show: true })
    }
  }
})
