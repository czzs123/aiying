// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558293106.webp',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561172733.webp',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2559742751.webp'
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true,      // 是否自动切换
    circular: true,      // 是否采用衔接滑动
    interval: 3000,      // 自动切换时间间隔
    duration: 1000,      // 滑动动画时长
    movielist:[]//保存电影列表
  },
  jumpComment:function(e){
    //关闭并跳转
    //wx.redirectTo({
      //url: '/pages/comment/comment',
    //})
    //获取电影id
    //e 事件对象:target触发事件元素 button
    //dataset所有自定义属性
    var id=e.target.dataset.movieid;
    //保存并跳转  可以退回去
    wx.navigateTo({
      url: '/pages/comment/comment?id='+id,
    })
  },
loadMore:function(){
  //加载更多
  //1.调用云函数
  wx.cloud.callFunction({
    name: "movielist2",
    data: {
      start: this.data.movielist.length,
      count: 10,
    }
  }).then(res => {
    //console.log(typeof res.result)
    //console.log(res.result);
    //将字符串转js对象
    var obj = JSON.parse(res.result)
    //电影列表
    //console.log(obj.subjects)
    this.setData({
      movielist: this.data.movielist.concat(obj.subjects)
    });


  }).catch(err => {
    console.log(err);
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
    //2.将云函数返回电影列表保存
    //3.显示当前组件
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
    this.loadMore();
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})