// pages/profile/profile.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      profileList:[],
      userInfo: {},
      hasUserInfo: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   获取用户信息
      if (app.globalData.userInfo) {
          this.setData({
              userInfo: app.globalData.userInfo,
              hasUserInfo: true
          })
          console.log(this.data.userInfo)          
      } else if (this.data.canIUse) {
          
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          app.userInfoReadyCallback = res => {
              this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
              })
          }
      } else {
          // 在没有 open-type=getUserInfo 版本的兼容处理
          wx.getUserInfo({
              success: res => {
                  app.globalData.userInfo = res.userInfo
                  this.setData({
                      userInfo: res.userInfo,
                      hasUserInfo: true
                  })
              }
          })
      }      
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
      this.setData({
          profileList: [
              { title: '收藏', src: '/assets/profiles/shochang.png', url:'/pages/collect/collect' },
              { title: '评论', src: '/assets/profiles/pinglu.png', url: '/pages/comment/comment' },
              { title: '足迹', src: '/assets/profiles/zuji.png', url: '/pages/footprint/footprint' }, 
              { title: '我的订单', src: '/assets/profiles/qubudingdan.png', url: '/pages/order/order'},
              { title: '待付款', src: '/assets/profiles/daifukuan.png', url: '/pages/order/order' },
              { title: '待处理', src: '/assets/profiles/daichul.png', url: '/pages/order/order' },
              { title: '待评价', src: '/assets/profiles/daipjia.png', url: '/pages/order/order' },
              { title: '退货/售后', src: '/assets/profiles/tuihuo.png', url: '/pages/customerService/customerService' },
              { title: '会员', src: '/assets/profiles/huiyuan.png', url: '' },
              { title: '优惠卷', src: '/assets/profiles/youhuijuan.png', url: '/pages/coupon/coupon' },
              { title: '平台客服', src: '/assets/profiles/pingtai.png', url: '/pages/relation/relation' },
              { title: '意见反馈', src: '/assets/profiles/yijian.png', url: '/pages/suggest/suggest' },
          ]
      })
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