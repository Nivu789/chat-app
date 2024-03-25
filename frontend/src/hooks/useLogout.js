import React, { useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'

const useLogout = () => {
  const [loading,setLoading] = useState(false)

    const {setAuthUser} = useAuthContext()

const logout = async() =>{

    setLoading(true)
    try {
        const res = await fetch('/api/auth/logout',{
            method:"POST",
            headers:{"Content-Type":"application/json"}
        });
    
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
    
        localStorage.removeItem("chat-app")
        setAuthUser(null)
    
        return {loading,logout}
    
      } catch (error) {
        console.log(error.message);
      }finally{
        setLoading(false)
      }
}
  
return {logout,loading}
  
}

export default useLogout