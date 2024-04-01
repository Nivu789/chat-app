import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({message}) => {

  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const sendUser = message.senderId === authUser._id
  return (
    <div>
      {sendUser?
      <div className="chat chat-start flex gap-5 my-2 items-center mx-1">
    <div className="chat-image avatar">
      <div className="w-10 rounded-lg">
        <img alt="Tailwind CSS chat bubble component" src={authUser.profilePic} />
      </div>
    </div>
    <div className='flex flex-col justify-start text-left'>
    <div className="chat-header text-sm">
    {authUser.userName}
    
  </div>
    <div className="chat-bubble bg-blue-300 rounded-xl p-2 text-white">{message.message}</div>
    </div>
    
  </div>
:
<div className="chat chat-start flex gap-5 my-2 mx-1 items-center">
    <div className="chat-image avatar">
      <div className="w-10 rounded-lg">
        <img alt="Tailwind CSS chat bubble component" src={selectedConversation.profilePic} />
      </div>
    </div>
    <div className='flex flex-col justify-start text-left'>
    <div className="chat-header text-sm">
    {selectedConversation.userName}
    
  </div>
    <div className="chat-bubble bg-slate-500 rounded-xl p-2 text-white">{message.message}</div>
    </div>
  </div>}
    </div>
  )
}

export default Message