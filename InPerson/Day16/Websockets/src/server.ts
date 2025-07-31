import {WebSocketServer} from 'ws'; //imports the websocket server
const wss=new WebSocketServer({port:8000}) //creates a websocket server
wss.on('connection',function(socket){
    socket.on('message',(e)=>{
        if(e.toString()==="ping"){
            socket.send('pong')
        }
    })
})
