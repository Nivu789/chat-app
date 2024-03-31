import React, { useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useGetMessage = () => {
  const {messages,setMessages,selectedConversation} = useConversation()


  useEffect(()=>{
    const getMessage = async() =>{
      try {
        const res = await fetch(`/api/message/${selectedConversation?._id}`)
        const data = await res.json()
        if(!data) throw new Error("Nothing send yet")
        console.log("Coming data",data.messages.messages)
      if(data.messages.messages.length>0){
        console.log(data.messages.messages.length)
        setMessages(data.messages.messages)
      } 
      else{
        console.log("NO message")
      } 
      } catch (error) {
        // toast.error(error.message)
      }
    }
    if(selectedConversation?._id) getMessage();
  },[selectedConversation._id,setMessages])
  
return {messages}
  
}

export default useGetMessage