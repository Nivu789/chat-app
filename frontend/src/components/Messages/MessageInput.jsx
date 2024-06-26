import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message,setMessage] = useState('')
  const {sendMessage,notifyMessageSent} = useSendMessage()


  async function handleSendMessage(e){
    e.preventDefault()
    if(!message) return;
    await sendMessage(message)
    setMessage("")
  }

  return (
    <form action="" className='px-4 my-3' onSubmit={handleSendMessage}>
        <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white'
            placeholder='Send a message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
            
            <button type='submit' className='absolute inset-y-5 end-0 flex items-center pe-2'>
            <IoSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput