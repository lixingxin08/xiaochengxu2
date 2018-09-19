// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0
    },
    bindChange: function (e) {
        var that = this;
        that.setData({
            currentTab: e.detail.current
        });

    },
    // 切换tab
    swichNav: function (e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
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
            shopsStates:[
                { title: '万达合家欢广场(东城店)', phone: '13548957521', content: '可口可乐、蓝月亮、雪花啤酒...', price: '36', data: '2018.1.12', states:0},
                { title: '万达合家欢广场(南城店)', phone: '13548957521', content: '可口可乐、蓝月亮、雪花啤酒...', price: '36', data: '2018.1.12', states: 1 },
                { title: '万达合家欢广场(花都店)', phone: '13548957521', content: '可口可乐、蓝月亮、雪花啤酒...', price: '36', data: '2018.1.12', states: 2},
                { title: '万达合家欢广场(火炼树店)', phone: '13548957521', content: '可口可乐、蓝月亮、雪花啤酒...', price: '36', data: '2018.1.12', states: 3},
                { title: '万达合家欢广场(东城店)', phone: '13548957521', content: '可口可乐、蓝月亮、雪花啤酒...', price: '36', data: '2018.1.12', states: 4 },
                { title: '万达合家欢广场(东城店)', phone: '13548957521', content: '可口可乐、蓝月亮、雪花啤酒...', price: '36', data: '2018.1.12', states: 1 }
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