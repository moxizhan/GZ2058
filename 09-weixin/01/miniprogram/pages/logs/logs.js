// logs.js
const util = require('../../utils/util.js')


var myBehavior = require('../../mixin/my-behavior.js')
Page({
  behaviors: [myBehavior],

  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
