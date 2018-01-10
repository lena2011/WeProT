Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    showmodal: false
  },
  onReady: function () {
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#ff0000")
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },
  showDialogBtn: function () {
    this.setData({ showModal: true })
  },
  hideModal: function () {
    this.setData({ showModal: false })
  },
  preventTouchMove: function () {

  }

})