// pages/assess/assess.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      classIndex:0,
      animationData:{},
      zan:[]
  },
  toIndex: app.toIndex,
  toCar: app.toCar,
  toRecommend: app.toRecommend,
  toProfile: app.toProfile,
  setClass: function (e) {
      let index = e.currentTarget.dataset.index;
      let classIndex = this.data.classIndex;
      classIndex = index
      this.setData({
          classIndex: classIndex
      })
  },
  animateNum:function(e){
      let zan = this.data.zan;
      let assess = this.data.assess;
      let index = e.currentTarget.dataset.index;
      assess[index].praise +=1
      zan[index] = 1
      this.setData({
          zan: zan,
          assess: assess
      })
      console.log(this.data.zan)
      var animation = wx.createAnimation({
          duration: 100,
          timingFunction: "ease",
      })
      this.animation = animation
      animation.top('40rpx').opacity(0).step();
      this.setData({
          animationData: animation.export()
      })
      setTimeout(function(){
          zan[index] = 0
      this.setData({
          zan: zan,
          animationData: {}
      })
      console.log(1)
      }.bind(this),100)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.setData({
            assess:[
                { name: '师太', xin: 4, detail: '想了想，还是给好评吧，毕竟快递比较辛苦33。', userImg: '/assets/profiles/shitai.png', assImg: '/assets/images/qiaokeli.png', date: '2018.12.12', praise: 234},
                { name: '太师', xin: 3, detail: '想了想，还是给好评吧，毕竟快递比较辛苦22。', userImg: '/assets/profiles/shitai.png', assImg: '/assets/images/qiaokeli.png', date: '2017.2.14', praise: 345 },
                { name: '太师太', xin: 5, detail: '想了想，还是给好评吧，毕竟快递比较辛苦11。', userImg: '/assets/profiles/shitai.png', assImg: '', date: '2012.11.11', praise: 21}
            ]
        })

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