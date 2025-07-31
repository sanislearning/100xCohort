"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws"); //imports the websocket server
const wss = new ws_1.WebSocketServer({ port: 8000 }); //creates a websocket server
wss.on('connection', function (socket) {
    socket.on('message', (e) => {
        if (e.toString() === "ping") {
            socket.send('pong');
        }
    });
});
