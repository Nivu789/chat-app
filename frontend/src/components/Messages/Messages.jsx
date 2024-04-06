import React, { useEffect } from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import useListenMessages from '../../hooks/useListenMessages'


const Messages = () => {

  const {messages} = useGetMessage()

  console.log("Messages",messages)
  
  useListenMessages();

  return (
    <div className='px-1 flex-1 overflow-auto'>
       
        {messages? messages.map((message,index) => (
					<div key={index}>
						<Message message={message} />
					</div>
				))
      :
      null
      }
     
    </div>
  )
}

export default Messages