import {Server} from 'socket.io'
import http from 'http'
import express from 'express'


const app = express()

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:['http://localhost:3000'],
        methods:['GET','POST']
    }
})

export const getRecieverSocketId = (recieverId) =>{
    return userSocket[recieverId]
}


const userSocket = {}

io.on("connection",(socket)=>{
    console.log("Connection is established",socket.id)

    const userId = socket.handshake.query.userId
    console.log("handshake",userId)
    if(userId!="undefined") userSocket[userId] = socket.id

    io.emit("getOnlineUsers",Object.keys(userSocket))

    socket.on("disconnect",()=>{
        console.log("Connection closed",socket.id)
        delete userSocket[userId]
        io.emit("getOnlineUsers",Object.keys(userSocket))
    })

})

export {app,server,io}