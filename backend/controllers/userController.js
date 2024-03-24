import USER from "../models/userModel.js";

export const getUserForSidebar = async(req,res)=>{
    try {
        const onlineUser = req.user._id
        const allOtherUser = await USER.find({_id:{$ne:onlineUser}}).select("-password")
        res.send(allOtherUser)
    } catch (error) {
        console.log(error.message);
    }
}