import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import {app, server} from './socket/socket.js'

import authRoute from './routes/authRoute.js'
import messageRoute from './routes/messageRoute.js'
import userRoute from './routes/userRoute.js'

import dotenv from 'dotenv'
import { connectToDatabase } from './db/connectToDatabse.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.use(cookieParser());

app.use('/api/auth',authRoute)
app.use('/api/message',messageRoute)
app.use('/api/user',userRoute)

app.get('/',(req,res)=>{
    res.send("Hello World")
})


server.listen(PORT,async()=>{
    await connectToDatabase()
    console.log(`Server listening on port ${PORT}`);
})