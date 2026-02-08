// pages/posts/posts.js
// var postData = require("../../data/data.js")

import {postList} from '../../data/data.js'
console.log(postList)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //初始值
  
  },
  
  /**
   * 生命周期函数--监听页面加载
   * hook function
   * 条件渲染 页面渲染
   */
  async onLoad(options) {
      //更新
      //创建加更新
     console.log("onload")
//注释仍然存在（前端数据库）
     wx.setStorageSync('flag', true)
     //删除remove+sss
     //清空clear+sss（）
     //promise ES6

     //同步
    //  const flag = wx.getStorageSync('flag')
    //  console.log(flag)

    const flag = await wx.getStorage({
      key: 'flag',
      // success(value){
      //   console.log9value.data
      // }
    })

     this.setData({
      postList
     })
     
  },

    onGoToDetail(event){
      //event事件对象
      //页面通信
      //chax参数
      const pid = event.currentTarget.dataset.postId
      wx.navigateTo({
        url:'/pages/post-detail/post-detail?pid='+pid
      })
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})