/*后台nodejs入口文件*/
const WebSocketServer = require('ws').Server;

const ws = new WebSocketServer({
    port:3001
});
//当客户端有链接进入的时候触发
ws.on('connection',function(ws){
    console.log('服务端连接建立成功');

    /*服务端接收客户端消息*/
    ws.on('message',function(msg){
        console.log("服务端接收到的消息是:"+msg);
        ws.send("响应的:"+msg);
    });
});
