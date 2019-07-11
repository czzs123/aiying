// pages/mymovie/mymovie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    images:{}
  },
  submit:function(){
    //1.提示加载框
    //2.获取留言内容 
    
    //3.获取图片
    //4.创建正则表达式截取文件扩展名
    //5.上传图片
      //5.1 成功
        //5.1.1 获取file ID
        //5.1.2 想集合添加纪录
      //5.2 失败 
  },
  onContentChange:function(e){
    this.setData({
      content:e.detail
    })
  },
  uploadImg:function(){
    wx.chooseImage({
      count: 1,    //选中图片张数  9张
        sizeType: ["original", "compressed"],//源图，压缩图
        sourceType: ["album", "camera"],  //来源 相册相机
      
      success:res=> {
        var file=res.tempFilePaths[0];
        this.setData({
          image:file
        })
      },
    }) 
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