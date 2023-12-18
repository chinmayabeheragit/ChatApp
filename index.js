const http = require('http');
const express = require('express');
const { Server } = require("socket.io")


const app = express();
const server = http.createServer(app);
const io = new Server(server);//handling the socket


io.on('connection', (socket) => {
    socket.on('user_message', (message) => {
        io.emit("message", message)
    })

})
app.use(express.static('./public'));

app.get('/', (req, res) => {
    return res.sendFile("./public/index.html");
})

server.listen(9000, () =>
    console.log('listening on'))