import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();

import authRoute from './routes/authRoute.js'
import messageRoute from './routes/messageRoute.js'
import userRoute from './routes/userRoute.js'

import dotenv from 'dotenv'
import { connectToDatabase } from './db/connectToDatabse.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser());

app.use('/api/auth',authRoute)
app.use('/api/message',messageRoute)
app.use('/api/user',userRoute)

app.get('/',(req,res)=>{
    res.send("Hello World")
})


app.listen(PORT,async()=>{
    await connectToDatabase()
    console.log(`Server listening on port ${PORT}`);
})