import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'


const useGetMessage = () => {
  const {messages,setMessages,selectedConversation} = useConversation()

  useEffect(()=>{
    const getMessage = async() =>{
      try {
        
        const res = await fetch(`/api/message/${selectedConversation?._id}`)
        const data = await res.json()
        const messsageData = data?.messages?.messages
      if(messsageData){
        setMessages(data.messages.messages)
      }else if(!messsageData){
        setMessages([])
      }  
      } catch (error) {
        // toast.error(error.message)
      }
    }
    if(selectedConversation?._id) getMessage();
  },[selectedConversation?._id,setMessages])
  
return {messages}
  
}

export default useGetMessage