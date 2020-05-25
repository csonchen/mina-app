const Event = (() => {
  // 通知模块列表
  let clientList = []

  /**
   * 监听
   * @param {*} key 模块名称
   * @param {*} fn 回调函数
   */
  const listen = function(key, fn) {
    // 判断是否存在为key值的模块，没有需要初始化空数组
    if (!clientList[key]) {
      clientList[key] = []
    }
    // 模块添加监听回调函数
    clientList[key].push(fn)
  }

  /**
   * 发布通知
   */
  const trigger = function() {
    const key = Array.prototype.shift.call(arguments)
    const fns = clientList[key]

    // 如果该模块下没有注册事件，直接返回
    if (!fns || fns.length === 0) {
      return false
    }

    // 执行模块注册的所有事件
    fns.map(fn => fn && fn.apply(this, arguments))
  }

  /**
   * 注销事件
   * @param {*} key 
   * @param {*} fn 
   */
  const remove = function(key, fn) {
    const fns = clientList[key]

    // 模块没有注册事件
    if (!fns) {
      return false
    }

    // 没有传入需要注销的事件，全部清空
    if (!fn) {
      fns && (fns.length = 0) // 这里很精彩，直接数组清空即可
    } else {
      // 清掉该事件
      const index = fns.findIndex(item => item === fn)
      if (index !== -1) {
        fns.splice(index, 1)
      }
    }
  }

  return {
    listen,
    trigger,
    remove,
  }
})();

module.exports = Event