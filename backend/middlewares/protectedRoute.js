import jwt from 'jsonwebtoken'
import USER from '../models/userModel.js'

const protectedRoute = async(req,res,next) =>{

    try {
        const token = req.cookies.jwt
        console.log(token);
        if(!token) return res.status(401).json({error:"Unauthorised Access - No Token"})
    
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
    
        if(!decoded) return res.status(401).json({error:"Something wrong with token"})
    
        const user = await USER.findById(decoded.userId);
    
        if(!user) return res.status(401).json({error:"User not found"})
    
        req.user = user

        console.log("user:",req.user);
        next() 
    } catch (error) {
        console.log("Error in Middleware protected",error.message);
    }
    
}

export default protectedRoute