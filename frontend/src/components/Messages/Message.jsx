import React from 'react'

const Message = ({message}) => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Davatars&psig=AOvVaw2JOLyVX0CzKHr3o3YsUk5M&ust=1711386116043000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiF4p6wjYUDFQAAAAAdAAAAABAJ"} alt="sender" />
            </div>
        </div>
        
        <div className="chat-bubble">{message.message}</div>
        <div className="chat-footer opacity-50 text-end">12:46</div>
       
    </div>
  )
}

export default Message