import { configureStore } from '@reduxjs/toolkit'
import  chatReducer  from './slices/ChatSlice'


export const store = configureStore({
  reducer: {
    chat:chatReducer
  },
})