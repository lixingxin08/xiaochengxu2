// pages/feeback/feeback.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        logo:[],
        feeback:''
    },
    chooseImageTap: function () {
        let _this = this;
        wx.showActionSheet({
            itemList: ['从相册中选择', '拍照'],
            itemColor: "#f7982a",
            success: function (res) {
                if (!res.cancel) {
                    if (res.tapIndex == 0) {
                        _this.chooseWxImage('album')
                    } else if (res.tapIndex == 1) {
                        _this.chooseWxImage('camera')
                    }
                }
            },
        })
    },
    chooseWxImage: function (type) {
        let _this = this;
        wx.chooseImage({
            count:3,
            sizeType: ['original', 'compressed'],
            sourceType: [type],
            success: function (res) {
                 _this.setData({
                     logo: res.tempFilePaths,
                 })
                 console.log(res.tempFilePaths);
                
             }
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