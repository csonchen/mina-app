const Event = require('../../designPatterns/observer');
const ModalManage = require('../../model/ModalManage');

Page({
  modalData: [
    {
      id: 1,
      level: 10,
      type: 'text',
      value: '我是文本弹窗1',
    },
    {
      id: 2,
      level: 11,
      type: 'pic',
      value: '/asserts/OIP.jpeg'
    },
    {
      id: 3,
      level: 9,
      type: 'text',
      value: '我是文本弹窗2',
    },
    {
      id: 4,
      level: 10,
      type: 'activity',
      value: '我是活动弹窗啦啦啦啦'
    }
  ],

  onLoad() {
    this.modalManage = new ModalManage(this.modalData)
    this.modalManage.triggerModal()
    // this.modalData = this.modalData.sort((prev, next) => -(prev.level - next.level))
    // this.triggerModal()
  },

  triggerModal() {
    this.modalManage.triggerModal()

    // const targetModalList = this.modalData.splice(0, 1)
    // if (targetModalList && targetModalList.length > 0) {
    //   Event.trigger('modal', targetModalList[0])
    // }
  }
})