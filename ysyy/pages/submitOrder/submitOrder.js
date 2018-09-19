// pages/submitOrder/submitOrder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        peiso:1,
        pull:1,
        goods:[
            { name: '雪碧勇闯天涯啤酒（高灌装）', num: 1, price: 3.9, cost: 5.5, src:'/assets/images/xuebi.png'},
            { name: '雪碧勇闯天涯啤酒（高灌装）', num: 1, price: 6.9, cost: 5.5, src: '/assets/images/baiwei.png' },
            { name: '雪碧勇闯天涯啤酒（高灌装）', num: 1, price: 12.9, cost: 5.5, src: '/assets/images/xuebi.png' },
            { name: '雪碧勇闯天涯啤酒（高灌装）', num: 1, price: 3.3, cost: 5.5, src: '/assets/images/qiaokeli.png' },
            { name: '雪碧勇闯天涯啤酒（高灌装）', num: 1, price: 8.9, cost: 5.5, src: '/assets/images/shiwu.png' }
        ],
        totalPrice:0
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
        let goods = this.data.goods;
        let totalPrice = 0;
        for(let i = 0; i<goods.length;i++){
            totalPrice += goods[i].num * goods[i].price
        }
        this.setData({
            totalPrice: totalPrice.toFixed(2)
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
    , togglePeiso:function(){
        let peiso = this.data.peiso;
        peiso= peiso==1?0:1;
        this.setData({
            peiso: peiso
        })
    },
    togglePull: function () {
        let pull = this.data.pull;
        pull = pull == 1 ? 0 : 1;
        this.setData({
            pull: pull
        })
    },
    // 跳转到选择地址
    toAddress:function(){
        wx.navigateTo({
            url: '/pages/address/address'
        })
    }
})