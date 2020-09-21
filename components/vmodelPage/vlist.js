Component({
  properties: {
    test: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: [],
    }
  },

  methods: {
    onDelete(e) {
      const index = e.currentTarget.dataset.index
      const newList = this.data.list.filter((item, id) => id !== +index)
      this.setData({list: newList, test: 'cssam'})
    }
  }
})