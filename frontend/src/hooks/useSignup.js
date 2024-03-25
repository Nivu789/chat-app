import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../contexts/AuthContext';


const useSignup = () => {

    const {setAuthUser} = useAuthContext()
    const [loading,setLoading] = useState(false)
    

    const signup = async({firstname,username,password,email,cpassword,gender}) =>{
        const success = handleInputErrors({firstname,username,password,email,cpassword,gender})
        if(!success)  return;

        try {
            const res = await fetch('http://localhost:5000/api/auth/signup',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({firstname,username,password,email,cpassword,gender})
            })
            
            const data = await res.json()
            return true

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
        
    }

    return {loading,signup}
}

export default useSignup

function handleInputErrors({firstname,username,password,email,cpassword,gender}){
    if(firstname===""||username===""||password===""||email===""||cpassword===""||gender===""){
        toast.error("everything must be filled")
        return false
    }

    if(password!==cpassword){
        toast.error("passwords do not match")
        return false
    }

    if(password.length < 6){
        toast.error("password must be atleast 6 characters long")
        return false
    }

    return true
}