const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./Routes/userRoutes');
const messageRoute = require("./Routes/messagesRoute");
const socket = require('socket.io');

var app=express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use("/api/auth" , userRoutes)
app.use("/api/messages",messageRoute);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err.message)
});

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on Port ${process.env.PORT}`);
})

const io =socket(server,{
    cors:{
        origin:"http://localhost:3000",
        credentials:true
    }
})

global.onlineUsers = new Map()

io.on("connection" , (socket) =>{
    global.chatSocket = socket;
    socket.on("add-user",(userId)=>{
        onlineUsers.set(userId,socket.id);
    });

    socket.on("send-msg",(data)=>{
        const sendUserSocket  =  onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-received",data.message);
        }
    })
})