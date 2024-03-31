import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({data}) => {

  const {selectedConversation,setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === data._id
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 p-2 py-3 cursor-pointer ${isSelected?"bg-sky-400":""}` } onClick={()=>setSelectedConversation(data)}>
        <div className='flex flex-1 flex-col'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{data.userName}</p>
        </div>
        </div>
        <div className='avatar online'>
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