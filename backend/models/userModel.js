import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName:{
        type:String
    },
    userName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
})

const USER = mongoose.model('user',userSchema)

export default USER