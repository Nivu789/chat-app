import USER from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import generateJwtTokenAndSetCookie from "../utils/generateJwtToken.js"

export const loginUser = async (req,res)  =>{
    try {
        const {username,password} = req.body

        const user = await USER.findOne({userName:username})
        if(user){
            const correctPassword = await bcrypt.compare(password,user.password)
            if(correctPassword){
                generateJwtTokenAndSetCookie(user._id,res)
                return res.json({data:user._id})
            } 
            else return res.json({error:"Wrong Credentials"})
    }else{
        res.json({error:"User Doesn't Exist"})
    }
    } catch (error) {
        console.log(error.message);
    }
    
}

export const logoutUser = (req,res) =>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.json({message:"Logged Out Successfully"})
    } catch (error) {
        console.log(error.message);
    }
}

export const signupUser = async (req,res) =>{
    try {
        const {fullname,username,email,password,cpassword,gender} = req.body

        console.log(req.body);
        
        const userExist = await USER.findOne({email:email})
        if(userExist){
            return res.json({message:"User Already Exist"})
        }

        const userNameExist = await USER.findOne({userName:username})
        if(userNameExist) return res.json({message:"Username already in use"})

        if(password!==cpassword){
            return res.send("Password doesn't match")
        }

        const boyProfileUrl = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfileUrl = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const hashedPAssword = await bcrypt.hash(password,10)

        const user = new USER({
            fullname:fullname,
            userName:username,
            email:email,
            password:hashedPAssword,
            profilePic:gender=="male"?boyProfileUrl:girlProfileUrl
        })

        await user.save()
        
        generateJwtTokenAndSetCookie(user._id,res)
        
        res.json({message:"User Created"})

    } catch (error) {
        console.log(error.message);
    }
    
}

