// pages/detail/detail.js
let app = getApp();

Page({
   
    /**
     * 页面的初始数据
     */
    data: {
        clientHeight:0,
        classList:[],   //分类列表
        goods:[],     //商品列表
        collect:1,    //是否已经收藏
        goodsNum:[],
        select:'早餐',
        totalPrice:0,
        totalNum:0,
        selectGoods:0,
        carGoods:[]
    },
    select(e){
        let index = e.currentTarget.dataset.index;
        this.setData({
            select: index
        })
    },
    toIndex: app.toIndex,
    toCar: app.toCar,
    toRecommend: app.toRecommend,
    toProfile: app.toProfile,    
    toSearch(){
        wx.navigateTo({
            url: '/pages/search/search'
        })
    },
    load:function(that){
        wx.getSystemInfo({
        success: function (res) {
            that.setData({
                clientHeight: res.windowHeight
            });
        }
    })
    },
    // 加减件数
    addCar:function (e) {
        let goods = this.data.goods;
        let totalNum = this.data.totalNum;        
        let id = e.currentTarget.dataset.id;
        let index = e.currentTarget.dataset.index;        
        for (let i = 0; i < goods.length;i++){
            if(goods[i].id == id){
                    goods[i].num += 1
            }
        }
        totalNum += 1
        this.setData({
            goods: goods,
            totalNum: totalNum
        })
        this.totalPrice();
        this.setCarGoods(index)
    },
    jianCar:function(e){
        let goods = this.data.goods;
        let totalNum = this.data.totalNum;         
        let id = e.currentTarget.dataset.id;
        let index = e.currentTarget.dataset.index;                
        totalNum -= 1        
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].id == id) {
                goods[i].num -= 1
            }
        }
        this.setData({
            goods: goods,
            totalNum: totalNum            
        })
        this.totalPrice();
        this.setCarGoods(index);
    },
    // 购物车栏
    addNum:function(e){   
        let index = e.currentTarget.dataset.index;
        let carGoods = this.data.carGoods;
        let goods = this.data.goods;
        let totalNum = 0;
        for (let i = 0; i < carGoods.length;i++){
            if (carGoods[i].id == index){
                carGoods[i].num += 1;
            }
        }
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].id == index) {
                goods[i].num += 1;
            }
        }
        this.setData({
            carGoods: carGoods,
            goods:goods
        })
        for (let i = 0; i < carGoods.length; i++) {
            totalNum += carGoods[i].num;
        }
        this.setData({
            totalNum: totalNum
        })
        this.totalPrice();
    },
    jianNum:function(e){
        let index = e.currentTarget.dataset.index;
        let carGoods = this.data.carGoods;
        let goods = this.data.goods;        
        let totalNum = 0;
        for (let i = 0; i < carGoods.length; i++) {
            if (carGoods[i].id == index) {
                carGoods[i].num -= 1;
                if (carGoods[i].num<=0){
                    carGoods.splice(i, 1)
                }
            }
        }
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].id == index) {
                goods[i].num -= 1;
            }
        }
        for (let i = 0; i < carGoods.length; i++) {
            totalNum += carGoods[i].num;
        }
        this.setData({
            carGoods: carGoods,
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
    // 购物车
    setCarGoods: function (index) {
        let carGoods = this.data.carGoods;
        let goods = this.data.goods;
        let flag = 1
        for (var i = 0; i < carGoods.length; i++) {
            if (goods[index].id == carGoods[i].id) {
                carGoods[i] = goods[index]
                if (!carGoods[i].num) {
                    carGoods.splice(i, 1)
                }
                flag = 0;
                this.setData({
                    carGoods: carGoods
                })
                return
            }
        }
        if (flag) {
            carGoods.push(goods[index]);
            console.log(carGoods)
        }
        this.setData({
            carGoods: carGoods
        })
    },
    // 切换显示购物车
    toggleSelectGoods: function () {
        let selectGoods = this.data.selectGoods;
        selectGoods = selectGoods == 1 ? 0 : 1;
        this.setData({
            selectGoods: selectGoods
        })
    },
    // 清空购物车
    clearCar:function(){
        let goods = this.data.goods;        
        console.log('清空购物车了')
        for (let i = 0; i < goods.length;i++){
            goods[i].num=0;
        }
        this.setData({
            goods: goods,
            carGoods:[]
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.load(this);
        wx.showLoading({
            title: '加载中',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        wx.hideLoading()
    },

    /**
     * 生命周期函数--监听页面显示
     * 模拟数据
     */
    onShow: function () {
        this.setData({
            classList:[
                { title: '早餐' },
                { title: '饮料' },
                { title: '烟草' },
                { title: '零食' },
                { title: '酒水' },
                { title: '护肤品' },
                { title: '厨具' },
                { title: '沐浴用品' },
                { title: '水果' },
                { title: '零食' },
                { title: '午餐' },
                { title: '晚餐' },
                { title: '调料' },
                { title: '香烟' },
                { title: '饼干' },
                { title: '水酒' },
                { title: '洗衣液' },
                { title: '餐具' },
                { title: '洗浴' },
                { title: '苹果' },
                { title: '香蕉' },
                { title: '芝麻糊' },
            ],
            goods:[
                { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 9.9, Price:'￥15', id: 0 ,num:0},
                { img_url: '/assets/images/shiwu.png', class: '现货', name: '奶皇包', content: '(奶油味)', sellPrice: 9.9, Price: '￥15', id: 1, num: 0 },
                { img_url: '/assets/images/shiwu.png', class: '现货', name: '叉烧包', content: '(奶油味)', sellPrice: 9.9, Price: '￥15', id: 2, num: 0},
                { img_url: '/assets/images/shiwu.png', class: '预定', name: '斧头牌', content: '(奶油味)', sellPrice: 4.5, Price: '￥15', id: 3, num: 0},
                { img_url: '/assets/images/shiwu.png', class: '预定', name: '香菜包', content: '(奶油味)', sellPrice: 8.0, Price: '￥15', id: 4, num: 0},
                { img_url: '/assets/images/shiwu.png', class: '现货', name: '土豆包', content: '(奶油味)', sellPrice: 12.5, Price: '￥15', id: 5, num: 0},
                { img_url: '/assets/images/shiwu.png', class: '预定', name: '肉丝包', content: '(奶油味)', sellPrice: 11.5, Price: '￥15', id: 6, num: 0},
                { img_url: '/assets/images/shiwu.png', class: '现货', name: '梅菜包', content: '(奶油味)', sellPrice: 6.6, Price: '￥15', id: 7, num: 0 },
                { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 3.25, Price: '￥15', id: 8, num: 0 }, 
                { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 0.01, Price: '￥15', id: 9, num: 0},
                { img_url: '/assets/images/shiwu.png', class: '预定', name: '汉堡包', content: '(奶油味)', sellPrice: 1.00, Price: '￥15', id: 10, num: 0},
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