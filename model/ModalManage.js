const Event = require('../designPatterns/observer');

class ModalManage {
  modalType = {
    text: 'modal',
    pic: 'modal',
    activity: 'activityModal'
  }

  constructor(modalList) {
    this.modalList = modalList.sort((prev, next) => -(prev.level - next.level))
  }

  triggerModal() {
    const targetModalList = this.modalList.splice(0, 1)
    if (targetModalList.length > 0) {
      const currentModal = targetModalList[0]
      Event.trigger(this.modalType[currentModal.type], currentModal)
    }
  }
}

module.exports = ModalManage