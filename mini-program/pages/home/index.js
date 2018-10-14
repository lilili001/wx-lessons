// pages/home/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/banner_01.jpg',
      '/images/banner_02.jpg',
      '/images/banner_03.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //通过请求获取列表数据
    this.getProListData();
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
  
  },
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList = this.data.proList;
    var title = proList[index].title;

    //本地缓存 最多支持10兆
    wx.setStorageSync('title', title);

    wx.navigateTo({
      url: '/pages/detail/index?title=' + title
    })
  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber:'1111111111'
    })
  },
  getProListData:function(){
    var _this = this;
    //设置全局变量
    //app.globalData.proListUrl = '';
    wx.request({
      url: app.globalData.proListUrl,//从全局变量中获取参数
      method:'GET',
      success:function(res){
        console.log(res);
        _this.setData({
          "proList":res.data
        })
      }
    })
  }
})