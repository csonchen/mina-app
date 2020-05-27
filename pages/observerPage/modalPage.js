const Event = require('../../designPatterns/observer');

// modal mock data
const modalData = [
  {
    id: 1,
    level: 10,
    type: 'textModal',
    data: '我是文本弹窗1',
  },
  {
    id: 2,
    level: 11,
    type: 'picModal',
    data: ""
  },
  {
    id: 3,
    level: 9,
    type: 'textModal',
    data: '我是文本弹窗2',
  }
]

/**
 * 模态窗管理类
 */
class ModalManage {
  constructor(modalList) {
    this.modalList = modalList.sort((prev, next) => -(prev.level - next.level))
    console.log(modalList)
  }

  listen() {

  }

  trigger() {
  }
}

Page({
  onLoad() {
    const modalManage = new ModalManage(modalData)
  }
})