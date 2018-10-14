/*后台nodejs入口文件*/
const WebSocketServer = require('ws').Server;

const ws = new WebSocketServer({
    port:3001
});

//broadcasts
var sockets = [];

//当客户端有链接进入的时候触发
ws.on('connection',function(ws){
    console.log('服务端连接建立成功');

    //当有连接进入的时候添加到sockets
    sockets.push(ws);

    /*服务端接收客户端消息*/
    ws.on('message',function(msg){
        console.log("服务端接收到的消息是:"+msg);
        for(var i = 0;i<sockets.length;i++){
            //给每个连接的socket发送消息
            sockets[i].send("响应的:"+msg);
        }
    });
    ws.on('close',function(){
        for(var i = 0;i<sockets.length;i++){
            if( sockets[i] == this ){
                //某个连接关闭的时候 删除socket
                sockets.splice(i,1);
                break;
            }
        }
    })
});
