import { createSlice } from "@reduxjs/toolkit"
import { useAuthContext } from "../contexts/AuthContext"
import {useDispatch} from 'react-redux'

const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        data:[]
    },
    reducers: {
      fetchMessage(state,action){
        state.data = action.payload
      }
    },
  })

  
  export const { fetchMessage} = conversationSlice.actions
  export default conversationSlice.reducer

  export function getConversation(){
    // console.log("USER DATa",JSON.parse(userData))
    return async function getConversationThunk(dispatch){
        
        const res = await fetch(`/api/user/get-user-sidebar`)
        const data = await res.json()
        console.log(data)
        dispatch(fetchMessage(data))
    }
  }