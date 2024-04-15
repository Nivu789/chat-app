import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../contexts/SocketContext';
import { RiWifiOffLine } from "react-icons/ri";

const Conversation = ({data}) => {

  const {selectedConversation,setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === data._id

  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(data._id)
  console.log("Data",onlineUsers)

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 p-2 py-3 cursor-pointer ${isSelected?"bg-sky-400":""}` } onClick={()=>setSelectedConversation(data)}>
        <div className='flex flex-1 gap-2 items-center'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{data.userName}</p>
        </div>
        
        </div>
        
        <div className='flex items-center gap-2'>
        {isOnline ? <div className='rounded-full bg-green-600 w-3 h-3'></div> : <RiWifiOffLine />}
            <div className='w-12 rounded-full'>
                <img src={data.profilePic} alt="user avatar" />
            </div>
        </div>
    </div>
    
    <div className='divider my-0 py-0 h-1'>

    </div>
    </>
  )
}

export default Conversation