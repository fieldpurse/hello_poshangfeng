// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [{
        cate_id: 1,
        cate_name: '前端开发',
        children: [{
            child_id: 1,
            name: 'ff',
            image: "/images/icons/icons2/c++语言.png"
          },
          {
            child_id: 2,
            name: 'ff',
            image: "../../images/thumbnail/2.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: '后端开发'
      },
      {
        cate_id: 3,
        cate_name: '移动开发'
      },
      {
        cate_id: 4,
        cate_name: '计算机基础'
      },
      {
        cate_id: 5,
        cate_name: '前沿技术'
      },
      {
        cate_id: 6,
        cate_name: '云计算'
      },
      {
        cate_id: 7,
        cate_name: '大数据'
      },
      {
        cate_id: 8,
        cate_name: '运维&测试'
      },
      {
        cate_id: 9,
        cate_name: '数据库'
      },
      {
        cate_id: 10,
        cate_name: 'UI设计'
      },
      {
        cate_id: 11,
        cate_name: '游戏'
      }

    ],
    curNav: 1,
    curIndex: 0
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = e.target.dataset.index;
    this.setData({
      curNav: id,
      curIndex: index
    })
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

  /**a
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