import mongoose from "mongoose";

export const connectToDatabase = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected To Database");
    } catch (error) {
        console.log("Error connecting to database",error.message);
    }
}