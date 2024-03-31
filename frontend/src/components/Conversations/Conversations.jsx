import React, { useEffect } from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'



const Conversations = () => {

  const {conversation} = useGetConversation()


  return (
    <div className='py-4 flex flex-col overflow-auto'>
        
        {conversation && conversation.length > 0 ? conversation.map((item,index)=>{
          console.log(item)
          return <Conversation key={index} data={item}/>
        })
        
        :

        null
        
        }
         
        
    </div>
  )
}

export default Conversations