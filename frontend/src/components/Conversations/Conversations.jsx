import React, { useEffect } from 'react'
import Conversation from './Conversation'
import { useDispatch, useSelector } from 'react-redux'
import { getConversation } from '../../store/conversationSlice'
import { useAuthContext } from '../../contexts/AuthContext'

const Conversations = () => {

  const dispatch = useDispatch()
  const {data} = useSelector(state=>state.conversations)
  const {authUser} = useAuthContext()
  useEffect(()=>{
    dispatch(getConversation())
  },[])

  return (
    <div className='py-4 flex flex-col overflow-auto'>
        {data.users ? data.users.map((item,index)=>{
          return <Conversation key={index} data={item}/>
        })
      :null
      }
        
    </div>
  )
}

export default Conversations