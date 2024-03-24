import USER from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import generateJwtTokenAndSetCookie from "../utils/generateJwtToken.js"

export const loginUser = async (req,res)  =>{
    try {
        const {userName,password} = req.body

        const user = await USER.findOne({userName})
        if(user){
            const correctPassword = await bcrypt.compare(password,user.password)
            if(correctPassword){
                generateJwtTokenAndSetCookie(user._id,res)
                return res.send("User Logged In")
            } 
            else return res.send("Wrong Credentials")
    }else{
        res.send("User Doesn't Exist")
    }
    } catch (error) {
        console.log(error.message);
    }
    
}

export const logoutUser = (req,res) =>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.send("Logged Out Successfully")
    } catch (error) {
        console.log(error.message);
    }
}

export const signupUser = async (req,res) =>{
    try {
        const {fullname,userName,email,password,cpassword,gender} = req.body
        
        const userExist = await USER.findOne({email:email})
        if(userExist){
            return res.send("User Already Exist")
        }

        const userNameExist = await USER.findOne({userName})
        if(userNameExist) return res.send("Username already in use")

        if(password!==cpassword){
            return res.send("Password doesn't match")
        }

        const boyProfileUrl = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfileUrl = `https://avatar.iran.liara.run/public/girl?username=${userName}`
        const hashedPAssword = await bcrypt.hash(password,10)

        const user = new USER({
            fullname:fullname,
            userName,userName,
            email:email,
            password:hashedPAssword,
            profilePic:gender=="male"?boyProfileUrl:girlProfileUrl
        })

        await user.save()
        
        generateJwtTokenAndSetCookie(user._id,res)
        
        res.send("User Created")

    } catch (error) {
        console.log(error.message);
    }
    
}

