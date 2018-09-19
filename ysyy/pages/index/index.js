//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        pageBackgroundColor:"rgba(0,0,0,.4)",
    },
    onShow() {
        this.setData({
            categories: [
                { id: 1, name: '零食', image: '/assets/images/lingshi.png'},
                { id: 2, name: '饮料', image: '/assets/images/yiliao.png'},
                { id: 3, name: '酒水', image: '/assets/images/jiushui.png' },
                { id: 4, name: '烟草', image: '/assets/images/yancao.png' },
                { id: 5, name: '电器', image: '/assets/images/dianqi.png' },
                { id: 6, name: '日用', image: '/assets/images/riyong.png' },
                { id: 7, name: '护肤', image: '/assets/images/hufu.png' },
                { id: 8, name: '餐具', image: '/assets/images/canju.png' },
                { id: 9, name: '全部', image: '/assets/images/quanbu.png' },
            ]
        });
        // wx.login({
        //     success: function (res) {
        //         if (res.code) {
        //             //发起网络请求
        //             wx.request({
        //                 url: 'https://www.chenwenfeng.com/api',
        //                 method: 'POST',
        //                 data: {
        //                     'cmd': 'User/userRegin',
        //                     'data': {
        //                         "telphone": "13106981899",
        //                         "code": res.code
        //                     }
        //                 },
        //                 success:function(res){
        //                     console.log(res.data)
        //                 }
        //             })
        //         } else {
        //             console.log('获取用户登录态失败！' + res.errMsg)
        //         }
        //     }
        // })
    },
    toSearchlist(){
        wx.navigateTo({
            url: '/pages/search/search'
        })
    }
})
