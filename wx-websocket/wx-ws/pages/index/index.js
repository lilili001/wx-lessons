//index.js
//获取应用实例
const app = getApp()
var openBol = false;
Page({
   onLoad:function(){
     //连接websocket
     wx.connectSocket({
       url: 'ws://192.168.0.104:3001',
       data: {
         
       },
       header: {
         'content-type': 'application/json'
       },
       method: "GET",
       success:function(res){
          console.log('客户端连接成功')
       },
       fail:function(res){
          
       }
     });

    //打开连接
     wx.onSocketOpen(function(){
       console.log('websocket连接已打开');
       openBol = true;
     })

    //接收服务端消息
     wx.onSocketMessage(function(msg){
       console.log(msg)
     })

   },
   sendMsg:function(e){
     if(openBol){
       //客户端发送消息给服务端
       wx.sendSocketMessage({
         data: e.detail.value,
         success:function(res){
           console.log(res);
            console.log('客户端消息已发送')
         }
       })
     }
     
   }
})
