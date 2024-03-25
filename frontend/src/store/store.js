import { configureStore } from '@reduxjs/toolkit'
import conversationSlice from './conversationSlice'


const store = configureStore({
  reducer: {
    conversations: conversationSlice,
  },
})

export default store