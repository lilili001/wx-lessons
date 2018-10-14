// pages/template/message.js
Page({
  data:{
    date: '2016-09-01',
  },
  bindDateChange:function(e){
    console.log(e.detail);
    this.setData({
      date:e.detail.value
    })
  },
  formSubmit:function(e){
    var app = getApp();
     
    var values =  e.detail;
    console.log(values);
    var formId = values.formId;
    var address = values.value.address;
    var pdc_name = values.value.pdc_name;
    var price = values.value.price;
    var date = this.data.date;
    console.log(date);
    wx.request({
      url: 'https://api.astystore.com/wxApi/sendTemplateMsg',
      method:'POST',
      data:{
        'openId': app.globalData.openId,
        'formId':formId,
        'address':address,
        'name':pdc_name,
        'price':price,
        'date':date
      },
      success:(res)=>{

      }
    })
  }
})