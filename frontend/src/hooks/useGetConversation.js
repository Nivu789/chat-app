import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversation = () => {
  
    const [conversation,setConversation] = useState(null)

    useEffect(()=>{
        const getConversation = async()=>{
           
            try {
                const res = await fetch('/api/user/get-user-sidebar')
                const data = await res.json()
                if(data.users){
                    setConversation(data.users)
                }else{
                    throw new Error("No users found")
                } 
            } catch (error) {
                toast(error.message)
            }
        }

        getConversation()
    },[])

    return {conversation,setConversation}
}

export default useGetConversation