// pages/searchlist/searchlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      goods:[],
      totalPrice:0,
      totalNum:0
  },
  toSearchlist() {
      wx.navigateTo({
          url: '/pages/search/search'
      })
  },

  // 加减件数
  addCar: function (e) {
      let goods = this.data.goods;
      let totalNum = this.data.totalNum;
      let id = e.currentTarget.dataset.id;
      let index = e.currentTarget.dataset.index;
      for (let i = 0; i < goods.length; i++) {
          if (goods[i].id == id) {
              goods[i].num += 1
          }
      }
      totalNum += 1
      this.setData({
          goods: goods,
          totalNum: totalNum
      })
      this.totalPrice();
  },
  jianCar: function (e) {
      let goods = this.data.goods;
      let totalNum = this.data.totalNum;
      let id = e.currentTarget.dataset.id;
      let index = e.currentTarget.dataset.index;
      totalNum -= 1
      for (let i = 0; i < goods.length; i++) {
          if (goods[i].id == id) {
              goods[i].num -= 1
              goods[i].num = goods[i].num <= 0 ? '0' : goods[i].num;
          }
      }
      
      this.setData({
          goods: goods,
          totalNum: totalNum
      })
      this.totalPrice();
  },
  // 计算总价
  totalPrice: function () {
      console.log('totalPrice')
      let goods = this.data.goods;
      let totalPrice = 0;
      // console.log(goods)
      for (let i = 0; i < goods.length; i++) {
          if (goods[i].num) {
              totalPrice += goods[i].num * goods[i].sellPrice
          }
      }
      // console.log(totalPrice)
      this.setData({
          totalPrice: totalPrice.toFixed(2),
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.setData({
          goods: [
              { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 12.9, Price: '￥15', id: 0, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '现货', name: '奶皇包', content: '(奶油味)', sellPrice: 9.9, Price: '￥15', id: 1, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '现货', name: '叉烧包', content: '(奶油味)', sellPrice: 9.9, Price: '￥15', id: 2, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '预定', name: '斧头牌', content: '(奶油味)', sellPrice: 4.5, Price: '￥15', id: 3, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '预定', name: '香菜包', content: '(奶油味)', sellPrice: 8.0, Price: '￥15', id: 4, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '现货', name: '土豆包', content: '(奶油味)', sellPrice: 12.5, Price: '￥15', id: 5, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '预定', name: '肉丝包', content: '(奶油味)', sellPrice: 11.5, Price: '￥15', id: 6, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '现货', name: '梅菜包', content: '(奶油味)', sellPrice: 6.6, Price: '￥15', id: 7, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 3.25, Price: '￥15', id: 8, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 0.01, Price: '￥15', id: 9, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 1.00, Price: '￥15', id: 10, num: 0 },
              { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 2.15, Price: '￥15', id: 11, num: 0 },
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