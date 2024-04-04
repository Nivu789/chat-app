import React, { useEffect, useRef } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import useGetMessage from '../../hooks/useGetMessage';
import { useAuthContext } from '../../contexts/AuthContext';

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  const messagesContainerRef = useRef(null)
  const { messages } = useGetMessage()
 

  useEffect(()=>{

    if (messagesContainerRef.current) {
        // Scroll to the bottom of the messages container when messages change
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    },[messages])
    
    useEffect(()=>{
      return () =>{
        setSelectedConversation(null)
      }
    },[])
    
  return (

    <div className='md:min-w-[450px] flex flex-col'>
        {
            !selectedConversation? <NoChatSelected/>

            :

            <>
            <div className="navbar bg-base-100">
            <a className="btn btn-ghost text-xl">{selectedConversation.userName}</a>
             </div>

             <div ref={messagesContainerRef} className="overflow-auto flex-1">
            <Messages />
            </div>
            <MessageInput/>
            </>
            

        }
        
    </div>
  )
}

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.userName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

export default MessageContainer