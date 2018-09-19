// pages/location/location.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shops:[],
        locationText:'东莞市万达广场NO.12012'   
    },
    toIndex: app.toIndex,
    toCar: app.toCar,
    toRecommend: app.toRecommend,
    toProfile: app.toProfile,    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showToast({
            title: '加载中',
            icon: 'loading'
        });
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
            shops:[
                { name: '合家欢（卓越时代广场）', src:'/assets/images/logo01.png', send:20 , fee: 5 ,num: 2000, distance: '150m' },
                { name: '合家欢（卓越时代广场）', src: '/assets/images/logo01.png', send: 20, fee: 5, num: 1800, distance: '0.15km' },
                { name: '合家欢（卓越时代广场）', src: '/assets/images/logo01.png', send: 12, fee: 2, num: 2000, distance: '1.5km' },
                { name: '合家欢（卓越时代广场）', src: '/assets/images/logo01.png', send: 20, fee: 5, num: 2000, distance: '150m' },
                { name: '合家欢（卓越时代广场）', src: '/assets/images/logo01.png', send: 18, fee: 3, num: 1600, distance: '150m' }
            ]
        });
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                console.log(res)
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
            }
        })
        wx.hideToast();
    },

    chooseLocation: function (e) {
        console.log(e)
        var that = this
        wx.chooseLocation({
            success: function (res) {
                // success
                console.log(res)
                that.setData({
                    location: {
                        longitude: res.longitude,
                        latitude: res.latitude
                    },
                    locationText:res.name
                })
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    }
})