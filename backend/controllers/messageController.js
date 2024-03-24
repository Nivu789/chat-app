import Conversation from "../models/converstationModel.js"
import Message from "../models/messageModel.js"

export const sendMessage = async(req,res) =>{
    try {
        const {message} = req.body
        const {id:receiverId} = req.params
        const senderId = req.user._id
       
        
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
           conversation = await Conversation.create({
            participants:[senderId,receiverId]
           }) 
        }
        
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })
        
        console.log("message id",newMessage._id);

        if(newMessage){
            await conversation.messages.push(newMessage._id);
        }

        await conversation.save()
        res.send("message was send")

    } catch (error) {
        console.log(error.message);
    }
}

export const getMessage = async(req,res) =>{
    try {
        const {id:userToChat} = req.params
        const senderId = req.user._id

        const messages = await Conversation.findOne({
            participants:{$all:[senderId,userToChat]}
        }).populate("messages")

        if(!messages) return res.json([])
        res.json({messages})
        
    } catch (error) {
        console.log(error.message);
    }
}