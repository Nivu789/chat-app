import express from 'express';
const app = express();
import authRoute from './routes/authRoute.js'

import dotenv from 'dotenv'
import { connectToDatabase } from './db/connectToDatabse.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/api/auth',authRoute)

app.get('/',(req,res)=>{
    res.send("Hello World")
})


app.listen(PORT,async()=>{
    await connectToDatabase()
    console.log(`Server listening on port ${PORT}`);
})