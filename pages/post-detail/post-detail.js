// pages/post-detail/post-detail.js
import {postList} from '../../data/data.js'
//缓存 localstorage
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    _pid:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    const postData = postList[options.pid]
    this.data._pid=options.pid
    console.log(postData)
    this.setData({
      postData
    })
  },

  onCollect(event){
//假设未收藏->收藏
//哪篇文章
//数据结构 多篇文章是否被收藏
const postsCollected = {}
postsCollected[this.data._pid]
    wx.setStorageSync('posts_collected',postsCollected)
    // {
    //   key:id,
    // }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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