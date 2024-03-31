import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../contexts/AuthContext';

const useLogin = () => {
    
    const [loading,setLoading] = useState(false)
    
    const {setAuthUser} = useAuthContext()

    const login = async({username,password}) =>{

        const success = handleInputError({username,password})
        if(!success) return;
        setLoading(true)

        try {
            const res = await fetch('/api/auth/login',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })
    
            const data = await res.json()
            if(!data.error){
                toast.success("Logged in successfully")
                localStorage.setItem("chat-app",JSON.stringify(data))
                setAuthUser(data.data)
            }else{
                throw new Error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
        
    }

    return {login,loading}
}

export default useLogin

function handleInputError({username,password}){
    if(username===""||password===""){
        toast("all fields must be filled")
        return false
    }
    return true
}