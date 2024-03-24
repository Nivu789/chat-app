import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    message:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Message = mongoose.model("message",messageSchema)

export default Message