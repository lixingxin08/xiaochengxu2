
Page({
    data: {
        between: [1,2],
        selectShopStatus:[true,true],
        shops: [],               // 购物车列表
        hasList: false,          // 列表是否有数据
        shopsPrice:[20,13],
        totalPrice: 0,           // 总价，初始为0
        selectAllStatus: true,    // 全选状态，默认全选
        obj: {
            name: "hello"
        }
    },
    onShow() {
        this.setData({
            hasList: true,
            shops: [
                {
                    title:'美宜佳便利店（安达广场）',id:1,carts:[
                        { id: 1, title: '雪花啤酒(高罐装）,58ml/瓶', image: '/assets/images/xuehua.png', num: 4, sellPrice: 3.5, costPrice: 4.5, selected: true },
                        { id: 2, title: '雪花啤酒(高罐装）,58ml/瓶', image: '/assets/images/xuehua.png', num: 1, sellPrice: 6.5, costPrice: 9.5, selected: true }
                    ]
                },
                {
                    title: '美宜佳便利店（卓越广场）', id: 1, carts: [
                        { id: 1, title: '雪花啤酒(高罐装）,58ml/瓶', image: '/assets/images/xuehua.png', num: 4, sellPrice: 3.5, costPrice: 4.5, selected: true },
                        { id: 2, title: '雪花啤酒(高罐装）,58ml/瓶', image: '/assets/images/xuehua.png', num: 1, sellPrice: 6.5, costPrice: 9.5, selected: true }
                    ]
                }

            ]
        });
        this.getTotalPrice();
        for(let i = 0; i<this.data.shops.length;i++){
            this.getShopPrice(i);
        }
    },
    /**
     * 当前商品选中事件
     * 全选反选
     */
    selectList(e) {
        const index = e.currentTarget.dataset.index;
        let selectShopStatus = this.data.selectShopStatus;
        let selectAllStatus = this.data.selectAllStatus;
        const idx = e.currentTarget.dataset.idx;
        let shops = this.data.shops;
        const selected = shops[idx].carts[index].selected;
        shops[idx].carts[index].selected = !selected;
        let all = true;
        for(let i = 0;i<shops.length;i++){
            let flag = 1;
            for (let j = 0; j < shops[i].carts.length; j++){
                if(!shops[i].carts[j].selected){
                    selectShopStatus[i]=false;
                    selectAllStatus=false;
                    flag = 0;
                    all = false;
                    this.setData({
                        selectShopStatus: selectShopStatus,
                        selectAllStatus: selectAllStatus
                    })
                }
            }
            if (flag) {
                selectShopStatus[i] = true;
                this.setData({
                    selectShopStatus: selectShopStatus
                })
            }
        }
        if (all) {
            selectAllStatus = true;
        }
        this.setData({
            shops: shops,
            selectAllStatus: selectAllStatus
        });
        this.getShopPrice(idx);
        this.getTotalPrice();
    },

    /**
     * 删除购物车当前商品
     */
    deleteList(e) {
        const index = e.currentTarget.dataset.index;
        const idx = e.currentTarget.dataset.idx;
        let shops = this.data.shops;
        shops[idx].carts.splice(index, 1);
        this.setData({
            shops: shops,
            hasList: false
        });
        for(let i = 0; i<shops.length;i++){
            if(shops[i].carts.length){
                this.setData({
                    hasList: true
                }); 
                return
            }
        }
            this.getShopPrice(idx);
            this.getTotalPrice();

    },
    /**
     * 店铺购物车全选事件
     */
    selectShop(e){
        let selectShopStatus = this.data.selectShopStatus;
        let between = this.data.between;
        let selectAllStatus = this.data.selectAllStatus;
        let flag = 1;
        const idx = e.currentTarget.dataset.idx;
        selectShopStatus[idx] = !selectShopStatus[idx];
        for (let i = 0; i < selectShopStatus.length;i++){
            if (!selectShopStatus[idx]){
                selectAllStatus=false;
                flag = 0;
            }
        }
        if (flag){
            selectAllStatus=true
        }
        let shops = this.data.shops;
        for(let i = 0;i<shops[idx].carts.length;i++){
            shops[idx].carts[i].selected = selectShopStatus[idx];
        }
        this.setData({
            selectAllStatus: selectAllStatus,
            selectShopStatus: selectShopStatus,
            shops: shops
        });
        console.log(shops)
        this.getShopPrice(idx)
        this.getTotalPrice(); 
    },
    /**
     * 购物车全选事件
     */
    selectAll(e) {
        let selectAllStatus = this.data.selectAllStatus;
        let selectShopStatus = this.data.selectShopStatus;        
        selectAllStatus = !selectAllStatus;
        let shops = this.data.shops;
        for (let i = 0; i < shops.length; i++) {
            for(let j = 0; j < shops[i].carts.length;j++){
                shops[i].carts[j].selected = selectAllStatus;
            }
        }
        for (let i = 0; i < selectShopStatus.length; i++){
            selectShopStatus[i] = selectAllStatus;
        }
        this.setData({
            selectAllStatus: selectAllStatus,
            selectShopStatus: selectShopStatus,
            shops: shops
        });
        for (let i = 0; i < shops.length; i++){
            this.getShopPrice(i)
        }
        this.getTotalPrice();
    },

    /**
     * 绑定加数量事件
     */
    addCount(e){
        const index = e.currentTarget.dataset.index;
        const idx = e.currentTarget.dataset.idx;
        let shops = this.data.shops;
        let num = shops[idx].carts[index].num;
        num = num + 1;
        shops[idx].carts[index].num = num;
        this.setData({
            shops: shops
        });
        this.getShopPrice(idx);
        this.getTotalPrice();
    },

    /**
     * 绑定减数量事件
     */
    minusCount(e) {
        const index = e.currentTarget.dataset.index;
        const idx = e.currentTarget.dataset.idx;
        const obj = e.currentTarget.dataset.obj;
        let shops = this.data.shops;
        let num = shops[idx].carts[index].num;
        if (num <= 1) {
            return false;
        }
        num = num - 1;
        shops[idx].carts[index].num = num;
        this.setData({
            shops: shops
        });
        this.getShopPrice(idx);
        this.getTotalPrice();
    },
    /**
     * 计算店铺合计价
     */
    getShopPrice(i){
        let shops = this.data.shops;
        let shopsPrice = this.data.shopsPrice;
        let between = this.data.between;        
        shopsPrice[i]=0;
        for (let j = 0; j < shops[i].carts.length;j++){
            if (shops[i].carts[j].selected) {
                shopsPrice[i] += shops[i].carts[j].num * shops[i].carts[j].sellPrice;
            }
        }
        between[i] = 20 - shopsPrice[i] < 0 ?0: 20 - shopsPrice[i];
        this.setData({
            shopsPrice:shopsPrice,
            between:between
        })
    },

    /**
     * 计算总价
     */
    getTotalPrice() {
        let shops = this.data.shops;                  // 获取购物车列表
        let total = 0;
        for (let i = 0; i < shops.length; i++) {         // 循环列表得到每个数据
            for(let j = 0; j < shops[i].carts.length;j++){
                if (shops[i].carts[j].selected) {                     // 判断选中才会计算价格
                    total += shops[i].carts[j].num * shops[i].carts[j].sellPrice;   // 所有价格加起来
                }
            }
        }
        this.setData({                               // 最后赋值到data中渲染到页面
            shops: shops,
            totalPrice: total.toFixed(2)
        });
    },
    // 确认结算
    toSubOrder:function(){
        wx.navigateTo({
            url: '/pages/submitOrder/submitOrder'
        })
    }
})