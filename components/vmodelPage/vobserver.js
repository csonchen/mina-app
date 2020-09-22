Component({
  data: {
    productInfo: {
      marketPrice: '',
      discount: '',
    },
    marketPrice: '',
    discount: '',
    salePrice: '',
    salePrice2: '',
  },

  observers: {
    'marketPrice,discount'(marketPrice = 0, discount = 0) {
      const salePrice = marketPrice - discount
      this.setData({
        salePrice: salePrice < 0 ? 0 : salePrice
      })
    }
  },

  attached() {
    this.saleProxyObj = this.getSaleProxy(this.data.productInfo)
  },

  methods: {
    onInput(e) {
      const value = e.detail.value
      const type = e.target.dataset.type
      this.saleProxyObj[type] = +value
    },
  
    getSaleProxy(productInfo) {
      let _this = this
      return new Proxy(productInfo, {
        set(target, property, value) {
          if (property === 'marketPrice') {
            const salePrice = Number(value - target['discount'])
            _this.setData({
              salePrice2: salePrice
            })
          } else if (property === 'discount') {
            const salePrice = Number(target['marketPrice'] - value)
            _this.setData({
              salePrice2: salePrice
            })
          }
          return Reflect.set(target, property, value)
        }
      })
    }
  }
})
