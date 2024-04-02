import React from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';
import { useAuthContext } from '../contexts/AuthContext';


const useSendMessage = () => {
  const {messages,setMessages,selectedConversation} = useConversation();
  const {authUser} = useAuthContext()

  const sendMessage = async(message) =>{
  try {
    
        const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({message})
        })

        const data = await res.json()
        setMessages([...messages,data])
        console.log("SEND MESSAGE FUNCTION AUTHUSER",authUser)
        if(data.error) throw new Error(data.error)
       
  } catch (error) {
    toast(error)
  }
  }

  return {sendMessage}
}


export default useSendMessage