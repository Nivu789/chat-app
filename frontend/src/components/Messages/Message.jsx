import React, { useEffect } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import useConversation from '../../zustand/useConversation'
import useGetMessage from '../../hooks/useGetMessage'

const Message = ({message}) => {

  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const sendUser = message.senderId === authUser._id
  const profilePic = sendUser ? authUser.profilePic : selectedConversation?.profilePic
  const chatBubbleColor = sendUser ? "bg-blue-300" : "bg-green-500"
  const chatUserName = sendUser ? authUser.userName : selectedConversation.userName
  
  return (
      <div className="chat chat-start flex gap-5 my-2 items-center mx-1">
    <div className="chat-image avatar">
      <div className="w-10 rounded-lg">
        <img alt="Tailwind CSS chat bubble component" src={profilePic} />
      </div>
    </div>
    <div className='flex flex-col justify-start text-left'>
    <div className="chat-header text-sm">
    {chatUserName}
    
  </div>
    <div className={`chat-bubble ${chatBubbleColor} rounded-xl p-2 text-white`}>{message.message}</div>
    </div>
  </div>

   
  )
}

export default Message