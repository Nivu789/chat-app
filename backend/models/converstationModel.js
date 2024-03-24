import mongoose from "mongoose";

const converstationSchema = mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"message",
        }
    ]
},{timestamps:true})

const Conversation = mongoose.model("conversation",converstationSchema)

export default Conversation