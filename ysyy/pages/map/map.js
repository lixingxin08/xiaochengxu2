// pages/map/map.js
// 引入SDK核心类
var QQMapWX = require('qqmap-wx-jssdk.min.js')

// 实例化API核心类
var demo = new QQMapWX({
    key: 'IAHBZ-7YKKX-EKH47-ZPMQD-23XH6-UIBX6' // 必填
});
demo.getSuggestion({
    keyword: '雅居花园',
    region:'广州市',
    success: function (res) {
        console.log(res)
    },
    fail: function (res) {
        console.log(res);
    },
    complete: function (res) {
        console.log(res);
    }
});
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude:1 ,
        longitude:1,
        markers:[]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getLocation({
            success:(res)=>{
                // console.log(res);
                this.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    markers: [
                        {
                            id: 0
                            , iconPath: "/assets/images/dingwei02.png"
                            , longitude: res.longitude
                            , latitude: res.latitude
                            , width: 20
                            , height: 30
                        }
                    ]
                })
                // console.log(this.data.markers)
            }
        })        
    }
    , regionchange(e) {
        console.log(e)
        // 地图发生变化的时候，获取中间点，也就是用户选择的位置
        if (e.type == 'end') {            
            this.getLngLat()
        }
    }
    // 获取中间位置
 ,getLngLat: function () {
        var that = this;
        this.mapCtx = wx.createMapContext("myMap");
        this.mapCtx.getCenterLocation({
            success: function (res) {
                that.setData({
                    longitude: res.longitude
                    , latitude: res.latitude
                    , markers: [
                        {
                            id: 0
                            , iconPath: "/assets/images/dingwei02.png"
                            , longitude: res.longitude
                            , latitude: res.latitude
                            , width: 20
                            , height: 30
                        }
                    ]
                })
            }
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