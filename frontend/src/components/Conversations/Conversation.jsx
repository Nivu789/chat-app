import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../contexts/SocketContext';

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
        {isOnline ? <div className='rounded-full bg-green-600 w-fit p-2 text-white'>online</div> : <div className='rounded-full bg-gray-600 w-fit p-2 text-white'>Away</div>}
        </div>
        
        <div>
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