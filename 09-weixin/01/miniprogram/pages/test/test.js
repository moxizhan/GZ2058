// 获取应用实例
const app = getApp()
console.log(app);

// 类似vue Mixin 混入 复用逻辑  
var myBehavior = require('../../mixin/my-behavior.js')

Page({
  behaviors: [myBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    // msg: 'Hello World',
    msg: app.globalData.globalData,

    arr: [11, 22, 33],
    zuowei: [
      [1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ],
    boolean: true
  },

  // 事件处理程序
  tapHandler(e) {
    console.log(Date.now(),e, e.target.dataset.xx);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("test页面 onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("test页面 onReachBottom");

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})