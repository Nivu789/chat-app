import React from 'react'

const Conversation = (props) => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 p-2 py-3 cursor-pointer'>
        <div className='flex flex-1 flex-col'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{props.data.userName}</p>
        </div>
        </div>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={props.data.profilePic} alt="user avatar" />
            </div>
        </div>
    </div>
    
    <div className='divider my-0 py-0 h-1'>

    </div>
    </>
  )
}

export default Conversation