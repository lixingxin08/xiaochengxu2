// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addNum:1,
        class:'现货',
        currentTab: 0,
        price:20,
        totalPrice:20
    },
    addNum:function(){
        let addNum = this.data.addNum;
        let price = this.data.price;        
        let totalPrice = this.data.totalPrice;        
        addNum +=1;
        totalPrice = price * addNum;
        this.setData({
            totalPrice: totalPrice,
            addNum: addNum
        })
    },
    reduceNum:function(){
        let addNum = this.data.addNum;
        let price = this.data.price;
        let totalPrice = this.data.totalPrice;   
        addNum -= 1;
        if (addNum <= 1) addNum = 1;        
        totalPrice = price * addNum;        
        this.setData({
            totalPrice: totalPrice,            
            addNum: addNum
        })
    },
        addCar(){
            let add = this.data.add;
            add = add == 1?0:1;
            this.setData({
                add:add
            })
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
        console.log(options)
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