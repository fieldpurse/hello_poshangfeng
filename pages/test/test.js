// pages/test/test.js
import {homedata} from '../../data/homedata.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateClasses:null,
    thiscc:null
  },

  goTodetail(event){
    console.log(event);
    const cid = event.currentTarget.dataset.classId
    wx.navigateTo({
      url: '/pages/classdetail/classdetail?cid=' + cid
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const cateClasses = homedata[2]
    console.log(cateClasses)
    this.setData({cateClasses})
    const thiscc = options.cc
    this.setData({thiscc})
    console.log(this.data.thiscc)
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})